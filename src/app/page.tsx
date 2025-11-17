import { FileConverter } from "@/components/file-converter";
import { Header } from "@/components/header";
import { TrustAndSecurity } from "@/components/trust-and-security";
import { SeoContent } from "@/components/seo-content";
import { RelatedTools } from "@/components/related-tools";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-black">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-center my-8">
          Free PDF to Word Converter (Fast & Accurate)
        </h1>
        <FileConverter />
        <TrustAndSecurity />
        <SeoContent />
        <RelatedTools />
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground bg-slate-50 dark:bg-slate-900 border-t">
        © {new Date().getFullYear()} FileFlipper. All Rights Reserved.
      </footer>
    </div>
  );
}
