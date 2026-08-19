/**
 * HomeMart – Furniture & Decor
 * Vanilla JavaScript E-Commerce Application
 * Exactly 30 products distributed across 4 categories:
 * - Living Room (8)
 * - Bedroom (8)
 * - Dining & Kitchen (7)
 * - Office & Decor (7)
 */

// ==========================================
// 1. PRODUCT CATALOG DATA (EXACTLY 30 ITEMS)
// ==========================================
const INR_RATE = 84;
const FREE_SHIPPING_THRESHOLD = 40000;

function convertToINR(value) {
  return Math.round(Number(value) * INR_RATE);
}

function formatINR(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(Number(value || 0));
}

const BASE_PRODUCTS = [
  // --- LIVING ROOM (8 Items) ---
  {
    id: 'lr-1',
    name: 'Oslo Velvet Sectional Sofa',
    category: 'Living Room',
    price: 1299,
    originalPrice: 1599,
    rating: 4.9,
    reviewsCount: 124,
    material: 'Premium Velvet & Solid Beechwood Frame',
    dimensions: '108"W x 65"D x 34"H',
    inStock: true,
    badge: 'Popular',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg7UPhkiQM0q51R5_sPv6gO2EKYGjSQrH8yJnuFJyooW4iB6uTp9IbFwY&s=10',
    description: 'The Oslo Sectional pairs plush emerald velvet with high-density foam cushioning and tapered beech legs. Designed for spacious relaxation and enduring European craftsmanship.'
  },
  {
    id: 'lr-2',
    name: 'Nordic Oak Minimalist Coffee Table',
    category: 'Living Room',
    price: 349,
    originalPrice: 420,
    rating: 4.8,
    reviewsCount: 88,
    material: 'Solid White Oak & Natural Oil Finish',
    dimensions: '48"W x 24"D x 18"H',
    inStock: true,
    badge: 'New',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSob2K81adqLA7iGZlaGPudgNZ68q99O6pHLmQjipWMaAV3gFn6liB7aCg&s=10',
    description: 'Sculpted with soft radiused edges, this solid white oak table brings organic warmth and subtle Scandinavian elegance into your living space.'
  },
  {
    id: 'lr-3',
    name: 'Chesterfield Cognac Leather Armchair',
    category: 'Living Room',
    price: 789,
    originalPrice: 950,
    rating: 4.9,
    reviewsCount: 65,
    material: 'Top-Grain Vintage Italian Leather & Walnut Legs',
    dimensions: '38"W x 36"D x 32"H',
    inStock: true,
    badge: 'Sale',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-DgobchvR2uEqRQbRyJoEG3zrBAE-5F_QJqcH9q_3eV6yLF3rObQQJZt&s=10',
    description: 'Hand-tufted deep button detailing and supple top-grain leather that patinas beautifully over decades. The ultimate fireside armchair.'
  },
  {
    id: 'lr-4',
    name: 'Soren Media Console & TV Credenza',
    category: 'Living Room',
    price: 620,
    originalPrice: 750,
    rating: 4.7,
    reviewsCount: 42,
    material: 'American Walnut & Hand-Woven Natural Cane',
    dimensions: '68"W x 18"D x 24"H',
    inStock: true,
    badge: '',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqDwK_o_SvMETdb39KcZPsrLaXWkq4upQdLliCYGTqyd-37D5nMH2-a2Ce&s=10',
    description: 'Featuring ventilated natural cane sliding doors, cord management routing, and solid walnut joinery for modern media setups.'
  },
  {
    id: 'lr-5',
    name: 'Bouclé Cloud Accent Swivel Chair',
    category: 'Living Room',
    price: 450,
    originalPrice: 530,
    rating: 4.8,
    reviewsCount: 93,
    material: 'Textured Bouclé Yarn & Brushed Brass Base',
    dimensions: '32"W x 31"D x 30"H',
    inStock: true,
    badge: 'Popular',
    image: 'https://m.media-amazon.com/images/I/71knJIdeo-L.jpg',
    description: '360-degree smooth swivel with curved silhouette and cloud-soft bouclé upholstery. Adds organic charm and comfortable seating.'
  },
  {
    id: 'lr-6',
    name: 'Kyoto Slatted Solid Wood Bookshelf',
    category: 'Living Room',
    price: 580,
    originalPrice: 690,
    rating: 4.6,
    reviewsCount: 31,
    material: 'FSC-Certified Ash Wood',
    dimensions: '36"W x 14"D x 72"H',
    inStock: true,
    badge: '',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUcjkNb9wA_5y9CWIL3M2tbhUvqAU00AV-XMPLZO-G2MF5rR-wD49435I9&s=10',
    description: 'Architectural vertical slats with five generous tiers for books, botanical plants, and decorative ceramic vases.'
  },
  {
    id: 'lr-7',
    name: 'Arden Travertine & Brass Side Table',
    category: 'Living Room',
    price: 260,
    originalPrice: 310,
    rating: 4.7,
    reviewsCount: 29,
    material: 'Natural Italian Travertine & Antiqued Brass',
    dimensions: '20"Dia x 22"H',
    inStock: true,
    badge: '',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqAuEPgRVzfGukWzJdY4ZrmAC0etUTe_hPuFS53E9zjA&s',
    description: 'Honed natural travertine top showcasing unique organic veining resting on an elegant geometric brass pedestal.'
  },
  {
    id: 'lr-8',
    name: 'Bohemian Hand-Tufted Wool Area Rug',
    category: 'Living Room',
    price: 390,
    originalPrice: 480,
    rating: 4.9,
    reviewsCount: 112,
    material: '100% New Zealand Wool & Cotton Warp',
    dimensions: '8\' x 10\' (240cm x 300cm)',
    inStock: true,
    badge: 'Popular',
    image: 'https://m.media-amazon.com/images/I/61s7-5iORcL._AC_UF894,1000_QL80_.jpg',
    description: 'Thick, plush pile woven with warm geometric motifs. Naturally stain-resistant and incredibly soft underfoot.'
  },

  // --- BEDROOM (8 Items) ---
  {
    id: 'br-1',
    name: 'Haven Upholstered Platform Bed',
    category: 'Bedroom',
    price: 980,
    originalPrice: 1200,
    rating: 4.9,
    reviewsCount: 89,
    material: 'Natural Belgian Linen & Solid Oak Slats',
    dimensions: 'King: 82"W x 88"L x 48"H',
    inStock: true,
    badge: 'Popular',
    image: 'https://m.media-amazon.com/images/I/61Ryd7WgAXL._AC_UF894,1000_QL80_.jpg',
    description: 'Generously cushioned headboard upholstered in premium breathable linen. Heavy-duty slatted foundation requires no box spring.'
  },
  {
    id: 'br-2',
    name: 'Astrid 6-Drawer Walnut Dresser',
    category: 'Bedroom',
    price: 850,
    originalPrice: 990,
    rating: 4.8,
    reviewsCount: 54,
    material: 'Solid American Walnut & Soft-Close Glides',
    dimensions: '56"W x 19"D x 34"H',
    inStock: true,
    badge: '',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRixENWjNteFo7PGmkVanyF4m0g7QrZaETGDQz98QwlWCt0UGvkbuKdG3I&s=10',
    description: 'Six spacious dovetail drawers with concealed soft-closing hardware and integrated beveled edge pulls.'
  },
  {
    id: 'br-3',
    name: 'Solstice Fluted Oak Nightstand',
    category: 'Bedroom',
    price: 240,
    originalPrice: 290,
    rating: 4.8,
    reviewsCount: 77,
    material: 'Solid White Oak & Brushed Brass Pull',
    dimensions: '22"W x 17"D x 24"H',
    inStock: true,
    badge: 'New',
    image: 'https://m.media-amazon.com/images/I/7171G6B3gmL._AC_UF894,1000_QL80_.jpg',
    description: 'Features textured fluted drawer facade, a hidden rear cord pass-through for bedside charging, and an open lower cubby.'
  },
  {
    id: 'br-4',
    name: 'Serenade Hybrid Latex & Pocket Mattress',
    category: 'Bedroom',
    price: 799,
    originalPrice: 999,
    rating: 4.9,
    reviewsCount: 140,
    material: 'Natural Latex, Pocket Springs & Organic Cotton',
    dimensions: 'Queen: 60"W x 80"L x 12"H',
    inStock: true,
    badge: 'Sale',
    image: 'https://dweva.com/cdn/shop/files/luna-main-1.webp?v=1783277454&width=1200',
    description: 'Orthopedic targeted spine support with motion-isolating independent pocket coils and temperature-regulating organic cotton cover.'
  },
  {
    id: 'br-5',
    name: 'Celine Arched Full-Length Floor Mirror',
    category: 'Bedroom',
    price: 320,
    originalPrice: 380,
    rating: 4.7,
    reviewsCount: 68,
    material: 'Solid Oak Frame & Shatterproof HD Glass',
    dimensions: '30"W x 72"H',
    inStock: true,
    badge: '',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSToi89RF1H7mB0OSBXh6kI-4MTmSpvYkUYeC0zebiVw0Esr3bcJQI_mgZ2&s=10',
    description: 'Graceful architectural arch crafted with steam-bent solid oak. Can be leaned against the wall or mounted securely.'
  },
  {
    id: 'br-6',
    name: 'Willow Woven Rattan Headboard Bed',
    category: 'Bedroom',
    price: 890,
    originalPrice: 1050,
    rating: 4.8,
    reviewsCount: 45,
    material: 'Sustainably Sourced Teak & Hand-Woven Rattan',
    dimensions: 'Queen: 64"W x 84"L x 50"H',
    inStock: true,
    badge: '',
    image: 'https://www.earthnwe.com/cdn/shop/files/Loomline-Cover.jpg?v=1773066190&width=2048',
    description: 'Artisanal coastal bohemian headboard featuring breathable double-woven French cane weave framed in solid teak.'
  },
  {
    id: 'br-7',
    name: 'Luna Opal Glass Bedside Sconce Lamp',
    category: 'Bedroom',
    price: 145,
    originalPrice: 180,
    rating: 4.6,
    reviewsCount: 39,
    material: 'Frosted Opal Glass & Warm Satin Brass',
    dimensions: '8"W x 10"D x 14"H',
    inStock: true,
    badge: '',
    image: 'https://images.thdstatic.com/productImages/5302fca8-c786-4089-844d-7742292dac96/svn/white-zompoo-wall-sconces-zp-hta005-64_1000.jpg',
    description: 'Emits a soft, calming diffused ambient glow. Plug-in or direct hardwire capability with integrated rotary dimmer switch.'
  },
  {
    id: 'br-8',
    name: 'Meribel Bouclé Storage Bedroom Bench',
    category: 'Bedroom',
    price: 295,
    originalPrice: 360,
    rating: 4.8,
    reviewsCount: 52,
    material: 'Heavyweight Bouclé Fabric & Walnut Accents',
    dimensions: '48"W x 18"D x 19"H',
    inStock: true,
    badge: 'Popular',
    image: 'https://www.peelorange.com/cdn/shop/files/1000x1000_fd57d93c083977d4e9225dce2b5acc4a.webp?v=1727767674&width=1024',
    description: 'Placed at the foot of your bed, this plush bench conceals a deep hydraulic storage compartment for extra blankets and pillows.'
  },

  // --- DINING & KITCHEN (7 Items) ---
  {
    id: 'dk-1',
    name: 'Artisan Solid Walnut Extendable Dining Table',
    category: 'Dining & Kitchen',
    price: 1150,
    originalPrice: 1390,
    rating: 4.9,
    reviewsCount: 73,
    material: 'Solid American Walnut & Steel Extension Track',
    dimensions: '72"-96"W x 38"D x 30"H (Seats 6-10)',
    inStock: true,
    badge: 'Popular',
    image: 'https://www.woodensure.com/assets/images/products/1786366022z9nAeg3C.jpg',
    description: 'Features a self-storing butterfly leaf extension system, smooth rounded corners, and hand-finished satin wax seal.'
  },
  {
    id: 'dk-2',
    name: 'Wishbone Solid Beech Dining Chair (Pair)',
    category: 'Dining & Kitchen',
    price: 380,
    originalPrice: 460,
    rating: 4.8,
    reviewsCount: 115,
    material: 'Solid Beechwood & Handwoven Paper Cord',
    dimensions: '21"W x 21"D x 29"H (Set of 2)',
    inStock: true,
    badge: 'Sale',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpSx56QCg8NSVdP1U_CS5gFzBC0tihw6UGJmFbIAGMlLQ-DWynO2vnar_c&s=10',
    description: 'Iconic mid-century Y-back profile featuring over 400 feet of hand-strung natural paper cord seat for ergonomic comfort.'
  },
  {
    id: 'dk-3',
    name: 'Vienna Rattan & Cane Back Dining Chair',
    category: 'Dining & Kitchen',
    price: 210,
    originalPrice: 260,
    rating: 4.7,
    reviewsCount: 64,
    material: 'Solid Elm Wood & Natural Cane',
    dimensions: '19"W x 20"D x 33"H',
    inStock: true,
    badge: '',
    image: 'https://i5.walmartimages.com/seo/ModFusion-7-Piece-Outdoor-Indoor-Rattan-Patio-Dining-Set-6-Wicker-Dining-Chairs-Washable-Cushion-Rectangle-Dining-Table-Umbrella-Hole-6-Person-Capaci_195b6a0c-0538-457f-949f-016b0df4eb5d.aa4bbe809e15f7ce7ebee6fb2263b51d.jpeg',
    description: 'Combines bentwood craftsmanship with airy octagonal cane weave. Lightweight, sturdy, and timeless.'
  },
  {
    id: 'dk-4',
    name: 'Kanso Minimalist Kitchen Island Cart',
    category: 'Dining & Kitchen',
    price: 520,
    originalPrice: 620,
    rating: 4.8,
    reviewsCount: 41,
    material: 'Rubberwood Frame & Honed Granite Worktop',
    dimensions: '44"W x 24"D x 36"H',
    inStock: true,
    badge: 'New',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9NWf-3ZTfsalVnHfn5qu-ZSFY2Qb-MLg6y-gCycBHXfHr8huiiUPHUDU&s=10',
    description: 'Heavy duty prep station with solid granite top, two utensil drawers, slatted spice racks, and locking rubber casters.'
  },
  {
    id: 'dk-5',
    name: 'Morro Curved Glass Display Cabinet',
    category: 'Dining & Kitchen',
    price: 940,
    originalPrice: 1100,
    rating: 4.9,
    reviewsCount: 38,
    material: 'Matte Black Iron & Fluted Tempered Glass',
    dimensions: '36"W x 16"D x 70"H',
    inStock: true,
    badge: '',
    image: 'https://m.media-amazon.com/images/I/81ynlWgttOL._AC_UF894,1000_QL80_.jpg',
    description: 'Industrial arched frame showcasing textured fluted glass doors that catch natural kitchen light beautifully.'
  },
  {
    id: 'dk-6',
    name: 'Marrakesh Handcrafted Stoneware Dinner Set',
    category: 'Dining & Kitchen',
    price: 160,
    originalPrice: 195,
    rating: 4.8,
    reviewsCount: 89,
    material: 'Durable Ceramic Stoneware (16 Pieces)',
    dimensions: '4x Dinner, 4x Salad, 4x Bowls, 4x Mugs',
    inStock: true,
    badge: 'Popular',
    image: 'https://i.etsystatic.com/13213095/r/il/70d94b/8294706405/il_300x300.8294706405_fgkw.jpg',
    description: 'Matte sand reactive glaze finish with organic rim variation. Microwave and dishwasher safe.'
  },
  {
    id: 'dk-7',
    name: 'Linear Brass 4-Light Dining Chandelier',
    category: 'Dining & Kitchen',
    price: 340,
    originalPrice: 410,
    rating: 4.7,
    reviewsCount: 35,
    material: 'Spun Brass & Frosted Sphere Diffusers',
    dimensions: '42"L x 12"W x 36"Adj H',
    inStock: true,
    badge: '',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREf_wmCBXt4NmiCKaRZChAtnEXkxBJb3kLqFiEclATvjlBtJMFdJZqPw&s=10',
    description: 'Suspended brass beam illuminating the dinner table with warm 2700K ambient illumination and adjustable drop rods.'
  },

  // --- OFFICE & DECOR (7 Items) ---
  {
    id: 'od-1',
    name: 'Bauhaus Solid Teak Writing Desk',
    category: 'Office & Decor',
    price: 680,
    originalPrice: 820,
    rating: 4.9,
    reviewsCount: 58,
    material: 'Reclaimed Teak Wood & Solid Brass Knobs',
    dimensions: '52"W x 26"D x 30"H',
    inStock: true,
    badge: 'Popular',
    image: 'https://cdn20.pamono.com/p/g/2/4/2459527_2uy14mfv0a/czech-bauhaus-writing-desk-in-walnut-attributed-to-a-lurcat-for-kovona-1920s-12.jpg',
    description: 'Clean architectural lines, two smooth storage drawers, and integrated felt-lined wire organization groove.'
  },
  {
    id: 'od-2',
    name: 'Saddle Leather Ergonomic Executive Chair',
    category: 'Office & Decor',
    price: 540,
    originalPrice: 650,
    rating: 4.8,
    reviewsCount: 82,
    material: 'Top-Grain Leather & Matte Black Aluminum Base',
    dimensions: '26"W x 26"D x 38"-42"H',
    inStock: true,
    badge: 'Sale',
    image: 'https://www.lakdi.com/cdn/shop/files/1_427bc677-e448-4ad8-8adc-945e8ace54fd.png?v=1785845482&width=1080',
    description: 'Combines boardroom luxury with all-day ergonomic lumbar contouring, pneumatic height adjustment, and tilt-lock mechanism.'
  },
  {
    id: 'od-3',
    name: 'Horizon Minimalist Brass LED Task Lamp',
    category: 'Office & Decor',
    price: 115,
    originalPrice: 145,
    rating: 4.7,
    reviewsCount: 47,
    material: 'Anodized Aluminum & Antique Brass',
    dimensions: '18"W x 6"D x 16"H',
    inStock: true,
    badge: 'New',
    image: 'https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/home-office-design/minimalist-desk-lamp-with-brass-base-and-wooden-linear-light/modern-brass-wooden-desk-lamp.png',
    description: 'Touch-capacitive 3-stage dimming with flicker-free warm circadian eye protection LED strip.'
  },
  {
    id: 'od-4',
    name: 'Sylvan Modular Wall Shelf Unit',
    category: 'Office & Decor',
    price: 280,
    originalPrice: 340,
    rating: 4.7,
    reviewsCount: 28,
    material: 'Solid Walnut & Matte Powder-Coated Steel',
    dimensions: '32"W x 10"D x 42"H',
    inStock: true,
    badge: '',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzje_JvKQCqxAVGbpym6AIbmeJQ5HnBHeKN-C9HOs0o1LcTu5XGYYR6EY&s=10',
    description: 'Customizable tier spacing for office binders, plants, and architectural objects. Easy wall anchor mounting.'
  },
  {
    id: 'od-5',
    name: 'Terracotta Organic Sculptural Ceramic Vase',
    category: 'Office & Decor',
    price: 75,
    originalPrice: 95,
    rating: 4.9,
    reviewsCount: 130,
    material: 'Hand-Thrown Matte Unglazed Terracotta',
    dimensions: '9"Dia x 14"H',
    inStock: true,
    badge: 'Popular',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1NJSYZbnIF78UjfqzhuV46Cm_Yuxvl3ivs4kjXhYcJy0WvvYTBKScNI4&s=10',
    description: 'Sculpted by hand with double loop handles and an earthy matte textural surface. Ideal for dried botanical pampas grass.'
  },
  {
    id: 'od-6',
    name: 'Eos Handblown Amber Glass Table Lamp',
    category: 'Office & Decor',
    price: 130,
    originalPrice: 160,
    rating: 4.8,
    reviewsCount: 53,
    material: 'Mouth-Blown Amber Glass & Solid Teak Base',
    dimensions: '10"Dia x 15"H',
    inStock: true,
    badge: '',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Y_RheKOWyO6AqkaJtJKvWBOdJfsj_Wn_S_7atV-YTI1vJkPtPpEc-24&s=10',
    description: 'A glowing amber sphere creating soothing warm light reflection on desks and credenzas.'
  },
  {
    id: 'od-7',
    name: 'Horizon Minimalist Abstract Canvas Art',
    category: 'Office & Decor',
    price: 195,
    originalPrice: 240,
    rating: 4.6,
    reviewsCount: 34,
    material: 'Textured Acrylic on Canvas & Oak Floater Frame',
    dimensions: '36" x 48" (90cm x 120cm)',
    inStock: true,
    badge: '',
    image: 'https://www.krutik.in/cdn/shop/files/d198_9330e0f9-43dc-48f0-af14-f2ab88cb1fc8.jpg?v=1752575699&width=3000',
    description: 'Neutral plaster textures and warm taupe tones framed in solid natural white oak floater moulding.'
  }
];

const PRODUCTS = BASE_PRODUCTS.map(product => ({
  ...product,
  price: convertToINR(product.price),
  originalPrice: product.originalPrice ? convertToINR(product.originalPrice) : null
}));

// ==========================================
// 2. STATE MANAGEMENT & LOCAL STORAGE
// ==========================================
let state = {
  activeView: 'home',
  cart: JSON.parse(localStorage.getItem('homemart_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('homemart_wishlist') || '[]'),
  user: JSON.parse(localStorage.getItem('homemart_user') || 'null'),
  orders: JSON.parse(localStorage.getItem('homemart_orders') || '[]'),
  coupon: localStorage.getItem('homemart_coupon') || null,
  filters: {
    search: '',
    category: 'All',
    maxPrice: 150000,
    material: 'All',
    inStockOnly: false,
    sort: 'featured'
  },
  selectedProduct: null,
  activeAccountTab: 'profile',
  currentOrderTrack: null
};

// Initial test orders if none exist
if (state.orders.length === 0) {
  state.orders = [
    {
      id: 'HM-782910',
      date: '2026-08-10',
      items: [
        { id: 'lr-2', name: 'Nordic Oak Minimalist Coffee Table', price: 349, quantity: 1, image: PRODUCTS[1].image },
        { id: 'od-5', name: 'Terracotta Organic Sculptural Ceramic Vase', price: 75, quantity: 2, image: PRODUCTS[27].image }
      ],
      subtotal: 41916,
      discount: 0,
      tax: 3353,
      shipping: 0,
      total: 45269,
      status: 'Delivered',
      shippingAddress: {
        name: 'Sarah Jenkins',
        street: '742 Evergreen Terrace',
        city: 'Portland',
        state: 'OR',
        zip: '97201'
      }
    }
  ];
  localStorage.setItem('homemart_orders', JSON.stringify(state.orders));
}

// ==========================================
// 3. UI RENDERING & VIEW SWITCHING
// ==========================================

function navigateTo(viewName, filterCategory = null) {
  state.activeView = viewName;
  
  // Handle optional category parameter for shop view
  if (filterCategory) {
    state.filters.category = filterCategory;
  }

  // Update navigation active states
  document.querySelectorAll('.nav-item').forEach(item => {
    const link = item.querySelector('a');
    if (link && link.getAttribute('data-view') === viewName) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Toggle view sections
  document.querySelectorAll('.view-section').forEach(sec => {
    sec.classList.remove('active');
  });

  const activeSec = document.getElementById(`view-${viewName}`);
  if (activeSec) {
    activeSec.classList.add('active');
  }

  // Close mobile menu if open
  const navLinks = document.getElementById('nav-links');
  if (navLinks) navLinks.classList.remove('mobile-open');
  const mobileToggleBtn = document.getElementById('mobile-menu-toggle');
  if (mobileToggleBtn) { mobileToggleBtn.textContent = '☰'; mobileToggleBtn.setAttribute('aria-expanded', 'false'); }

  // Trigger view specific rendering
  if (viewName === 'home') {
    renderHomeView();
  } else if (viewName === 'shop') {
    renderShopView();
  } else if (viewName === 'cart-page') {
    renderCartPage();
  } else if (viewName === 'checkout') {
    renderCheckoutView();
  } else if (viewName === 'account') {
    renderAccountView();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toast Notifications
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  let icon = '✦';
  if (type === 'success') icon = '✓';
  if (type === 'heart') icon = '♥';

  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Update Badges across UI
function updateBadges() {
  const cartBadge = document.getElementById('cart-count-badge');
  const wishBadge = document.getElementById('wishlist-count-badge');

  const totalCartCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartBadge) {
    cartBadge.textContent = totalCartCount;
    cartBadge.style.display = totalCartCount > 0 ? 'flex' : 'none';
  }

  if (wishBadge) {
    wishBadge.textContent = state.wishlist.length;
    wishBadge.style.display = state.wishlist.length > 0 ? 'flex' : 'none';
  }
}

// Generate Star Rating HTML
function renderRatingStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  let starsHtml = '';
  for (let i = 0; i < fullStars; i++) {
    starsHtml += '★';
  }
  if (hasHalf) {
    starsHtml += '½';
  }
  return `<span class="stars">${starsHtml}</span>`;
}

// Generate Product Card HTML
function createProductCardHTML(product) {
  const isWishlisted = state.wishlist.includes(product.id);
  const badgeClass = product.badge ? `badge-${product.badge.toLowerCase()}` : '';

  return `
    <div class="product-card" id="card-${product.id}">
      <div class="product-thumb">
        ${product.badge ? `<span class="product-badge ${badgeClass}">${product.badge}</span>` : ''}
        <div class="product-actions">
          <button class="thumb-action-btn ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist('${product.id}')" 
                  title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}">
            ${isWishlisted ? '♥' : '♡'}
          </button>
          <button class="thumb-action-btn" onclick="openProductModal('${product.id}')" title="Quick View">
            👁
          </button>
        </div>
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80'">
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h4 class="product-title" onclick="openProductModal('${product.id}')" style="cursor:pointer;">${product.name}</h4>
        <div class="product-rating">
          ${renderRatingStars(product.rating)}
          <span>(${product.rating}) · ${product.reviewsCount} reviews</span>
        </div>
        <span class="product-material-pill">✦ ${product.material.split('&')[0]}</span>
        <div class="product-bottom-row">
          <div class="product-price">
            <span class="price-current">${formatINR(product.price)}</span>
            ${product.originalPrice ? `<span class="price-original">${formatINR(product.originalPrice)}</span>` : ''}
          </div>
          <button class="btn-add-cart" onclick="addToCart('${product.id}', 1)" title="Add to Cart">
            +
          </button>
        </div>
      </div>
    </div>
  `;
}

// ==========================================
// 4. HOME VIEW LOGIC
// ==========================================
function renderHomeView() {
  const featuredContainer = document.getElementById('home-featured-grid');
  const popularContainer = document.getElementById('home-popular-grid');

  if (featuredContainer) {
    // Pick 4 diverse highlight items
    const featuredList = [PRODUCTS[0], PRODUCTS[8], PRODUCTS[16], PRODUCTS[23]];
    featuredContainer.innerHTML = featuredList.map(createProductCardHTML).join('');
  }

  if (popularContainer) {
    // Pick popular rated items
    const popularList = [PRODUCTS[4], PRODUCTS[9], PRODUCTS[17], PRODUCTS[27]];
    popularContainer.innerHTML = popularList.map(createProductCardHTML).join('');
  }
}

// ==========================================
// 5. SHOP & FILTERING VIEW LOGIC
// ==========================================
function getFilteredProducts() {
  return PRODUCTS.filter(product => {
    // Search query
    if (state.filters.search.trim() !== '') {
      const q = state.filters.search.toLowerCase();
      const matchName = product.name.toLowerCase().includes(q);
      const matchDesc = product.description.toLowerCase().includes(q);
      const matchCat = product.category.toLowerCase().includes(q);
      const matchMat = product.material.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchCat && !matchMat) return false;
    }

    // Category filter
    if (state.filters.category !== 'All' && product.category !== state.filters.category) {
      return false;
    }

    // Price filter
    if (product.price > state.filters.maxPrice) {
      return false;
    }

    // Material filter
    if (state.filters.material !== 'All') {
      if (!product.material.toLowerCase().includes(state.filters.material.toLowerCase())) {
        return false;
      }
    }

    // Stock filter
    if (state.filters.inStockOnly && !product.inStock) {
      return false;
    }

    return true;
  }).sort((a, b) => {
    if (state.filters.sort === 'price-low') return a.price - b.price;
    if (state.filters.sort === 'price-high') return b.price - a.price;
    if (state.filters.sort === 'rating') return b.rating - a.rating;
    if (state.filters.sort === 'newest') return (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0);
    return 0; // default featured
  });
}

function renderShopView() {
  const grid = document.getElementById('shop-products-grid');
  const countEl = document.getElementById('shop-results-count');
  const activeFiltersBar = document.getElementById('active-filters-bar');
  const priceDisplay = document.getElementById('price-slider-value');
  const priceSlider = document.getElementById('filter-price-slider');

  if (priceSlider) priceSlider.value = state.filters.maxPrice;
  if (priceDisplay) priceDisplay.textContent = formatINR(state.filters.maxPrice);

  // Update category radio/buttons
  document.querySelectorAll('input[name="shop-cat"]').forEach(input => {
    input.checked = input.value === state.filters.category;
  });

  const filtered = getFilteredProducts();

  if (countEl) {
    countEl.innerHTML = `Showing <strong>${filtered.length}</strong> of <strong>30</strong> products`;
  }

  // Active filter chips
  if (activeFiltersBar) {
    let chips = [];
    if (state.filters.category !== 'All') {
      chips.push(`<span class="active-filter-chip">Category: ${state.filters.category} <button onclick="setShopCategory('All')">×</button></span>`);
    }
    if (state.filters.search) {
      chips.push(`<span class="active-filter-chip">Search: "${state.filters.search}" <button onclick="clearShopSearch()">×</button></span>`);
    }
    if (state.filters.maxPrice < 150000) {
      chips.push(`<span class="active-filter-chip">Max Price: ${formatINR(state.filters.maxPrice)} <button onclick="resetShopPrice()">×</button></span>`);
    }
    if (state.filters.material !== 'All') {
      chips.push(`<span class="active-filter-chip">Material: ${state.filters.material} <button onclick="setShopMaterial('All')">×</button></span>`);
    }

    activeFiltersBar.innerHTML = chips.length > 0 ? chips.join('') : '';
  }

  if (grid) {
    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-state-icon">🪑</div>
          <h3>No Furniture Matches Found</h3>
          <p>Try resetting your price range, clearing filters, or using different search keywords.</p>
          <button class="btn btn-primary" onclick="resetAllShopFilters()">Reset All Filters</button>
        </div>
      `;
    } else {
      grid.innerHTML = filtered.map(createProductCardHTML).join('');
    }
  }
}

function setShopCategory(cat) {
  state.filters.category = cat;
  renderShopView();
}

function setShopMaterial(mat) {
  state.filters.material = mat;
  renderShopView();
}

function handlePriceSliderChange(val) {
  state.filters.maxPrice = Number(val);
  const valEl = document.getElementById('price-slider-value');
  if (valEl) valEl.textContent = formatINR(val);
  renderShopView();
}

function handleSortChange(sortVal) {
  state.filters.sort = sortVal;
  renderShopView();
}

function handleSearchInput(val) {
  state.filters.search = val;
  if (state.activeView !== 'shop') {
    navigateTo('shop');
  } else {
    renderShopView();
  }
}

function clearShopSearch() {
  state.filters.search = '';
  const searchInput = document.getElementById('header-search-input');
  if (searchInput) searchInput.value = '';
  renderShopView();
}

function resetShopPrice() {
  state.filters.maxPrice = 150000;
  renderShopView();
}

function resetAllShopFilters() {
  state.filters = {
    search: '',
    category: 'All',
    maxPrice: 150000,
    material: 'All',
    inStockOnly: false,
    sort: 'featured'
  };
  const searchInput = document.getElementById('header-search-input');
  if (searchInput) searchInput.value = '';
  renderShopView();
}

// ==========================================
// 6. PRODUCT DETAILS MODAL
// ==========================================
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  state.selectedProduct = product;
  const modal = document.getElementById('product-detail-modal');
  const container = document.getElementById('product-detail-content');

  const isWishlisted = state.wishlist.includes(product.id);

  container.innerHTML = `
    <button class="modal-close-btn" onclick="closeProductModal()" title="Close">✕</button>
    <div class="detail-gallery">
      <div class="detail-main-img-wrap">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80'">
      </div>
      <div class="detail-specs-mini">
        <div class="spec-mini-item">
          <span>Dimensions</span>
          <strong>${product.dimensions}</strong>
        </div>
        <div class="spec-mini-item">
          <span>Warranty</span>
          <strong>10-Year Craft</strong>
        </div>
      </div>
    </div>
    <div class="detail-info">
      <span class="detail-category-tag">${product.category}</span>
      <h2 class="detail-title">${product.name}</h2>
      <div class="detail-meta-row">
        <div class="product-rating">
          ${renderRatingStars(product.rating)}
          <strong>${product.rating}</strong> (${product.reviewsCount} verified customer reviews)
        </div>
        <span class="stock-status-tag stock-in">✓ In Stock</span>
      </div>
      <div class="detail-price-row">
        <span class="detail-price">${formatINR(product.price)}</span>
        ${product.originalPrice ? `<span class="price-original" style="font-size:1.1rem;">${formatINR(product.originalPrice)}</span>` : ''}
        <span style="font-size:0.8rem; color:#2D6A4F; font-weight:700; background:#EBF5EE; padding:0.2rem 0.5rem; border-radius:4px;">
          ${product.originalPrice ? `Save ${formatINR(product.originalPrice - product.price)}` : `Free White-Glove Shipping Over ${formatINR(FREE_SHIPPING_THRESHOLD)}`}
        </span>
      </div>
      <p class="detail-desc">${product.description}</p>
      
      <div class="detail-specs-table">
        <div class="specs-row">
          <span>Material Composition:</span>
          <strong>${product.material}</strong>
        </div>
        <div class="specs-row">
          <span>Overall Dimensions:</span>
          <strong>${product.dimensions}</strong>
        </div>
        <div class="specs-row">
          <span>Assembly:</span>
          <strong>Minimal (Leg attachment tools included)</strong>
        </div>
        <div class="specs-row">
          <span>Trial & Returns:</span>
          <strong>30-Day Risk-Free In-Home Trial</strong>
        </div>
      </div>

      <div class="detail-actions-row">
        <div class="quantity-control">
          <button class="qty-btn" onclick="adjustModalQty(-1)">-</button>
          <input type="text" id="modal-qty-input" class="qty-input" value="1" readonly>
          <button class="qty-btn" onclick="adjustModalQty(1)">+</button>
        </div>
        <button class="btn btn-primary" onclick="addModalItemToCart()" style="flex-grow:1;">
          Add to Cart
        </button>
        <button class="btn btn-secondary" onclick="toggleWishlist('${product.id}')" title="Save to Wishlist">
          ${isWishlisted ? '♥ Wishlisted' : '♡ Wishlist'}
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const modal = document.getElementById('product-detail-modal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = 'auto';
  state.selectedProduct = null;
}

function adjustModalQty(delta) {
  const input = document.getElementById('modal-qty-input');
  if (!input) return;
  let val = parseInt(input.value) || 1;
  val += delta;
  if (val < 1) val = 1;
  if (val > 10) val = 10;
  input.value = val;
}

function addModalItemToCart() {
  if (!state.selectedProduct) return;
  const input = document.getElementById('modal-qty-input');
  const qty = parseInt(input.value) || 1;
  addToCart(state.selectedProduct.id, qty);
  closeProductModal();
}

// ==========================================
// 7. SHOPPING CART LOGIC
// ==========================================
function addToCart(productId, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      material: product.material,
      quantity: quantity
    });
  }

  saveCart();
  updateBadges();
  renderCartDrawer();
  showToast(`Added "${product.name}" to cart`, 'success');
  openCartDrawer();
}

function updateCartQty(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => i.id !== productId);
    showToast(`Removed from cart`, 'info');
  }

  saveCart();
  updateBadges();
  renderCartDrawer();
  if (state.activeView === 'checkout') renderCheckoutView();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCart();
  updateBadges();
  renderCartDrawer();
  showToast(`Item removed from cart`, 'info');
  if (state.activeView === 'checkout') renderCheckoutView();
}

function saveCart() {
  localStorage.setItem('homemart_cart', JSON.stringify(state.cart));
}

function calculateCartTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  let discount = 0;
  if (state.coupon === 'HOMELOVE15') {
    discount = Math.round(subtotal * 0.15);
  } else if (state.coupon === 'WELCOME10') {
    discount = Math.round(subtotal * 0.10);
  }

  const taxableAmount = Math.max(0, subtotal - discount);
  const tax = Math.round(taxableAmount * 0.08 * 100) / 100;
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 3000;
  const total = Math.round((taxableAmount + tax + shipping) * 100) / 100;

  return { subtotal, discount, tax, shipping, total };
}

function applyCouponCode() {
  const input = document.getElementById('cart-coupon-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === 'HOMELOVE15' || code === 'WELCOME10') {
    state.coupon = code;
    localStorage.setItem('homemart_coupon', code);
    showToast(`Coupon "${code}" applied successfully!`, 'success');
    renderCartDrawer();
    if (state.activeView === 'checkout') renderCheckoutView();
  } else {
    showToast('Invalid coupon code. Try HOMELOVE15', 'info');
  }
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-drawer-backdrop');
  renderCartDrawer();
  if (drawer) drawer.classList.add('active');
  if (backdrop) backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-drawer-backdrop');
  if (drawer) drawer.classList.remove('active');
  if (backdrop) backdrop.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function renderCartDrawer() {
  const container = document.getElementById('cart-drawer-items');
  const subtotalEl = document.getElementById('cart-subtotal-val');
  const totalEl = document.getElementById('cart-total-val');
  const shippingEl = document.getElementById('cart-shipping-val');
  const discountRow = document.getElementById('cart-discount-row');
  const discountEl = document.getElementById('cart-discount-val');
  const progressText = document.getElementById('shipping-progress-text');
  const progressBar = document.getElementById('shipping-progress-fill');

  if (!container) return;

  const { subtotal, discount, shipping, total } = calculateCartTotals();

  // Free shipping progress logic (₹40,000 threshold)
  const remainingForFree = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progressPercent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  if (progressText && progressBar) {
    if (remainingForFree === 0) {
      progressText.innerHTML = `<span>🎉 You unlocked <strong>Free White-Glove Shipping!</strong></span>`;
      progressBar.style.width = '100%';
    } else {
      progressText.innerHTML = `<span>Add <strong>${formatINR(remainingForFree)}</strong> more for Free Shipping</span> <span>${progressPercent}%</span>`;
      progressBar.style.width = `${progressPercent}%`;
    }
  }

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="padding: 2rem 1rem;">
        <div class="empty-state-icon">🛒</div>
        <h4>Your Cart is Empty</h4>
        <p>Explore our handcrafted collection to add comfort to your home.</p>
        <button class="btn btn-primary btn-sm" onclick="closeCartDrawer(); navigateTo('shop');">
          Browse Furniture
        </button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = formatINR(0);
    if (totalEl) totalEl.textContent = formatINR(0);
    if (shippingEl) shippingEl.textContent = formatINR(0);
    if (discountRow) discountRow.style.display = 'none';
    return;
  }

  container.innerHTML = state.cart.map(item => `
    <div class="cart-item-card">
      <div class="cart-item-thumb">
        <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80'">
      </div>
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <div class="cart-item-meta">${item.category}</div>
        <div class="cart-item-bottom">
          <span class="cart-item-price">${formatINR(item.price * item.quantity)}</span>
          <div class="cart-item-qty">
            <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
            <span class="cart-qty-num">${item.quantity}</span>
            <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" title="Remove item">🗑</button>
        </div>
      </div>
    </div>
  `).join('');

  if (subtotalEl) subtotalEl.textContent = formatINR(subtotal);
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : formatINR(shipping);
  if (totalEl) totalEl.textContent = formatINR(total);

  if (discountRow && discountEl) {
    if (discount > 0) {
      discountRow.style.display = 'flex';
      discountEl.textContent = `-${formatINR(discount)}`;
    } else {
      discountRow.style.display = 'none';
    }
  }
}

// ==========================================
// 8. WISHLIST MANAGEMENT
// ==========================================
function toggleWishlist(productId) {
  const index = state.wishlist.indexOf(productId);
  const product = PRODUCTS.find(p => p.id === productId);

  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast(`Removed "${product ? product.name : 'Item'}" from wishlist`, 'info');
  } else {
    state.wishlist.push(productId);
    showToast(`Saved "${product ? product.name : 'Item'}" to wishlist`, 'heart');
  }

  localStorage.setItem('homemart_wishlist', JSON.stringify(state.wishlist));
  updateBadges();

  // Re-render components that might have heart icons
  if (state.activeView === 'home') renderHomeView();
  if (state.activeView === 'shop') renderShopView();
  if (state.activeView === 'account' && state.activeAccountTab === 'wishlist') renderAccountWishlist();
  if (state.selectedProduct && state.selectedProduct.id === productId) {
    openProductModal(productId);
  }
}

// ==========================================
// 9. CHECKOUT & SIMULATED PAYMENT
// ==========================================
function startCheckout() {
  if (state.cart.length === 0) {
    showToast('Your cart is empty! Add items first.', 'info');
    return;
  }
  closeCartDrawer();
  navigateTo('checkout');
}

function renderCheckoutView() {
  const itemsContainer = document.getElementById('checkout-items-list');
  const subtotalEl = document.getElementById('checkout-subtotal');
  const discountEl = document.getElementById('checkout-discount');
  const discountRow = document.getElementById('checkout-discount-row');
  const taxEl = document.getElementById('checkout-tax');
  const shippingEl = document.getElementById('checkout-shipping');
  const totalEl = document.getElementById('checkout-total');

  if (!itemsContainer) return;

  const { subtotal, discount, tax, shipping, total } = calculateCartTotals();

  itemsContainer.innerHTML = state.cart.map(item => `
    <div class="checkout-item-mini">
      <img src="${item.image}" alt="${item.name}">
      <div class="checkout-item-mini-info">
        <strong>${item.name}</strong>
        <span>Qty: ${item.quantity} × ${formatINR(item.price)}</span>
      </div>
      <strong>${formatINR(item.price * item.quantity)}</strong>
    </div>
  `).join('');

  if (subtotalEl) subtotalEl.textContent = formatINR(subtotal);
  if (taxEl) taxEl.textContent = formatINR(tax);
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : formatINR(shipping);
  if (totalEl) totalEl.textContent = formatINR(total);

  if (discountRow && discountEl) {
    if (discount > 0) {
      discountRow.style.display = 'flex';
      discountEl.textContent = `-${formatINR(discount)}`;
    } else {
      discountRow.style.display = 'none';
    }
  }

  // Pre-fill user data if logged in
  if (state.user) {
    const nameInput = document.getElementById('co-name');
    const emailInput = document.getElementById('co-email');
    if (nameInput && !nameInput.value) nameInput.value = state.user.name || '';
    if (emailInput && !emailInput.value) emailInput.value = state.user.email || '';
  }
}

function setPaymentMethod(method) {
  document.querySelectorAll('.payment-opt-card').forEach(card => {
    card.classList.remove('active');
  });
  const selected = document.getElementById(`pay-method-${method}`);
  if (selected) selected.classList.add('active');

  const cardDetails = document.getElementById('card-payment-details');
  if (cardDetails) {
    cardDetails.style.display = method === 'card' ? 'block' : 'none';
  }
}

function handlePlaceOrder(e) {
  e.preventDefault();

  if (state.cart.length === 0) {
    showToast('Your cart is empty', 'info');
    return;
  }

  const name = document.getElementById('co-name').value.trim();
  const email = document.getElementById('co-email').value.trim();
  const street = document.getElementById('co-address').value.trim();
  const city = document.getElementById('co-city').value.trim();
  const stateVal = document.getElementById('co-state').value.trim();
  const zip = document.getElementById('co-zip').value.trim();

  if (!name || !email || !street || !city || !stateVal || !zip) {
    showToast('Please fill in all shipping details', 'info');
    return;
  }

  const btn = document.getElementById('btn-place-order');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<span>⏳ Processing Handcrafted Order...</span>`;
  }

  setTimeout(() => {
    const orderId = `HM-${Math.floor(100000 + Math.random() * 900000)}`;
    const totals = calculateCartTotals();

    const newOrder = {
      id: orderId,
      date: new Date().toISOString().split('T')[0],
      items: [...state.cart],
      subtotal: totals.subtotal,
      discount: totals.discount,
      tax: totals.tax,
      shipping: totals.shipping,
      total: totals.total,
      status: 'Confirmed',
      shippingAddress: { name, street, city, state: stateVal, zip }
    };

    state.orders.unshift(newOrder);
    localStorage.setItem('homemart_orders', JSON.stringify(state.orders));

    // Clear cart
    state.cart = [];
    saveCart();
    updateBadges();

    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `<span>Place Order (${formatINR(totals.total)})</span>`;
    }

    renderConfirmationView(newOrder);
    navigateTo('confirmation');
  }, 1200);
}

// ==========================================
// 10. ORDER CONFIRMATION & TRACKING
// ==========================================
function renderConfirmationView(order) {
  state.currentOrderTrack = order;
  const orderIdEl = document.getElementById('confirm-order-id-display');
  const detailsEl = document.getElementById('confirm-order-summary-details');

  if (orderIdEl) orderIdEl.textContent = `Order Reference: ${order.id}`;

  if (detailsEl) {
    detailsEl.innerHTML = `
      <div style="background:var(--cream-bg); border-radius:var(--radius-md); padding:1.25rem; text-align:left; margin-bottom:1.5rem;">
        <div style="display:flex; justify-content:space-between; margin-bottom:0.75rem; font-weight:700;">
          <span>Items Ordered (${order.items.length})</span>
          <span>Total Paid: ${formatINR(order.total)}</span>
        </div>
        <div style="display:flex; flex-direction:column; gap:0.5rem; font-size:0.88rem;">
          ${order.items.map(item => `
            <div style="display:flex; justify-content:space-between; color:var(--text-body);">
              <span>${item.name} (x${item.quantity})</span>
              <strong>${formatINR(item.price * item.quantity)}</strong>
            </div>
          `).join('')}
        </div>
        <div style="border-top:1px solid var(--border-color); margin-top:0.75rem; padding-top:0.75rem; font-size:0.82rem; color:var(--text-muted);">
          <strong>Delivering to:</strong> ${order.shippingAddress.name}, ${order.shippingAddress.street}, ${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.zip}
        </div>
      </div>
    `;
  }
}

function simulateStepAdvance() {
  const steps = document.querySelectorAll('.order-tracker-timeline .timeline-step');
  let currentActiveIdx = -1;
  steps.forEach((s, idx) => {
    if (s.classList.contains('active')) currentActiveIdx = idx;
  });

  if (currentActiveIdx < steps.length - 1) {
    steps[currentActiveIdx].classList.remove('active');
    steps[currentActiveIdx].classList.add('completed');
    steps[currentActiveIdx + 1].classList.add('active');
    showToast('Simulated tracking status updated!', 'info');
  } else {
    showToast('Order package is already delivered!', 'info');
  }
}

// ==========================================
// 11. USER ACCOUNT & AUTHENTICATION
// ==========================================
function renderAccountView() {
  const authBox = document.getElementById('account-auth-box');
  const dashBox = document.getElementById('account-dashboard-box');

  if (!state.user) {
    if (authBox) authBox.style.display = 'block';
    if (dashBox) dashBox.style.display = 'none';
  } else {
    if (authBox) authBox.style.display = 'none';
    if (dashBox) dashBox.style.display = 'grid';
    
    const userNameEl = document.getElementById('user-profile-name');
    const userEmailEl = document.getElementById('user-profile-email');
    const userAvatarEl = document.getElementById('user-avatar-text');

    if (userNameEl) userNameEl.textContent = state.user.name;
    if (userEmailEl) userEmailEl.textContent = state.user.email;
    if (userAvatarEl) userAvatarEl.textContent = state.user.name.charAt(0).toUpperCase();

    renderAccountTab(state.activeAccountTab);
  }
}

function setAccountTab(tabName) {
  state.activeAccountTab = tabName;
  document.querySelectorAll('.account-nav-item').forEach(item => {
    if (item.getAttribute('data-tab') === tabName) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
  renderAccountTab(tabName);
}

function renderAccountTab(tab) {
  const content = document.getElementById('account-tab-content');
  if (!content) return;

  if (tab === 'profile') {
    content.innerHTML = `
      <h3 style="margin-bottom:1.25rem;">Personal Profile</h3>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.25rem;">
        <div>
          <label style="font-size:0.8rem; color:var(--text-light); text-transform:uppercase;">Full Name</label>
          <p style="font-weight:600; color:var(--text-dark);">${state.user.name}</p>
        </div>
        <div>
          <label style="font-size:0.8rem; color:var(--text-light); text-transform:uppercase;">Email Address</label>
          <p style="font-weight:600; color:var(--text-dark);">${state.user.email}</p>
        </div>
        <div>
          <label style="font-size:0.8rem; color:var(--text-light); text-transform:uppercase;">Membership Tier</label>
          <p style="font-weight:600; color:var(--primary-brown);">HomeMart Gold Connoisseur</p>
        </div>
        <div>
          <label style="font-size:0.8rem; color:var(--text-light); text-transform:uppercase;">Default Delivery City</label>
          <p style="font-weight:600; color:var(--text-dark);">Portland, OR</p>
        </div>
      </div>
    `;
  } else if (tab === 'orders') {
    if (state.orders.length === 0) {
      content.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">📦</div>
          <h4>No Past Orders Found</h4>
          <p>You haven't placed any furniture orders with us yet.</p>
        </div>
      `;
    } else {
      content.innerHTML = `
        <h3 style="margin-bottom:1.25rem;">Order History (${state.orders.length})</h3>
        ${state.orders.map(order => `
          <div class="order-history-card">
            <div class="order-history-header">
              <div>
                <strong>${order.id}</strong>
                <span style="font-size:0.8rem; color:var(--text-light); margin-left:0.5rem;">Placed on ${order.date}</span>
              </div>
              <div>
                <span style="font-size:0.8rem; font-weight:700; background:#EBF5EE; color:#2D6A4F; padding:0.25rem 0.6rem; border-radius:12px;">
                  ${order.status}
                </span>
                <strong style="margin-left:0.75rem;">${formatINR(order.total)}</strong>
              </div>
            </div>
            <div style="display:flex; flex-direction:column; gap:0.5rem;">
              ${order.items.map(item => `
                <div style="display:flex; align-items:center; gap:0.75rem; font-size:0.85rem;">
                  <img src="${item.image}" style="width:40px; height:40px; border-radius:4px; object-fit:cover;">
                  <span style="flex-grow:1;">${item.name} (x${item.quantity})</span>
                  <strong>${formatINR(item.price * item.quantity)}</strong>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      `;
    }
  } else if (tab === 'wishlist') {
    renderAccountWishlist();
  }
}

function renderAccountWishlist() {
  const content = document.getElementById('account-tab-content');
  if (!content) return;

  const wishlistedProducts = PRODUCTS.filter(p => state.wishlist.includes(p.id));

  if (wishlistedProducts.length === 0) {
    content.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">♥</div>
        <h4>Your Wishlist is Empty</h4>
        <p>Click the heart icon on any furniture item to save it for your next room makeover.</p>
        <button class="btn btn-primary btn-sm" onclick="navigateTo('shop')">Explore Catalog</button>
      </div>
    `;
  } else {
    content.innerHTML = `
      <h3 style="margin-bottom:1.25rem;">Saved Wishlist Items (${wishlistedProducts.length})</h3>
      <div class="products-grid">
        ${wishlistedProducts.map(createProductCardHTML).join('')}
      </div>
    `;
  }
}

function toggleAuthTab(type) {
  const loginForm = document.getElementById('auth-login-form');
  const regForm = document.getElementById('auth-register-form');
  const btnLogin = document.getElementById('tab-btn-login');
  const btnReg = document.getElementById('tab-btn-register');

  if (type === 'login') {
    if (loginForm) loginForm.style.display = 'block';
    if (regForm) regForm.style.display = 'none';
    if (btnLogin) btnLogin.classList.add('active');
    if (btnReg) btnReg.classList.remove('active');
  } else {
    if (loginForm) loginForm.style.display = 'none';
    if (regForm) regForm.style.display = 'block';
    if (btnLogin) btnLogin.classList.remove('active');
    if (btnReg) btnReg.classList.add('active');
  }
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const pass = document.getElementById('login-pass').value.trim();

  if (!email || !pass) {
    showToast('Please enter your email and password', 'info');
    return;
  }

  // Simulated Login
  state.user = {
    name: email.split('@')[0].replace('.', ' ').replace(/^\w/, c => c.toUpperCase()),
    email: email
  };
  localStorage.setItem('homemart_user', JSON.stringify(state.user));
  showToast(`Welcome back, ${state.user.name}!`, 'success');
  renderAccountView();
}

function handleRegisterSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const pass = document.getElementById('reg-pass').value.trim();

  if (!name || !email || !pass) {
    showToast('Please complete all registration fields', 'info');
    return;
  }

  state.user = { name, email };
  localStorage.setItem('homemart_user', JSON.stringify(state.user));
  showToast(`Account created! Welcome to HomeMart, ${name}`, 'success');
  renderAccountView();
}

function handleLogout() {
  state.user = null;
  localStorage.removeItem('homemart_user');
  showToast('You have been logged out', 'info');
  renderAccountView();
}

// ==========================================
// 12. CONTACT FORM & FAQ
// ==========================================
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const message = document.getElementById('contact-msg').value.trim();

  if (!name || !email || !message) {
    showToast('Please fill out all contact fields', 'info');
    return;
  }

  showToast('Thank you! Our design concierge will respond within 24 hours.', 'success');
  e.target.reset();
}

function toggleFaqItem(element) {
  const item = element.parentElement;
  item.classList.toggle('active');
}

// ==========================================
// 13. APP INITIALIZATION & EVENT LISTENERS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('mobile-open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileToggle.textContent = isOpen ? '✕' : '☰';
    });
    // Close mobile menu when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.textContent = '☰';
      });
    });
  }

  // Mobile Filter Drawer Toggle
  const mobileFilterBtn = document.getElementById('mobile-filter-trigger');
  const sidebar = document.getElementById('shop-sidebar');
  if (mobileFilterBtn && sidebar) {
    mobileFilterBtn.addEventListener('click', () => {
      sidebar.classList.toggle('mobile-open');
    });
  }

  // Header Search Input
  const searchInput = document.getElementById('header-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      handleSearchInput(e.target.value);
    });
  }

  // Render Initial View & Badges
  updateBadges();
  renderHomeView();
});