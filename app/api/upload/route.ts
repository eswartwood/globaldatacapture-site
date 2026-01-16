import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');

  if (!filename) {
    return new NextResponse('Missing "filename" query parameter', {
      status: 400,
    });
  }

  if (!request.body) {
    return new NextResponse('Request body is empty', { status: 400 });
  }

  // Upload the file body directly to Vercel Blob
  const blob = await put(filename, request.body, {
    access: 'public', // this gives us a public CDN URL
  });

  // Send blob info (including .url) back to the client
  return NextResponse.json(blob);
}
