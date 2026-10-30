// Product Catalog for Shri Hit Tulsi (Vrindavan)
// Note: All prices and product details are easily editable placeholders.

export const CATEGORIES = [
  {
    id: "all",
    label: "All Offerings",
    hindi: "सभी सेवा सामग्री",
    icon: "Sparkles",
    count: 14
  },
  {
    id: "attar",
    label: "Vrindavan Attar",
    hindi: "दिव्य इत्र",
    description: "100% pure, alcohol-free natural traditional extracts for Thakurji Seva & personal devotion.",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tulsi-sticks",
    label: "Tulsi Sticks & Malas",
    hindi: "तुलसी माला एवं धूप",
    description: "Authentic sacred Tulsi wood malas, kanthis, and pure chemical-free dhoop sticks.",
    image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bhakti-kits",
    label: "Divine Bhakti Kits",
    hindi: "भक्ति किट",
    description: "Curated all-in-one devotional kits for daily puja, festivals, and Thakurji archana.",
    image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "poshak",
    label: "Customized Poshak",
    hindi: "शृंगार पोशाक",
    description: "Bespoke handcrafted deity outfits with intricate zardozi, pearls, and pure silk fabrics.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
  }
];

export const PRODUCTS = [
  // ==================== ATTAR CATEGORY ====================
  {
    id: "attar-chandan-vrindavan",
    name: "Shri Vrindavan Chandan Attar",
    hindiName: "श्री वृन्दावन चन्दन इत्र",
    category: "attar",
    badge: "Bestseller",
    price: 450,
    originalPrice: 550,
    rating: 4.9,
    reviewCount: 128,
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Sacred Mysore sandalwood distillation infused with holy Vrindavan devotional prayers. 100% alcohol-free.",
    fullDesc: "Prepared in traditional copper degs using pure Santalum album heartwood. Its cooling, ethereal woody aroma creates an atmosphere of deep meditation and tranquility. Perfect for offering to Thakurji during morning shringar and applying on Tulsi mala beads.",
    highlights: [
      "100% Pure & Alcohol-Free (Halal / Satvik)",
      "Long-lasting 18+ hours soothing fragrance",
      "Offered daily in Vrindavan temple seva",
      "Traditional glass roll-on flacon with velvet pouch"
    ],
    variants: [
      { name: "6 ml (Roll-on)", price: 450 },
      { name: "12 ml (Luxury Flacon)", price: 820 }
    ],
    isFeatured: true
  },
  {
    id: "attar-gulab-shringar",
    name: "Damask Gulab Attar (Brij Shringar)",
    hindiName: "बृज शृंगार गुलाब इत्र",
    category: "attar",
    badge: "Temple Grade",
    price: 490,
    originalPrice: 599,
    rating: 4.8,
    reviewCount: 94,
    images: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Natural steam-distilled Indian desi gulab (rose) petals. Loved immensely by Shri Radha Rani.",
    fullDesc: "Extracted from thousands of hand-picked fresh rose petals from the gardens of Braj. It carries the sublime, sweet nectar-like fragrance celebrated in Braj poetry. Specially made for seva of Shri Radha Vallabh Lal and Banke Bihari Ji.",
    highlights: [
      "Distilled in traditional Kannauj hydro-stills",
      "Cooling, heart-opening floral aura",
      "Contains zero synthetic fixatives or chemicals",
      "Safe for sensitive skin & direct deity seva"
    ],
    variants: [
      { name: "6 ml (Roll-on)", price: 490 },
      { name: "12 ml (Luxury Flacon)", price: 890 }
    ],
    isFeatured: true
  },
  {
    id: "attar-kesar-kasturi",
    name: "Kesar Kasturi Royal Blend",
    hindiName: "केसर कस्तूरी राजसी इत्र",
    category: "attar",
    badge: "Royal Seva",
    price: 580,
    originalPrice: 699,
    rating: 5.0,
    reviewCount: 76,
    images: [
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Kashmiri saffron filaments blended with herbal botanical amber and pure warm musk notes.",
    fullDesc: "An opulent, warm fragrance reminiscent of royal winter shringar at Shri Radha Raman temple. Saffron stigmas provide a rich golden aura, balanced with herbal musk for unmatched depth and spiritual grounding.",
    highlights: [
      "Infused with real Kashmiri Kesar filaments",
      "100% plant-derived musk alternative (Cruelty-free)",
      "Ideal for winter festivals, Sandhya aarti & special occasions",
      "Presented in gold-accented applicator"
    ],
    variants: [
      { name: "6 ml (Roll-on)", price: 580 },
      { name: "12 ml (Luxury Flacon)", price: 1050 }
    ],
    isFeatured: false
  },
  {
    id: "attar-tulsi-sugandh",
    name: "Sacred Tulsi Sugandh Attar",
    hindiName: "पवित्र तुलसी सुगंध इत्र",
    category: "attar",
    badge: "Pure Vrindavan",
    price: 420,
    originalPrice: 499,
    rating: 4.9,
    reviewCount: 112,
    images: [
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Crisp, purifying herbal nectar distilled from fresh Shyama & Rama Tulsi leaves.",
    fullDesc: "The signature fragrance of Shri Hit Tulsi. Carries the invigorating, sacred scent of early morning Vrindavan parikrama marg with notes of fresh holy basil, sweet dew, and holy soil.",
    highlights: [
      "Directly distilled from Vrindavan cultivated holy basil",
      "Purifies mind and calms stress during japa meditation",
      "100% natural, satvik, chemical-free",
      "Beloved by Vaishnava devotees worldwide"
    ],
    variants: [
      { name: "6 ml (Roll-on)", price: 420 },
      { name: "12 ml (Luxury Flacon)", price: 780 }
    ],
    isFeatured: true
  },

  // ==================== TULSI STICKS & MALAS ====================
  {
    id: "tulsi-sticks-organic-dhoop",
    name: "Pure Vrindavan Tulsi Dhoop Sticks (Box of 40)",
    hindiName: "प्राकृतिक तुलसी धूप स्टिक्स",
    category: "tulsi-sticks",
    badge: "Charcoal Free",
    price: 260,
    originalPrice: 320,
    rating: 4.9,
    reviewCount: 230,
    images: [
      "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Handmade from sacred dry Tulsi wood, desi cow ghee, and natural havan herbs. 0% bamboo, 0% charcoal.",
    fullDesc: "These sacred dhoop sticks are lovingly crafted in Vrindavan gaushalas by Brijwasi artisans. Made with naturally shed sacred Tulsi branches, pure Gir cow ghee, guggul, loban, and camphor. Emits zero toxic black smoke, filling your home with positive temple vibes.",
    highlights: [
      "Zero bamboo sticks (Bans-mukt shudh dhoop)",
      "Zero charcoal & zero synthetic fragrance oils",
      "Burn time: 45-50 minutes per stick",
      "Pack contains 40 thick dhoop sticks with ceramic holder"
    ],
    variants: [
      { name: "Standard Pack (40 Sticks)", price: 260 },
      { name: "Devotee Family Pack (100 Sticks)", price: 580 }
    ],
    isFeatured: true
  },
  {
    id: "tulsi-mala-108-japa",
    name: "Original 108 Beads Vrindavan Tulsi Japa Mala",
    hindiName: "मूल १०८ मनका तुलसी जप माला",
    category: "tulsi-sticks",
    badge: "Sanctified",
    price: 350,
    originalPrice: 450,
    rating: 5.0,
    reviewCount: 310,
    images: [
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Authentic, untreated, naturally smooth 108+1 Guru bead Tulsi mala knotted in strong sacred thread.",
    fullDesc: "Each bead is carved from natural sacred Vrindavan Tulsi wood. Blessed with Yamuna jal and touched to the lotus feet of Shri Radha Vallabh ji. It gives immense peace of mind and focus during daily Mahamantra japa.",
    highlights: [
      "108 beads + 1 Sumeru Guru bead with knotting between each bead",
      "Natural scent of pure dried Tulsi wood",
      "Includes a complimentary saffron cotton Gomukhi Japa Bag",
      "Authentic Vrindavan craftsmanship"
    ],
    variants: [
      { name: "Standard 7-8mm Beads", price: 350 },
      { name: "Premium 9-10mm Large Beads", price: 480 }
    ],
    isFeatured: true
  },
  {
    id: "tulsi-kanthi-mala-double-round",
    name: "Shri Radha Kanthi Mala (2-Round Neck Mala)",
    hindiName: "श्री राधा कंठी माला (द्वि-लड़ी)",
    category: "tulsi-sticks",
    badge: "Hand-Knotted",
    price: 199,
    originalPrice: 250,
    rating: 4.8,
    reviewCount: 185,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Delicate and auspicious two-round neck Tulsi kanthi with silver/brass locking clasp.",
    fullDesc: "Worn by Vaishnavas for spiritual protection, inner purity, and constant connection with Shri Radha Krishna. Hand-rolled tiny smooth tulsi cylindrical beads that sit comfortably on the throat chakra.",
    highlights: [
      "Double strand round kanthi with secure brass screw clasp",
      "Water resistant for regular bath wear",
      "Smooth finish that won't scratch or pull skin",
      "Sanctified in Vrindavan Dham"
    ],
    variants: [
      { name: "Double Round (Standard 16 inch)", price: 199 },
      { name: "Triple Round (Brijwasi Style 18 inch)", price: 280 }
    ],
    isFeatured: false
  },

  // ==================== DIVINE BHAKTI KITS ====================
  {
    id: "bhakti-kit-daily-puja",
    name: "Nitya Thakurji Daily Seva Kit",
    hindiName: "नित्य ठाकुरजी सेवा किट",
    category: "bhakti-kits",
    badge: "Complete Seva",
    price: 1199,
    originalPrice: 1499,
    rating: 5.0,
    reviewCount: 142,
    images: [
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Complete sanctified hamper with Vrindavan Chandan, pure Attar, Tulsi Mala, Tilak stamp & brass diya.",
    fullDesc: "Everything a devotee needs to perform joyous morning and evening seva of Thakurji or Laddu Gopal at home. Packed inside a reusable royal maroon keepsake box stamped with golden foil Radha-Radhe crest.",
    highlights: [
      "Contains: 6ml Pure Chandan Attar, Braj Tilak & Gopi Chandan Bar",
      "Brass Aarti Diya & Shri Radha Brass Tilak Stamp",
      "108 Beads Pure Tulsi Mala with Saffron Gomukhi Bag",
      "Box of 20 Charcoal-Free Tulsi Dhoop Sticks",
      "Sanctified Vrindavan Charan-Amrit & sacred dry Yamuna dust"
    ],
    variants: [
      { name: "Complete Box Set", price: 1199 },
      { name: "Deluxe Heritage Gift Box", price: 1650 }
    ],
    isFeatured: true
  },
  {
    id: "bhakti-kit-janmashtami-mahotsav",
    name: "Janmashtami & Utsav Mahotsav Special Kit",
    hindiName: "जन्माष्टमी महोत्सव दिव्य किट",
    category: "bhakti-kits",
    badge: "Festive Edition",
    price: 1550,
    originalPrice: 1899,
    rating: 4.9,
    reviewCount: 88,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Specially prepared for grand festival shringar, abhishek and celebration of Bal Gopal.",
    fullDesc: "A joyous celebration package designed for Janmashtami, Radhashtami, and Deepawali. Includes Panchamrit snan accessories, festive zari vastra, flute (bansuri), peacock crown, and festive attar blend.",
    highlights: [
      "Festival Heavy Silk Poshak (Customizable Size)",
      "Gold-Plated Brass Bansuri & Studded Mukut",
      "12ml Festive Kesar Rose Attar Flacon",
      "Ashtagandha Kesar Chandan Paste & Snan Herb Sachet",
      "Packed in a luxurious festive temple hamper"
    ],
    variants: [
      { name: "Standard Kit (Size 0-2 Poshak)", price: 1550 },
      { name: "Grand Kit (Size 3-5 Poshak)", price: 1850 }
    ],
    isFeatured: true
  },
  {
    id: "bhakti-kit-radha-shringar",
    name: "Shri Radha Rani Shringar Gift Hamper",
    hindiName: "श्री राधा रानी शृंगार उपहार किट",
    category: "bhakti-kits",
    badge: "Sacred Gift",
    price: 1350,
    originalPrice: 1650,
    rating: 5.0,
    reviewCount: 65,
    images: [
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Devotional gift set curated with sacred cosmetics, alta, gulab attar, and shimmering chunri.",
    fullDesc: "Express your devotion to Barsana's queen, Shri Radha Ju. Includes organic natural liquid alta, pure damask rose attar, golden gota patti chunri, scented kajal, and auspicious sindoor direct from Vrindavan.",
    highlights: [
      "Traditional Braj Sugandhit Alta (Chemical Free)",
      "Pure Gulab Attar 6ml Roll-on",
      "Fine Zari Organza Offering Chunri",
      "Ideal gift for Vaishnava mothers, sisters, and satsang groups"
    ],
    variants: [
      { name: "Standard Shringar Hamper", price: 1350 }
    ],
    isFeatured: false
  },

  // ==================== CUSTOMIZED POSHAK ====================
  {
    id: "poshak-laddu-gopal-zardozi",
    name: "Royal Zardozi Laddu Gopal Poshak",
    hindiName: "राजसी जरदोजी लड्डू गोपाल पोशाक",
    category: "poshak",
    badge: "Hand Embroidered",
    price: 650,
    originalPrice: 850,
    rating: 4.9,
    reviewCount: 164,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Intricate gold dabka, zardozi work and fine sequins hand-stitched by master artisans of Vrindavan.",
    fullDesc: "Adorn your Thakurji with divine elegance. Crafted on pure soft raw silk with intricate peacocks and floral vine motifs in golden thread. Comes complete with matching choli and pagdi/patka.",
    highlights: [
      "Includes: Gherdar Poshak, Choli, and Designer Pagdi",
      "Pure soft lining inside so it never scratches Thakurji",
      "Customizable in your favorite colors (Peetamber Yellow, Rani Pink, Sky Blue, Dark Green)",
      "Available for all Laddu Gopal sizes (0 to 6)"
    ],
    variants: [
      { name: "Size 0-1 (Small)", price: 650 },
      { name: "Size 2-3 (Medium)", price: 790 },
      { name: "Size 4-5 (Large)", price: 950 },
      { name: "Size 6 (Grand)", price: 1150 }
    ],
    isCustomizable: true,
    isFeatured: true
  },
  {
    id: "poshak-radha-krishna-jodi",
    name: "Bespoke Radha-Krishna Jodi Poshak (Made-to-Order)",
    hindiName: "श्रीमती राधा-कृष्ण युगल जोड़ी पोशाक",
    category: "poshak",
    badge: "Bespoke Custom",
    price: 1850,
    originalPrice: 2200,
    rating: 5.0,
    reviewCount: 108,
    images: [
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Coordinated regal matching outfits for Yugal Sarkar with pearl borders, choli, and Radha Rani lehenga.",
    fullDesc: "Designed according to your deity idol's exact height and circumference. Our Vrindavan tailor masters hand-embroider every hem with rich borders, fine resham embroidery, and glittering stone embellishments.",
    highlights: [
      "Includes Radha Rani Lehenga-Choli-Dupatta & Krishna Dhoti-Kurta-Patka",
      "Completely customized colors, deity height & fabric choice",
      "Artisan team consults directly on WhatsApp with photos/measurements",
      "Handcrafted with love and devotion in the holy alleys of Loi Bazaar, Vrindavan"
    ],
    variants: [
      { name: "6-8 inch Deity Pair", price: 1850 },
      { name: "9-12 inch Deity Pair", price: 2450 },
      { name: "15+ inch Deity Pair", price: 3200 }
    ],
    isCustomizable: true,
    isFeatured: true
  },
  {
    id: "poshak-morpankhi-peetambari",
    name: "Morpankhi Peetambari Seva Poshak",
    hindiName: "मोरपंखी पीताम्बरी सेवा पोशाक",
    category: "poshak",
    badge: "Sacred Silk",
    price: 720,
    originalPrice: 890,
    rating: 4.8,
    reviewCount: 92,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Vibrant turmeric yellow pure Banarasi brocade poshak accented with real preserved peacock feather crest.",
    fullDesc: "Yellow is the supreme color of Peetambari Krishna. Made from rich banarasi weave with fine golden brocade threads and hand-appliqued natural morpankh design. A timeless devotional piece for your home temple.",
    highlights: [
      "Traditional Peetamber yellow festive banarasi silk",
      "Soft cotton inner lining for gentle deity contact",
      "Includes matching peacock-motif mukut pagdi",
      "Easy Velcro/tie fastening at the back"
    ],
    variants: [
      { name: "Size 1-2 (Small)", price: 720 },
      { name: "Size 3-4 (Medium)", price: 850 },
      { name: "Size 5-6 (Large)", price: 1050 }
    ],
    isCustomizable: true,
    isFeatured: false
  },
  {
    id: "poshak-velvet-winter-seva",
    name: "Makhmal (Velvet) Winter Warm Poshak",
    hindiName: "मखमली शीतकालीन (सर्दी) सेवा पोशाक",
    category: "poshak",
    badge: "Winter Warm",
    price: 590,
    originalPrice: 750,
    rating: 4.9,
    reviewCount: 119,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
    ],
    shortDesc: "Plush micro-velvet deity outfit designed to keep Thakurji cozy and warm throughout the winter season.",
    fullDesc: "When winter arrives in Braj, devotees offer soft velvet garments (razaai, shawl, and poshak) to protect Thakurji from the morning Yamuna breeze. Lined with ultra-soft flannel cotton for comforting warmth.",
    highlights: [
      "Ultra-soft premium royal velvet fabric with gold gota border",
      "Includes winter cap (topa) and wrap-around quilt (razaai)",
      "Colors: Deep Maroon, Royal Navy, Dark Green, Emerald",
      "Sizes available from 0 to 6"
    ],
    variants: [
      { name: "Size 0-2 (Small)", price: 590 },
      { name: "Size 3-4 (Medium)", price: 720 },
      { name: "Size 5-6 (Large)", price: 890 }
    ],
    isCustomizable: true,
    isFeatured: false
  }
];

// Helper functions for easy filtering
export const getFeaturedProducts = () => PRODUCTS.filter(p => p.isFeatured);
export const getProductsByCategory = (cat) => cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);
export const getProductById = (id) => PRODUCTS.find(p => p.id === id);

