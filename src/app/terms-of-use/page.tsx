
'use client';

import { Header } from "@/components/header";
import Link from "next/link";
import { useState, useEffect } from 'react';

export default function TermsOfUsePage() {
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
                <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Terms of Use</h1>
                <p className="text-muted-foreground">Last updated: {date}</p>
            </header>

            <p className="text-lg text-center text-muted-foreground">These Terms of Use (“Terms”) govern your access to and use of any online tools, services, or websites operated under All2ools.com and its subdomains (collectively, the “Service”). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please discontinue use of the Service.</p>

            <div className="space-y-8">
              <section className="p-6 border rounded-lg bg-card">
                  <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4"><span className="text-3xl">🟦</span> Description of Service</h2>
                  <p className="text-muted-foreground mb-4">All2ools provides free online tools, including (but not limited to):</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>PDF converters (PDF to Word, Word to PDF, Merge PDF, etc.)</li>
                      <li>Image tools (compressor, converter, optimizer, editor)</li>
                      <li>QR code generator & URL shortener</li>
                      <li>AI Tutor & text tools</li>
                      <li>Excel utilities & Summary tools</li>
                      <li>Other file utilities</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">The Service does not require registration and is provided “as is.”</p>
              </section>

              <section className="p-6 border rounded-lg bg-card">
                  <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4"><span className="text-3xl">🟩</span> File Upload & Processing</h2>
                   <p className="text-muted-foreground mb-4">For tools that involve uploading files:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Files are processed temporarily only to complete the requested action.</li>
                      <li>All uploaded files are automatically and permanently deleted within 1 hour.</li>
                      <li>Files are not stored, reviewed, or shared.</li>
                      <li>You are responsible for ensuring the files you upload do not violate any law or copyright.</li>
                      <li>You retain full ownership of your files.</li>
                  </ul>
              </section>
              
              <section className="p-6 border rounded-lg bg-card">
                  <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4"><span className="text-3xl">🟧</span> Acceptable Use</h2>
                  <p className="text-muted-foreground mb-4">You agree NOT to use the Service for:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Illegal activities</li>
                      <li>Uploading harmful, abusive, or malicious content</li>
                      <li>Distributing malware, viruses, or harmful scripts</li>
                      <li>Infringing copyrights or intellectual property</li>
                      <li>Reverse engineering, scraping, or abusing any API</li>
                      <li>Overloading the system or bypassing security measures</li>
                  </ul>
                   <p className="text-muted-foreground mt-4">We may restrict access for violations of these terms.</p>
              </section>

              <section className="p-6 border rounded-lg bg-card">
                  <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4"><span className="text-3xl">🟨</span> Intellectual Property</h2>
                  <p className="text-muted-foreground mb-4">All2ools owns the website design, branding, software, tool functionality, logos, trademarks, written content, and UI/UX layout. You do not acquire any rights to our intellectual property by using the Service. Uploaded files remain your property.</p>
              </section>

              <section className="p-6 border rounded-lg bg-card">
                  <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4"><span className="text-3xl">🟥</span> Disclaimer of Warranties</h2>
                  <p className="text-muted-foreground">The Service is provided “AS IS” and “AS AVAILABLE.” All2ools makes no guarantees that the Service will be error-free, that file conversions will always be accurate, or that the tools will work without interruption. Use the Service at your own risk.</p>
              </section>

              <section className="p-6 border rounded-lg bg-card">
                  <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4"><span className="text-3xl">🟪</span> Limitation of Liability</h2>
                  <p className="text-muted-foreground">To the maximum extent permitted by law, All2ools and its affiliates are not liable for any data loss, file corruption, business interruption, loss of profits, or any indirect or consequential damages. Your only remedy is to stop using the Service.</p>
              </section>
              
              <section className="p-6 border rounded-lg bg-card">
                  <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4"><span className="text-3xl">🟫</span> Third-Party Services</h2>
                  <p className="text-muted-foreground">Our website may use analytics tools, CDN providers, advertisers, or other third-party services. We are not responsible for the content or policies of third-party websites.</p>
              </section>
              
              <section className="p-6 border rounded-lg bg-card">
                  <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4"><span className="text-3xl">🟩</span> Changes to These Terms</h2>
                  <p className="text-muted-foreground">We may update or modify these Terms at any time. Your continued use of the Service after changes indicates acceptance.</p>
              </section>

              <section className="text-center p-6 border rounded-lg bg-card">
                <h2 className="text-2xl font-semibold flex items-center justify-center gap-3 mb-4">
                  <span className="text-3xl">🟧</span>
                  Contact Us
                </h2>
                <p className="text-muted-foreground">If you have any questions about these Terms, reach us at:<br/>
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
