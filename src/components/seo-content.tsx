import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function SeoContent() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 space-y-12 text-lg leading-relaxed">
      
      <section>
        <h2 className="text-3xl font-bold mb-4">What Is a PDF to Word Converter?</h2>
        <p>A PDF to Word converter is a tool that transforms any PDF file into an editable Microsoft Word document (usually in DOCX format). PDFs are perfect for sharing, printing, and preserving layout — but they are difficult to edit.</p>
        <p className="mt-4">When you need to update a resume, modify a report, fix a proposal, extract text, or repurpose content, converting a PDF to Word becomes essential. Our free PDF to Word converter unlocks your PDF content and makes it fully editable in Microsoft Word or Google Docs.</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">How Does PDF to Word Conversion Work?</h2>
        <p className="mb-4">Our converter uses advanced document-processing algorithms and OCR technology to ensure an accurate conversion. Here's how it works:</p>
        <ol className="list-decimal list-inside space-y-2">
            <li><strong>Structural Analysis</strong>: The system identifies headings, text blocks, paragraphs, lists, columns, tables, fonts, and spacing.</li>
            <li><strong>Content Extraction</strong>: Text is extracted with formatting, fonts & font sizes preserved, images and illustrations retained, and tables reconstructed.</li>
            <li><strong>OCR for Scanned PDFs</strong>: If your PDF is scanned (image-based), our OCR engine reads the text from the images and converts it into editable characters. This is perfect for printed books, documents captured with a phone, and old scan files.</li>
            <li><strong>Reconstruction</strong>: Everything is reassembled into a clean, editable .docx file, keeping the original formatting as closely as possible.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Features & Benefits</h2>
        <ul className="list-disc list-inside space-y-3">
            <li><strong>High-Accuracy Conversion</strong>: Your Word document will retain paragraph structure, images & graphics, lists and bullet points, headings & subheadings, and tables.</li>
            <li><strong>OCR for Scanned PDFs</strong>: Convert scanned PDFs into real, editable text — not just images.</li>
            <li><strong>No Registration Required</strong>: Use the tool instantly. No email, no sign-up, no account.</li>
            <li><strong>Completely Free</strong>: Unlimited conversions. No pro plan. No hidden fees.</li>
            <li><strong>Secure & Private</strong>: SSL encryption and auto-delete files after 1 hour. We do NOT store or share your documents.</li>
            <li><strong>Works Everywhere</strong>: Compatible with Windows, Mac, Linux, Android, and iOS.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Supported Formats</h2>
        <p><strong>Input:</strong> PDF (all types — text-based, scanned, multi-page, exported PDFs)<br />
        <strong>Output:</strong> DOCX (Microsoft Word)</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Who Is This Tool For?</h2>
        <ul className="list-disc list-inside space-y-3">
            <li><strong>Students:</strong> Convert lecture notes, textbooks, research PDFs, and study materials.</li>
            <li><strong>Professionals:</strong> Edit contracts, client proposals, invoices, reports, or manuals instantly.</li>
            <li><strong>Teachers:</strong> Convert educational PDFs into editable Word files for classroom use.</li>
            <li><strong>Freelancers:</strong> Work with client PDFs easily and extract content for editing.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">How to Convert PDF to Word (Step-by-Step Guide)</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Click the <strong>Upload</strong> button or drag your PDF into the upload area.</li>
          <li>Conversion begins automatically — no extra steps.</li>
          <li>Download the final DOCX file in one click.</li>
        </ol>
        <p className="mt-2 font-semibold">Fast. Simple. Free.</p>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold mb-4">Why Choose Our Converter?</h2>
         <ComparisonTable />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions (FAQ)</h2>
        <FaqAccordion />
      </section>
    </div>
  );
}

const ComparisonTable = () => (
    <div className="overflow-x-auto">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Feature</TableHead>
                    <TableHead>PDF2Word</TableHead>
                    <TableHead>Other Tools</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Cost</TableCell>
                    <TableCell className="text-green-600 font-semibold">Free Forever</TableCell>
                    <TableCell>Limited or Paid</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Registration</TableCell>
                    <TableCell className="text-green-600 font-semibold">No Signup Needed</TableCell>
                    <TableCell>Requires Email/Login</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>File Security</TableCell>
                    <TableCell className="text-green-600 font-semibold">Auto-delete after 1 hour</TableCell>
                    <TableCell>Many store files</TableCell>
                </TableRow>
                 <TableRow>
                    <TableCell>Conversion Limits</TableCell>
                    <TableCell className="text-green-600 font-semibold">Unlimited Conversions</TableCell>
                    <TableCell>1–2 free conversions/day</TableCell>
                </TableRow>
                 <TableRow>
                    <TableCell>OCR Support</TableCell>
                    <TableCell className="text-green-600 font-semibold">Yes, Free</TableCell>
                    <TableCell>Often Paid</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
);

const FaqAccordion = () => {
    const faqs = [
        {
            question: "Is this PDF to Word converter free to use?",
            answer: "Yes, our online PDF to Word converter is completely free. There are no hidden charges, and you can convert as many files as you need without any limits."
        },
        {
            question: "Do I need to sign up or provide an email?",
            answer: "No, you do not need to sign up or provide any personal information. We believe in providing a hassle-free experience, allowing you to convert your files instantly and anonymously."
        },
        {
            question: "How secure are my files?",
            answer: "Your security is our top priority. We use AES-256 bit encryption to secure your files during upload and conversion. Furthermore, we automatically delete all files from our servers 60 minutes after conversion, ensuring your data remains private."
        },
        {
            question: "Will the formatting of my document be preserved?",
            answer: "Our converter uses advanced technology to maintain the original formatting, including text, images, lists, and tables, as accurately as possible. While complex layouts may see minor variations, we strive for a near-perfect conversion every time."
        },
        {
            question: "Can I convert scanned PDF files?",
            answer: "Yes, our tool is equipped with Optical Character Recognition (OCR) technology, allowing you to convert scanned PDFs into editable Word documents. The accuracy of the OCR depends on the quality of the scanned document."
        },
        {
            question: "What file formats do you support?",
            answer: "We support the most common document formats. For PDF to Word conversion, we accept .pdf files and convert them to .docx. For Word to PDF, we accept .doc and .docx files and convert them to .pdf."
        },
        {
            question: "Is there a limit on the file size?",
            answer: "For optimal performance, we recommend uploading files up to 50 MB. While our system can handle larger files, processing times may be longer."
        },
        {
            question: "Can I use this tool on my mobile device?",
            answer: "Absolutely. Our website is fully responsive and works on all devices, including desktops, tablets, and smartphones. You can convert files on the go, anytime, anywhere."
        },
        {
            question: "What happens to my uploaded files?",
            answer: "Your privacy is paramount. All uploaded files are automatically and permanently deleted from our servers one hour after processing. We do not store or share your data."
        },
        {
            question: "Why should I choose your converter over others?",
            answer: "Our converter stands out for its combination of speed, security, and high-quality results—all for free and without requiring registration. We provide a seamless, user-friendly experience focused on protecting your privacy while delivering professional-grade conversions."
        }
    ];

    return (
        <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-base">
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};
