
'use client';

import { Header } from "@/components/header";
import Link from "next/link";
import { Mail, HelpCircle, Shield, User, MapPin } from "lucide-react";
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function ContactPage() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "mainEntity": {
                "@type": "Organization",
                "name": "All2ools",
                "url": "https://all2ools.com",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "email": "support@all2ools.com",
                  "contactType": "customer support",
                  "availableLanguage": ["English"],
                  "areaServed": "Worldwide"
                }
              }
            }
          `}
        </script>
      </Head>
      <div className="flex flex-col min-h-screen bg-background dark:bg-black">
        <Header />
        <main className="flex-1 flex flex-col items-center p-4">
          <div className="w-full max-w-4xl mx-auto py-12 px-4 space-y-12">
            <section className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Contact Us – All2ools</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Have questions, feedback, or need support? We’re here to help.
              </p>
            </section>

            <section className="space-y-8 text-lg">
              <div className="text-center">
                  <h2 className="text-2xl font-semibold flex items-center justify-center gap-2 mb-2"><Mail className="h-6 w-6 text-primary" /> Email Support</h2>
                  <p className="text-muted-foreground">For any inquiries, suggestions, or technical issues, contact us at:</p>
                  <a href="mailto:support@all2ools.com" className="text-primary underline text-xl">support@all2ools.com</a>
                  <p className="text-sm text-muted-foreground mt-1">We usually respond within 24–48 hours.</p>
              </div>

              <div className="p-6 border rounded-lg">
                  <h3 className="text-2xl font-semibold flex items-center gap-2 mb-4"><HelpCircle className="h-6 w-6 text-primary" /> What We Can Help You With</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Tool support (PDF, image, URL shortener, Excel tools, AI tools)</li>
                      <li>Bug reports</li>
                      <li>Feature requests</li>
                      <li>Business inquiries or partnerships</li>
                      <li>DMCA / content removal</li>
                      <li>API questions</li>
                  </ul>
              </div>
              
              <div className="p-6 bg-card rounded-lg">
                  <h3 className="text-2xl font-semibold flex items-center gap-2 mb-4"><User className="h-6 w-6 text-primary" /> About Our Support Team</h3>
                  <p className="text-muted-foreground">All2ools is created and managed by developers focused on building free, fast, secure online tools. We aim to provide quick and friendly support to all users.</p>
              </div>
              
              <div className="p-6 border rounded-lg">
                  <h3 className="text-2xl font-semibold flex items-center gap-2 mb-4"><Shield className="h-6 w-6 text-primary" /> File Privacy & Security</h3>
                  <p className="text-muted-foreground">For tools involving uploads (PDF, image tools), all processing happens locally or is auto-deleted — no files are stored on our servers. If you need details, reach out anytime.</p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-lg">
                  <h3 className="text-2xl font-semibold flex items-center justify-center gap-2 mb-2"><MapPin className="h-6 w-6 text-primary" /> Company</h3>
                  <p className="text-muted-foreground">All2ools – Free Online Tools Suite</p>
                  <p className="text-sm text-muted-foreground">Operated from India (IST)</p>
              </div>

            </section>
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
    </>
  );
}
