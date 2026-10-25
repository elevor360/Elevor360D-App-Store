// Public catalogue: five licensed paid apps and seven free apps.
// To add more, update this list or use the private manager.
const PRODUCTS = [
  {
    "id": "moving",
    "name": "Moving Box Tracker",
    "category": "Personal",
    "icon": "📦",
    "price": 6,
    "description": "Number your moving boxes and quickly find what is inside.",
    "payhipUrl": "https://payhip.com/b/LMYwG",
    "image": "",
    "features": [
      "Numbered box inventory",
      "Find belongings quickly",
      "Backup and restore"
    ],
    "instructions": "After purchase, download your installation PDF from Payhip. Open the app link in the PDF, then enter the personal licence key sent separately by email. Your licence allows up to two devices. After activation, install from Chrome and use offline. Keep regular backups of your app records."
  },
  {
    "id": "painter",
    "name": "Painter & Decorator Quote Pro",
    "category": "Business",
    "icon": "🎨",
    "price": 19.99,
    "description": "Prepare and organise professional decorating quotations.",
    "payhipUrl": "https://payhip.com/b/01xak",
    "image": "",
    "features": [
      "Create customer quotations",
      "Manage decorating jobs",
      "Keep business records"
    ],
    "instructions": "After purchase, download your installation PDF from Payhip. Open the app link in the PDF, then enter the personal licence key sent separately by email. Your licence allows up to two devices. After activation, install from Chrome and use offline. Keep regular backups of your app records."
  },
  {
    "id": "gardener",
    "name": "Gardener Quote Pro",
    "category": "Business",
    "icon": "🌿",
    "price": 19.99,
    "description": "Create and manage quotations for gardening services.",
    "payhipUrl": "https://payhip.com/b/XVMf4",
    "image": "",
    "features": [
      "Prepare gardening quotations",
      "Manage customers and services",
      "Keep records organised"
    ],
    "instructions": "After purchase, download your installation PDF from Payhip. Open the app link in the PDF, then enter the personal licence key sent separately by email. Your licence allows up to two devices. After activation, install from Chrome and use offline. Keep regular backups of your app records."
  },
  {
    "id": "fishing",
    "name": "Fishing Buddy Pro",
    "category": "Personal",
    "icon": "🎣",
    "price": 24.99,
    "description": "Record fishing trips, catches and fishing information.",
    "payhipUrl": "https://payhip.com/b/9Aq7l",
    "image": "",
    "features": [
      "Log fishing sessions and catches",
      "Review saved records",
      "Use offline after activation"
    ],
    "instructions": "After purchase, download your installation PDF from Payhip. Open the app link in the PDF, then enter the personal licence key sent separately by email. Your licence allows up to two devices. After activation, install from Chrome and use offline. Keep regular backups of your app records."
  },
  {
    "id": "wedding",
    "name": "Wedding Planner Pro",
    "category": "Personal",
    "icon": "💍",
    "price": 24.99,
    "description": "Organise wedding plans, tasks, budgets, guests and important details.",
    "payhipUrl": "https://payhip.com/b/bDAnO",
    "image": "",
    "features": [
      "Wedding tasks and planning",
      "Guest and budget organisation",
      "Save records and work offline"
    ],
    "instructions": "After purchase, download your installation PDF from Payhip. Open the app link in the PDF, then enter the personal licence key sent separately by email. Your licence allows up to two devices. After activation, install from Chrome and use offline. Keep regular backups of your app records."
  },
  {
    "id": "localdeals",
    "name": "Local Deals",
    "category": "Free",
    "icon": "🏷️",
    "price": 0,
    "description": "Discover offers from participating local businesses.",
    "freeUrl": "https://elevor360.github.io/local-deals-Customer-V2.6-with-ads/",
    "payhipUrl": "",
    "image": "",
    "features": []
  },
  {
    "id": "iona",
    "name": "Iona Cruise Companion",
    "category": "Free",
    "icon": "🚢",
    "price": 0,
    "description": "Plan and organise your Iona cruise.",
    "freeUrl": "https://elevor360.github.io/iona-cruise-companion/",
    "payhipUrl": "",
    "image": "",
    "features": []
  },
  {
    "id": "ventura",
    "name": "Ventura Cruise Companion",
    "category": "Free",
    "icon": "🚢",
    "price": 0,
    "description": "A free cruise companion for P&O Ventura passengers.",
    "freeUrl": "https://elevor360.github.io/Ventura-Cruise-app/",
    "payhipUrl": "",
    "image": "",
    "features": []
  },
  {
    "id": "britannia",
    "name": "Britannia Cruise Companion",
    "category": "Free",
    "icon": "🚢",
    "price": 0,
    "description": "Plan and organise your P&O Britannia holiday.",
    "freeUrl": "https://elevor360.github.io/Elevor360D-Britannia-Cruise-Companion/",
    "payhipUrl": "",
    "image": "",
    "features": []
  },
  {
    "id": "arvia",
    "name": "Arvia Cruise Companion",
    "category": "Free",
    "icon": "🚢",
    "price": 0,
    "description": "A free companion for your P&O Arvia holiday.",
    "freeUrl": "https://elevor360.github.io/Elevor360D-Arvia-Cruise-Companion/",
    "payhipUrl": "",
    "image": "",
    "features": []
  },
  {
    "id": "azura",
    "name": "Azura Cruise Companion",
    "category": "Free",
    "icon": "🌊",
    "price": 0,
    "description": "Plan and organise your Azura cruise.",
    "freeUrl": "https://elevor360.github.io/Elevor360D-Azura-Cruise-Companion/",
    "payhipUrl": "",
    "image": "",
    "features": []
  },
  {
    "id": "arcadia",
    "name": "Arcadia Cruise Companion",
    "category": "Free",
    "icon": "🛳️",
    "price": 0,
    "description": "A practical companion for Arcadia cruises.",
    "freeUrl": "https://elevor360.github.io/Elevor360D-Arcadia-Cruise-Companion/",
    "payhipUrl": "",
    "image": "",
    "features": []
  }
];
