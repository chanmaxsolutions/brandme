// src/app/get-quote/page.tsx
import QuoteForm from './quotes/QuoteForm';

export const metadata = {
    title: 'Get a Quote | BrandMe Social Media Marketing',
    description: 'Request a quote for our social media marketing services. Custom solutions tailored to your business needs and goals.',
    openGraph: {
        title: 'Get a Quote | BrandMe Social Media Marketing',
        description: 'Request a quote for our social media marketing services.',
        url: 'https://brandme.top/get-quote',
    }
};

export default function GetQuotePage() {
    return <QuoteForm />;
}