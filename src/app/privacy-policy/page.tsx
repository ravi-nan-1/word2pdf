
'use client';

import { Header } from "@/components/header";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function PrivacyPolicyPage() {
  const [date, setDate] = useState('');
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setDate('30 November 2025');
    setYear(new Date().getFullYear());
  }, []);


  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-black">
      <Header />
      <main className="flex-1 flex flex-col items-center p-4">
        <div className="w-full max-w-4xl mx-auto py-12 px-4 space-y-12">
            <header className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Privacy Policy</h1>
                <p className="text-muted-foreground">Last updated: {date}</p>
            </header>

            <p className="text-lg text-center text-muted-foreground">This Privacy Policy describes how All2ools (“we”, “our”, or “us”) operates and protects user data across all our tools, including PDF2Word, Image Tools, QR Generator, URL Shortener, AI Tutor, Summary Tool, Excel Tools, and any subdomain under all2ools.com (the “Service”). We are committed to safeguarding your privacy and ensuring that your files and data remain secure.</p>

            <div className="space-y-8">
              
              <section className="p-6 border rounded-lg bg-card">
                <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4">
                  <span className="text-3xl">🟦</span>
                  File Handling & Data Security
                </h2>
                <p className="text-muted-foreground mb-4">For tools that require file uploads (PDF, images, documents):</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>We process files temporarily only to perform the requested conversion or action.</li>
                  <li>All uploaded files are automatically and permanently deleted within 1 hour.</li>
                  <li>We never read, store, reuse, or share your uploaded files.</li>
                  <li>We use SSL/TLS encryption for all file transfers.</li>
                  <li>Files are not accessible to any third party.</li>
                  <li>Your files always remain yours.</li>
                </ul>
              </section>
              
              <section className="p-6 border rounded-lg bg-card">
                <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4">
                  <span className="text-3xl">🟩</span>
                  Information We Do NOT Collect
                </h2>
                <p className="text-muted-foreground mb-4">We do NOT collect:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Names, Emails, Phone numbers, or Addresses</li>
                  <li>Uploaded file content</li>
                  <li>Personal identification data</li>
                  <li>Any user profile</li>
                </ul>
                <p className="text-muted-foreground mt-4">All tools are free and do not require account registration.</p>
              </section>

              <section className="p-6 border rounded-lg bg-card">
                <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4">
                  <span className="text-3xl">🟧</span>
                  Log Data (Analytics)
                </h2>
                <p className="text-muted-foreground mb-4">Like most websites, we may collect non-personal technical data, such as:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>IP address (anonymized)</li>
                  <li>Browser type/version & Device type</li>
                  <li>Pages visited & Time spent on pages</li>
                  <li>General usage statistics</li>
                </ul>
                <p className="text-muted-foreground mt-4">This information is used only for analytics and improving our tools, never for identification.</p>
              </section>

              <section className="p-6 border rounded-lg bg-card">
                <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4">
                  <span className="text-3xl">🟨</span>
                  Cookies
                </h2>
                 <p className="text-muted-foreground mb-4">Some tools may use cookies to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Remember tool settings</li>
                    <li>Improve performance</li>
                    <li>Analyze usage (Google Analytics or Plausible)</li>
                </ul>
                <p className="text-muted-foreground mt-4">Cookies do not store personal information. You may disable cookies in your browser settings.</p>
              </section>

              <section className="p-6 border rounded-lg bg-card">
                <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4">
                  <span className="text-3xl">🟥</span>
                   Third-Party Services
                </h2>
                <p className="text-muted-foreground">We may use third-party platforms like Google Analytics, Cloudflare, and CDN providers. These services only receive anonymized usage data and never receive uploaded files. We do not sell, rent, or share your data with advertisers.</p>
              </section>
              
              <section className="p-6 border rounded-lg bg-card">
                <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4">
                  <span className="text-3xl">🟪</span>
                  Children’s Privacy
                </h2>
                <p className="text-muted-foreground">Our tools are safe for all ages. We do not knowingly collect personal data from anyone under 13. If you believe a child provided data, contact us for removal.</p>
              </section>

               <section className="p-6 border rounded-lg bg-card">
                <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4">
                  <span className="text-3xl">🟫</span>
                  Data Retention
                </h2>
                 <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Uploaded files: deleted within 1 hour</li>
                  <li>Log data: retained for analytics only</li>
                  <li>No long-term storage of any personal data</li>
                </ul>
              </section>

               <section className="p-6 border rounded-lg bg-card">
                <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4">
                  <span className="text-3xl">🟦</span>
                  Security Measures
                </h2>
                <p className="text-muted-foreground">We use HTTPS/SSL encryption, secure servers, automatic file deletion, and industry-standard security controls. While no system is 100% secure, we take all reasonable measures to protect your data.</p>
              </section>
              
              <section className="p-6 border rounded-lg bg-card">
                <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4">
                  <span className="text-3xl">🟩</span>
                  GDPR / CCPA Compliance
                </h2>
                <p className="text-muted-foreground">Since we do not store identifiable personal data, there is no user data to delete, export, or opt-out from. If you want to request additional information, please contact us.</p>
              </section>
              
              <section className="p-6 border rounded-lg bg-card">
                <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4">
                  <span className="text-3xl">🟧</span>
                  Changes to This Policy
                </h2>
                <p className="text-muted-foreground">We may update this Privacy Policy from time to time. The updated version will always be posted on this page.</p>
              </section>

              <section className="text-center p-6 border rounded-lg bg-card">
                <h2 className="text-2xl font-semibold flex items-center justify-center gap-3 mb-4">
                  <span className="text-3xl">🟨</span>
                  Contact Us
                </h2>
                <p className="text-muted-foreground">If you have any questions, feedback, or privacy concerns, contact us at:<br/>
                <a href="mailto:support@all2ools.com" className="text-primary underline">📧 support@all2ools.com</a></p>
              </section>
            </div>
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
        <p className="mt-2">© {year} PDF2Word. A part of <Link href="https://www.all2ools.com/" className="underline" target="_blank" rel="noopener noreferrer">All2ools.com</Link></p>
      </footer>
    </div>
  );
}
