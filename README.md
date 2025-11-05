# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.


// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Free Online PDF to Word & Word to PDF Converter | Instant & Secure</title>
        <meta name="title" content="Free Online PDF to Word & Word to PDF Converter | Instant & Secure" />
        <meta name="description" content="Convert PDF to Word or Word to PDF instantly for free. No sign-up, no watermark — fast, secure, and accurate conversion preserving original formatting." />
        <meta name="keywords" content="pdf to word, word to pdf, free pdf converter, online pdf to word tool, convert pdf to docx, docx to pdf online, free pdf conversion, pdf to word converter no sign up, best pdf to word tool, convert scanned pdf, ocr pdf to word, convert large pdf to word, fast pdf converter, pdf editor, edit pdf in word" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Free PDF ↔ Word Converter | Convert Instantly Online" />
        <meta property="og:description" content="Free online tool to convert PDF to Word and Word to PDF without losing formatting. Fast, secure, and watermark-free." />
        <meta property="og:image" content="https://yourwebsite.com/images/pdf-converter-preview.png" />
        <meta property="og:url" content="https://yourwebsite.com/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free PDF ↔ Word Converter | Convert Instantly Online" />
        <meta name="twitter:description" content="Convert PDF to Word or Word to PDF instantly — free, no login, and secure." />
        <meta name="twitter:image" content="https://yourwebsite.com/images/pdf-converter-preview.png" />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com/" />
      </Head>

      <main>
        <h1>Convert PDF ↔ Word Instantly</h1>
        <p>Free, fast, and secure PDF converter tool.</p>
      </main>
    </>
  );
}

