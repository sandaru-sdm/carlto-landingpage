// Car Data
const carsData = [
    {
        id: 1,
        brand: "Toyota",
        name: "Land Cruiser Prado",
        model: "2020",
        price: "$35,000",
        orderedDate: "2024-10-15",
        exportedDate: "2024-11-05",
        receivedDate: "2024-12-20",
        mileage: "45,000 km",
        engine: "2.8L Diesel",
        transmission: "Automatic",
        color: "Pearl White",
        status: "Delivered",
        destination: "Sri Lanka",
        images: [
            "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
            "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
            "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80"
        ]
    },
    {
        id: 2,
        brand: "Honda",
        name: "Civic Type R",
        model: "2021",
        price: "$28,500",
        orderedDate: "2024-11-01",
        exportedDate: "2024-11-20",
        receivedDate: "2025-01-05",
        mileage: "28,000 km",
        engine: "2.0L Turbo",
        transmission: "Manual",
        color: "Championship White",
        status: "Delivered",
        destination: "UAE",
        images: [
            "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
            "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
            "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80"
        ]
    },
    {
        id: 3,
        brand: "Nissan",
        name: "GT-R R35",
        model: "2019",
        price: "$65,000",
        orderedDate: "2024-09-20",
        exportedDate: "2024-10-15",
        receivedDate: "2024-11-30",
        mileage: "32,000 km",
        engine: "3.8L V6 Twin-Turbo",
        transmission: "Dual-Clutch",
        color: "Gun Metallic",
        status: "Delivered",
        destination: "Australia",
        images: [
            "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
            "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"
        ]
    },
    {
        id: 4,
        brand: "Toyota",
        name: "Alphard",
        model: "2022",
        price: "$48,000",
        orderedDate: "2024-11-10",
        exportedDate: "2024-12-01",
        receivedDate: "2025-01-15",
        mileage: "15,000 km",
        engine: "2.5L Hybrid",
        transmission: "CVT",
        color: "Black",
        status: "Delivered",
        destination: "Singapore",
        images: [
            "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80",
            "https://images.unsplash.com/photo-1562519819-019d3e998cdb?w=800&q=80",
            "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80"
        ]
    },
    {
        id: 5,
        brand: "Mazda",
        name: "CX-5",
        model: "2021",
        price: "$26,000",
        orderedDate: "2024-10-25",
        exportedDate: "2024-11-15",
        receivedDate: "2024-12-28",
        mileage: "38,000 km",
        engine: "2.5L Skyactiv",
        transmission: "Automatic",
        color: "Soul Red Crystal",
        status: "Delivered",
        destination: "Sri Lanka",
        images: [
            "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80",
            "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80",
            "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80"
        ]
    },
    {
        id: 6,
        brand: "Subaru",
        name: "WRX STI",
        model: "2020",
        price: "$32,000",
        orderedDate: "2024-11-05",
        exportedDate: "2024-11-25",
        receivedDate: "2025-01-08",
        mileage: "42,000 km",
        engine: "2.5L Turbo Boxer",
        transmission: "Manual",
        color: "WR Blue Pearl",
        status: "Delivered",
        destination: "New Zealand",
        images: [
            "https://images.unsplash.com/photo-1554744512-d6c603f27c54?w=800&q=80",
            "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80",
            "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80"
        ]
    }
];

// Testimonials Data
const testimonialsData = [
    {
        id: 1,
        name: "Rajesh Kumar",
        country: "Sri Lanka",
        rating: 5,
        text: "Outstanding service from start to finish! I ordered a Toyota Land Cruiser and the entire process was seamless. Carlto handled all the documentation and customs clearance perfectly. Highly recommended!",
        car: "Toyota Land Cruiser Prado 2020",
        avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
        id: 2,
        name: "Mohammed Al-Rashid",
        country: "UAE",
        rating: 5,
        text: "Excellent quality vehicles at competitive prices. Got my Honda Civic Type R in perfect condition. The team was very professional and kept me updated throughout the shipping process.",
        car: "Honda Civic Type R 2021",
        avatar: "https://i.pravatar.cc/150?img=33"
    },
    {
        id: 3,
        name: "James Anderson",
        country: "Australia",
        rating: 5,
        text: "Dream car delivered! The Nissan GT-R I ordered exceeded all expectations. Carlto's transparency and reliability made me feel confident throughout the entire import process.",
        car: "Nissan GT-R R35 2019",
        avatar: "https://i.pravatar.cc/150?img=52"
    },
    {
        id: 4,
        name: "Chen Wei",
        country: "Singapore",
        rating: 5,
        text: "Professional service and high-quality vehicle. My Alphard arrived in pristine condition. The hybrid system works flawlessly. Thank you Carlto for making this possible!",
        car: "Toyota Alphard 2022",
        avatar: "https://i.pravatar.cc/150?img=68"
    },
    {
        id: 5,
        name: "Priya Mendis",
        country: "Sri Lanka",
        rating: 5,
        text: "Very satisfied with my Mazda CX-5. The car is in excellent condition and fuel efficient. Carlto provided exceptional customer service and made the import process stress-free.",
        car: "Mazda CX-5 2021",
        avatar: "https://i.pravatar.cc/150?img=45"
    },
    {
        id: 6,
        name: "David Mitchell",
        country: "New Zealand",
        rating: 5,
        text: "Absolutely thrilled with my WRX STI! The performance is incredible and the car was exactly as described. Carlto's team went above and beyond to ensure everything was perfect.",
        car: "Subaru WRX STI 2020",
        avatar: "https://i.pravatar.cc/150?img=15"
    }
];