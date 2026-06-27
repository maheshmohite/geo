You are an expert frontend developer and UI/UX designer specializing in B2B engineering services websites.

## Project Overview
Redesign the homepage of **GeoNectar** (geo-nectar.com) — a CAD drafting & design outsourcing company serving surveyors, engineers, and architects across USA, UK, Australia & India.

## Reference Website
Closely study and mirror the design language of **Indovance (www.indovance.com)**:
- Dark navy blue + white color palette with orange/amber accent for CTAs
- Clean, professional, corporate aesthetic with generous whitespace
- Sticky top utility bar (phone + email) above the main navbar
- Mega-menu navigation for Services with grouped sub-categories
- Bold hero section with headline, subtext, dual CTAs, and a stats bar (projects, years, clients)
- Section-based layout: Services grid → Why Choose Us → Industries → Testimonials → CTA Banner → Footer
- Trust signals: ISO certification badges, client logos strip, stat counters

## Brand Details
- Company Name: GeoNectar Technologies
- Tagline: "Expert CAD Drafting & Design Outsourcing for Surveyors, Engineers, and Architects Worldwide"
- Email: services@geo-nectar.com
- Phone: +1 432 293 7220
- Address: Ganga Trueno Business Park, 2nd Floor, New Airport Road, Viman Nagar, Pune 411014
- Markets served: USA, UK, Australia, India

## Navigation Structure (from sitemap)
**Top utility bar:** Phone | Email | Book a Call CTA
**Main navbar:** Logo | Services (mega-menu) | Industries | Portfolio | Case Studies | Blog | About Us | Contact Us

**Services Mega-Menu (6 categories, each with sub-items):**
1. Land Survey Drafting → ALTA/NSPS, Topographical, Boundary, Mortgage, Aerial, Wetland Delineation, Photogrammetry, GIS Mapping
2. BIM Services → Architectural BIM, Structural BIM, MEP BIM, Point Cloud to BIM, BIM Modelling, CAD to BIM, BIM Coordination, Clash Detection
3. Civil Engineering & Drafting → Architectural Services, 3D Rendering, Land Development, Road Network, Stormwater Drainage, Utility Layout
4. Building Services → Facility Management, MEP, HVAC, Electrical, Plumbing, Fire Protection, Structural Design & Detailing
5. Structural Design → Steel Detailing, Fabrication Drawings, Prefab Design, Precast Design, Structural Analysis, Rebar Detailing, Shop Drawings
6. Mechanical Design → Mechanical 3D Modelling, Sheet Metal, Process Flow Diagram, P&ID Drafting, Product Design, Plant Engineering

## Page Sections (Homepage)

### 1. Top Utility Bar
Thin dark navy bar: left = phone + email links | right = "Book a Free Consultation" button (orange)

### 2. Sticky Navbar
White background, GeoNectar logo left, mega-menu nav center, "Get a Quote" CTA button right (navy fill)

### 3. Hero Section
- Full-width, dark navy background with subtle geometric/blueprint grid overlay
- H1: "Expert CAD Drafting & Design Outsourcing"
- Subheading: "Trusted by Surveyors, Engineers & Architects across USA, UK, Australia & India"
- Two CTAs: "Get a Free Quote" (orange) + "View Our Services" (outlined white)
- Stats bar below hero: 150+ Projects | 6 Service Verticals | USA · UK · AU · IN | ISO Certified

### 4. Services Grid
- Section title: "Our Core Services"
- 6 cards in a 3×2 grid, each with: icon, service name, 1-line description, "Explore →" link
- Cards: Land Survey Drafting | BIM Services | Civil Engineering | Building Services | Structural Design | Mechanical Design
- Hover: card lifts with orange left-border accent

### 5. Why Choose GeoNectar
- 3-column layout: Boost Efficiency | Unmatched Accuracy | Cost-Effective Solutions
- Each with icon, heading, 2-line description
- Background: light grey (#F5F7FA)

### 6. Industries We Serve
- Horizontal scroll or 4-column grid of industry tags/pills:
  Architecture & Construction | Land Surveying | Civil Engineering | Real Estate | Infrastructure | Structural Engineering | MEP Consultants | Manufacturing & Mechanical

### 7. How It Works
- 4-step horizontal flow: Share Requirements → Review & Quote → Drafting & Review → Deliver & Revise
- Step number circles in orange, connected by dashed line

### 8. Testimonials
- 2-column card layout
- Robert Sullivan (Sullivan Surveying, USA) testimonial
- Principal Engineer (Melbourne, Australia) testimonial
- Stars + name + company + country

### 9. CTA Banner
- Full-width dark navy background
- Headline: "Ready to Streamline Your Drafting Workflow?"
- Subtext: "Partner with GeoNectar for accurate, cost-effective, and on-time CAD drafting — trusted worldwide."
- Button: "Let's Talk" (orange)

### 10. Footer
- 4 columns: Logo + tagline + socials | Quick Links | Services (top 6) | Contact Info
- Bottom bar: © 2025 GeoNectar Technologies | Privacy Policy | Terms & Conditions | Disclaimer

## Visual Design Tokens
- Primary color: #0A1F44 (dark navy)
- Accent color: #F05A28 (orange — CTAs, highlights)
- Background: #FFFFFF / #F5F7FA (alternating sections)
- Text: #1A1A2E (headings), #555670 (body)
- Font: Inter or DM Sans from Google Fonts
- Border radius: 8px cards, 4px buttons
- Shadows: subtle box-shadow on cards (0 4px 16px rgba(0,0,0,0.08))

## Technical Requirements
- Single index.html file — all CSS in <style>, JS in <script>
- Fully responsive (mobile-first, hamburger menu on mobile)
- Smooth scroll, scroll-triggered fade-in animations
- Sticky navbar with background transition on scroll
- Mega-menu with hover-reveal sub-categories on desktop
- No external frameworks — only Google Fonts CDN
- Semantic HTML5 (header, nav, main, section, footer)
- Placeholder images via https://placehold.co (e.g. 800x500/0A1F44/FFFFFF)

## Output
Deliver a single, complete, production-ready index.html. It must visually match the corporate authority of Indovance while reflecting the GeoNectar brand identity and the full sitemap navigation structure.
