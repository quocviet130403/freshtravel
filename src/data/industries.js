export const industries = [
  {
    id: 1,
    title: "Automotive Industry",
    slug: "automotive-industry",
    image: "/images/industries/automotive.png",
    excerpt: "Precision-engineered plastic and metal components for automotive manufacturers worldwide — from interior trim to under-hood functional parts.",
    icon: "🚗",
    highlights: ["Interior & Exterior Trim", "Engine Components", "Electrical Housings", "Dashboard Parts"],
    content: `
      <h2>Automotive Manufacturing Solutions</h2>
      <p>We provide end-to-end manufacturing solutions for the automotive industry, delivering precision-engineered plastic and metal components that meet the stringent quality standards demanded by global OEMs and Tier 1 suppliers.</p>

      <h3>Our Automotive Capabilities</h3>
      <ul>
        <li>Interior and exterior trim components</li>
        <li>Under-hood functional parts</li>
        <li>Electrical connector housings</li>
        <li>Dashboard and instrument panel components</li>
        <li>Lighting system parts</li>
        <li>Structural brackets and supports</li>
      </ul>

      <h3>Quality Standards</h3>
      <p>Our automotive manufacturing processes are IATF 16949 certified, ensuring consistent quality throughout the supply chain. We implement PPAP, FMEA, and SPC methodologies to meet automotive industry requirements.</p>
    `,
  },
  {
    id: 2,
    title: "Electronics & Technology",
    slug: "electronics-technology",
    image: "/images/industries/electronics.png",
    excerpt: "High-precision enclosures, connectors, and structural components for consumer electronics, telecommunications, and IoT device manufacturers.",
    icon: "💻",
    highlights: ["Device Enclosures", "Connector Housings", "Heat Sinks", "PCB Components"],
    content: `
      <h2>Electronics & Technology Solutions</h2>
      <p>We specialize in manufacturing high-precision components for the electronics industry, from miniature connector housings to large device enclosures, meeting the tight tolerances and surface finish requirements of modern electronics.</p>

      <h3>Applications</h3>
      <ul>
        <li>Smartphone and tablet enclosures</li>
        <li>Connector and socket housings</li>
        <li>Heat sink and thermal management parts</li>
        <li>LED lighting components</li>
        <li>IoT device casings</li>
        <li>Server and networking equipment chassis</li>
      </ul>

      <h3>Materials Expertise</h3>
      <p>We work with engineering-grade polymers including PC, ABS, PA, PBT, and LCP, as well as aluminum and zinc die-cast alloys optimized for EMI shielding and thermal performance.</p>
    `,
  },
  {
    id: 3,
    title: "Medical & Healthcare",
    slug: "medical-healthcare",
    image: "/images/industries/medical.png",
    excerpt: "FDA-compliant medical device components manufactured in controlled environments with full traceability and biocompatibility documentation.",
    icon: "🏥",
    highlights: ["Device Housings", "Surgical Instruments", "Diagnostic Equipment", "Lab Consumables"],
    content: `
      <h2>Medical & Healthcare Solutions</h2>
      <p>Our medical manufacturing capabilities combine clean room production environments with rigorous quality controls to produce components that meet FDA and ISO 13485 requirements for medical devices and healthcare products.</p>

      <h3>Medical Capabilities</h3>
      <ul>
        <li>Class 7 clean room injection molding</li>
        <li>Surgical instrument components</li>
        <li>Diagnostic device housings</li>
        <li>Laboratory consumables</li>
        <li>Drug delivery system parts</li>
        <li>Implantable device components</li>
      </ul>

      <h3>Compliance</h3>
      <p>Full material traceability, biocompatibility testing, and documentation packages are provided for all medical components. Our processes comply with ISO 13485, FDA 21 CFR, and EU MDR regulations.</p>
    `,
  },
  {
    id: 4,
    title: "Consumer Products",
    slug: "consumer-products",
    image: "/images/industries/consumer.png",
    excerpt: "From household appliances to sporting goods, we deliver attractive, durable components with excellent surface finishes and color matching.",
    icon: "🏠",
    highlights: ["Home Appliances", "Sporting Goods", "Toys & Games", "Personal Care"],
    content: `
      <h2>Consumer Products Manufacturing</h2>
      <p>We help consumer brands bring their products to market with high-quality, aesthetically superior components. Our capabilities include multi-color molding, in-mold decoration, and premium surface finishes.</p>

      <h3>Product Categories</h3>
      <ul>
        <li>Home and kitchen appliances</li>
        <li>Sporting and fitness equipment</li>
        <li>Toys and recreational products</li>
        <li>Personal care device housings</li>
        <li>Power tool enclosures</li>
        <li>Storage and organization systems</li>
      </ul>

      <h3>Design Support</h3>
      <p>Our design engineering team works with clients from concept to production, providing DFM analysis, rapid prototyping with 3D printing, and iterative design optimization.</p>
    `,
  },
  {
    id: 5,
    title: "Aerospace & Defense",
    slug: "aerospace-defense",
    image: "/images/industries/aerospace.png",
    excerpt: "Flight-critical and mission-critical components manufactured to AS9100 standards with advanced materials and precision tolerances.",
    icon: "✈️",
    highlights: ["Structural Parts", "Avionics Housings", "Interior Components", "Defense Systems"],
    content: `
      <h2>Aerospace & Defense Solutions</h2>
      <p>We manufacture high-performance components for the aerospace and defense sectors, meeting the demanding specifications for strength, weight, and reliability required for flight-critical and mission-critical applications.</p>

      <h3>Capabilities</h3>
      <ul>
        <li>Precision-machined structural components</li>
        <li>Avionics and sensor enclosures</li>
        <li>Aircraft interior parts</li>
        <li>Military equipment housings</li>
        <li>Satellite and space vehicle components</li>
      </ul>

      <h3>Certifications</h3>
      <p>Our aerospace division operates under AS9100 quality management systems with NADCAP-accredited special processes including heat treatment and surface finishing.</p>
    `,
  },
  {
    id: 6,
    title: "Packaging & Containers",
    slug: "packaging-containers",
    image: "/images/industries/packaging.png",
    excerpt: "Custom packaging solutions including bottles, closures, containers, and specialized packaging components for food, beverage, and cosmetics industries.",
    icon: "📦",
    highlights: ["Bottles & Closures", "Food Containers", "Cosmetic Packaging", "Industrial Packaging"],
    content: `
      <h2>Packaging & Container Solutions</h2>
      <p>We design and manufacture custom packaging components for food & beverage, cosmetics, pharmaceuticals, and industrial applications. Our capabilities range from thin-wall containers to complex multi-component closures.</p>

      <h3>Product Range</h3>
      <ul>
        <li>PET preforms and bottles</li>
        <li>Caps, closures, and dispensers</li>
        <li>Thin-wall food containers</li>
        <li>Cosmetic jars and compacts</li>
        <li>Pharmaceutical packaging</li>
        <li>Industrial containers and pallets</li>
      </ul>

      <h3>Sustainability</h3>
      <p>We support sustainable packaging initiatives with recyclable material options, lightweighting programs, and the use of post-consumer recycled (PCR) materials.</p>
    `,
  },
];

export function getIndustryBySlug(slug) {
  return industries.find((i) => i.slug === slug) || null;
}
