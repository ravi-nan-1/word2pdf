'use client';

import { Header } from "@/components/header";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-black">
      <Header />
      <main className="flex-1 flex flex-col items-center p-4">
        <div className="w-full max-w-4xl mx-auto py-12 px-4 space-y-8 prose dark:prose-invert lg:prose-xl">
            <h1>Privacy Policy</h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <p>PDF2Word ("us", "we", or "our") operates the PDF2Word website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
            
            <h2>File Handling</h2>
            <p>We temporarily process your files to provide the conversion service. All uploaded files are automatically and permanently deleted from our servers one hour after processing. We do not read, access, or store your files longer than necessary to perform the requested conversion.</p>

            <h2>Information Collection and Use</h2>
            <p>We do not require you to create an account or provide any personal information to use our service. We do not collect personally identifiable information.</p>

            <h2>Log Data</h2>
            <p>We may collect information that your browser sends whenever you visit our Service ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics. This data is used for analytics and to improve our service, and it is not linked to any personally identifiable information.</p>

            <h2>Security</h2>
            <p>The security of your files is important to us. We use industry-standard encryption (SSL/TLS) for all data transfers. While we strive to use commercially acceptable means to protect your files, no method of transmission over the Internet or method of electronic storage is 100% secure. </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
            
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@all2ools.com" className="text-primary underline">support@all2ools.com</a>.</p>
        </div>
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground bg-slate-50 dark:bg-slate-900 border-t">
        <div className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span>|</span>
            <Link href="/about" className="hover:underline">About Us</Link>
        </div>
        <p className="mt-2">© {new Date().getFullYear()} PDF2Word. A part of <Link href="https://www.all2ools.com/" className="underline" target="_blank" rel="noopener noreferrer">All2ools.com</Link></p>
      </footer>
    </div>
  );
}
