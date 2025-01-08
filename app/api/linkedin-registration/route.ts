// src/app/api/services/linkedin-masterclass/register/route.ts
import { NextResponse } from 'next/server';
import Airtable from 'airtable';
import { LinkedInMasterClassFormSchema } from '@/lib/airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID!);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = LinkedInMasterClassFormSchema.parse(body);

        const formattedDate = new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });

        const record = await base('LinkedIn Masterclass').create({
            Name: validatedData.name,
            Email: validatedData.email,
            Phone: `${validatedData.countryCode}${validatedData.phoneNumber}`,
            Company: validatedData.company,
            Role: validatedData.role,
            'LinkedIn Profile': validatedData.linkedinProfile,
            Message: validatedData.message || '',
            'Registration Date': formattedDate,
            'Payment Status': 'Pending'
        });

        return NextResponse.json({
            success: true,
            recordId: record.id
        });
    } catch (error) {
        console.error('Registration form error:', error);
        return NextResponse.json(
            { error: 'Failed to submit registration' },
            { status: 500 }
        );
    }
}