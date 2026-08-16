export const providerData = {
  id: 1,

  ownerName: "Rajesh Sharma",

  businessName: "Raj Electric Works",

  category: "Electrician",

  location: "Chandrapur, Maharashtra",

  phone: "+91 9876543210",

  whatsapp: "919876543210",

  email: "raj@example.com",

  rating: 4.8,

  reviews: 126,

  verified: true,

  available: true,

  profileCompletion: 82,

  description:
    "Professional electrician providing home electrical repair and installation services in Chandrapur.",

  stats: {
    todayRequests: 8,
    pendingRequests: 3,
    completedJobs: 47,
    totalReviews: 126,
  },

  services: [
    {
      id: 1,
      name: "Fan Repair",
      price: 250,
    },
    {
      id: 2,
      name: "Home Wiring",
      price: 500,
    },
    {
      id: 3,
      name: "Switch Board Repair",
      price: 200,
    },
  ],

  requests: [
    {
      id: "REQ001",
      customerName: "Amit Patil",
      service: "Fan Repair",
      location: "Tukum, Chandrapur",
      date: "Today",
      time: "10:30 AM",
      status: "Pending",
      phone: "9876543210",
    },

    {
      id: "REQ002",
      customerName: "Rohit Meshram",
      service: "Switch Board Repair",
      location: "Bengali Camp, Chandrapur",
      date: "Today",
      time: "12:00 PM",
      status: "Accepted",
      phone: "9876500000",
    },

    {
      id: "REQ003",
      customerName: "Sneha Thakur",
      service: "Home Wiring",
      location: "Ram Nagar, Chandrapur",
      date: "Today",
      time: "04:30 PM",
      status: "Pending",
      phone: "9999999999",
    },
  ],
};