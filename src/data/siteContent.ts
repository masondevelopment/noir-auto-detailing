export const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export const services = [
  { number: '01', name: 'Exterior Detailing', description: 'A precise reset for paint, glass, wheels and every hard-to-reach surface.', price: 'From $99', image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=82' },
  { number: '02', name: 'Interior Detailing', description: 'A deep, considered clean for the cabin you spend your best miles in.', price: 'From $129', image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=82' },
  { number: '03', name: 'Paint Correction', description: 'Refined by hand and machine to bring clarity back to tired, swirled paint.', price: 'From $349', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=82' },
  { number: '04', name: 'Ceramic Coating', description: 'Long-lasting protection, a richer gloss and a finish that turns heads.', price: 'From $599', image: 'https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1200&q=82' },
  { number: '05', name: 'Premium Maintenance', description: 'Keep the finish dialed in with a regular program built around your car.', price: 'From $89', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=82' },
]

export const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1600&q=85', alt: 'Black sports car parked in a shadowy studio', size: 'large' },
  { src: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1100&q=85', alt: 'Silver performance car on a city street', size: 'tall' },
  { src: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85', alt: 'Detailed black coupe close-up', size: 'standard' },
  { src: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=85', alt: 'Luxury car grille and front detail', size: 'standard' },
  { src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85', alt: 'Sports car driving through the mountains', size: 'wide' },
]

export const testimonials = [
  { quote: 'The finish was so deep I thought they had wrapped the car. Every little detail was handled, including the parts I did not know to ask about.', name: 'Marcus R.', role: 'Porsche 911 owner', initials: 'MR' },
  { quote: 'NOIR is the first detailer I have trusted with my daily. It came back feeling new, but more importantly, it stayed that way weeks later.', name: 'Jasmine T.', role: 'Range Rover owner', initials: 'JT' },
  { quote: 'Quiet, professional and obsessively clean work. The team explained exactly what my paint needed and never tried to upsell me.', name: 'Daniel K.', role: 'BMW M4 owner', initials: 'DK' },
]

export const packages = [
  { name: 'Essential', price: '$149', descriptor: 'The reset', description: 'A thorough exterior and interior refresh for cars that need a proper baseline.', features: ['Hand wash + dry', 'Wheels and tires', 'Interior vacuum', 'Glass cleaned'], action: 'Start with Essential' },
  { name: 'Signature', price: '$299', descriptor: 'The favorite', description: 'Our most requested service: a meticulous detail with the finish to match.', features: ['Everything in Essential', 'Light paint enhancement', 'Leather conditioning', 'Engine bay detail'], action: 'Choose Signature', highlighted: true },
  { name: 'Ultimate', price: '$599+', descriptor: 'The transformation', description: 'For paint that deserves more time, more correction and more protection.', features: ['Full paint correction', 'Ceramic coating prep', 'Interior deep clean', '12-month protection'], action: 'Build your Ultimate' },
]
