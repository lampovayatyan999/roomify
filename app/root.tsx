import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { useState, useEffect } from "react";
import { getCurrentUser, signIn, signOut } from "../lib/puter.action";
import "./app.css";

type AuthContext = {
  isSignedIn: boolean;
  username: string | null;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    getCurrentUser().then((user: any) => {
      if (user) {
        setIsSignedIn(true);
        setUsername(user.username || null);
      }
    });
  }, []);

  const handleSignIn = async () => {
    await signIn();
    const user = await getCurrentUser();
    if (user) {
      setIsSignedIn(true);
      setUsername(user.username || null);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    setIsSignedIn(false);
    setUsername(null);
  };

  const contextValue: AuthContext = {
    isSignedIn,
    username,
    signIn: handleSignIn,
    signOut: handleSignOut,
  };

  return <Outlet context={contextValue} />;
}