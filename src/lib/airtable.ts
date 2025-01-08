// src/lib/airtable.ts
import { z } from 'zod';

export const ContactFormSchema = z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email address'),
    countryCode: z.string().min(1, 'Country code is required'),
    phoneNumber: z.string().min(1, 'Phone number is required'),
    inquiryType: z.enum(['general', 'support', 'sales', 'partnership'], {
        required_error: 'Please select an inquiry type',
    }),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

// src/lib/airtable.ts
// Add this alongside your existing ContactFormSchema

export const DownloadFormSchema = z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email address'),
    countryCode: z.string().min(1, 'Country code is required'),
    phoneNumber: z.string().min(1, 'Phone number is required'),
    downloadType: z.string().optional(),
});

export type DownloadFormData = z.infer<typeof DownloadFormSchema>;


// src/lib/airtable.ts
export const LinkedInMasterClassFormSchema = z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email address'),
    countryCode: z.string().min(1, 'Country code is required'),
    phoneNumber: z.string().min(1, 'Phone number is required'),
    company: z.string().min(2, 'Company name is required'),
    role: z.string().min(2, 'Role is required'),
    linkedinProfile: z.string().url('Please enter a valid LinkedIn URL'),
    message: z.string().optional(),
});

export type LinkedInMasterClassFormData = z.infer<typeof LinkedInMasterClassFormSchema>;

// src/lib/airtable.ts
export const QuoteFormSchema = z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email address'),
    countryCode: z.string().min(1, 'Country code is required'),
    phoneNumber: z.string().min(1, 'Phone number is required'),
    companyName: z.string().min(2, 'Company name is required'),
    services: z.array(z.string()).min(1, 'Please select at least one service'),
    budget: z.string().min(1, 'Please select your budget range'),
    projectDetails: z.string().min(10, 'Please provide some project details'),
});

export type QuoteFormData = z.infer<typeof QuoteFormSchema>;