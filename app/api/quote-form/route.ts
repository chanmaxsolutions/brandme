// src/app/api/quote-form/route.ts
import { NextResponse } from 'next/server';
import Airtable from 'airtable';
import { QuoteFormSchema } from '@/lib/airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID!);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = QuoteFormSchema.parse(body);

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

        // Format services array to string
        const servicesString = validatedData.services.join(', ');

        const record = await base('Quote Requests').create({
            Name: validatedData.name,
            Email: validatedData.email,
            Phone: `${validatedData.countryCode}${validatedData.phoneNumber}`,
            Company: validatedData.companyName,
            'Services Required': servicesString,
            'Budget Range': validatedData.budget,
            'Project Details': validatedData.projectDetails,
            'Submission Date': formattedDate
        });

        return NextResponse.json({
            success: true,
            recordId: record.id
        });
    } catch (error) {
        console.error('Quote form submission error:', error);
        return NextResponse.json(
            { error: 'Failed to submit form' },
            { status: 500 }
        );
    }
}