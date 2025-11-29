'use client';

import { Header } from "@/components/header";
import Link from "next/link";

export default function TermsOfUsePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-black">
      <Header />
      <main className="flex-1 flex flex-col items-center p-4">
        <div className="w-full max-w-4xl mx-auto py-12 px-4 space-y-8 prose dark:prose-invert lg:prose-xl">
            <h1>Terms of Use</h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <p>Please read these Terms of Use ("Terms", "Terms of Use") carefully before using the PDF2Word website (the "Service") operated by PDF2Word ("us", "we", or "our").</p>
            
            <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>
            
            <h2>Service Provision</h2>
            <p>Our Service provides a free online tool to convert files. You agree not to use the service for any illegal purposes. You are responsible for the content of the files you upload.</p>
            
            <h2>Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of PDF2Word and its licensors. You do not acquire any ownership rights to the content you convert.</p>
            
            <h2>Disclaimer</h2>
            <p>Our Service is provided on an "AS IS" and "AS AVAILABLE" basis. We do not warrant that the results of the conversion will be accurate or reliable. You use the service at your own risk.</p>
            
            <h2>Limitation of Liability</h2>
            <p>In no event shall PDF2Word, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
            
            <h2>Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which the company is based, without regard to its conflict of law provisions.</p>
            
            <h2>Changes</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.</p>
            
            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at <a href="mailto:support@all2ools.com" className="text-primary underline">support@all2ools.com</a>.</p>
        </div>
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground bg-slate-50 dark:bg-slate-900 border-t">
        <div className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span>|</span>
            <Link href="/about" className="hover:underline">About</Link>
            <span>|</span>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <span>|</span>
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms-of-use" className="hover:underline">Terms of Use</Link>
        </div>
        <p className="mt-2">© {new Date().getFullYear()} PDF2Word. A part of <Link href="https://www.all2ools.com/" className="underline" target="_blank" rel="noopener noreferrer">All2ools.com</Link></p>
      </footer>
    </div>
  );
}
