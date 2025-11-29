
'use client';

import { Header } from "@/components/header";
import Link from "next/link";
import { Users, Shield, Zap, BadgeDollarSign, User, Bot, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-black">
      <Header />
      <main className="flex-1 flex flex-col items-center p-4">
        <div className="w-full max-w-4xl mx-auto py-12 px-4 space-y-12">
          <header className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">About All2ools PDF Utilities</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Making document editing simple and accessible for everyone.
            </p>
          </header>

          <div className="space-y-8">
              <section className="p-8 border rounded-lg bg-card text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-lg">
                  All2ools provides fast, secure, and reliable online PDF tools designed for students, professionals, creators, and businesses. Our mission is to make document editing simple and accessible for everyone — without downloads, installations, or complicated steps.
                </p>
              </section>

              <section className="p-8 border rounded-lg bg-card text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-semibold mb-4">Our Tools</h2>
                <p className="text-muted-foreground text-lg">
                  We offer a collection of free PDF utilities, including PDF to Word, Word to PDF, Merge PDF, Split PDF, and more. All tools run directly in your browser, ensuring that your files are processed securely and never stored on our servers.
                </p>
              </section>
              
              <section className="p-8 border rounded-lg bg-card text-center">
                <User className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-semibold mb-4">Our Creator</h2>
                <p className="text-muted-foreground text-lg">
                  All2ools was created by Rajeev Singh, a developer with expertise in web automation and AI-powered utilities. Our goal is to deliver high-quality, privacy-focused online tools that save time and boost productivity.
                </p>
              </section>

              <section className="text-center">
                 <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                 <p className="text-muted-foreground text-lg">
                  If you have questions or suggestions, contact us anytime at:<br/>
                  <a href="mailto:support@all2ools.com" className="text-primary underline text-xl">📧 support@all2ools.com</a>
                </p>
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
