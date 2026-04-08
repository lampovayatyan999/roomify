import React, { useState, useCallback } from 'react';
import { ImageIcon, CheckCircle2 } from 'lucide-react';
import { PROGRESS_INCREMENT, PROGRESS_INTERVAL_MS, REDIRECT_DELAY_MS } from '../lib/constants';
import { useOutletContext } from 'react-router';

interface UploadProps {
  onComplete?: (base64Data: string) => void;
}

interface AuthContext {
  isSignedIn: boolean;
}

const Upload = ({ onComplete }: UploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(0);

  // Получаем статус авторизации из контекста
  const { isSignedIn } = useOutletContext<AuthContext>();

  const processFile = useCallback((file: File) => {
    if (!isSignedIn) return;

    setFile(file);
    setProgress(0);

    const reader = new FileReader();
    
    reader.onloadend = () => {
      const base64Data = reader.result as string;

      const interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + PROGRESS_INCREMENT;
          
          if (next >= 100) {
            clearInterval(interval);
            
            setTimeout(() => {
              onComplete?.(base64Data);
            }, REDIRECT_DELAY_MS);
            
            return 100;
          }
          return next;
        });
      }, PROGRESS_INTERVAL_MS);
    };

    reader.readAsDataURL(file);
  }, [isSignedIn, onComplete]);

  // Обработчики Drag and Drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!isSignedIn) return;
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (!isSignedIn) return;

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith('image/')) {
      processFile(droppedFile);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isSignedIn) return;
    
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      processFile(selectedFile);
    }
  };

  return (
    <div 
      className={`upload ${isDragging ? 'dragging' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {!file ? (
        <div className="upload-dropzone">
          <input 
            type="file" 
            id="file-upload" 
            className="hidden-input" 
            onChange={handleChange}
            accept="image/*"
            disabled={!isSignedIn}
          />
          <label htmlFor="file-upload" className="upload-label">
            <div className="upload-icon-container">
              <ImageIcon className="image-icon" />
            </div>
            <p>Click to upload or drag and drop</p>
          </label>
        </div>
      ) : (
        <div className="upload-status">
          <div className="status-content">
            <div className="status-icon">
              {progress === 100 ? (
                <CheckCircle2 className="check" />
              ) : (
                <ImageIcon className="image" />
              )}
            </div>

            <h3>{file.name}</h3>

            <div className="progress">
              <div 
                className="bar" 
                style={{ width: `${progress}%` }} 
              />
              <p className="status-text">
                {progress < 100 ? 'Analyzing Floor Plan...' : 'Redirecting...'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;