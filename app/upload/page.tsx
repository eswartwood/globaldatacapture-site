'use client';

import { FormEvent, useRef, useState } from 'react';
import type { PutBlobResult } from '@vercel/blob';

export default function UploadPage() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);

    const file = inputRef.current?.files?.[0];
    if (!file) {
      setError('Please choose a file first.');
      return;
    }

    setIsUploading(true);

    try {
      const uploadUrl = `/api/upload?filename=${encodeURIComponent(file.name)}`;

      const response = await fetch(uploadUrl, {
        method: 'POST',
        body: file,
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || `Upload failed with ${response.status}`);
      }

      const newBlob = (await response.json()) as PutBlobResult;
      setBlob(newBlob);
    } catch (err: any) {
      setError(err.message ?? 'Upload failed');
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f3f4f6',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
      }}
    >
      <div
        style={{
          background: '#ffffff',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 18px 45px rgba(15, 23, 42, 0.15)',
          width: '100%',
          maxWidth: 480,
        }}
      >
        <h1 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.5rem' }}>
          GDC Asset Uploader
        </h1>
        <p style={{ marginTop: 0, marginBottom: '1.5rem', color: '#4b5563', fontSize: '0.95rem' }}>
          Upload a logo or mark to the GDC CDN (Vercel Blob). You’ll get a public URL you can wire
          into your holder site.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="file"
            accept="image/png,image/jpeg,image/svg+xml"
            style={{ marginBottom: '1rem' }}
          />

          <div style={{ marginBottom: '1rem' }}>
            <button
              type="submit"
              disabled={isUploading}
              style={{
                padding: '0.6rem 1.2rem',
                borderRadius: '999px',
                border: 'none',
                background: '#111827',
                color: '#ffffff',
                fontWeight: 600,
                cursor: isUploading ? 'default' : 'pointer',
                opacity: isUploading ? 0.6 : 1,
              }}
            >
              {isUploading ? 'Uploading…' : 'Upload to GDC CDN'}
            </button>
          </div>
        </form>

        {error && (
          <div style={{ marginTop: '0.75rem', color: '#b91c1c', fontSize: '0.9rem' }}>
            Error: {error}
          </div>
        )}

        {blob && (
          <div
            style={{
              marginTop: '1.25rem',
              padding: '0.75rem 1rem',
              borderRadius: '0.75rem',
              background: '#f9fafb',
              fontSize: '0.9rem',
            }}
          >
            <div style={{ marginBottom: '0.25rem', fontWeight: 600 }}>CDN URL</div>
            <a href={blob.url} target="_blank" rel="noreferrer">
              {blob.url}
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
