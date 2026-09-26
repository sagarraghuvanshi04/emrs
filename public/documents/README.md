# Documents Folder Structure

Place your actual PDF/image files in the correct subfolder, then update src/data/siteData.js with the filename.

## Folder Structure

public/documents/
├── business/          ← GST, PAN, UDYAM, Firm Registration, etc.
├── work-orders/       ← Work orders and tender documents
├── certificates/      ← Completion certificates, experience certificates, appreciation letters
└── projects/          ← Per-project documents (work orders, POs, certificates)

## How to Add a Document

1. Copy your PDF or image file into the correct subfolder.
   Example: public/documents/business/gst-certificate.pdf

2. Open src/data/siteData.js

3. Find the document entry and update the `file` field:
   Before: { name: "GST Registration Certificate", type: "Business Credential", file: null }
   After:  { name: "GST Registration Certificate", type: "Business Credential", file: "/documents/business/gst-certificate.pdf" }

4. Save the file. The website will automatically show View and Download buttons.

## Supported File Types
- PDF (recommended for documents)
- JPG / PNG (for scanned certificates or images)
