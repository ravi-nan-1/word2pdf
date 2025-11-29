
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
            <p>Last updated: 30 November 2025</p>

            <p>This Privacy Policy describes how All2ools (“we”, “our”, or “us”) operates and protects user data across all our tools, including PDF2Word, Image Tools, QR Generator, URL Shortener, AI Tutor, Summary Tool, Excel Tools, and any subdomain under all2ools.com (the “Service”).</p>
            <p>We are committed to safeguarding your privacy and ensuring that your files and data remain secure.</p>

            <h2>🟦 1. File Handling & Data Security</h2>
            <p>For tools that require file uploads (PDF, images, documents):</p>
            <ul className="list-none pl-0">
              <li>We process files temporarily only to perform the requested conversion or action.</li>
              <li>All uploaded files are automatically and permanently deleted within 1 hour.</li>
              <li>We never read, store, reuse, or share your uploaded files.</li>
              <li>We use SSL/TLS encryption for all file transfers.</li>
              <li>Files are not accessible to any third party.</li>
              <li>Your files always remain yours.</li>
            </ul>

            <h2>🟩 2. Information We Do NOT Collect</h2>
            <p>We do NOT collect:</p>
            <ul className="list-none pl-0">
              <li>Names</li>
              <li>Emails</li>
              <li>Phone numbers</li>
              <li>Addresses</li>
              <li>Uploaded file content</li>
              <li>Personal identification data</li>
              <li>Any user profile</li>
            </ul>
            <p>All tools are free and do not require account registration.</p>

            <h2>🟧 3. Log Data (Analytics)</h2>
            <p>Like most websites, we may collect non-personal technical data, such as:</p>
            <ul className="list-none pl-0">
              <li>IP address (anonymized)</li>
              <li>Browser type/version</li>
              <li>Device type</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>General usage statistics</li>
            </ul>
            <p>This information is used only for analytics and improving our tools, never for identification.</p>

            <h2>🟨 4. Cookies</h2>
            <p>Some tools may use cookies to:</p>
            <ul className="list-none pl-0">
                <li>Remember tool settings</li>
                <li>Improve performance</li>
                <li>Analyze usage (Google Analytics or Plausible)</li>
            </ul>
            <p>Cookies do not store personal information.</p>
            <p>You may disable cookies in your browser settings.</p>

            <h2>🟥 5. Third-Party Services</h2>
            <p>We may use third-party platforms like:</p>
            <ul className="list-none pl-0">
                <li>Google Analytics</li>
                <li>Cloudflare</li>
                <li>CDN providers</li>
            </ul>
            <p>These services only receive anonymized usage data and never receive uploaded files.</p>
            <p>We do not sell, rent, or share your data with advertisers.</p>
            
            <h2>🟪 6. Children’s Privacy</h2>
            <p>Our tools are safe for all ages.<br/>
            We do not knowingly collect personal data from anyone under 13.</p>
            <p>If you believe a child provided data, contact us for removal.</p>

            <h2>🟫 7. Data Retention</h2>
            <ul className="list-none pl-0">
              <li>Uploaded files: deleted within 1 hour</li>
              <li>Log data: retained for analytics only</li>
              <li>No long-term storage of any personal data</li>
            </ul>

            <h2>🟦 8. Security Measures</h2>
            <p>We use:</p>
            <ul className="list-none pl-0">
                <li>HTTPS/SSL encryption</li>
                <li>Secure servers</li>
                <li>Automatic file deletion</li>
                <li>Industry-standard security controls</li>
            </ul>
            <p>While no system is 100% secure, we take all reasonable measures to protect your data.</p>
            
            <h2>🟩 9. GDPR / CCPA Compliance</h2>
            <p>Since we do not store identifiable personal data:</p>
            <ul className="list-none pl-0">
                <li>There is no user data to delete</li>
                <li>No user data to export</li>
                <li>No user data to opt-out</li>
            </ul>
            <p>If you want to request additional information, contact us.</p>
            
            <h2>🟧 10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time.<br/>
            The updated version will always be posted on this page.</p>

            <h2>🟨 11. Contact Us</h2>
            <p>If you have any questions, feedback, or privacy concerns, contact us at:<br/>
            <a href="mailto:support@all2ools.com" className="text-primary underline">📧 support@all2ools.com</a></p>
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
