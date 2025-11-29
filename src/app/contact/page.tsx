'use client';

import { Header } from "@/components/header";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-black">
      <Header />
      <main className="flex-1 flex flex-col items-center p-4">
        <div className="w-full max-w-4xl mx-auto py-12 px-4 space-y-12">
          <section className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </section>

          <section className="text-center">
             <p className="text-muted-foreground">
              For support or inquiries, please contact us at <a href="mailto:support@all2ools.com" className="text-primary underline">support@all2ools.com</a>.
            </p>
          </section>
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
