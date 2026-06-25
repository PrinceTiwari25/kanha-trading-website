import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/kanha-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kanha Trading – Industrial Hardware, Tools & Safety Supplier in Gurugram" },
      {
        name: "description",
        content:
          "Kanha Trading is a GST-registered industrial hardware supplier in Gurugram, Haryana. Precision tools, safety gear, fasteners, welding consumables, bearings & more — bulk & B2B ready.",
      },
      { name: "keywords", content: "industrial hardware Gurugram, fasteners supplier, welding wire, safety equipment, MIG TIG wire, hex bolts, vernier caliper, bulk hardware supply Haryana" },
      { property: "og:title", content: "Kanha Trading – Industrial Hardware Partner" },
      { property: "og:description", content: "Precision tools, safety gear, fasteners & welding supplies. GSTIN 06BGUPY6724N1Z8. Gurugram, Haryana." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: logo.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: logo.url },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700&family=Inter:wght@400;500;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Kanha Trading",
          image: logo.url,
          description:
            "GST-registered industrial hardware supplier offering precision tools, safety equipment, fasteners and welding consumables.",
          telephone: "+91-8076969241",
          email: "kanhatrading8@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Gurugram",
            addressRegion: "Haryana",
            addressCountry: "IN",
          },
          taxID: "06BGUPY6724N1Z8",
          areaServed: "IN",
        }),
      },
    ],
  }),
  component: Index,
});

const svgs: Record<string, string> = {
  caliper: `<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="60" width="200" height="14" rx="3" fill="#1E3A5F" stroke="#378ADD" stroke-width="1"/><rect x="10" y="58" width="8" height="34" rx="2" fill="#E8730A"/><rect x="60" y="58" width="6" height="34" rx="2" fill="#E8730A"/><rect x="10" y="67" width="50" height="3" rx="1" fill="#378ADD" opacity=".5"/><rect x="80" y="60" width="120" height="14" rx="2" fill="#12263A" stroke="#1E3A5F" stroke-width="1"/><line x1="100" y1="55" x2="100" y2="78" stroke="#4A7A9B" stroke-width="1"/><line x1="120" y1="55" x2="120" y2="78" stroke="#4A7A9B" stroke-width="1"/><line x1="140" y1="55" x2="140" y2="78" stroke="#4A7A9B" stroke-width="1"/><line x1="160" y1="55" x2="160" y2="78" stroke="#4A7A9B" stroke-width="1"/><text x="110" y="105" text-anchor="middle" fill="#7FB3D3" font-size="11" font-family="sans-serif">Vernier Caliper</text><rect x="28" y="115" width="164" height="18" rx="3" fill="#0A3050" stroke="#E8730A" stroke-width=".5"/><text x="110" y="128" text-anchor="middle" fill="#E8730A" font-size="10" font-family="sans-serif">± 0.02mm Precision</text></svg>`,
  micrometer: `<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><rect x="80" y="55" width="70" height="40" rx="20" fill="none" stroke="#378ADD" stroke-width="3"/><rect x="30" y="68" width="50" height="14" rx="2" fill="#1E3A5F" stroke="#378ADD" stroke-width="1"/><rect x="150" y="70" width="40" height="10" rx="5" fill="#E8730A"/><rect x="20" y="65" width="12" height="20" rx="3" fill="#0A3050" stroke="#E8730A" stroke-width="1"/><text x="110" y="115" text-anchor="middle" fill="#7FB3D3" font-size="11" font-family="sans-serif">Micrometer</text><rect x="28" y="125" width="164" height="16" rx="3" fill="#0A3050" stroke="#E8730A" stroke-width=".5"/><text x="110" y="137" text-anchor="middle" fill="#E8730A" font-size="10" font-family="sans-serif">0.001mm Resolution</text></svg>`,
  drillbit: `<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><polygon points="110,20 118,50 102,50" fill="#E8730A"/><rect x="104" y="50" width="12" height="70" rx="2" fill="#1E3A5F" stroke="#378ADD" stroke-width="1"/><rect x="100" y="118" width="20" height="12" rx="2" fill="#12263A" stroke="#E8730A" stroke-width="1"/><text x="110" y="128" text-anchor="middle" fill="#E8730A" font-size="8" font-family="sans-serif">HSS</text><circle cx="60" cy="65" r="18" fill="none" stroke="#378ADD" stroke-width="1.5"/><polygon points="60,52 65,62 55,62" fill="#E8730A"/><rect x="56" y="62" width="8" height="22" rx="1" fill="#1E3A5F"/><circle cx="160" cy="65" r="18" fill="none" stroke="#378ADD" stroke-width="1.5"/><polygon points="160,52 165,62 155,62" fill="#378ADD"/><rect x="156" y="62" width="8" height="22" rx="1" fill="#1E3A5F"/><text x="110" y="142" text-anchor="middle" fill="#7FB3D3" font-size="11" font-family="sans-serif">Drill Bits &amp; Cutting Tools</text></svg>`,
  grinder: `<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="55" width="100" height="50" rx="8" fill="#12263A" stroke="#1E3A5F" stroke-width="1.5"/><circle cx="110" cy="80" r="18" fill="#1E3A5F" stroke="#E8730A" stroke-width="2"/><circle cx="110" cy="80" r="4" fill="#E8730A"/><rect x="80" y="105" width="60" height="10" rx="3" fill="#1E3A5F" stroke="#378ADD" stroke-width="1"/><text x="110" y="143" text-anchor="middle" fill="#7FB3D3" font-size="11" font-family="sans-serif">Angle Grinder</text></svg>`,
  gloves: `<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><path d="M70,110 L70,70 Q70,60 80,60 L85,60 L85,40 Q85,33 92,33 Q99,33 99,40 L99,60 L103,60 L103,35 Q103,28 110,28 Q117,28 117,35 L117,60 L121,60 L121,38 Q121,31 128,31 Q135,31 135,38 L135,60 L140,60 L140,50 Q140,43 147,43 Q154,43 154,50 L154,80 Q154,100 140,110 Z" fill="#1E3A5F" stroke="#378ADD" stroke-width="1.5"/><text x="110" y="128" text-anchor="middle" fill="#7FB3D3" font-size="11" font-family="sans-serif">Safety Gloves</text><rect x="55" y="133" width="110" height="14" rx="3" fill="#0A3050" stroke="#E8730A" stroke-width=".5"/><text x="110" y="144" text-anchor="middle" fill="#E8730A" font-size="9.5" font-family="sans-serif">Cut &amp; Chemical Resistant</text></svg>`,
  shoe: `<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><path d="M30,110 L30,80 Q30,65 50,62 L80,60 Q100,58 120,55 Q140,52 160,60 L185,70 Q195,75 195,85 L195,110 Z" fill="#1E3A5F" stroke="#378ADD" stroke-width="1.5"/><path d="M30,105 L195,105 L195,110 Q195,118 185,118 L40,118 Q30,118 30,110 Z" fill="#E8730A"/><rect x="30" y="78" width="60" height="26" rx="2" fill="#12263A" stroke="#378ADD" stroke-width="1"/><text x="60" y="95" text-anchor="middle" fill="#E8730A" font-size="9" font-family="sans-serif" font-weight="bold">STEEL TOE</text><text x="110" y="132" text-anchor="middle" fill="#7FB3D3" font-size="11" font-family="sans-serif">Safety Shoes</text></svg>`,
  helmet: `<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><path d="M50,95 Q50,50 110,48 Q170,50 170,95 L170,105 L50,105 Z" fill="#E8730A" stroke="#378ADD" stroke-width="1.5"/><rect x="42" y="102" width="136" height="12" rx="4" fill="#1E3A5F" stroke="#378ADD" stroke-width="1"/><text x="110" y="128" text-anchor="middle" fill="#7FB3D3" font-size="11" font-family="sans-serif">Safety Helmet</text><rect x="55" y="133" width="110" height="14" rx="3" fill="#0A3050" stroke="#E8730A" stroke-width=".5"/><text x="110" y="144" text-anchor="middle" fill="#E8730A" font-size="9.5" font-family="sans-serif">IS 2925 Certified</text></svg>`,
  weldwire: `<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="78" r="42" fill="none" stroke="#1E3A5F" stroke-width="8"/><circle cx="110" cy="78" r="42" fill="none" stroke="#E8730A" stroke-width="5" stroke-dasharray="20 8"/><circle cx="110" cy="78" r="28" fill="none" stroke="#12263A" stroke-width="14"/><circle cx="110" cy="78" r="18" fill="#0A3050" stroke="#1E3A5F" stroke-width="2"/><circle cx="110" cy="78" r="6" fill="#1E3A5F"/><text x="110" y="135" text-anchor="middle" fill="#7FB3D3" font-size="11" font-family="sans-serif">Welding Wire (MIG/TIG)</text><text x="110" y="78" text-anchor="middle" fill="#E8730A" font-size="9" font-family="sans-serif" dominant-baseline="middle">ER70S-6</text></svg>`,
  electrode: `<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="58" width="8" height="74" rx="2" fill="#E8730A"/><rect x="70" y="48" width="8" height="74" rx="2" fill="#E8730A"/><rect x="105" y="54" width="8" height="74" rx="2" fill="#E8730A"/><rect x="140" y="50" width="8" height="74" rx="2" fill="#E8730A"/><rect x="175" y="56" width="8" height="74" rx="2" fill="#E8730A"/><text x="110" y="142" text-anchor="middle" fill="#7FB3D3" font-size="11" font-family="sans-serif">Welding Electrodes</text></svg>`,
  bolts: `<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><polygon points="70,30 90,40 90,60 70,70 50,60 50,40" fill="#1E3A5F" stroke="#378ADD" stroke-width="1.5"/><circle cx="70" cy="50" r="8" fill="#0A3050" stroke="#E8730A" stroke-width="1.5"/><rect x="66" y="70" width="8" height="52" rx="2" fill="#E8730A"/><polygon points="150,25 168,35 168,55 150,65 132,55 132,35" fill="#1E3A5F" stroke="#378ADD" stroke-width="1.5"/><circle cx="150" cy="45" r="8" fill="#0A3050" stroke="#E8730A" stroke-width="1.5"/><rect x="146" y="65" width="8" height="45" rx="2" fill="#E8730A"/><text x="110" y="120" text-anchor="middle" fill="#7FB3D3" font-size="11" font-family="sans-serif">Hex Bolts &amp; Nuts</text><rect x="40" y="127" width="140" height="14" rx="3" fill="#0A3050" stroke="#E8730A" stroke-width=".5"/><text x="110" y="138" text-anchor="middle" fill="#E8730A" font-size="9.5" font-family="sans-serif">All Grades &amp; Sizes Available</text></svg>`,
  screws: `<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><polygon points="108,40 112,40 115,130 105,130" fill="#E8730A"/><circle cx="55" cy="45" r="12" fill="#1E3A5F" stroke="#378ADD" stroke-width="1.5"/><rect x="52" y="57" width="6" height="55" rx="1" fill="#378ADD"/><circle cx="165" cy="45" r="12" fill="#1E3A5F" stroke="#378ADD" stroke-width="1.5"/><rect x="162" y="57" width="6" height="55" rx="1" fill="#378ADD"/><text x="110" y="143" text-anchor="middle" fill="#7FB3D3" font-size="11" font-family="sans-serif">Screws &amp; Self-Tappers</text></svg>`,
  washer: `<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><circle cx="70" cy="65" r="35" fill="#1E3A5F" stroke="#378ADD" stroke-width="2"/><circle cx="70" cy="65" r="18" fill="#0D1B2A"/><circle cx="150" cy="65" r="28" fill="#E8730A" opacity=".15" stroke="#E8730A" stroke-width="2"/><circle cx="150" cy="65" r="14" fill="#0D1B2A"/><text x="110" y="115" text-anchor="middle" fill="#7FB3D3" font-size="11" font-family="sans-serif">Washers &amp; Clips</text><rect x="30" y="125" width="160" height="16" rx="3" fill="#0A3050" stroke="#E8730A" stroke-width=".5"/><text x="110" y="137" text-anchor="middle" fill="#E8730A" font-size="9.5" font-family="sans-serif">DIN Standard · Bulk Packs</text></svg>`,
  bearing: `<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="72" r="52" fill="none" stroke="#1E3A5F" stroke-width="12"/><circle cx="110" cy="72" r="26" fill="none" stroke="#1E3A5F" stroke-width="8"/><circle cx="110" cy="72" r="14" fill="#0A3050" stroke="#378ADD" stroke-width="1.5"/><circle cx="110" cy="44" r="8" fill="#E8730A"/><circle cx="132" cy="52" r="8" fill="#E8730A"/><circle cx="140" cy="76" r="8" fill="#E8730A"/><circle cx="128" cy="98" r="8" fill="#E8730A"/><circle cx="105" cy="106" r="8" fill="#E8730A"/><circle cx="83" cy="100" r="8" fill="#E8730A"/><circle cx="74" cy="78" r="8" fill="#E8730A"/><circle cx="84" cy="54" r="8" fill="#E8730A"/><text x="110" y="136" text-anchor="middle" fill="#7FB3D3" font-size="11" font-family="sans-serif">Industrial Bearings</text></svg>`,
  chain: `<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="62" width="26" height="16" rx="8" fill="none" stroke="#E8730A" stroke-width="3"/><rect x="58" y="62" width="26" height="16" rx="8" fill="none" stroke="#E8730A" stroke-width="3"/><rect x="96" y="62" width="26" height="16" rx="8" fill="none" stroke="#E8730A" stroke-width="3"/><rect x="134" y="62" width="26" height="16" rx="8" fill="none" stroke="#E8730A" stroke-width="3"/><rect x="172" y="62" width="26" height="16" rx="8" fill="none" stroke="#E8730A" stroke-width="3"/><text x="110" y="105" text-anchor="middle" fill="#7FB3D3" font-size="11" font-family="sans-serif">Chains &amp; Sprockets</text><rect x="30" y="112" width="160" height="16" rx="3" fill="#0A3050" stroke="#E8730A" stroke-width=".5"/><text x="110" y="124" text-anchor="middle" fill="#E8730A" font-size="9.5" font-family="sans-serif">Roller Chain · Power Transmission</text></svg>`,
  wirerope: `<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><path d="M20,60 Q60,40 110,65 Q160,90 200,65" fill="none" stroke="#E8730A" stroke-width="4" stroke-linecap="round"/><path d="M20,70 Q60,50 110,75 Q160,100 200,75" fill="none" stroke="#378ADD" stroke-width="3" stroke-linecap="round"/><path d="M20,80 Q60,60 110,85 Q160,110 200,85" fill="none" stroke="#1E3A5F" stroke-width="4" stroke-linecap="round"/><text x="110" y="120" text-anchor="middle" fill="#7FB3D3" font-size="11" font-family="sans-serif">Wire Ropes &amp; Slings</text><rect x="30" y="127" width="160" height="16" rx="3" fill="#0A3050" stroke="#E8730A" stroke-width=".5"/><text x="110" y="139" text-anchor="middle" fill="#E8730A" font-size="9.5" font-family="sans-serif">Galvanized · Lifting Grade</text></svg>`,
  hydraulic: `<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="62" width="50" height="26" rx="4" fill="#1E3A5F" stroke="#378ADD" stroke-width="1.5"/><rect x="80" y="70" width="30" height="10" rx="2" fill="#E8730A"/><rect x="110" y="68" width="20" height="14" rx="3" fill="#12263A" stroke="#E8730A" stroke-width="1.5"/><rect x="130" y="72" width="60" height="6" rx="3" fill="#378ADD"/><text x="110" y="118" text-anchor="middle" fill="#7FB3D3" font-size="11" font-family="sans-serif">Hydraulic Fittings</text><rect x="30" y="124" width="160" height="16" rx="3" fill="#0A3050" stroke="#E8730A" stroke-width=".5"/><text x="110" y="136" text-anchor="middle" fill="#E8730A" font-size="9.5" font-family="sans-serif">High Pressure Rated</text></svg>`,
};

type Product = { name: string; desc: string; cat: string; tag: string; icon: string; svg: keyof typeof svgs };

const products: Product[] = [
  { name: "Vernier Calipers", desc: "High-precision measurement for machining & QC, 0–300 mm range", cat: "tools", tag: "Precision", icon: "ti-ruler-measure", svg: "caliper" },
  { name: "Micrometers", desc: "Outside, inside & depth micrometers for sub-micron tolerances", cat: "tools", tag: "Precision", icon: "ti-arrows-horizontal", svg: "micrometer" },
  { name: "Cutting Tools & Drill Bits", desc: "HSS & carbide drill bits, taps, dies & milling cutters", cat: "tools", tag: "Cutting", icon: "ti-cut", svg: "drillbit" },
  { name: "Angle Grinders", desc: "Heavy-duty grinders for cutting, grinding & polishing metal", cat: "tools", tag: "Power Tool", icon: "ti-tool", svg: "grinder" },
  { name: "Safety Hand Gloves", desc: "Cut-resistant, chemical-proof & heat-resistant gloves", cat: "safety", tag: "Safety", icon: "ti-hand-stop", svg: "gloves" },
  { name: "Safety Shoes", desc: "Steel-toe & composite-toe shoes (IS 15298 / ISI marked)", cat: "safety", tag: "Safety", icon: "ti-shoe", svg: "shoe" },
  { name: "Safety Helmets", desc: "ISI-marked hard hats, face shields & full PPE kits", cat: "safety", tag: "Safety", icon: "ti-helmet", svg: "helmet" },
  { name: "Welding Wire (MIG/TIG)", desc: "ER70S-6 MIG wire, TIG rods & flux-cored wire spools", cat: "welding", tag: "Welding", icon: "ti-flame", svg: "weldwire" },
  { name: "Welding Electrodes", desc: "Coated stick electrodes for arc welding steel & cast iron", cat: "welding", tag: "Welding", icon: "ti-bolt", svg: "electrode" },
  { name: "Hex Bolts & Nuts", desc: "Metric & imperial hex bolts, nuts — grades 4.6 to 12.9", cat: "fasteners", tag: "Fastener", icon: "ti-adjustments-horizontal", svg: "bolts" },
  { name: "Screws & Self-Tappers", desc: "Machine screws, wood screws, self-tappers — bulk packs", cat: "fasteners", tag: "Fastener", icon: "ti-settings", svg: "screws" },
  { name: "Washers & Clips", desc: "Plain, spring & lock washers, circlips & retaining rings", cat: "fasteners", tag: "Fastener", icon: "ti-circle", svg: "washer" },
  { name: "Industrial Bearings", desc: "Ball, roller & thrust bearings (SKF / FAG / NTN equivalents)", cat: "hardware", tag: "Hardware", icon: "ti-circle-dotted", svg: "bearing" },
  { name: "Chains & Sprockets", desc: "Roller chains & matched sprockets for power transmission", cat: "hardware", tag: "Hardware", icon: "ti-link", svg: "chain" },
  { name: "Wire Ropes & Slings", desc: "Galvanized wire ropes & lifting slings with test certs", cat: "hardware", tag: "Hardware", icon: "ti-zigzag", svg: "wirerope" },
  { name: "Hydraulic Fittings", desc: "Hose fittings, adapters & connectors for fluid power", cat: "hardware", tag: "Hardware", icon: "ti-api", svg: "hydraulic" },
];

const categories = [
  { id: "all", label: "All Products" },
  { id: "tools", label: "Measuring & Cutting" },
  { id: "safety", label: "Safety Gear" },
  { id: "fasteners", label: "Fasteners" },
  { id: "welding", label: "Welding" },
  { id: "hardware", label: "Hardware" },
];

const industries = [
  { icon: "ti-building-factory-2", name: "Manufacturing", desc: "Plants, fabrication units & OEM workshops" },
  { icon: "ti-car", name: "Automotive", desc: "Auto component makers, body shops & garages" },
  { icon: "ti-building-skyscraper", name: "Construction", desc: "Contractors, builders & infrastructure projects" },
  { icon: "ti-bolt", name: "Electrical & MEP", desc: "Electrical contractors and MEP installations" },
  { icon: "ti-engine", name: "Heavy Machinery", desc: "CNC, hydraulic & material-handling equipment" },
  { icon: "ti-tools-kitchen-2", name: "Workshops & MRO", desc: "Maintenance, repair & overhaul facilities" },
];

const process = [
  { step: "01", title: "Send Requirement", desc: "Share specs, sizes & quantities via form, call or WhatsApp." },
  { step: "02", title: "Get Quote in 24 hrs", desc: "We confirm availability and share GST-inclusive pricing." },
  { step: "03", title: "Confirm & Pay", desc: "Approve the quote and pay by UPI, NEFT/RTGS or cheque." },
  { step: "04", title: "Fast Dispatch", desc: "Goods packed, invoiced and dispatched pan-India." },
];

const faqs = [
  { q: "What is the minimum order quantity?", a: "There is no fixed MOQ for most items — we serve small workshops as well as bulk B2B buyers. Volume discounts apply on larger orders." },
  { q: "Do you provide GST invoices?", a: "Yes. We are a GST-registered dealer (GSTIN 06BGUPY6724N1Z8). Proper GST tax invoices are issued for every order, so you can claim input credit." },
  { q: "Which areas do you deliver to?", a: "Same-day or next-day dispatch within Gurugram & Delhi NCR. Pan-India shipping through trusted logistics partners." },
  { q: "Can you source an item that is not listed?", a: "Yes — share the part number, spec or sample and we will source it from our manufacturer network." },
  { q: "What payment modes do you accept?", a: "UPI, bank transfer (NEFT/RTGS/IMPS), cheque and cash for walk-in customers. Credit terms available for approved B2B accounts." },
];

const testimonials = [
  { name: "Production Manager", company: "Auto Component Mfr., Manesar", text: "Reliable supplier for fasteners and abrasives. Quick turnaround on urgent indents has saved our line more than once." },
  { name: "Site Engineer", company: "Construction Co., Gurugram", text: "Good pricing on safety gear and welding consumables, plus proper GST invoices every time. Easy to deal with." },
  { name: "Workshop Owner", company: "Fabrication Workshop, Udyog Vihar", text: "From MIG wire to bearings, single point of contact for almost everything we need. Highly recommended." },
];

function Index() {
  const [activeCat, setActiveCat] = useState("all");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", company: "", product: "", qty: "", msg: "" });

  useEffect(() => {
    document.body.style.background = "#0D1B2A";
    return () => { document.body.style.background = ""; };
  }, []);

  const filtered = activeCat === "all" ? products : products.filter((p) => p.cat === activeCat);

  function prefillInquiry(name: string) {
    setForm((f) => ({ ...f, msg: `I am interested in: ${name}\n\nPlease share pricing and availability.` }));
    document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" });
  }

  function submit() {
    if (!form.name || !form.phone || !form.product || !form.msg) {
      alert("Please fill in all required fields (marked with *).");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      document.getElementById("formSuccess")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 800);
  }

  return (
    <>
      <style>{css}</style>

      <nav>
        <div className="nav-inner">
          <a href="#top" className="nav-logo">
            <img src={logo.url} alt="Kanha Trading logo" />
          </a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#industries">Industries</a></li>
            <li><a href="#process">How We Work</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#inquiry" className="nav-cta">Get Quote</a>
          <button className="nav-menu-btn" aria-label="Open menu" onClick={() => setMobileOpen((o) => !o)}>
            <i className="ti ti-menu-2" />
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="mobile-nav open">
          {["about","products","industries","process","faq","contact"].map((id) => (
            <a key={id} href={`#${id}`} onClick={() => setMobileOpen(false)}>{id}</a>
          ))}
          <a href="#inquiry" onClick={() => setMobileOpen(false)}>Get a Quote →</a>
        </div>
      )}

      <div id="top" className="hero">
        <div>
          <div className="hero-eyebrow">Gurugram, Haryana · Industrial Supply Experts since 2018</div>
          <h1 className="hero-title">Your Trusted <em>Industrial</em> Hardware Partner</h1>
          <p className="hero-desc">
            Kanha Trading supplies precision tools, safety equipment, fasteners, welding consumables, bearings and
            complete industrial hardware — all under one roof. GST-registered. Bulk &amp; B2B orders welcome.
          </p>
          <div className="hero-btns">
            <a href="#products" className="btn-primary">Browse Products</a>
            <a href="#inquiry" className="btn-secondary">Request a Quote</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-stat"><div className="hero-stat-num">500+</div><div className="hero-stat-lbl">SKUs Stocked</div></div>
          <div className="hero-stat"><div className="hero-stat-num">B2B</div><div className="hero-stat-lbl">Bulk Supply Ready</div></div>
          <div className="hero-stat"><div className="hero-stat-num">GST</div><div className="hero-stat-lbl">Registered Dealer</div></div>
          <div className="hero-stat"><div className="hero-stat-num">24h</div><div className="hero-stat-lbl">Quote Response</div></div>
          <div className="hero-stat accent">
            <div className="hero-stat-num">GSTIN: 06BGUPY6724N1Z8</div>
            <div className="hero-stat-lbl" style={{ marginTop: 2 }}>GST Invoices Provided</div>
          </div>
        </div>
      </div>

      <div className="trust-bar">
        <div className="trust-inner">
          <div className="trust-item"><i className="ti ti-shield-check" />Certified Quality</div>
          <div className="trust-sep" />
          <div className="trust-item"><i className="ti ti-truck-delivery" />Fast Delivery</div>
          <div className="trust-sep" />
          <div className="trust-item"><i className="ti ti-tag" />Competitive Pricing</div>
          <div className="trust-sep" />
          <div className="trust-item"><i className="ti ti-package" />Bulk Orders</div>
          <div className="trust-sep" />
          <div className="trust-item"><i className="ti ti-rosette" />Industrial Grade</div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="section" id="about">
        <p className="sec-eyebrow">About Kanha Trading</p>
        <h2 className="sec-title">One Partner. Every Industrial Need.</h2>
        <div className="sec-divider" />
        <div className="about-grid">
          <div>
            <p className="about-text">
              Based in Gurugram, Haryana, <strong>Kanha Trading</strong> is a GST-registered industrial hardware
              supplier serving factories, contractors, workshops and MRO teams across North India. We carry a
              deep catalog of precision tools, safety gear, fasteners, welding consumables and machine spares —
              sourced from trusted manufacturers and stocked for fast despatch.
            </p>
            <p className="about-text">
              Our customers come back because we make industrial procurement simple: clear pricing, GST-compliant
              billing, honest lead times and a single point of contact for hundreds of SKUs. Whether you need
              ten bolts or a quarterly bulk indent, you get the same attention.
            </p>
            <div className="about-cta">
              <a href="#inquiry" className="btn-primary">Send Requirement</a>
              <a href="tel:8076969241" className="btn-secondary">+91 80769 69241</a>
            </div>
          </div>
          <div className="about-stats">
            <div className="about-stat"><div className="about-stat-num">7+</div><div className="about-stat-lbl">Years Serving Industry</div></div>
            <div className="about-stat"><div className="about-stat-num">500+</div><div className="about-stat-lbl">Active SKUs</div></div>
            <div className="about-stat"><div className="about-stat-num">300+</div><div className="about-stat-lbl">B2B Customers</div></div>
            <div className="about-stat"><div className="about-stat-num">100%</div><div className="about-stat-lbl">GST Compliant</div></div>
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="section" id="products">
        <p className="sec-eyebrow">Our Product Catalog</p>
        <h2 className="sec-title">Everything Your Workshop Needs</h2>
        <p className="sec-sub">From precision instruments to heavy-duty fasteners — industrial-grade products for every requirement.</p>
        <div className="sec-divider" />
        <div className="product-filters">
          {categories.map((c) => (
            <button key={c.id} className={`filter-btn ${activeCat === c.id ? "active" : ""}`} onClick={() => setActiveCat(c.id)}>
              {c.label}
            </button>
          ))}
        </div>
        <div className="products-grid">
          {filtered.map((p) => (
            <div className="prod-card" key={p.name}>
              <div className="prod-img-wrap">
                <div dangerouslySetInnerHTML={{ __html: svgs[p.svg] || "" }} />
                <div className="prod-img-overlay">
                  <i className={`ti ${p.icon}`} />
                  <span className="prod-img-tag">{p.tag}</span>
                </div>
              </div>
              <div className="prod-body">
                <div className="prod-name">{p.name}</div>
                <div className="prod-desc">{p.desc}</div>
                <button className="prod-inq" onClick={() => prefillInquiry(p.name)}>Inquire Now →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INDUSTRIES */}
      <div className="why-wrap" id="industries">
        <div style={{ maxWidth: 1200, margin: "0 auto 36px" }}>
          <p className="sec-eyebrow">Industries We Serve</p>
          <h2 className="sec-title">Trusted Across Sectors</h2>
          <div className="sec-divider" />
        </div>
        <div className="why-grid">
          {industries.map((i) => (
            <div className="why-card" key={i.name}>
              <i className={`ti ${i.icon}`} />
              <div className="why-title">{i.name}</div>
              <div className="why-text">{i.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* WHY */}
      <div className="section" id="why">
        <p className="sec-eyebrow">Why Choose Kanha Trading</p>
        <h2 className="sec-title">Built on Trust. Delivered with Precision.</h2>
        <div className="sec-divider" />
        <div className="why-grid">
          <div className="why-card"><i className="ti ti-certificate" /><div className="why-title">Genuine Products</div><div className="why-text">Every item sourced from trusted manufacturers with quality assurance and industry certifications.</div></div>
          <div className="why-card"><i className="ti ti-package" /><div className="why-title">Bulk Supply Ready</div><div className="why-text">Large-volume orders accepted with special pricing — ideal for factories, contractors &amp; workshops.</div></div>
          <div className="why-card"><i className="ti ti-receipt-tax" /><div className="why-title">GST Invoices</div><div className="why-text">Registered dealer. Proper GST tax invoices provided for all B2B and commercial purchases.</div></div>
          <div className="why-card"><i className="ti ti-truck-delivery" /><div className="why-title">Fast Dispatch</div><div className="why-text">Orders processed quickly with reliable logistics across Gurugram, Haryana and pan-India delivery.</div></div>
          <div className="why-card"><i className="ti ti-headset" /><div className="why-title">Expert Support</div><div className="why-text">Our team helps you choose the right specification, grade and size for every application.</div></div>
          <div className="why-card"><i className="ti ti-tag" /><div className="why-title">Best Pricing</div><div className="why-text">Competitive market rates with volume discounts. No compromise on quality at any price point.</div></div>
        </div>
      </div>

      {/* PROCESS */}
      <div className="why-wrap" id="process">
        <div style={{ maxWidth: 1200, margin: "0 auto 36px" }}>
          <p className="sec-eyebrow">How We Work</p>
          <h2 className="sec-title">From Inquiry to Delivery in 4 Steps</h2>
          <div className="sec-divider" />
        </div>
        <div className="process-grid">
          {process.map((p) => (
            <div className="process-card" key={p.step}>
              <div className="process-step">{p.step}</div>
              <div className="process-title">{p.title}</div>
              <div className="process-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="section">
        <p className="sec-eyebrow">What Customers Say</p>
        <h2 className="sec-title">Voices from the Shop Floor</h2>
        <div className="sec-divider" />
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <div className="testi-card" key={i}>
              <i className="ti ti-quote testi-quote" />
              <p className="testi-text">{t.text}</p>
              <div className="testi-author">
                <div className="testi-name">{t.name}</div>
                <div className="testi-co">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INQUIRY */}
      <div className="section" id="inquiry">
        <p className="sec-eyebrow">Send an Inquiry</p>
        <h2 className="sec-title">Request a Quote</h2>
        <p className="sec-sub">Fill in the form and our team will respond within 24 hours with pricing and availability.</p>
        <div className="sec-divider" />
        <div className="inquiry-wrap">
          <div className="inq-top">
            <div className="inq-top-title">Product Inquiry Form</div>
            <div className="inq-top-sub">We respond within 24 hours on business days.</div>
          </div>
          <div className="inq-body">
            <div className="form-group"><label>Your Name *</label><input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" /></div>
            <div className="form-group"><label>Phone Number *</label><input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" /></div>
            <div className="form-group"><label>Email Address</label><input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" /></div>
            <div className="form-group"><label>Company / Organisation</label><input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company name (optional)" /></div>
            <div className="form-group">
              <label>Product Category *</label>
              <select value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })}>
                <option value="">Select a category</option>
                <option>Precision Measuring Tools</option>
                <option>Cutting Tools</option>
                <option>Hand Gloves</option>
                <option>Safety Shoes</option>
                <option>Welding Wire</option>
                <option>Screws / Nuts / Bolts</option>
                <option>Fasteners</option>
                <option>Industrial Hardware</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group"><label>Approximate Quantity</label><input value={form.qty} onChange={(e) => setForm({ ...form, qty: e.target.value })} placeholder="e.g. 500 pcs, 10 boxes" /></div>
            <div className="form-group full"><label>Product Details / Requirements *</label><textarea value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} placeholder="Describe what you need — size, grade, specification, usage, etc." /></div>
            <div className="form-submit">
              <div>
                <button className="submit-btn" disabled={submitting} onClick={submit}>
                  {submitting ? "Sending..." : "Send Inquiry →"}
                </button>
                <p className="form-note" style={{ marginTop: 8 }}>We'll contact you at the number provided.</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: 12, color: "var(--muted)" }}>Or call us directly</p>
                <a href="tel:8076969241" style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 28, color: "var(--orange)", textDecoration: "none", letterSpacing: 1 }}>+91 80769 69241</a>
              </div>
            </div>
            {success && (
              <div className="form-success" id="formSuccess" style={{ display: "flex" }}>
                <i className="ti ti-circle-check" />
                <span>Inquiry sent! We'll be in touch within 24 hours.</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="why-wrap" id="faq">
        <div style={{ maxWidth: 900, margin: "0 auto 36px" }}>
          <p className="sec-eyebrow">Frequently Asked Questions</p>
          <h2 className="sec-title">Answers Before You Ask</h2>
          <div className="sec-divider" />
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div className={`faq-item ${openFaq === i ? "open" : ""}`} key={i}>
              <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{f.q}</span>
                <i className={`ti ${openFaq === i ? "ti-minus" : "ti-plus"}`} />
              </button>
              {openFaq === i && <div className="faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div className="contact-wrap" id="contact">
        <div className="contact-inner">
          <p className="sec-eyebrow">Get in Touch</p>
          <h2 className="sec-title">Contact Kanha Trading</h2>
          <div className="sec-divider" />
          <div className="contact-grid">
            <div className="contact-card"><i className="ti ti-phone-call" /><div><div className="contact-lbl">Call / WhatsApp</div><div className="contact-val"><a href="tel:8076969241">+91 80769 69241</a></div></div></div>
            <div className="contact-card"><i className="ti ti-mail" /><div><div className="contact-lbl">Email</div><div className="contact-val"><a href="mailto:kanhatrading8@gmail.com">kanhatrading8@gmail.com</a></div></div></div>
            <div className="contact-card"><i className="ti ti-map-pin" /><div><div className="contact-lbl">Location</div><div className="contact-val">Gurugram, Haryana, India</div></div></div>
            <div className="contact-card"><i className="ti ti-clock" /><div><div className="contact-lbl">Business Hours</div><div className="contact-val">Mon–Sat · 9:30 AM – 7:00 PM</div></div></div>
            <div className="contact-card"><i className="ti ti-credit-card" /><div><div className="contact-lbl">Payments Accepted</div><div className="contact-val">UPI · NEFT · RTGS · Cheque · Cash</div></div></div>
            <div className="contact-card"><i className="ti ti-truck" /><div><div className="contact-lbl">Shipping</div><div className="contact-val">Same/next-day in NCR · Pan-India dispatch</div></div></div>
          </div>
          <div className="gst-strip">
            <i className="ti ti-certificate" />
            <div><div className="gst-lbl">GST Registration Number</div><div className="gst-num">06BGUPY6724N1Z8</div></div>
            <div className="gst-note">GST Invoices<br />Available</div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-inner">
          <div className="footer-brand-wrap">
            <img src={logo.url} alt="Kanha Trading" className="footer-logo" />
            <div className="footer-copy">© {new Date().getFullYear()} Kanha Trading · Gurugram, Haryana · All rights reserved.</div>
          </div>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#inquiry">Quote</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/918076969241" className="wa-btn" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <i className="ti ti-brand-whatsapp" />
      </a>
    </>
  );
}

const css = `
:root{
  --navy:#0D1B2A;--navy2:#12263A;--navy3:#1A3A55;--steel:#1E3A5F;
  --orange:#E8730A;--orange-l:#F09040;--blue:#378ADD;--blue-l:#7FB3D3;
  --white:#FFFFFF;--grey:#BDD8EC;--muted:#4A7A9B;
}
html{scroll-behavior:smooth;}
body{background:#0D1B2A;color:#fff;font-family:'Inter',sans-serif;line-height:1.6;}
* { box-sizing: border-box; }

nav{position:sticky;top:0;z-index:100;background:#0a1520;border-bottom:1px solid var(--steel);padding:0 5%;}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:72px;max-width:1200px;margin:0 auto;gap:24px;}
.nav-logo{display:flex;align-items:center;background:#f3f3ef;padding:6px 14px;border-radius:6px;}
.nav-logo img{height:44px;width:auto;display:block;}
.nav-links{display:flex;gap:28px;list-style:none;margin:0;padding:0;}
.nav-links a{font-family:'Barlow Condensed',sans-serif;font-size:14px;letter-spacing:2px;text-transform:uppercase;color:var(--blue-l);text-decoration:none;font-weight:600;transition:color .2s;}
.nav-links a:hover{color:var(--orange);}
.nav-cta{background:var(--orange);color:#fff;padding:10px 20px;border-radius:4px;font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:2px;text-transform:uppercase;font-weight:700;text-decoration:none;}
.nav-menu-btn{display:none;background:none;border:none;color:#fff;font-size:24px;cursor:pointer;}

.hero{padding:72px 5% 56px;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
.hero-eyebrow{font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:4px;color:var(--orange);text-transform:uppercase;font-weight:600;margin-bottom:12px;}
.hero-title{font-family:'Bebas Neue',sans-serif;font-size:68px;line-height:1;color:#fff;margin-bottom:16px;letter-spacing:2px;}
.hero-title em{color:var(--orange);font-style:normal;}
.hero-desc{font-size:15px;color:var(--grey);line-height:1.8;margin-bottom:32px;max-width:480px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;}
.btn-primary{background:var(--orange);color:#fff;padding:12px 28px;border-radius:4px;font-family:'Barlow Condensed',sans-serif;font-size:14px;letter-spacing:2px;text-transform:uppercase;font-weight:700;text-decoration:none;display:inline-block;border:none;cursor:pointer;}
.btn-secondary{background:transparent;color:var(--blue-l);padding:12px 28px;border-radius:4px;border:1px solid var(--steel);font-family:'Barlow Condensed',sans-serif;font-size:14px;letter-spacing:2px;text-transform:uppercase;font-weight:600;text-decoration:none;display:inline-block;cursor:pointer;}
.hero-right{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
.hero-stat{background:var(--navy2);border:1px solid var(--steel);border-radius:8px;padding:20px;text-align:center;}
.hero-stat-num{font-family:'Bebas Neue',sans-serif;font-size:40px;color:var(--orange);line-height:1;}
.hero-stat-lbl{font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:2px;color:var(--muted);text-transform:uppercase;margin-top:4px;}
.hero-stat.accent{background:#0A3050;border-color:var(--orange);grid-column:1/-1;}
.hero-stat.accent .hero-stat-num{font-size:22px;color:#fff;letter-spacing:1px;}

.trust-bar{background:#0A3050;border-top:1px solid var(--steel);border-bottom:1px solid var(--steel);padding:14px 5%;}
.trust-inner{max-width:1200px;margin:0 auto;display:flex;gap:28px;align-items:center;justify-content:center;flex-wrap:wrap;}
.trust-item{display:flex;align-items:center;gap:8px;font-family:'Barlow Condensed',sans-serif;font-size:13px;letter-spacing:1.5px;color:var(--grey);text-transform:uppercase;font-weight:600;}
.trust-item i{font-size:16px;color:var(--orange);}
.trust-sep{width:1px;height:20px;background:var(--steel);}

.section{padding:72px 5%;max-width:1200px;margin:0 auto;}
.sec-eyebrow{font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:4px;color:var(--orange);text-transform:uppercase;font-weight:600;margin-bottom:8px;}
.sec-title{font-family:'Bebas Neue',sans-serif;font-size:42px;color:#fff;letter-spacing:1px;margin-bottom:6px;}
.sec-sub{font-size:14px;color:var(--muted);margin-bottom:18px;max-width:560px;}
.sec-divider{width:40px;height:3px;background:var(--orange);margin-bottom:36px;}

.about-grid{display:grid;grid-template-columns:1.4fr 1fr;gap:48px;align-items:start;}
.about-text{color:var(--grey);font-size:15px;line-height:1.8;margin-bottom:18px;}
.about-text strong{color:#fff;}
.about-cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:8px;}
.about-stats{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
.about-stat{background:var(--navy2);border:1px solid var(--steel);border-radius:10px;padding:24px;text-align:center;}
.about-stat-num{font-family:'Bebas Neue',sans-serif;font-size:44px;color:var(--orange);line-height:1;}
.about-stat-lbl{font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:2px;color:var(--muted);text-transform:uppercase;margin-top:6px;}

.product-filters{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:28px;}
.filter-btn{background:var(--navy2);border:1px solid var(--steel);border-radius:20px;padding:6px 16px;font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:1.5px;color:var(--blue-l);text-transform:uppercase;font-weight:600;cursor:pointer;transition:all .2s;}
.filter-btn.active,.filter-btn:hover{background:var(--orange);border-color:var(--orange);color:#fff;}

.products-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:20px;}
.prod-card{background:var(--navy2);border:1px solid var(--steel);border-radius:12px;overflow:hidden;transition:all .25s;display:flex;flex-direction:column;}
.prod-card:hover{border-color:var(--orange);transform:translateY(-4px);}
.prod-img-wrap{position:relative;height:160px;background:#0A1E2E;display:flex;align-items:center;justify-content:center;overflow:hidden;}
.prod-img-wrap > div{width:100%;height:100%;display:flex;}
.prod-img-wrap svg{width:100%;height:100%;}
.prod-img-overlay{position:absolute;bottom:0;left:0;right:0;background:rgba(10,18,26,0.75);padding:5px 12px;display:flex;align-items:center;gap:6px;}
.prod-img-tag{font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:1.5px;color:#fff;text-transform:uppercase;font-weight:600;}
.prod-img-overlay i{font-size:13px;color:var(--orange);}
.prod-body{padding:14px 16px 16px;flex:1;display:flex;flex-direction:column;}
.prod-name{font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;color:#fff;letter-spacing:.5px;text-transform:uppercase;margin-bottom:4px;}
.prod-desc{font-size:12px;color:var(--muted);line-height:1.5;flex:1;}
.prod-inq{margin-top:12px;background:transparent;border:1px solid var(--steel);border-radius:4px;padding:7px 14px;font-family:'Barlow Condensed',sans-serif;font-size:12px;letter-spacing:1.5px;color:var(--blue-l);text-transform:uppercase;font-weight:600;cursor:pointer;transition:all .2s;width:100%;}
.prod-inq:hover{background:var(--orange);border-color:var(--orange);color:#fff;}

.why-wrap{background:#0A1E30;border-top:1px solid var(--steel);border-bottom:1px solid var(--steel);padding:72px 5%;}
.why-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:16px;max-width:1200px;margin:0 auto;}
.why-card{background:var(--navy2);border:1px solid var(--steel);border-radius:10px;padding:24px 20px;}
.why-card i{font-size:28px;color:var(--orange);margin-bottom:12px;display:block;}
.why-title{font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:#fff;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;}
.why-text{font-size:13px;color:var(--muted);line-height:1.6;}

.process-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;max-width:1200px;margin:0 auto;}
.process-card{background:var(--navy2);border:1px solid var(--steel);border-radius:10px;padding:24px;position:relative;overflow:hidden;}
.process-step{font-family:'Bebas Neue',sans-serif;font-size:54px;color:rgba(232,115,10,.25);line-height:1;letter-spacing:2px;}
.process-title{font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:#fff;text-transform:uppercase;letter-spacing:.5px;margin-top:6px;margin-bottom:6px;}
.process-desc{font-size:13px;color:var(--muted);line-height:1.6;}

.testi-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;}
.testi-card{background:var(--navy2);border:1px solid var(--steel);border-radius:10px;padding:24px;position:relative;}
.testi-quote{color:var(--orange);font-size:28px;display:block;margin-bottom:8px;}
.testi-text{color:var(--grey);font-size:14px;line-height:1.7;margin-bottom:16px;}
.testi-author{border-top:1px solid var(--steel);padding-top:12px;}
.testi-name{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:14px;color:#fff;text-transform:uppercase;letter-spacing:1px;}
.testi-co{font-size:12px;color:var(--muted);}

.inquiry-wrap{background:#0A1E30;border:1px solid var(--steel);border-radius:12px;overflow:hidden;}
.inq-top{background:#0A3050;border-bottom:1px solid var(--steel);padding:24px 32px;}
.inq-top-title{font-family:'Bebas Neue',sans-serif;font-size:32px;color:#fff;letter-spacing:1px;}
.inq-top-sub{font-size:13px;color:var(--muted);margin-top:2px;}
.inq-body{padding:28px 32px;display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.form-group{display:flex;flex-direction:column;gap:6px;}
.form-group.full{grid-column:1/-1;}
.form-group label{font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:2px;color:var(--muted);text-transform:uppercase;font-weight:600;}
.form-group input,.form-group select,.form-group textarea{background:var(--navy2);border:1px solid var(--steel);border-radius:6px;padding:10px 14px;font-family:'Inter',sans-serif;font-size:14px;color:#fff;outline:none;transition:border-color .2s;width:100%;}
.form-group input:focus,.form-group select:focus,.form-group textarea:focus{border-color:var(--orange);}
.form-group select option{background:#12263A;}
.form-group textarea{resize:vertical;min-height:100px;}
.form-submit{grid-column:1/-1;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;padding-top:8px;}
.submit-btn{background:var(--orange);color:#fff;border:none;border-radius:4px;padding:12px 32px;font-family:'Barlow Condensed',sans-serif;font-size:14px;letter-spacing:2px;text-transform:uppercase;font-weight:700;cursor:pointer;}
.submit-btn:disabled{opacity:.6;cursor:wait;}
.form-note{font-size:12px;color:var(--muted);}
.form-success{background:#0F3A1A;border:1px solid #1D6A30;border-radius:8px;padding:16px 20px;color:#5DC278;font-family:'Barlow Condensed',sans-serif;font-size:15px;letter-spacing:1px;text-transform:uppercase;font-weight:600;margin-top:4px;display:flex;align-items:center;gap:10px;grid-column:1/-1;}

.faq-list{max-width:900px;margin:0 auto;display:flex;flex-direction:column;gap:10px;}
.faq-item{background:var(--navy2);border:1px solid var(--steel);border-radius:10px;overflow:hidden;}
.faq-item.open{border-color:var(--orange);}
.faq-q{width:100%;background:none;border:none;color:#fff;padding:18px 22px;text-align:left;font-family:'Barlow Condensed',sans-serif;font-size:16px;letter-spacing:1px;text-transform:uppercase;font-weight:600;display:flex;align-items:center;justify-content:space-between;cursor:pointer;}
.faq-q i{color:var(--orange);font-size:20px;}
.faq-a{padding:0 22px 18px;color:var(--grey);font-size:14px;line-height:1.7;}

.contact-wrap{background:#0A1E30;border-top:1px solid var(--steel);padding:72px 5%;}
.contact-inner{max-width:1200px;margin:0 auto;}
.contact-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
.contact-card{background:var(--navy2);border:1px solid var(--steel);border-radius:10px;padding:24px 20px;display:flex;align-items:flex-start;gap:14px;}
.contact-card i{font-size:28px;color:var(--orange);flex-shrink:0;margin-top:2px;}
.contact-lbl{font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:2px;color:var(--muted);text-transform:uppercase;margin-bottom:4px;}
.contact-val{font-size:14px;color:#fff;font-weight:500;}
.contact-val a{color:var(--blue-l);text-decoration:none;}
.contact-val a:hover{color:var(--orange);}
.gst-strip{background:#0A3050;border:1px solid rgba(232,115,10,.4);border-radius:10px;padding:16px 24px;display:flex;align-items:center;gap:16px;margin-top:16px;}
.gst-strip i{font-size:28px;color:var(--orange);}
.gst-lbl{font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:2px;color:var(--muted);text-transform:uppercase;}
.gst-num{font-family:'Barlow Condensed',sans-serif;font-size:18px;color:#fff;font-weight:700;letter-spacing:1.5px;}
.gst-note{margin-left:auto;font-family:'Barlow Condensed',sans-serif;font-size:12px;color:var(--orange);letter-spacing:1px;text-transform:uppercase;font-weight:600;text-align:right;}

footer{background:#070E16;border-top:1px solid var(--steel);padding:24px 5%;}
.footer-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;}
.footer-brand-wrap{display:flex;align-items:center;gap:14px;flex-wrap:wrap;}
.footer-logo{height:42px;width:auto;background:#f3f3ef;padding:4px 10px;border-radius:4px;}
.footer-copy{font-size:12px;color:var(--muted);}
.footer-links{display:flex;gap:20px;flex-wrap:wrap;}
.footer-links a{font-size:12px;color:var(--muted);text-decoration:none;text-transform:uppercase;letter-spacing:1.5px;font-family:'Barlow Condensed',sans-serif;}
.footer-links a:hover{color:var(--orange);}

.wa-btn{position:fixed;bottom:28px;right:28px;background:#25D366;color:#fff;width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:28px;text-decoration:none;z-index:200;box-shadow:0 6px 20px rgba(37,211,102,.4);}

.mobile-nav{display:flex;background:#0a1520;border-top:1px solid var(--steel);padding:16px 5%;flex-direction:column;gap:12px;}
.mobile-nav a{font-family:'Barlow Condensed',sans-serif;font-size:15px;letter-spacing:2px;text-transform:uppercase;color:var(--blue-l);text-decoration:none;font-weight:600;padding:8px 0;border-bottom:1px solid var(--steel);}
.mobile-nav a:last-child{border-bottom:none;color:var(--orange);}

@media(max-width:900px){
  .about-grid{grid-template-columns:1fr;gap:32px;}
}
@media(max-width:768px){
  .nav-links,.nav-cta{display:none;}
  .nav-menu-btn{display:block;}
  .hero{grid-template-columns:1fr;gap:36px;padding:48px 5% 40px;}
  .hero-title{font-size:50px;}
  .contact-grid{grid-template-columns:1fr;}
  .inq-body{grid-template-columns:1fr;}
  .form-group.full,.form-submit,.form-success{grid-column:1;}
  .trust-sep{display:none;}
  .gst-strip{flex-wrap:wrap;}
  .gst-note{margin-left:0;}
}
