export const workshops = [
  {
    id: 1,
    title: "Injection Molding Solutions",
    slug: "injection-molding-solutions",
    image: "/images/workshop/injection-molding.jpg",
    excerpt: "Comprehensive injection molding solutions from design to mass production, offering expertise in mold design, material selection, and process optimization.",
    date: "2024-12-15",
    content: `
      <h2>Comprehensive Injection Molding Solutions</h2>
      <p>Our injection molding solutions cover the complete product development cycle from initial concept through to mass production. With over 15 years of experience, we offer unmatched expertise in precision molding for automotive, electronics, medical, and consumer goods industries.</p>
      
      <h3>Our Process</h3>
      <p>We begin with detailed DFM (Design for Manufacturability) analysis to optimize your product design for injection molding. Our engineering team works closely with clients to select the optimal materials, define gate locations, and design cooling systems that ensure consistent part quality.</p>
      
      <h3>Capabilities</h3>
      <ul>
        <li>Clamping force range: 50T to 1,800T</li>
        <li>Part weight: 0.5g to 5kg</li>
        <li>Multi-material and multi-color molding</li>
        <li>Insert molding and overmolding</li>
        <li>Clean room molding for medical applications</li>
      </ul>

      <h3>Quality Assurance</h3>
      <p>Every production run is monitored using real-time SPC (Statistical Process Control) systems. Our QC lab is equipped with CMM machines, optical comparators, and material testing equipment to verify dimensional accuracy and material properties.</p>
    `,
  },
  {
    id: 2,
    title: "CNC Precision Machining",
    slug: "cnc-precision-machining",
    image: "/images/workshop/cnc-machining.jpg",
    excerpt: "State-of-the-art CNC machining capabilities including 3-axis, 4-axis, and 5-axis milling, turning, and wire EDM for complex geometries.",
    date: "2024-11-20",
    content: `
      <h2>CNC Precision Machining Services</h2>
      <p>Our CNC machining center houses over 50 advanced machines including 5-axis machining centers, multi-axis turning centers, and wire EDM machines. We deliver precision components with tolerances as tight as ±0.005mm for industries demanding the highest accuracy.</p>
      
      <h3>Equipment Fleet</h3>
      <ul>
        <li>DMG MORI 5-axis machining centers</li>
        <li>Mazak multi-tasking machines</li>
        <li>Sodick wire EDM machines</li>
        <li>Makino high-speed mills</li>
        <li>Okuma CNC lathes</li>
      </ul>

      <h3>Materials We Machine</h3>
      <p>We work with a wide range of materials including aluminum alloys, stainless steels, tool steels, titanium, Inconel, copper alloys, engineering plastics, and exotic materials. Our experienced team ensures optimal cutting parameters for each material.</p>
    `,
  },
  {
    id: 3,
    title: "Die Casting Technology",
    slug: "die-casting-technology",
    image: "/images/workshop/die-casting.jpg",
    excerpt: "Advanced high-pressure die casting solutions for aluminum and zinc alloy components, covering automotive, aerospace, and electronics sectors.",
    date: "2024-10-08",
    content: `
      <h2>Die Casting Technology Solutions</h2>
      <p>We provide complete die casting solutions from mold design and manufacturing through to finished cast components. Our die casting facility is equipped with machines ranging from 250T to 2,500T clamping force.</p>
      
      <h3>Process Capabilities</h3>
      <ul>
        <li>High-pressure die casting (HPDC)</li>
        <li>Vacuum-assisted die casting</li>
        <li>Squeeze casting</li>
        <li>Semi-solid metal casting</li>
      </ul>

      <h3>Post-Processing</h3>
      <p>We offer comprehensive post-processing services including CNC machining, surface treatment (anodizing, powder coating, plating), heat treatment, and assembly to deliver finished components ready for integration.</p>
    `,
  },
  {
    id: 4,
    title: "Sheet Metal Fabrication",
    slug: "sheet-metal-fabrication",
    image: "/images/workshop/sheet-metal.jpg",
    excerpt: "Full-service sheet metal fabrication including laser cutting, CNC bending, welding, and surface finishing for prototypes and production runs.",
    date: "2024-09-15",
    content: `
      <h2>Sheet Metal Fabrication Services</h2>
      <p>Our sheet metal fabrication division combines cutting-edge technology with skilled craftsmanship to produce precision sheet metal components and assemblies.</p>
      
      <h3>Capabilities</h3>
      <ul>
        <li>Fiber laser cutting up to 25mm thickness</li>
        <li>CNC press brake bending</li>
        <li>TIG/MIG/Spot welding</li>
        <li>Hardware insertion</li>
        <li>Powder coating & wet painting</li>
      </ul>
    `,
  },
  {
    id: 5,
    title: "Surface Treatment Solutions",
    slug: "surface-treatment-solutions",
    image: "/images/workshop/surface-treatment.jpg",
    excerpt: "Complete range of surface treatment and finishing services including anodizing, plating, powder coating, and specialized coatings.",
    date: "2024-08-22",
    content: `
      <h2>Surface Treatment Solutions</h2>
      <p>We offer a comprehensive range of surface treatment processes to enhance the appearance, durability, and functionality of your components.</p>
      
      <h3>Available Treatments</h3>
      <ul>
        <li>Anodizing (Type II and Type III hard anodize)</li>
        <li>Electroplating (Chrome, Nickel, Zinc)</li>
        <li>Powder coating</li>
        <li>Painting and e-coating</li>
        <li>Passivation and chemical conversion</li>
        <li>PVD coating</li>
      </ul>
    `,
  },
  {
    id: 6,
    title: "Quality Control & Inspection",
    slug: "quality-control-inspection",
    image: "/images/workshop/quality-control.jpg",
    excerpt: "Advanced quality assurance and inspection services with CMM, optical measurement, and comprehensive material testing capabilities.",
    date: "2024-07-10",
    content: `
      <h2>Quality Control & Inspection Services</h2>
      <p>Quality is at the core of everything we do. Our quality lab is equipped with state-of-the-art measurement and testing equipment to ensure every component meets the highest standards.</p>
      
      <h3>Inspection Equipment</h3>
      <ul>
        <li>Zeiss CMM coordinate measuring machines</li>
        <li>Keyence optical measurement systems</li>
        <li>Spectrophotometers for color verification</li>
        <li>Tensile testing machines</li>
        <li>X-ray fluorescence analyzers</li>
      </ul>
    `,
  },
];

export function getWorkshopBySlug(slug) {
  return workshops.find((w) => w.slug === slug) || null;
}
