// src/app/api/submit-form/route.ts
import { NextResponse } from 'next/server';
import Airtable from 'airtable';
import { ContactFormSchema } from '@/lib/airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID!);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = ContactFormSchema.parse(body);

        // Create a new date object and format it
        const date = new Date();
        const formattedDate = date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });

        // Create record in Airtable - using your original working structure
        const record = await base('Contacts').create({
            Name: validatedData.name,
            Email: validatedData.email,
            Phone: `${validatedData.countryCode}${validatedData.phoneNumber}`,
            'Inquiry Type': validatedData.inquiryType,
            Message: validatedData.message,
            'Submission Date': formattedDate
        });

        return NextResponse.json({
            success: true,
            recordId: record.id
        });
    } catch (error) {
        console.error('Form submission error:', error);
        return NextResponse.json(
            { error: 'Failed to submit form' },
            { status: 500 }
        );
    }
}