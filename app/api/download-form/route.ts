// src/app/api/download-form/route.ts
import { NextResponse } from 'next/server';
import Airtable from 'airtable';
import { DownloadFormSchema } from '@/lib/airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID!);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = DownloadFormSchema.parse(body);

        // Format the date
        const formattedDate = new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });

        const record = await base('Downloads').create({
            Name: validatedData.name,
            Email: validatedData.email,
            Phone: `${validatedData.countryCode}${validatedData.phoneNumber}`,
            'Download Type': validatedData.downloadType || 'Social Media Checklist',
            'Download Date': formattedDate
        });

        return NextResponse.json({
            success: true,
            recordId: record.id
        });
    } catch (error) {
        console.error('Download form submission error:', error);
        return NextResponse.json(
            { error: 'Failed to submit form' },
            { status: 500 }
        );
    }
}