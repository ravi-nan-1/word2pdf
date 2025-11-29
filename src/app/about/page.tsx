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
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">About PDF2Word</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our mission is to provide the best, simplest, and most secure document conversion tools online, completely free of charge. We believe everyone should have access to high-quality utilities without barriers like registration or fees.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-center mb-8">What We Stand For</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="mb-4 bg-primary/10 p-4 rounded-full">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Privacy First</h3>
                <p className="text-muted-foreground">Your trust is everything. We use top-tier encryption and automatically delete all files from our servers one hour after conversion. Your data is never read, shared, or stored.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4 bg-primary/10 p-4 rounded-full">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Simplicity & Speed</h3>
                <p className="text-muted-foreground">No complicated menus or unnecessary steps. Just upload your file, convert, and download. Our powerful servers process your files in seconds, not minutes.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4 bg-primary/10 p-4 rounded-full">
                  <BadgeDollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Free for Everyone</h3>
                <p className="text-muted-foreground">We are committed to keeping our core tools 100% free and unlimited. No daily limits, no watermarks, and no sign-up requirements. Just powerful tools, available to all.</p>
              </div>
            </div>
          </section>

          <section className="text-center bg-slate-50 dark:bg-slate-900 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Part of a Bigger Vision</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              PDF2Word is proudly part of the <Link href="https://www.all2ools.com/" className="text-primary underline" target="_blank" rel="noopener noreferrer">All2ools.com</Link> family—a suite of free online tools designed to make your digital life easier. Our goal is to build simple, powerful utilities that solve real-world problems.
            </p>
            <Link href="https://www.all2ools.com/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90" target="_blank" rel="noopener noreferrer">
              Explore All2ools
            </Link>
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
