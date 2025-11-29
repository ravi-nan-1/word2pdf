'use client';

import { Header } from "@/components/header";
import Link from "next/link";
import { Users, Shield, Zap, BadgeDollarSign } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-black">
      <Header />
      <main className="flex-1 flex flex-col items-center p-4">
        <div className="w-full max-w-4xl mx-auto py-12 px-4 space-y-12">
          <section className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">About Us – All2ools PDF Utilities</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              All2ools provides fast, secure, and reliable online PDF tools designed for students, professionals, creators, and businesses. Our mission is to make document editing simple and accessible for everyone — without downloads, installations, or complicated steps.
            </p>
          </section>

          <section>
            <p className="text-muted-foreground text-center">
              We offer a collection of free PDF utilities, including PDF to Word, Word to PDF, Merge PDF, Split PDF, Compress PDF, and more. All tools run directly in your browser, ensuring that your files are processed securely and never stored on our servers.
            </p>
             <p className="text-muted-foreground text-center mt-4">
              All2ools was created by Rajeev Singh, a developer with expertise in web automation and AI-powered utilities. Our goal is to deliver high-quality, privacy-focused online tools that save time and boost productivity.
            </p>
             <p className="text-muted-foreground text-center mt-8">
              If you have questions or suggestions, contact us anytime at:<br/>
              <a href="mailto:support@all2ools.com" className="text-primary underline">📧 support@all2ools.com</a>
            </p>
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
        <p className="mt-2">© {new Date().getFullYear()} PDF2Word. A part of <Link href="https://www.all2ools.com/" className="underline" target="_blank" rel="noopener noreferrer">All2ools.com</Link></p>
      </footer>
    </div>
  );
}
