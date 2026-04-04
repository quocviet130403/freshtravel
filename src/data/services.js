export const services = [
  {
    id: 1,
    title: "CNC Machining Center",
    slug: "cnc-machining-center",
    image: "/images/services/cnc-center.jpg",
    excerpt: "Our state-of-the-art CNC machining center features over 50 advanced machines including 5-axis machining centers, multi-axis CNC lathes, and wire EDM equipment.",
    date: "2024-12-01",
    content: `
      <h2>CNC Machining Center</h2>
      <p>Our CNC machining center is the backbone of our precision manufacturing capabilities. Equipped with the latest technology from leading machine tool manufacturers, we deliver components with unmatched accuracy and consistency.</p>
      
      <h3>Equipment Highlights</h3>
      <ul>
        <li>DMG MORI CMX 70U - 5-axis universal machining center</li>
        <li>Mazak Integrex i-300 - Multi-tasking machine</li>
        <li>Haas VF-5 - Vertical machining center</li>
        <li>Okuma LU3000 EX - CNC lathe</li>
        <li>Sodick ALC600G - Wire EDM</li>
      </ul>

      <h3>Capabilities</h3>
      <p>With our diverse fleet of machines, we handle everything from simple turning and milling operations to complex 5-axis simultaneous machining. Our experienced programmers use advanced CAM software including Mastercam and PowerMill to optimize toolpaths for maximum efficiency and quality.</p>
    `,
  },
  {
    id: 2,
    title: "Injection Molding Machines",
    slug: "injection-molding-machines",
    image: "/images/services/injection-molding.jpg",
    excerpt: "A fleet of modern injection molding machines ranging from 50T to 1,800T clamping force, capable of producing parts from micro-components to large housings.",
    date: "2024-11-15",
    content: `
      <h2>Injection Molding Production Equipment</h2>
      <p>Our injection molding facility houses a comprehensive range of machines to handle virtually any plastic molding requirement.</p>
      
      <h3>Machine Specifications</h3>
      <ul>
        <li>Arburg Allrounder - 50T to 400T</li>
        <li>Engel Victory - 200T to 800T</li>
        <li>Haitian Mars Series - 500T to 1,800T</li>
        <li>Sumitomo SE-EV - Electric machines for precision</li>
      </ul>

      <h3>Auxiliary Equipment</h3>
      <p>Supporting our molding machines, we have centralized material handling systems, temperature control units, robotic pick-and-place systems, and automated conveyor systems for efficient production flow.</p>
    `,
  },
  {
    id: 3,
    title: "Quality Testing Laboratory",
    slug: "quality-testing-laboratory",
    image: "/images/services/testing-lab.jpg",
    excerpt: "Comprehensive quality testing laboratory equipped with CMM, optical measurement, material testing, and environmental testing equipment.",
    date: "2024-10-20",
    content: `
      <h2>Quality Testing Laboratory</h2>
      <p>Our in-house testing laboratory provides comprehensive inspection and testing services to ensure every product meets the highest quality standards.</p>
      
      <h3>Measurement Equipment</h3>
      <ul>
        <li>Zeiss Contura G2 CMM</li>
        <li>Keyence VR-5000 3D measurement system</li>
        <li>Mitutoyo surface roughness tester</li>
        <li>Spectrophotometer for color analysis</li>
        <li>Digital microscopes</li>
      </ul>

      <h3>Testing Capabilities</h3>
      <ul>
        <li>Dimensional inspection</li>
        <li>Material composition analysis</li>
        <li>Tensile and compression testing</li>
        <li>Hardness testing (Rockwell, Vickers)</li>
        <li>Salt spray corrosion testing</li>
      </ul>
    `,
  },
  {
    id: 4,
    title: "Die Casting Equipment",
    slug: "die-casting-equipment",
    image: "/images/services/die-casting.jpg",
    excerpt: "High-pressure die casting machines from 250T to 2,500T for aluminum and zinc alloy components with automated peripheral equipment.",
    date: "2024-09-10",
    content: `
      <h2>Die Casting Production Equipment</h2>
      <p>Our die casting facility is equipped with modern high-pressure die casting machines and supporting equipment for efficient, high-quality production.</p>
      
      <h3>Die Casting Machines</h3>
      <ul>
        <li>Bühler Carat - 840T to 2,500T</li>
        <li>Toshiba DC Series - 350T to 1,250T</li>
        <li>Frech DAM Series - 250T to 660T</li>
      </ul>
    `,
  },
  {
    id: 5,
    title: "Laser Cutting Systems",
    slug: "laser-cutting-systems",
    image: "/images/services/laser-cutting.jpg",
    excerpt: "Advanced fiber laser cutting systems for precision sheet metal processing with automated loading/unloading and high-speed cutting capabilities.",
    date: "2024-08-05",
    content: `
      <h2>Laser Cutting Systems</h2>
      <p>Our laser cutting department features the latest fiber laser technology for fast, precise cutting of various sheet metal materials.</p>
      
      <h3>Equipment</h3>
      <ul>
        <li>Trumpf TruLaser 5030 - 6kW fiber laser</li>
        <li>Amada ENSIS-3015RI - 9kW fiber laser</li>
        <li>Bystronic ByStar 4020 - 12kW fiber laser</li>
      </ul>
    `,
  },
  {
    id: 6,
    title: "Assembly & Packaging Line",
    slug: "assembly-packaging-line",
    image: "/images/services/assembly-line.jpg",
    excerpt: "Semi-automated and fully automated assembly lines with robotic systems, vision inspection, and packaging solutions for finished products.",
    date: "2024-07-15",
    content: `
      <h2>Assembly & Packaging Capabilities</h2>
      <p>We offer complete assembly and packaging solutions to deliver finished products ready for end use or distribution.</p>
      
      <h3>Assembly Capabilities</h3>
      <ul>
        <li>Robotic assembly cells</li>
        <li>Ultrasonic welding</li>
        <li>Heat staking</li>
        <li>Pad printing and labeling</li>
        <li>Custom packaging design</li>
      </ul>
    `,
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) || null;
}
