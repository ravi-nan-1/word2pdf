import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function SeoContent() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 space-y-12 text-lg leading-relaxed">
      
      <section>
        <h2 className="text-3xl font-bold mb-4">What is a PDF to Word Converter?</h2>
        <p>A PDF to Word converter is a tool that transforms a Portable Document Format (PDF) file into an editable Microsoft Word document (typically in .docx format). PDFs are excellent for sharing and printing files while preserving layout and formatting, but they are notoriously difficult to edit. When you need to make changes to a PDF—whether it's correcting a typo, updating information, or repurposing content—a converter becomes essential. It unlocks the static content within the PDF, making it fully editable in a familiar word processing environment like Microsoft Word.</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">How Does PDF to Word Conversion Work?</h2>
        <p className="mb-4">Our converter employs sophisticated algorithms to analyze the structure of your PDF file. Here’s a simplified breakdown of the process:</p>
        <ol className="list-decimal list-inside space-y-2">
            <li><strong>Structural Analysis:</strong> The tool first identifies all the elements within the PDF, such as text blocks, images, tables, headers, and footers.</li>
            <li><strong>Content Extraction:</strong> It then extracts this content layer by layer. For text, it recognizes characters and their formatting (font, size, color, bold, italics). For images, it preserves the original picture data.</li>
            <li><strong>Optical Character Recognition (OCR):</strong> If the PDF is a scanned document (an image of text), our advanced OCR engine kicks in. It 'reads' the text from the image and converts it into editable characters.</li>
            <li><strong>Reconstruction:</strong> Finally, the tool meticulously reconstructs all these elements into a .docx file, attempting to match the original layout as closely as possible. This ensures that paragraphs, columns, lists, and tables appear in Word just as they did in the PDF.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Features & Benefits</h2>
        <ul className="list-disc list-inside space-y-3">
            <li><strong>High Accuracy:</strong> Preserves original layout, text, images, and formatting with precision.</li>
            <li><strong>OCR for Scanned PDFs:</strong> Turns non-editable scanned documents into fully workable Word files.</li>
            <li><strong>No Registration Required:</strong> Convert files instantly without the need for an account or email signup.</li>
            <li><strong>Completely Free:</strong> Enjoy unlimited conversions without any cost or hidden fees.</li>
            <li><strong>Secure & Private:</strong> We use SSL encryption and automatically delete your files after one hour. Your data is never stored or shared.</li>
            <li><strong>Cross-Platform Compatibility:</strong> Works on any operating system (Windows, Mac, Linux) and any device with a modern web browser.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Supported Formats and Use-Cases</h2>
        <p className="mb-4">Our tool is designed for flexibility, catering to a wide range of users:</p>
        <ul className="list-disc list-inside space-y-3">
            <li><strong>For Students:</strong> Quickly convert lecture notes, research papers, and textbook chapters into editable formats for easier studying and note-taking.</li>
            <li><strong>For Offices:</strong> Edit reports, invoices, contracts, and manuals without having to recreate them from scratch. Streamline your workflow and save valuable time.</li>
            <li><strong>For Freelancers:</strong> Adapt client briefs, edit portfolios, or extract text from a client’s PDF to use in your work.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Step-by-Step Tutorial</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Upload Your File:</strong> Click the 'Upload' button or drag and drop your PDF file into the designated area.</li>
          <li><strong>Convert:</strong> The conversion process starts automatically. Our tool will analyze and transform your file in seconds.</li>
          <li><strong>Download:</strong> Once finished, click the 'Download' button to save your newly created, editable Word document.</li>
        </ol>
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
                    <TableHead>Other Online Tools</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Cost</TableCell>
                    <TableCell className="text-green-600 font-semibold">Completely Free</TableCell>
                    <TableCell>Often have limits or paid tiers</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Registration</TableCell>
                    <TableCell className="text-green-600 font-semibold">Not Required</TableCell>
                    <TableCell>Usually requires email sign-up</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>File Security</TableCell>
                    <TableCell className="text-green-600 font-semibold">Auto-delete after 1 hour</TableCell>
                    <TableCell>Varies, some may store data</TableCell>
                </TableRow>
                 <TableRow>
                    <TableCell>Conversion Limits</TableCell>
                    <TableCell className="text-green-600 font-semibold">Unlimited</TableCell>
                    <TableCell>Typically 1-2 per day on free plans</TableCell>
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
