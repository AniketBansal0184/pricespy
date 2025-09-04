import { Store } from "@/types";

export const stores: Store[] = [
  {
    id: "store-1",
    name: "TechHub Electronics",
    address: "123 Main St, Cityville",
    latitude: 40.7128,
    longitude: -74.0060,
    phone: "(555) 123-4567",
    hours: "9 AM - 9 PM",
    subcategories: [
      "kitchen-appliances",
      "digital-camera",
      "smartphones",
      "laptops"
    ],
    isOffline: true
  },
  {
    id: "store-2",
    name: "Home & Kitchen Depot",
    address: "456 Oak Ave, Townsville",
    latitude: 40.7589,
    longitude: -73.9851,
    phone: "(555) 234-5678",
    hours: "8 AM - 8 PM",
    subcategories: [
      "kitchen-appliances",
      "cordless-vacuums",
      "robot-vacuums",
      "steam-cleaners"
    ],
    isOffline: true
  },
  {
    id: "store-3",
    name: "Gadget World",
    address: "789 Pine Rd, Villagetown",
    latitude: 40.7505,
    longitude: -73.9934,
    phone: "(555) 345-6789",
    hours: "10 AM - 10 PM",
    subcategories: [
      "digital-camera",
      "printers",
      "usbs",
      "smartphones",
      "tablets"
    ],
    isOffline: true
  },
  {
    id: "store-4",
    name: "Appliance Center",
    address: "321 Elm St, Boroughburg",
    latitude: 40.7282,
    longitude: -73.7949,
    phone: "(555) 456-7890",
    hours: "9 AM - 7 PM",
    subcategories: [
      "kitchen-appliances",
      "backup-charger",
      "cable-ties"
    ],
    isOffline: true
  },
  {
    id: "store-5",
    name: "Kids Play Zone",
    address: "654 Maple Ln, Kidstown",
    latitude: 40.7831,
    longitude: -73.9712,
    phone: "(555) 567-8901",
    hours: "10 AM - 6 PM",
    subcategories: [
      "computer-accessories",
      "electronic-cooker",
      "fridge",
      "headphone-accessories"
    ],
    isOffline: true
  }
];
