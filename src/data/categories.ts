import { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'home-kitchen',
    name: 'Home & Kitchen',
    icon: '🏠',
    subcategories: [
      {
        id: 'kitchen-appliances',
        name: 'Kitchen Appliances',
        categoryId: 'home-kitchen',
        products: [
          {
            category: 'Kitchen & Dining',
            subcategory: 'Kitchen Appliances',
            name: 'Hamilton Beach Electric Indoor Searing Grill with Viewing Window & Adjustable Temperature Control Stainless Steel',
            price: 199, // Note: Price is null
            dealUrl: '',
            features: [
              'Non-stick grilling surface',
              'Adjustable temperature control up to 450°F',
              'Transparent viewing window',
              'Stainless steel construction',
              'Removable drip tray',
            ],
          },
          {
            category: 'Kitchen & Dining',
            subcategory: 'Kitchen Appliances',
            name: 'Indoor Smokeless Electric Grill for Kabob Skewers - XHJ Indoor Tabletop BBQ Grill Smokeless',
            price: 599,
            dealUrl: '',
            features: [
              'Smokeless grilling technology',
              'Suitable for kabob skewers',
              'Compact tabletop design',
              'Non-stick grill plates',
              'Easy-to-clean surfaces',
            ],
          },
          {
            category: 'Kitchen & Dining',
            subcategory: 'Kitchen Appliances',
            name: 'Indoor Smokeless Electric Grill for Kabob Skewers - XHJ Indoor Tabletop BBQ Grill Smokeless',
            price: 699,
            dealUrl: '', // Note: Duplicate product with different price
            features: [
              'Smokeless grilling technology',
              'Enhanced heat distribution',
              'Tabletop design for indoor use',
              'Non-stick grill plates',
              'Adjustable temperature settings',
            ],
          },
          {
            category: 'Kitchen & Dining',
            subcategory: 'Kitchen Appliances',
            name: 'Indoor Smokeless Electric Grill for Kabob Skewers - XHJ Indoor Tabletop BBQ Grill Smokeless',
            price: 799,
            dealUrl: '', // Note: Duplicate product with different price
            features: [
              'Advanced smokeless technology',
              'High-capacity grilling surface',
              'Portable tabletop design',
              'Non-stick coating',
              'Quick heat-up time',
            ],
          },
          {
            category: 'Kitchen & Dining',
            subcategory: 'Kitchen Appliances',
            name: 'Indoor Smokeless Electric Grill for Kabob Skewers - XHJ Indoor Tabletop BBQ Grill Smokeless',
            price: 899,
            dealUrl: '', // Note: Duplicate product with different price
            features: [
              'Premium smokeless grilling',
              'Large grilling area for kabobs',
              'Durable tabletop construction',
              'Non-stick grill plates',
              'Variable temperature control',
            ],
          },
          {
            category: 'Kitchen & Dining',
            subcategory: 'Kitchen Appliances',
            name: 'Mixing Bowls with Airtight Lids Set, 26PCS Stainless Steel Khaki Bowls with Grater Attachments Kitchen Gadgets',
            price: 255, // Note: Price is null
            dealUrl: '',
            features: [
              '26-piece set with graters',
              'Airtight lids for storage',
              'Stainless steel material',
              'Khaki finish',
              'Stackable design',
            ],
          },
          {
            category: 'Kitchen & Dining',
            subcategory: 'Kitchen Appliances',
            name: 'Mixing Bowls with Airtight Lids, Stainless Steel Mixing Bowl Set with 3 Metal Nesting Bowls, Colander & Grater',
            price: 271, // Note: Price is null
            dealUrl: '',
            features: [
              '3 nesting stainless steel bowls',
              'Includes colander and grater',
              'Airtight lids for freshness',
              'Dishwasher-safe',
              'Non-slip base',
            ],
          },
          {
            category: 'Kitchen & Dining',
            subcategory: 'Kitchen Appliances',
            name: 'Ninja NC301 CREAMi Ice Cream Maker, for Gelato, Mix-ins, Milkshakes, Sorbet, Smoothie Bowls & More, 7 One-Touch',
            price: 237, // Note: Price is null
            dealUrl: '',
            features: [
              '7 one-touch programs',
              'Makes ice cream, gelato, and sorbet',
              'Mix-in customization',
              'Dishwasher-safe parts',
              'Compact countertop design',
            ],
          },
          {
            category: 'Kitchen & Dining',
            subcategory: 'Kitchen Appliances',
            name: 'Portable Blender, Cordless, Personal Blender-for Shakes & Smoothies, BPA Free, Leakproof, USB-C Rechargeable',
            price: 99, // Note: Price is null
            dealUrl: '',
            features: [
              'Cordless and portable',
              'USB-C rechargeable battery',
              'BPA-free materials',
              'Leakproof design',
              'Powerful blending for smoothies',
            ],
          },
          {
            category: 'Kitchen & Dining',
            subcategory: 'Kitchen Appliances',
            name: 'XYJ Professional Kitchen Knife Set with High-Carbon Steel Forged Blades, Chef’s Knife, Cleaver, Carving Knife',
            price: 500, // Note: Price is null
            dealUrl: '',
            features: [
              'High-carbon steel forged blades',
              'Includes chef’s knife, cleaver, carving knife',
              'Ergonomic handles',
              'Rust-resistant',
              'Precision cutting',
            ],
          },
          {
            category: 'Kitchen & Dining',
            subcategory: 'Kitchen Appliances',
            name: 'YIHONG 7 Piece Mixing Bowls with Lids for Kitchen, Stainless Steel Mixing Bowls Set Ideal for Baking, Cooking',
            price: 300, // Note: Price is null
            dealUrl: '',
            features: [
              '7-piece stainless steel set',
              'Airtight lids for storage',
              'Stackable for space-saving',
              'Dishwasher-safe',
              'Versatile for baking and cooking',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'appliances',
    name: 'Appliances',
    icon: '🛠️',
    subcategories: [
      {
        id: 'fruit-machine',
        name: 'Fruit Machine', // Note: Subcategory name seems misleading; products are kitchen appliances
        categoryId: 'appliances',
        products: [
          {
            category: 'Appliances',
            subcategory: 'Fruit Machine',
            name: 'Basics Microwave bundle with Echo Dot',
            price: 180,
            dealUrl: '',
            features: [
              'Microwave with voice control via Echo Dot',
              'Compact design',
              'Multiple power levels',
              'Easy-to-clean interior',
              'Smart home integration',
            ],
          },
          {
            category: 'Appliances',
            subcategory: 'Fruit Machine',
            name: 'Chefman 6.3 Quart Digital Air Fryer',
            price: 160,
            dealUrl: '',
            features: [
              '6.3-quart capacity',
              'Digital temperature control',
              'Non-stick basket',
              '8 preset cooking functions',
              'Rapid air technology',
            ],
          },
          {
            category: 'Appliances',
            subcategory: 'Fruit Machine',
            name: 'Electric Hot Water Pot with Safety Lock',
            price: 55,
            dealUrl: '',
            features: [
              'Safety lock feature',
              'Rapid boil technology',
              'Stainless steel interior',
              'Auto shut-off',
              'Cordless pouring',
            ],
          },
          {
            category: 'Appliances',
            subcategory: 'Fruit Machine',
            name: 'Electric LED Digital Display Oven',
            price: 170,
            dealUrl: '',
            features: [
              'LED digital display',
              'Multiple cooking modes',
              'Adjustable temperature control',
              'Timer function',
              'Spacious interior',
            ],
          },
          {
            category: 'Appliances',
            subcategory: 'Fruit Machine',
            name: 'Hamilton Beach FlexBrew Trio Coffee Maker',
            price: 120,
            dealUrl: '',
            features: [
              '3-in-1 brewing (pod, grounds, carafe)',
              'Programmable timer',
              'Single-serve option',
              '12-cup glass carafe',
              'Auto pause and serve',
            ],
          },
          {
            category: 'Appliances',
            subcategory: 'Fruit Machine',
            name: 'Programmable Coffee Maker with glass carafe',
            price: 170,
            dealUrl: '',
            features: [
              'Programmable brewing schedule',
              '12-cup glass carafe',
              'Adjustable brew strength',
              'Auto shut-off',
              'Easy-to-clean design',
            ],
          },
          {
            category: 'Appliances',
            subcategory: 'Fruit Machine',
            name: 'Slowstar Cold Press Masticating Juice Extractor',
            price: 60,
            dealUrl: '',
            features: [
              'Cold press juicing technology',
              'Low-speed motor for nutrient retention',
              'Quiet operation',
              'Easy to assemble and clean',
              'BPA-free components',
            ],
          },
          {
            category: 'Appliances',
            subcategory: 'Fruit Machine',
            name: 'Top Freezer Apartment Size Refrigerator Stainless',
            price: 199,
            dealUrl: '',
            features: [
              'Compact apartment-size design',
              'Top freezer compartment',
              'Stainless steel finish',
              'Adjustable shelves',
              'Energy-efficient cooling',
            ],
          },
          {
            category: 'Appliances',
            subcategory: 'Fruit Machine',
            name: 'TOSHIBA Electric Rice Cooker Model 18NMFIAN',
            price: 199,
            dealUrl: '',
            features: [
              'Multiple cooking functions',
              'Non-stick inner pot',
              'Keep-warm feature',
              'Digital control panel',
              '6-cup capacity',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'books-media',
    name: 'Books & Media',
    icon: '📚',
    subcategories: [
      {
        id: 'non-fiction',
        name: 'Non-fiction',
        categoryId: 'books-media',
        products: [
          {
            category: 'Books & Media',
            subcategory: 'Non-fiction',
            name: 'Basics Ergonomic Wireless PC Mouse', // Note: Misplaced in Books & Media
            price: 60,
            dealUrl: '',
            features: [
              'Ergonomic design for comfort',
              'Wireless 2.4GHz connection',
              'Adjustable DPI settings',
              'Long battery life',
              'Plug-and-play USB receiver',
            ],
          },
          {
            category: 'Books & Media',
            subcategory: 'Non-fiction',
            name: 'Canon Digital Camera w/ 42x Optical Zoom', // Note: Misplaced in Books & Media
            price: 56,
            dealUrl: '',
            features: [
              '42x optical zoom',
              'High-resolution sensor',
              'Image stabilization',
              'Full HD video recording',
              'Wi-Fi connectivity',
            ],
          },
          {
            category: 'Books & Media',
            subcategory: 'Non-fiction',
            name: 'Edifier R1280T Powered Bookshelf Speakers', // Note: Misplaced in Books & Media
            price: 40,
            dealUrl: '',
            features: [
              '40W total power output',
              'Dual RCA inputs',
              'Adjustable bass and treble',
              'Wooden enclosure for acoustics',
              'Remote control included',
            ],
          },
          {
            category: 'Books & Media',
            subcategory: 'Non-fiction',
            name: 'JAR-OWL 2021 New PS4 Controller Gamepad', // Note: Misplaced in Books & Media
            price: 250,
            dealUrl: '',
            features: [
              'Compatible with PS4',
              'Wireless Bluetooth connection',
              'Built-in rechargeable battery',
              'Dual vibration motors',
              'Touchpad and audio jack',
            ],
          },
          {
            category: 'Books & Media',
            subcategory: 'Non-fiction',
            name: 'Naturtint Anti-Ageing CC Cream by Naturtint', // Note: Misplaced in Books & Media
            price: 240,
            dealUrl: '',
            features: [
              'Anti-ageing formula',
              'Hydrates and smooths skin',
              'Natural ingredients',
              'SPF protection',
              'Lightweight coverage',
            ],
          },
          {
            category: 'Books & Media',
            subcategory: 'Non-fiction',
            name: 'Outdoor Security Camera Wireless, 1080p Full HD', // Note: Misplaced in Books & Media
            price: 240,
            dealUrl: '',
            features: [
              '1080p Full HD resolution',
              'Wireless connectivity',
              'Night vision up to 30ft',
              'Motion detection alerts',
              'Weatherproof design',
            ],
          },
          {
            category: 'Books & Media',
            subcategory: 'Non-fiction',
            name: 'Polk Audio 100 Watt Home Theater Speakers', // Note: Misplaced in Books & Media
            price: 120,
            dealUrl: '',
            features: [
              '100W power output',
              'Dynamic audio performance',
              'Wall-mountable design',
              'Compatible with home theater systems',
              'Clear vocal reproduction',
            ],
          },
          {
            category: 'Books & Media',
            subcategory: 'Non-fiction',
            name: 'Portable Wireless Speaker with Microphone', // Note: Misplaced in Books & Media
            price: 150,
            dealUrl: '',
            features: [
              'Built-in microphone for calls',
              'Bluetooth 5.0 connectivity',
              'Portable lightweight design',
              'Up to 10 hours battery life',
              'Water-resistant build',
            ],
          },
          {
            category: 'Books & Media',
            subcategory: 'Non-fiction',
            name: 'Sony DSCHX8 High Zoom Point & Shoot Camera', // Note: Misplaced in Books & Media
            price: 110,
            dealUrl: '',
            features: [
              'High zoom capability',
              'Compact point-and-shoot design',
              'HD video recording',
              'Image stabilization',
              'Easy-to-use interface',
            ],
          },
          {
            category: 'Books & Media',
            subcategory: 'Non-fiction',
            name: 'Verbatim Optical Mouse USB Accessibility', // Note: Misplaced in Books & Media
            price: 30,
            dealUrl: '',
            features: [
              'USB plug-and-play',
              'Optical tracking technology',
              'Ergonomic shape',
              'High precision',
              'Compatible with multiple OS',
            ],
          },
        ],
      },
      {
        id: 'books-media',
        name: 'Books & Media',
        categoryId: 'books-media',
        products: [
          {
            category: null, // Note: Missing category
            subcategory: 'Books & Media',
            name: '30MP Digital Camera with 5X Optical Zoom', // Note: Misplaced in Books & Media
            price: 280,
            dealUrl: '',
            features: [
              '30MP high-resolution sensor',
              '5x optical zoom',
              'Full HD video recording',
              'Wi-Fi and Bluetooth connectivity',
              'Lightweight design',
            ],
          },
          {
            category: null,
            subcategory: 'Books & Media',
            name: 'All-in-One Wireless Color Printer for home office', // Note: Misplaced in Books & Media
            price: 60,
            dealUrl: '',
            features: [
              'Print, scan, and copy functions',
              'Wireless connectivity',
              'Color and monochrome printing',
              'Mobile printing support',
              'Compact design',
            ],
          },
          {
            category: null,
            subcategory: 'Books & Media',
            name: 'Canon Digital Camera w/ 42x Optical Zoom', // Note: Misplaced in Books & Media
            price: 56,
            dealUrl: '',
            features: [
              '42x optical zoom',
              'High-resolution sensor',
              'Image stabilization',
              'Full HD video recording',
              'Wi-Fi connectivity',
            ],
          },
          {
            category: null,
            subcategory: 'Books & Media',
            name: 'Naturtint Anti-Ageing CC Cream by Naturtint', // Note: Misplaced in Books & Media
            price: 240,
            dealUrl: '',
            features: [
              'Anti-ageing formula',
              'Hydrates and smooths skin',
              'Natural ingredients',
              'SPF protection',
              'Lightweight coverage',
            ],
          },
          {
            category: null,
            subcategory: 'Books & Media',
            name: 'Outdoor Security Camera Wireless, 1080p Full HD', // Note: Misplaced in Books & Media
            price: 240,
            dealUrl: '',
            features: [
              '1080p Full HD resolution',
              'Wireless connectivity',
              'Night vision up to 30ft',
              'Motion detection alerts',
              'Weatherproof design',
            ],
          },
          {
            category: null,
            subcategory: 'Books & Media',
            name: 'PlayStation 2 Console (Slim Line Version 1)', // Note: Misplaced in Books & Media
            price: 30,
            dealUrl: '',
            features: [
              'Slim and lightweight design',
              'Backward compatible with PS1 games',
              'DVD playback capability',
              'DualShock controller support',
              'Compact console size',
            ],
          },
          {
            category: null,
            subcategory: 'Books & Media',
            name: 'PlayStation 2 Console (Slim Line Version 1)', // Note: Duplicate product with different price
            price: 90,
            dealUrl: '',
            features: [
              'Slim and lightweight design',
              'Backward compatible with PS1 games',
              'DVD playback capability',
              'DualShock controller support',
              'Compact console size',
            ],
          },
          {
            category: null,
            subcategory: 'Books & Media',
            name: 'PlayStation 4 Console - 1TB Slim Edition', // Note: Misplaced in Books & Media
            price: 160,
            dealUrl: '',
            features: [
              '1TB storage capacity',
              'Slim design',
              'HDR gaming support',
              'Wi-Fi and Bluetooth connectivity',
              'DualShock 4 controller included',
            ],
          },
          {
            category: null,
            subcategory: 'Books & Media',
            name: 'PlayStation 5 DualSense Wireless Controller', // Note: Misplaced in Books & Media
            price: 120,
            dealUrl: '',
            features: [
              'Haptic feedback technology',
              'Adaptive triggers',
              'Built-in microphone',
              'USB-C charging',
              'Ergonomic design',
            ],
          },
          {
            category: null,
            subcategory: 'Books & Media',
            name: 'Portable Wireless Speaker with Microphone', // Note: Misplaced in Books & Media
            price: 150,
            dealUrl: '',
            features: [
              'Built-in microphone for calls',
              'Bluetooth 5.0 connectivity',
              'Portable lightweight design',
              'Up to 10 hours battery life',
              'Water-resistant build',
            ],
          },
          {
            category: null,
            subcategory: 'Books & Media',
            name: 'Sony DSCHX8 High Zoom Point & Shoot Camera', // Note: Misplaced in Books & Media
            price: 110,
            dealUrl: '',
            features: [
              'High zoom capability',
              'Compact point-and-shoot design',
              'HD video recording',
              'Image stabilization',
              'Easy-to-use interface',
            ],
          },
          {
            category: null,
            subcategory: 'Books & Media',
            name: 'Women’s 3-in-1 Winter Ski Jacket Outdoor', // Note: Misplaced in Books & Media
            price: 400,
            dealUrl: '',
            features: [
              '3-in-1 layered design',
              'Waterproof and windproof',
              'Insulated for warmth',
              'Adjustable hood and cuffs',
              'Multiple pockets for storage',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'camera-photo',
    name: 'Camera & Photo',
    icon: '📷',
    subcategories: [
      {
        id: 'digital-camera',
        name: 'Digital Camera',
        categoryId: 'camera-photo',
        products: [
          {
            category: 'Camera & Photo',
            subcategory: 'Digital Camera',
            name: 'Canon Digital Camera w/ 42x Optical Zoom',
            price: 56,
            dealUrl: '',
            features: [
              '42x optical zoom',
              'High-resolution sensor',
              'Image stabilization',
              'Full HD video recording',
              'Wi-Fi connectivity',
            ],
          },
          {
            category: 'Camera & Photo',
            subcategory: 'Digital Camera',
            name: 'Canon EF 85mm f/1.8 USM Medium Telephoto Lens',
            price: 99,
            dealUrl: '',
            features: [
              '85mm focal length',
              'f/1.8 maximum aperture',
              'Ultrasonic motor (USM) for fast autofocus',
              'Ideal for portraits',
              'Compatible with Canon DSLR cameras',
            ],
          },
          {
            category: 'Camera & Photo',
            subcategory: 'Digital Camera',
            name: 'Friendly Zoom Digital Camera, 5X Optical Zoom',
            price: 180,
            dealUrl: '',
            features: [
              '5x optical zoom',
              'User-friendly interface',
              'HD video recording',
              'Compact and lightweight',
              'Built-in flash',
            ],
          },
          {
            category: 'Camera & Photo',
            subcategory: 'Digital Camera',
            name: 'NATIONAL GEOGRAPHIC Amazing Chemistry Set - Chemistry Kit with 100+ Science Experiments', // Note: Misplaced in Camera & Photo
            price: null,
            dealUrl: '',
            features: [
              'Over 100 science experiments',
              'Educational chemistry kit',
              'Safe for kids with adult supervision',
              'Includes lab equipment',
              'Interactive learning guide',
            ],
          },
          {
            category: 'Camera & Photo',
            subcategory: 'Digital Camera',
            name: 'Naturtint Anti-Ageing CC Cream by Naturtint', // Note: Misplaced in Camera & Photo
            price: 240,
            dealUrl: '',
            features: [
              'Anti-ageing formula',
              'Hydrates and smooths skin',
              'Natural ingredients',
              'SPF protection',
              'Lightweight coverage',
            ],
          },
          {
            category: 'Camera & Photo',
            subcategory: 'Digital Camera',
            name: 'Outdoor Security Camera Wireless, 1080p Full HD', // Note: Misplaced in Camera & Photo
            price: 240,
            dealUrl: '',
            features: [
              '1080p Full HD resolution',
              'Wireless connectivity',
              'Night vision up to 30ft',
              'Motion detection alerts',
              'Weatherproof design',
            ],
          },
          {
            category: 'Camera & Photo',
            subcategory: 'Digital Camera',
            name: 'Sony DSCHX8 High Zoom Point & Shoot Camera',
            price: 110,
            dealUrl: '',
            features: [
              'High zoom capability',
              'Compact point-and-shoot design',
              'HD video recording',
              'Image stabilization',
              'Easy-to-use interface',
            ],
          },
        ],
      },
      {
        id: 'printers',
        name: 'Printers',
        categoryId: 'camera-photo',
        products: [
          {
            category: 'Digital Camera', // Note: Category should likely be Camera & Photo
            subcategory: 'Printers',
            name: '12 in 1 Solar Robot Kit, DIY Solar Power Building Kit with Solar Panel and Battery Power for Kids 8,9', // Note: Misplaced in Printers
            price: null,
            dealUrl: '',
            features: [
              '12 different robot builds',
              'Solar and battery-powered',
              'Educational STEM kit',
              'No tools required',
              'Ages 8 and up',
            ],
          },
          {
            category: 'Digital Camera',
            subcategory: 'Printers',
            name: 'Canon Digital Camera w/ 42x Optical Zoom', // Note: Misplaced in Printers
            price: 56,
            dealUrl: '',
            features: [
              '42x optical zoom',
              'High-resolution sensor',
              'Image stabilization',
              'Full HD video recording',
              'Wi-Fi connectivity',
            ],
          },
          {
            category: 'Digital Camera',
            subcategory: 'Printers',
            name: 'Canon EF 85mm f/1.8 USM Medium Telephoto Lens', // Note: Misplaced in Printers
            price: 99,
            dealUrl: '',
            features: [
              '85mm focal length',
              'f/1.8 maximum aperture',
              'Ultrasonic motor (USM) for fast autofocus',
              'Ideal for portraits',
              'Compatible with Canon DSLR cameras',
            ],
          },
          {
            category: 'Digital Camera',
            subcategory: 'Printers',
            name: 'Friendly Zoom Digital Camera, 5X Optical Zoom', // Note: Misplaced in Printers
            price: 180,
            dealUrl: '',
            features: [
              '5x optical zoom',
              'User-friendly interface',
              'HD video recording',
              'Compact and lightweight',
              'Built-in flash',
            ],
          },
          {
            category: 'Digital Camera',
            subcategory: 'Printers',
            name: 'Outdoor Security Camera Wireless, 1080p Full HD', // Note: Misplaced in Printers
            price: 240,
            dealUrl: '',
            features: [
              '1080p Full HD resolution',
              'Wireless connectivity',
              'Night vision up to 30ft',
              'Motion detection alerts',
              'Weatherproof design',
            ],
          },
          {
            category: 'Digital Camera',
            subcategory: 'Printers',
            name: 'Sony DSCHX8 High Zoom Point & Shoot Camera', // Note: Misplaced in Printers
            price: 110,
            dealUrl: '',
            features: [
              'High zoom capability',
              'Compact point-and-shoot design',
              'HD video recording',
              'Image stabilization',
              'Easy-to-use interface',
            ],
          },
        ],
      },
      {
        id: 'usbs',
        name: 'USBs',
        categoryId: 'camera-photo',
        products: [
          {
            category: 'Digital Camera', // Note: Category should likely be Camera & Photo
            subcategory: 'USBs',
            name: 'Canon Digital Camera w/ 42x Optical Zoom', // Note: Misplaced in USBs
            price: 56,
            dealUrl: '',
            features: [
              '42x optical zoom',
              'High-resolution sensor',
              'Image stabilization',
              'Full HD video recording',
              'Wi-Fi connectivity',
            ],
          },
          {
            category: 'Digital Camera',
            subcategory: 'USBs',
            name: 'Canon EF 85mm f/1.8 USM Medium Telephoto Lens', // Note: Misplaced in USBs
            price: 99,
            dealUrl: '',
            features: [
              '85mm focal length',
              'f/1.8 maximum aperture',
              'Ultrasonic motor (USM) for fast autofocus',
              'Ideal for portraits',
              'Compatible with Canon DSLR cameras',
            ],
          },
          {
            category: 'Digital Camera',
            subcategory: 'USBs',
            name: 'Friendly Zoom Digital Camera, 5X Optical Zoom', // Note: Misplaced in USBs
            price: 180,
            dealUrl: '',
            features: [
              '5x optical zoom',
              'User-friendly interface',
              'HD video recording',
              'Compact and lightweight',
              'Built-in flash',
            ],
          },
          {
            category: 'Digital Camera',
            subcategory: 'USBs',
            name: 'Sony DSCHX8 High Zoom Point & Shoot Camera', // Note: Misplaced in USBs
            price: 110,
            dealUrl: '',
            features: [
              'High zoom capability',
              'Compact point-and-shoot design',
              'HD video recording',
              'Image stabilization',
              'Easy-to-use interface',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'charging-solutions',
    name: 'Charging Solutions',
    icon: '🔋',
    subcategories: [
      {
        id: 'backup-charger',
        name: 'Backup Charger',
        categoryId: 'charging-solutions',
        products: [
          {
            category: 'Charging Solutions',
            subcategory: 'Backup Charger',
            name: 'Canon Digital Camera w/ 42x Optical Zoom', // Note: Misplaced in Charging Solutions
            price: 56,
            dealUrl: '',
            features: [
              '42x optical zoom',
              'High-resolution sensor',
              'Image stabilization',
              'Full HD video recording',
              'Wi-Fi connectivity',
            ],
          },
          {
            category: 'Charging Solutions',
            subcategory: 'Backup Charger',
            name: 'Canon EF 85mm f/1.8 USM Medium Telephoto Lens', // Note: Misplaced in Charging Solutions
            price: 99,
            dealUrl: '',
            features: [
              '85mm focal length',
              'f/1.8 maximum aperture',
              'Ultrasonic motor (USM) for fast autofocus',
              'Ideal for portraits',
              'Compatible with Canon DSLR cameras',
            ],
          },
          {
            category: 'Charging Solutions',
            subcategory: 'Backup Charger',
            name: 'Edifier R1280T Powered Bookshelf Speakers', // Note: Misplaced in Charging Solutions
            price: 40,
            dealUrl: '',
            features: [
              '40W total power output',
              'Dual RCA inputs',
              'Adjustable bass and treble',
              'Wooden enclosure for acoustics',
              'Remote control included',
            ],
          },
          {
            category: 'Charging Solutions',
            subcategory: 'Backup Charger',
            name: 'Naturtint Anti-Ageing CC Cream by Naturtint', // Note: Misplaced in Charging Solutions
            price: 240,
            dealUrl: '',
            features: [
              'Anti-ageing formula',
              'Hydrates and smooths skin',
              'Natural ingredients',
              'SPF protection',
              'Lightweight coverage',
            ],
          },
          {
            category: 'Charging Solutions',
            subcategory: 'Backup Charger',
            name: 'Outdoor Security Camera Wireless, 1080p Full HD', // Note: Misplaced in Charging Solutions
            price: 240,
            dealUrl: '',
            features: [
              '1080p Full HD resolution',
              'Wireless connectivity',
              'Night vision up to 30ft',
              'Motion detection alerts',
              'Weatherproof design',
            ],
          },
          {
            category: 'Charging Solutions',
            subcategory: 'Backup Charger',
            name: 'PlayStation 2 Console (Slim Line Version 1)', // Note: Misplaced in Charging Solutions
            price: 30,
            dealUrl: '',
            features: [
              'Slim and lightweight design',
              'Backward compatible with PS1 games',
              'DVD playback capability',
              'DualShock controller support',
              'Compact console size',
            ],
          },
          {
            category: 'Charging Solutions',
            subcategory: 'Backup Charger',
            name: 'PlayStation 2 Console (Slim Line Version 1)', // Note: Duplicate product with different price
            price: 90,
            dealUrl: '',
            features: [
              'Slim and lightweight design',
              'Backward compatible with PS1 games',
              'DVD playback capability',
              'DualShock controller support',
              'Compact console size',
            ],
          },
          {
            category: 'Charging Solutions',
            subcategory: 'Backup Charger',
            name: 'Portable Wireless Speaker with Microphone', // Note: Misplaced in Charging Solutions
            price: 150,
            dealUrl: '',
            features: [
              'Built-in microphone for calls',
              'Bluetooth 5.0 connectivity',
              'Portable lightweight design',
              'Up to 10 hours battery life',
              'Water-resistant build',
            ],
          },
          {
            category: 'Charging Solutions',
            subcategory: 'Backup Charger',
            name: 'Sony DSCHX8 High Zoom Point & Shoot Camera', // Note: Misplaced in Charging Solutions
            price: 110,
            dealUrl: '',
            features: [
              'High zoom capability',
              'Compact point-and-shoot design',
              'HD video recording',
              'Image stabilization',
              'Easy-to-use interface',
            ],
          },
          {
            category: 'Charging Solutions',
            subcategory: 'Backup Charger',
            name: 'Sony Playstation 3 160GB System', // Note: Misplaced in Charging Solutions
            price: 90,
            dealUrl: '',
            features: [
              '160GB storage capacity',
              'Blu-ray disc playback',
              'Wi-Fi connectivity',
              'DualShock 3 controller support',
              'Sleek design',
            ],
          },
          {
            category: 'Charging Solutions',
            subcategory: 'Backup Charger',
            name: 'Women’s 3-in-1 Winter Ski Jacket Outdoor', // Note: Misplaced in Charging Solutions
            price: 400,
            dealUrl: '',
            features: [
              '3-in-1 layered design',
              'Waterproof and windproof',
              'Insulated for warmth',
              'Adjustable hood and cuffs',
              'Multiple pockets for storage',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'cleaning-facility-supplies',
    name: 'Cleaning & Facility Supplies',
    icon: '🧹',
    subcategories: [
      {
        id: 'cordless-vacuums',
        name: 'Cordless Vacuums',
        categoryId: 'cleaning-facility-supplies',
        products: [
          {
            category: 'Cleaning & Facility Supplies',
            subcategory: 'Cordless Vacuums',
            name: 'Dell OptiPlex 7000 7480 All-in-One Computer', // Note: Misplaced in Cordless Vacuums
            price: 40,
            dealUrl: '',
            features: [
              'All-in-one desktop design',
              'High-performance processor',
              'Full HD display',
              'Integrated webcam',
              'Windows OS compatible',
            ],
          },
          {
            category: 'Cleaning & Facility Supplies',
            subcategory: 'Cordless Vacuums',
            name: 'Pro Gaming PC Computer Desktop Trace 4', // Note: Misplaced in Cordless Vacuums
            price: 120,
            dealUrl: '',
            features: [
              'High-performance gaming CPU',
              'Dedicated graphics card',
              'Customizable RGB lighting',
              'Multiple USB ports',
              'Windows OS pre-installed',
            ],
          },
        ],
      },
      {
        id: 'robot-vacuums',
        name: 'Robot Vacuums',
        categoryId: 'cleaning-facility-supplies',
        products: [
          {
            category: 'Cleaning & Facility Supplies',
            subcategory: 'Robot Vacuums',
            name: 'Basics Ergonomic Wireless PC Mouse', // Note: Misplaced in Robot Vacuums
            price: 60,
            dealUrl: '',
            features: [
              'Ergonomic design for comfort',
              'Wireless 2.4GHz connection',
              'Adjustable DPI settings',
              'Long battery life',
              'Plug-and-play USB receiver',
            ],
          },
          {
            category: 'Cleaning & Facility Supplies',
            subcategory: 'Robot Vacuums',
            name: 'Microsoft Surface Laptop 3-15” Touch-Screen', // Note: Misplaced in Robot Vacuums
            price: 750,
            dealUrl: '',
            features: [
              '15-inch touchscreen display',
              'High-performance processor',
              'Up to 11.5 hours battery life',
              'USB-C and USB-A ports',
              'Windows 10 OS',
            ],
          },
          {
            category: 'Cleaning & Facility Supplies',
            subcategory: 'Robot Vacuums',
            name: 'Microsoft Surface Laptop 3-15” Touch-Screen', // Note: Duplicate product with different price
            price: 950,
            dealUrl: '',
            features: [
              '15-inch touchscreen display',
              'High-performance processor',
              'Up to 11.5 hours battery life',
              'USB-C and USB-A ports',
              'Windows 10 OS',
            ],
          },
          {
            category: 'Cleaning & Facility Supplies',
            subcategory: 'Robot Vacuums',
            name: 'Microsoft Surface Laptop 3-15” Touch-Screen', // Note: Duplicate product with different price
            price: 850,
            dealUrl: '',
            features: [
              '15-inch touchscreen display',
              'High-performance processor',
              'Up to 11.5 hours battery life',
              'USB-C and USB-A ports',
              'Windows 10 OS',
            ],
          },
        ],
      },
      {
        id: 'steam-cleaners',
        name: 'Steam Cleaners',
        categoryId: 'cleaning-facility-supplies',
        products: [
          {
            category: 'Cleaning & Facility Supplies',
            subcategory: 'Steam Cleaners',
            name: 'Chromebook 14-inch Laptop, Intel Celeron N4000', // Note: Misplaced in Steam Cleaners
            price: 700,
            dealUrl: '',
            features: [
              '14-inch HD display',
              'Intel Celeron N4000 processor',
              'Up to 12 hours battery life',
              'Chrome OS',
              'Lightweight and portable',
            ],
          },
          {
            category: 'Cleaning & Facility Supplies',
            subcategory: 'Steam Cleaners',
            name: 'Chromebook 14-inch Laptop, Intel Celeron N4000', // Note: Duplicate product with different price
            price: 800,
            dealUrl: '',
            features: [
              '14-inch HD display',
              'Intel Celeron N4000 processor',
              'Up to 12 hours battery life',
              'Chrome OS',
              'Lightweight and portable',
            ],
          },
          {
            category: 'Cleaning & Facility Supplies',
            subcategory: 'Steam Cleaners',
            name: 'Chromebook 14-inch Laptop, Intel Celeron N4000', // Note: Duplicate product with different price
            price: 900,
            dealUrl: '',
            features: [
              '14-inch HD display',
              'Intel Celeron N4000 processor',
              'Up to 12 hours battery life',
              'Chrome OS',
              'Lightweight and portable',
            ],
          },
          {
            category: 'Cleaning & Facility Supplies',
            subcategory: 'Steam Cleaners',
            name: 'Chromebook 14-inch Laptop, Intel Celeron N4000', // Note: Duplicate product with different price
            price: 999,
            dealUrl: '',
            features: [
              '14-inch HD display',
              'Intel Celeron N4000 processor',
              'Up to 12 hours battery life',
              'Chrome OS',
              'Lightweight and portable',
            ],
          },
          {
            category: 'Cleaning & Facility Supplies',
            subcategory: 'Steam Cleaners',
            name: 'Dell OptiPlex 7000 7480 All-in-One Computer', // Note: Misplaced in Steam Cleaners
            price: 40,
            dealUrl: '',
            features: [
              'All-in-one desktop design',
              'High-performance processor',
              'Full HD display',
              'Integrated webcam',
              'Windows OS compatible',
            ],
          },
          {
            category: 'Cleaning & Facility Supplies',
            subcategory: 'Steam Cleaners',
            name: 'Pro Gaming PC Computer Desktop Trace 4', // Note: Misplaced in Steam Cleaners
            price: 120,
            dealUrl: '',
            features: [
              'High-performance gaming CPU',
              'Dedicated graphics card',
              'Customizable RGB lighting',
              'Multiple USB ports',
              'Windows OS pre-installed',
            ],
          },
          {
            category: 'Cleaning & Facility Supplies',
            subcategory: 'Steam Cleaners',
            name: 'Verbatim Optical Mouse USB Accessibility', // Note: Misplaced in Steam Cleaners
            price: 30,
            dealUrl: '',
            features: [
              'USB plug-and-play',
              'Optical tracking technology',
              'Ergonomic shape',
              'High precision',
              'Compatible with multiple OS',
            ],
          },
        ],
      },
      {
        id: 'upright-vacuums',
        name: 'Upright Vacuums',
        categoryId: 'cleaning-facility-supplies',
        products: [
          {
            category: 'Cleaning & Facility Supplies',
            subcategory: 'Upright Vacuums',
            name: 'Verbatim Optical Mouse USB Accessibility', // Note: Misplaced in Upright Vacuums
            price: 30,
            dealUrl: '',
            features: [
              'USB plug-and-play',
              'Optical tracking technology',
              'Ergonomic shape',
              'High precision',
              'Compatible with multiple OS',
            ],
          },
        ],
      },
      {
        id: 'wet-dry-vacuums',
        name: 'Wet/Dry Vacuums',
        categoryId: 'cleaning-facility-supplies',
        products: [
          {
            category: 'Cleaning & Facility Supplies',
            subcategory: 'Wet/Dry Vacuums',
            name: 'Microsoft Surface Laptop 3-15” Touch-Screen', // Note: Misplaced in Wet/Dry Vacuums
            price: 750,
            dealUrl: '',
            features: [
              '15-inch touchscreen display',
              'High-performance processor',
              'Up to 11.5 hours battery life',
              'USB-C and USB-A ports',
              'Windows 10 OS',
            ],
          },
          {
            category: 'Cleaning & Facility Supplies',
            subcategory: 'Wet/Dry Vacuums',
            name: 'Microsoft Surface Laptop 3-15” Touch-Screen', // Note: Duplicate product with different price
            price: 950,
            dealUrl: '',
            features: [
              '15-inch touchscreen display',
              'High-performance processor',
              'Up to 11.5 hours battery life',
              'USB-C and USB-A ports',
              'Windows 10 OS',
            ],
          },
          {
            category: 'Cleaning & Facility Supplies',
            subcategory: 'Wet/Dry Vacuums',
            name: 'Microsoft Surface Laptop 3-15” Touch-Screen', // Note: Duplicate product with different price
            price: 850,
            dealUrl: '',
            features: [
              '15-inch touchscreen display',
              'High-performance processor',
              'Up to 11.5 hours battery life',
              'USB-C and USB-A ports',
              'Windows 10 OS',
            ],
          },
        ],
      },
      {
        id: 'cleaning-facility-supplies',
        name: 'Cleaning & Facility Supplies',
        categoryId: 'cleaning-facility-supplies',
        products: [
          {
            category: null, // Note: Missing category
            subcategory: 'Cleaning & Facility Supplies',
            name: 'Basics Ergonomic Wireless PC Mouse', // Note: Misplaced in Cleaning & Facility Supplies
            price: 60,
            dealUrl: '',
            features: [
              'Ergonomic design for comfort',
              'Wireless 2.4GHz connection',
              'Adjustable DPI settings',
              'Long battery life',
              'Plug-and-play USB receiver',
            ],
          },
          {
            category: null,
            subcategory: 'Cleaning & Facility Supplies',
            name: 'Pro Gaming PC Computer Desktop Trace 4', // Note: Misplaced in Cleaning & Facility Supplies
            price: 120,
            dealUrl: '',
            features: [
              'High-performance gaming CPU',
              'Dedicated graphics card',
              'Customizable RGB lighting',
              'Multiple USB ports',
              'Windows OS pre-installed',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'communications',
    name: 'Communications',
    icon: '📱',
    subcategories: [
      {
        id: 'smartphones',
        name: 'Smartphones',
        categoryId: 'communications',
        products: [
          {
            category: 'Communications',
            subcategory: 'Smartphones',
            name: 'Android 14 Tablet,10 inch Tablet, Octa Core Processor, 10GB+64GB+512GB Expansion', // Note: Tablet in Smartphones subcategory
            price: null,
            dealUrl: '',
            features: [
              '10-inch HD display',
              'Octa-core processor',
              '10GB RAM + 64GB storage',
              'Up to 512GB expandable storage',
              'Android 14 OS',
            ],
          },
          {
            category: 'Communications',
            subcategory: 'Smartphones',
            name: 'Android Tablet, 10.1 Inch Android 14 Tablet with 1280x800 IPS HD Touch Screen, Dual Camera, 64GB Storage', // Note: Tablet in Smartphones subcategory
            price: null,
            dealUrl: '',
            features: [
              '10.1-inch IPS HD touchscreen',
              'Dual cameras (front and rear)',
              '64GB internal storage',
              'Android 14 OS',
              'Long-lasting battery',
            ],
          },
          {
            category: 'Communications',
            subcategory: 'Smartphones',
            name: 'C24 Ultra 5G Unlocked Phones, 8+256GB Android13 Smartphone Battery 6800mAh 6.8" HD Screen Unlocked Cell Phone',
            price: null,
            dealUrl: '',
            features: [
              '6.8-inch HD display',
              '8GB RAM + 256GB storage',
              '6800mAh battery',
              '5G connectivity',
              'Android 13 OS',
            ],
          },
          {
            category: 'Communications',
            subcategory: 'Smartphones',
            name: 'Samsung Galaxy S24 Ultra Cell Phone, 512GB AI Smartphone, Unlocked Android, 200MP, 100x Zoom Cameras',
            price: null,
            dealUrl: '',
            features: [
              '200MP main camera',
              '100x zoom capability',
              '512GB storage',
              'AI-enhanced features',
              'Unlocked for all carriers',
            ],
          },
          {
            category: 'Communications',
            subcategory: 'Smartphones',
            name: 'SAMSUNG Galaxy Z Flip 6 AI Cell Phone, 256GB Unlocked Android Smartphone, Foldable',
            price: null,
            dealUrl: '',
            features: [
              'Foldable AMOLED display',
              '256GB storage',
              'AI-powered features',
              'Compact design when folded',
              'Unlocked for all carriers',
            ],
          },
          {
            category: 'Communications',
            subcategory: 'Smartphones',
            name: 'Xiaomi Redmi Note 13 Pro 5G Global Version (256GB + 8GB) 6.67" 200MP',
            price: null,
            dealUrl: '',
            features: [
              '6.67-inch AMOLED display',
              '200MP camera system',
              '8GB RAM + 256GB storage',
              '5G connectivity',
              'Fast charging support',
            ],
          },
          {
            category: 'Communications',
            subcategory: 'Smartphones',
            name: 'Xiaomi Redmi Note 13 Pro+ 5G (256GB + 8GB) 6.67" 200Mp Triple',
            price: null,
            dealUrl: '',
            features: [
              '6.67-inch AMOLED display',
              '200MP triple camera system',
              '8GB RAM + 256GB storage',
              '5G connectivity',
              'High-capacity battery',
            ],
          },
        ],
      },
      {
        id: 'tablets',
        name: 'Tablets',
        categoryId: 'communications',
        products: [
          {
            category: 'Communications',
            subcategory: 'Tablets',
            name: 'Android 14 Tablet,10 inch Tablet, Octa Core Processor, 10GB+64GB+512GB Expansion',
            price: null,
            dealUrl: '',
            features: [
              '10-inch HD display',
              'Octa-core processor',
              '10GB RAM + 64GB storage',
              'Up to 512GB expandable storage',
              'Android 14 OS',
            ],
          },
          {
            category: 'Communications',
            subcategory: 'Tablets',
            name: 'Android Tablet, 10.1 Inch Android 14 Tablet with 1280x800 IPS HD Touch Screen, Dual Camera, 64GB Storage',
            price: null,
            dealUrl: '',
            features: [
              '10.1-inch IPS HD touchscreen',
              'Dual cameras (front and rear)',
              '64GB internal storage',
              'Android 14 OS',
              'Long-lasting battery',
            ],
          },
          {
            category: 'Communications',
            subcategory: 'Tablets',
            name: 'Samsung Galaxy S24 Ultra Cell Phone, 512GB AI Smartphone, Unlocked Android, 200MP, 100x Zoom Cameras', // Note: Smartphone in Tablets subcategory
            price: null,
            dealUrl: '',
            features: [
              '200MP main camera',
              '100x zoom capability',
              '512GB storage',
              'AI-enhanced features',
              'Unlocked for all carriers',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'computer-accessories',
    name: 'Computer & Accessories',
    icon: '💻',
    subcategories: [
      {
        id: 'cable-ties',
        name: 'Cable Ties',
        categoryId: 'computer-accessories',
        products: [
          {
            category: 'Computer & Accessories',
            subcategory: 'Cable Ties',
            name: 'Canon Digital Camera w/ 42x Optical Zoom', // Note: Misplaced in Cable Ties
            price: 56,
            dealUrl: '',
            features: [
              '42x optical zoom',
              'High-resolution sensor',
              'Image stabilization',
              'Full HD video recording',
              'Wi-Fi connectivity',
            ],
          },
          {
            category: 'Computer & Accessories',
            subcategory: 'Cable Ties',
            name: 'Canon EF 85mm f/1.8 USM Medium Telephoto Lens', // Note: Misplaced in Cable Ties
            price: 99,
            dealUrl: '',
            features: [
              '85mm focal length',
              'f/1.8 maximum aperture',
              'Ultrasonic motor (USM) for fast autofocus',
              'Ideal for portraits',
              'Compatible with Canon DSLR cameras',
            ],
          },
          {
            category: 'Computer & Accessories',
            subcategory: 'Cable Ties',
            name: 'Friendly Zoom Digital Camera, 5X Optical Zoom', // Note: Misplaced in Cable Ties
            price: 180,
            dealUrl: '',
            features: [
              '5x optical zoom',
              'User-friendly interface',
              'HD video recording',
              'Compact and lightweight',
              'Built-in flash',
            ],
          },
          {
            category: 'Computer & Accessories',
            subcategory: 'Cable Ties',
            name: 'Naturtint Anti-Ageing CC Cream by Naturtint', // Note: Misplaced in Cable Ties
            price: 240,
            dealUrl: '',
            features: [
              'Anti-ageing formula',
              'Hydrates and smooths skin',
              'Natural ingredients',
              'SPF protection',
              'Lightweight coverage',
            ],
          },
          {
            category: 'Computer & Accessories',
            subcategory: 'Cable Ties',
            name: 'Outdoor Security Camera Wireless, 1080p Full HD', // Note: Misplaced in Cable Ties
            price: 240,
            dealUrl: '',
            features: [
              '1080p Full HD resolution',
              'Wireless connectivity',
              'Night vision up to 30ft',
              'Motion detection alerts',
              'Weatherproof design',
            ],
          },
          {
            category: 'Computer & Accessories',
            subcategory: 'Cable Ties',
            name: 'Sony DSCHX8 High Zoom Point & Shoot Camera', // Note: Misplaced in Cable Ties
            price: 110,
            dealUrl: '',
            features: [
              'High zoom capability',
              'Compact point-and-shoot design',
              'HD video recording',
              'Image stabilization',
              'Easy-to-use interface',
            ],
          },
          {
            category: 'Computer & Accessories',
            subcategory: 'Cable Ties',
            name: 'Women’s 3-in-1 Winter Ski Jacket Outdoor', // Note: Misplaced in Cable Ties
            price: 400,
            dealUrl: '',
            features: [
              '3-in-1 layered design',
              'Waterproof and windproof',
              'Insulated for warmth',
              'Adjustable hood and cuffs',
              'Multiple pockets for storage',
            ],
          },
        ],
      },
      {
        id: 'laptops',
        name: 'Laptops',
        categoryId: 'computer-accessories',
        products: [
          {
            category: 'Computer & Accessories',
            subcategory: 'Laptops',
            name: 'Alienware M16 R2 Gaming Laptop, Intel Ultra 7-155H, 64 GB DDR5 Ram, 2 TB PCle SSD, 16" QHD+ (2560x1600), Nvidia Geforce RTX 4070, W11 Home, Black',
            price: null,
            dealUrl: '',
            features: [
              '16-inch QHD+ display',
              'Intel Ultra 7-155H processor',
              '64GB DDR5 RAM',
              '2TB PCIe SSD',
              'NVIDIA GeForce RTX 4070 GPU',
            ],
          },
          {
            category: 'Computer & Accessories',
            subcategory: 'Laptops',
            name: 'Canon Digital Camera w/ 42x Optical Zoom', // Note: Misplaced in Laptops
            price: 56,
            dealUrl: '',
            features: [
              '42x optical zoom',
              'High-resolution sensor',
              'Image stabilization',
              'Full HD video recording',
              'Wi-Fi connectivity',
            ],
          },
          {
            category: 'Computer & Accessories',
            subcategory: 'Laptops',
            name: 'Canon EF 85mm f/1.8 USM Medium Telephoto Lens', // Note: Misplaced in Laptops
            price: 99,
            dealUrl: '',
            features: [
              '85mm focal length',
              'f/1.8 maximum aperture',
              'Ultrasonic motor (USM) for fast autofocus',
              'Ideal for portraits',
              'Compatible with Canon DSLR cameras',
            ],
          },
          {
            category: 'Computer & Accessories',
            subcategory: 'Laptops',
            name: 'Doctor Jupiter Girls’ Ultimate Science Kit for Girls Ages 8 - 12', // Note: Misplaced in Laptops
            price: null,
            dealUrl: '',
            features: [
              'Educational STEM kit',
              'Designed for girls ages 8-12',
              'Multiple science experiments',
              'Safe and easy-to-use materials',
              'Interactive learning guide',
            ],
          },
          {
            category: 'Computer & Accessories',
            subcategory: 'Laptops',
            name: 'Friendly Zoom Digital Camera, 5X Optical Zoom', // Note: Misplaced in Laptops
            price: 180,
            dealUrl: '',
            features: [
              '5x optical zoom',
              'User-friendly interface',
              'HD video recording',
              'Compact and lightweight',
              'Built-in flash',
            ],
          },
          {
            category: 'Computer & Accessories',
            subcategory: 'Laptops',
            name: 'Naturtint Anti-Ageing CC Cream by Naturtint', // Note: Misplaced in Laptops
            price: 240,
            dealUrl: '',
            features: [
              'Anti-ageing formula',
              'Hydrates and smooths skin',
              'Natural ingredients',
              'SPF protection',
              'Lightweight coverage',
            ],
          },
          {
            category: 'Computer & Accessories',
            subcategory: 'Laptops',
            name: 'Outdoor Security Camera Wireless, 1080p Full HD', // Note: Misplaced in Laptops
            price: 240,
            dealUrl: '',
            features: [
              '1080p Full HD resolution',
              'Wireless connectivity',
              'Night vision up to 30ft',
              'Motion detection alerts',
              'Weatherproof design',
            ],
          },
          {
            category: 'Computer & Accessories',
            subcategory: 'Laptops',
            name: 'Sony DSCHX8 High Zoom Point & Shoot Camera', // Note: Misplaced in Laptops
            price: 110,
            dealUrl: '',
            features: [
              'High zoom capability',
              'Compact point-and-shoot design',
              'HD video recording',
              'Image stabilization',
              'Easy-to-use interface',
            ],
          },
          {
            category: 'Computer & Accessories',
            subcategory: 'Laptops',
            name: 'Women’s 3-in-1 Winter Ski Jacket Outdoor', // Note: Misplaced in Laptops
            price: 400,
            dealUrl: '',
            features: [
              '3-in-1 layered design',
              'Waterproof and windproof',
              'Insulated for warmth',
              'Adjustable hood and cuffs',
              'Multiple pockets for storage',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'kids-play-fantastic-creature-figures',
    name: "Kids' Play Fantastic Creature Figures",
    icon: '🧸',
    subcategories: [
      {
        id: 'computer-accessories',
        name: 'Computer & Accessories', // Note: Misplaced subcategory for kids’ toys
        categoryId: 'kids-play-fantastic-creature-figures',
        products: [
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Computer & Accessories',
            name: 'Alienware M16 R2 Gaming Laptop, Intel Ultra 7-155H, 64 GB DDR5 Ram, 2 TB PCle SSD, 16" QHD+ (2560x1600), Nvidia Geforce RTX 4070, W11 Home, Black', // Note: Misplaced in kids’ category
            price: null,
            dealUrl: '',
            features: [
              '16-inch QHD+ display',
              'Intel Ultra 7-155H processor',
              '64GB DDR5 RAM',
              '2TB PCIe SSD',
              'NVIDIA GeForce RTX 4070 GPU',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Computer & Accessories',
            name: 'Canon Digital Camera w/ 42x Optical Zoom', // Note: Misplaced in kids’ category
            price: 56,
            dealUrl: '',
            features: [
              '42x optical zoom',
              'High-resolution sensor',
              'Image stabilization',
              'Full HD video recording',
              'Wi-Fi connectivity',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Computer & Accessories',
            name: 'Canon EF 85mm f/1.8 USM Medium Telephoto Lens', // Note: Misplaced in kids’ category
            price: 99,
            dealUrl: '',
            features: [
              '85mm focal length',
              'f/1.8 maximum aperture',
              'Ultrasonic motor (USM) for fast autofocus',
              'Ideal for portraits',
              'Compatible with Canon DSLR cameras',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Computer & Accessories',
            name: 'Friendly Zoom Digital Camera, 5X Optical Zoom', // Note: Misplaced in kids’ category
            price: 180,
            dealUrl: '',
            features: [
              '5x optical zoom',
              'User-friendly interface',
              'HD video recording',
              'Compact and lightweight',
              'Built-in flash',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Computer & Accessories',
            name: 'Outdoor Security Camera Wireless, 1080p Full HD', // Note: Misplaced in kids’ category
            price: 240,
            dealUrl: '',
            features: [
              '1080p Full HD resolution',
              'Wireless connectivity',
              'Night vision up to 30ft',
              'Motion detection alerts',
              'Weatherproof design',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Computer & Accessories',
            name: 'Sony DSCHX8 High Zoom Point & Shoot Camera', // Note: Misplaced in kids’ category
            price: 110,
            dealUrl: '',
            features: [
              'High zoom capability',
              'Compact point-and-shoot design',
              'HD video recording',
              'Image stabilization',
              'Easy-to-use interface',
            ],
          },
        ],
      },
      {
        id: 'electronic-cooker',
        name: 'Electronic Cooker',
        categoryId: 'kids-play-fantastic-creature-figures',
        products: [
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Electronic Cooker',
            name: 'Basics Microwave bundle with Echo Dot', // Note: Misplaced in kids’ category
            price: 180,
            dealUrl: '',
            features: [
              'Microwave with voice control via Echo Dot',
              'Compact design',
              'Multiple power levels',
              'Easy-to-clean interior',
              'Smart home integration',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Electronic Cooker',
            name: 'Chefman 6.3 Quart Digital Air Fryer', // Note: Misplaced in kids’ category
            price: 160,
            dealUrl: '',
            features: [
              '6.3-quart capacity',
              'Digital temperature control',
              'Non-stick basket',
              '8 preset cooking functions',
              'Rapid air technology',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Electronic Cooker',
            name: 'Electric Hot Water Pot with Safety Lock', // Note: Misplaced in kids’ category
            price: 55,
            dealUrl: '',
            features: [
              'Safety lock feature',
              'Rapid boil technology',
              'Stainless steel interior',
              'Auto shut-off',
              'Cordless pouring',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Electronic Cooker',
            name: 'Electric LED Digital Display Oven', // Note: Misplaced in kids’ category
            price: 170,
            dealUrl: '',
            features: [
              'LED digital display',
              'Multiple cooking modes',
              'Adjustable temperature control',
              'Timer function',
              'Spacious interior',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Electronic Cooker',
            name: 'Hamilton Beach FlexBrew Trio Coffee Maker', // Note: Misplaced in kids’ category
            price: 120,
            dealUrl: '',
            features: [
              '3-in-1 brewing (pod, grounds, carafe)',
              'Programmable timer',
              'Single-serve option',
              '12-cup glass carafe',
              'Auto pause and serve',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Electronic Cooker',
            name: 'Programmable Coffee Maker with glass carafe', // Note: Misplaced in kids’ category
            price: 170,
            dealUrl: '',
            features: [
              'Programmable brewing schedule',
              '12-cup glass carafe',
              'Adjustable brew strength',
              'Auto shut-off',
              'Easy-to-clean design',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Electronic Cooker',
            name: 'Slowstar Cold Press Masticating Juice Extractor', // Note: Misplaced in kids’ category
            price: 60,
            dealUrl: '',
            features: [
              'Cold press juicing technology',
              'Low-speed motor for nutrient retention',
              'Quiet operation',
              'Easy to assemble and clean',
              'BPA-free components',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Electronic Cooker',
            name: 'Top Freezer Apartment Size Refrigerator Stainless', // Note: Misplaced in kids’ category
            price: 199,
            dealUrl: '',
            features: [
              'Compact apartment-size design',
              'Top freezer compartment',
              'Stainless steel finish',
              'Adjustable shelves',
              'Energy-efficient cooling',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Electronic Cooker',
            name: 'TOSHIBA Electric Rice Cooker Model 18NMFIAN', // Note: Misplaced in kids’ category
            price: 199,
            dealUrl: '',
            features: [
              'Multiple cooking functions',
              'Non-stick inner pot',
              'Keep-warm feature',
              'Digital control panel',
              '6-cup capacity',
            ],
          },
        ],
      },
      {
        id: 'fridge',
        name: 'Fridge',
        categoryId: 'kids-play-fantastic-creature-figures',
        products: [
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Fridge',
            name: '18000 BTU Mini Split Ductless Air Conditioner', // Note: Misplaced in kids’ category
            price: 500,
            dealUrl: '',
            features: [
              '18000 BTU cooling capacity',
              'Ductless mini-split system',
              'Energy-efficient operation',
              'Remote control included',
              'Quiet performance',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Fridge',
            name: 'Chefman 6.3 Quart Digital Air Fryer', // Note: Misplaced in kids’ category
            price: 160,
            dealUrl: '',
            features: [
              '6.3-quart capacity',
              'Digital temperature control',
              'Non-stick basket',
              '8 preset cooking functions',
              'Rapid air technology',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Fridge',
            name: 'LG Ductless Air Conditioning Single-Zone', // Note: Misplaced in kids’ category
            price: 150,
            dealUrl: '',
            features: [
              'Single-zone cooling',
              'Ductless design',
              'Energy-saving inverter technology',
              'Remote control operation',
              'Low noise levels',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Fridge',
            name: 'Panda Portable Washing Machine, 10lbs Capacity', // Note: Misplaced in kids’ category
            price: 100,
            dealUrl: '',
            features: [
              '10lbs laundry capacity',
              'Portable and compact design',
              'Multiple wash programs',
              'Transparent lid',
              'Easy-to-use controls',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Fridge',
            name: 'Portable Washing Machine, 11lbs Capacity', // Note: Misplaced in kids’ category
            price: 120,
            dealUrl: '',
            features: [
              '11lbs laundry capacity',
              'Compact and portable',
              'Multiple wash cycles',
              'Energy-efficient operation',
              'User-friendly interface',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Fridge',
            name: 'Robot Vacuum with Automatic Dirt Disposal', // Note: Misplaced in kids’ category
            price: 250,
            dealUrl: '',
            features: [
              'Automatic dirt disposal',
              'Smart navigation technology',
              'Wi-Fi connectivity',
              'Self-charging',
              'Compatible with voice assistants',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Fridge',
            name: 'Top Freezer Apartment Size Refrigerator Stainless', // Note: Misplaced in kids’ category
            price: 199,
            dealUrl: '',
            features: [
              'Compact apartment-size design',
              'Top freezer compartment',
              'Stainless steel finish',
              'Adjustable shelves',
              'Energy-efficient cooling',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Fridge',
            name: 'Unicorn Terrarium Kit for Kids, Unicorn Toys for Girls Age 4-6 with 16 Modes LED Remote Night Light', // Note: More appropriate for kids’ category
            price: null,
            dealUrl: '',
            features: [
              'Unicorn-themed terrarium',
              '16-mode LED night light',
              'Remote control included',
              'Educational craft kit',
              'Safe for ages 4-6',
            ],
          },
        ],
      },
      {
        id: 'headphone-accessories',
        name: 'Headphone Accessories',
        categoryId: 'kids-play-fantastic-creature-figures',
        products: [
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Headphone Accessories',
            name: '30MP Digital Camera with 5X Optical Zoom', // Note: Misplaced in kids’ category
            price: 280,
            dealUrl: '',
            features: [
              '30MP high-resolution sensor',
              '5x optical zoom',
              'Full HD video recording',
              'Wi-Fi and Bluetooth connectivity',
              'Lightweight design',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Headphone Accessories',
            name: 'All-in-One Wireless Color Printer for home office', // Note: Misplaced in kids’ category
            price: 60,
            dealUrl: '',
            features: [
              'Print, scan, and copy functions',
              'Wireless connectivity',
              'Color and monochrome printing',
              'Mobile printing support',
              'Compact design',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Headphone Accessories',
            name: 'Basics Ergonomic Wireless PC Mouse', // Note: Misplaced in kids’ category
            price: 60,
            dealUrl: '',
            features: [
              'Ergonomic design for comfort',
              'Wireless 2.4GHz connection',
              'Adjustable DPI settings',
              'Long battery life',
              'Plug-and-play USB receiver',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Headphone Accessories',
            name: 'Canon Digital Camera w/ 42x Optical Zoom', // Note: Misplaced in kids’ category
            price: 56,
            dealUrl: '',
            features: [
              '42x optical zoom',
              'High-resolution sensor',
              'Image stabilization',
              'Full HD video recording',
              'Wi-Fi connectivity',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Headphone Accessories',
            name: 'DualShock Wireless Controller for PlayStation', // Note: Misplaced in kids’ category
            price: 39,
            dealUrl: 'https://themeforest.net/user/skygroup/portfolio',
            features: [
              'Wireless Bluetooth connectivity',
              'Dual vibration motors',
              'Touchpad and motion sensors',
              'Built-in rechargeable battery',
              'Compatible with PlayStation consoles',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Headphone Accessories',
            name: 'Edifier R1280T Powered Bookshelf Speakers', // Note: Misplaced in kids’ category
            price: 40,
            dealUrl: '',
            features: [
              '40W total power output',
              'Dual RCA inputs',
              'Adjustable bass and treble',
              'Wooden enclosure for acoustics',
              'Remote control included',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Headphone Accessories',
            name: 'JAR-OWL 2021 New PS4 Controller Gamepad', // Note: Misplaced in kids’ category
            price: 250,
            dealUrl: '',
            features: [
              'Compatible with PS4',
              'Wireless Bluetooth connection',
              'Built-in rechargeable battery',
              'Dual vibration motors',
              'Touchpad and audio jack',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Headphone Accessories',
            name: 'Naturtint Anti-Ageing CC Cream by Naturtint', // Note: Misplaced in kids’ category
            price: 240,
            dealUrl: '',
            features: [
              'Anti-ageing formula',
              'Hydrates and smooths skin',
              'Natural ingredients',
              'SPF protection',
              'Lightweight coverage',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Headphone Accessories',
            name: 'Outdoor Security Camera Wireless, 1080p Full HD', // Note: Misplaced in kids’ category
            price: 240,
            dealUrl: '',
            features: [
              '1080p Full HD resolution',
              'Wireless connectivity',
              'Night vision up to 30ft',
              'Motion detection alerts',
              'Weatherproof design',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Headphone Accessories',
            name: 'Polk Audio 100 Watt Home Theater Speakers', // Note: Misplaced in kids’ category
            price: 120,
            dealUrl: '',
            features: [
              '100W power output',
              'Dynamic audio performance',
              'Wall-mountable design',
              'Compatible with home theater systems',
              'Clear vocal reproduction',
            ],
          },
          {
            category: "Kids' Play Fantastic Creature Figures",
            subcategory: 'Headphone Accessories',
            name: 'SamSung Galaxy Tab A- 10.1", Wifi Tablet', // Note: Misplaced in kids’ category
            price: 299,
            dealUrl: '',
            features: [
              '10.1-inch HD display',
              'Wi-Fi connectivity',
              'Long-lasting battery',
              '64GB storage',
              'Android OS',
            ],
          },
        ],
      },
    ],
  },
];

// Example usage:
// import { categories } from './data/categories';
// console.log(categories)
