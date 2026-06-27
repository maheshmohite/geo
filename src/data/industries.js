export const industries = [
  {
    slug: 'architecture-construction',
    title: 'Architecture & Construction',
    icon: 'Building',
    tagline: 'CAD and BIM drafting for architects and builders',
    description:
      'Supporting architecture firms, design-build contractors, and construction companies with accurate drawing production, BIM coordination, and 3D visualization services.',
    services: ['Architectural BIM', 'CAD to BIM', 'BIM Coordination', '3D Rendering', 'Clash Detection'],
    image: 'https://placehold.co/800x500/0A1F44/4a7fc1?text=Architecture+%26+Construction',
  },
  {
    slug: 'land-surveying',
    title: 'Land Surveying',
    icon: 'Map',
    tagline: 'Precision drafting for survey professionals',
    description:
      'Dedicated survey drafting support for licensed surveyors across ALTA/NSPS, topographical, boundary, and GIS disciplines. Fast turnaround, US/UK/AU standards compliance.',
    services: ['ALTA/NSPS', 'Topographical', 'Boundary Survey', 'GIS Mapping', 'Photogrammetry'],
    image: 'https://placehold.co/800x500/0A1F44/4a7fc1?text=Land+Surveying',
  },
  {
    slug: 'civil-engineering',
    title: 'Civil Engineering',
    icon: 'Layers',
    tagline: 'Civil drafting from concept to construction',
    description:
      'Civil engineering drawing production for consultants and government agencies — from road networks and drainage to land development and utility layouts.',
    services: ['Road Network', 'Stormwater Drainage', 'Land Development', 'Utility Layout', 'Earthworks'],
    image: 'https://placehold.co/800x500/0A1F44/4a7fc1?text=Civil+Engineering',
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    icon: 'Home',
    tagline: 'Survey and as-built drawings for real estate professionals',
    description:
      'Supporting real estate developers, title companies, and property managers with ALTA surveys, location drawings, facility management plans, and 3D property visualizations.',
    services: ['ALTA/NSPS', 'Mortgage Survey', 'Facility Management', '3D Rendering', 'Floor Plans'],
    image: 'https://placehold.co/800x500/0A1F44/4a7fc1?text=Real+Estate',
  },
  {
    slug: 'infrastructure',
    title: 'Infrastructure',
    icon: 'GitBranch',
    tagline: 'Large-scale infrastructure drafting and BIM',
    description:
      'Drafting and BIM services for transport, water, energy, and telecommunications infrastructure projects. Supporting engineers, contractors, and government agencies.',
    services: ['Road Network', 'GIS Mapping', 'BIM Coordination', 'Utility Layout', 'Civil Drafting'],
    image: 'https://placehold.co/800x500/0A1F44/4a7fc1?text=Infrastructure',
  },
  {
    slug: 'structural-engineering',
    title: 'Structural Engineering',
    icon: 'Triangle',
    tagline: 'Structural detailing and analysis support',
    description:
      'Structural drafting, steel detailing, rebar schedules, and structural analysis model creation for structural engineering consultancies and contractors worldwide.',
    services: ['Steel Detailing', 'Rebar Detailing', 'Shop Drawings', 'Structural Analysis', 'Precast Design'],
    image: 'https://placehold.co/800x500/0A1F44/4a7fc1?text=Structural+Engineering',
  },
  {
    slug: 'mep-consultants',
    title: 'MEP Consultants',
    icon: 'Wrench',
    tagline: 'MEP drafting, coordination, and BIM modeling',
    description:
      'Full MEP drafting and BIM coordination support for mechanical, electrical, and plumbing engineering consultancies. Clash-free, construction-ready outputs.',
    services: ['MEP BIM', 'HVAC Drafting', 'Electrical Drafting', 'Plumbing Drafting', 'Clash Detection'],
    image: 'https://placehold.co/800x500/0A1F44/4a7fc1?text=MEP+Consultants',
  },
]

export const getIndustryBySlug = (slug) => industries.find((i) => i.slug === slug)
