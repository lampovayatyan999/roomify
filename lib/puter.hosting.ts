import puter from "@heyputer/puter.js";
import { createHostingSlug, fetchBlobFromUrl, getHostedUrl, getImageExtension, HOSTING_CONFIG_KEY, isHostedUrl } from "./utils";

type HostingConfig = { subdomain: string; };
type HostedAsset = { url: string; };
type StoreHostedImageParams = {
    hosting: HostingConfig | null;
    url: string;
    projectId: string;
    label: string;
};

// You need to implement this function based on your needs
const imageUrlToPngBlob = async (url: string): Promise<Blob | null> => {
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        // Add PNG conversion logic here if needed
        return blob;
    } catch (e) {
        console.warn('Failed to convert image to PNG:', e);
        return null;
    }
};

export const getOrCreateHostingConfig = async (): Promise<HostingConfig | null> => {
    // Use puter.kv instead of puter.hosting.kv
    const existing = await puter.kv.get(HOSTING_CONFIG_KEY) as HostingConfig | null;

    if (existing?.subdomain) {
        return { subdomain: existing.subdomain };
    }

    const subdomain = createHostingSlug();

    try {
        const created = await puter.hosting.create(subdomain, '.');
        
        // Save the config using puter.kv
        await puter.kv.set(HOSTING_CONFIG_KEY, { subdomain: created.subdomain });
        
        return { subdomain: created.subdomain };
    } catch (e) {
        console.warn(`Could not find subdomain: ${e}`);
        return null;
    }
}

export const uploadImageToHosting = async ({ hosting, url, projectId, label }: StoreHostedImageParams): Promise<HostedAsset | null> => {
    if (!hosting || !url) return null;
    if (isHostedUrl(url)) return { url };

    try {
        const resolved = label === "rendered" 
            ? await imageUrlToPngBlob(url).then((blob) => blob ? { blob, contentType: 'image/png' } : null) 
            : await fetchBlobFromUrl(url);

        if (!resolved) return null;
        
        // Fix: safely access blob type with optional chaining
        const contentType = resolved.contentType || resolved.blob?.type || '';
        const ext = getImageExtension(contentType, url);
        const dir = `projects/${projectId}`;
        const filePath = `${dir}/${label}.${ext}`;

        const uploadFile = new File([resolved.blob], `${label}.${ext}`, {
            type: contentType,
        });

        await puter.fs.mkdir(dir, { createMissingParents: true });
        await puter.fs.write(filePath, uploadFile);

        const hostedUrl = getHostedUrl({ subdomain: hosting.subdomain }, filePath);

        return hostedUrl ? { url: hostedUrl } : null;
    } catch (e) {
        console.warn('Failed to store hosted image: ', e);
        return null;
    }
}