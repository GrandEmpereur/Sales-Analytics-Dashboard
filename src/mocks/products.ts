export type ProductCategory = 'SUV' | 'Sedan' | 'Sports' | 'Electric' | 'Luxury' | 'Compact' | 'Van';
export type ProductStatus = 'Available' | 'Limited' | 'Reserved' | 'Coming Soon';

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number; // Prix mensuel
    category: ProductCategory;
    image: string;
    status: ProductStatus;
    stock: number;
    rating: number;
    sales: number;
    specs: {
        seats: number;
        transmission: 'Automatic' | 'Manual';
        fuelType: 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid';
        mileageLimit: number; // km par mois
    };
    createdAt: string;
    updatedAt: string;
}

export const mockProducts: Product[] = [
    {
        id: "car_001",
        name: "Toyota Corolla",
        description: "Compact and efficient sedan, perfect for city driving.",
        price: 49.99,
        category: "Compact",
        image: "https://source.unsplash.com/random/400x400/?toyota-corolla",
        status: "Available",
        stock: 15,
        rating: 4.3,
        sales: 120,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1000
        },
        createdAt: "2024-03-01",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_002",
        name: "Honda Civic",
        description: "Reliable and fuel-efficient compact car.",
        price: 54.99,
        category: "Compact",
        image: "https://source.unsplash.com/random/400x400/?honda-civic",
        status: "Available",
        stock: 20,
        rating: 4.4,
        sales: 150,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1000
        },
        createdAt: "2024-03-02",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_003",
        name: "Ford Focus",
        description: "Compact car with great handling and performance.",
        price: 47.99,
        category: "Compact",
        image: "https://source.unsplash.com/random/400x400/?ford-focus",
        status: "Available",
        stock: 18,
        rating: 4.2,
        sales: 110,
        specs: {
            seats: 5,
            transmission: "Manual",
            fuelType: "Gasoline",
            mileageLimit: 900
        },
        createdAt: "2024-03-03",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_004",
        name: "BMW 3 Series",
        description: "Luxury sedan offering a perfect blend of performance and comfort.",
        price: 89.99,
        category: "Luxury",
        image: "https://source.unsplash.com/random/400x400/?bmw-3-series",
        status: "Available",
        stock: 5,
        rating: 4.8,
        sales: 75,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1200
        },
        createdAt: "2024-03-04",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_005",
        name: "Mercedes-Benz C-Class",
        description: "Elegant and refined sedan with premium features.",
        price: 94.99,
        category: "Luxury",
        image: "https://source.unsplash.com/random/400x400/?mercedes-c-class",
        status: "Available",
        stock: 4,
        rating: 4.9,
        sales: 65,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Diesel",
            mileageLimit: 1200
        },
        createdAt: "2024-03-05",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_006",
        name: "Audi A4",
        description: "Sophisticated sedan with cutting-edge technology.",
        price: 89.99,
        category: "Luxury",
        image: "https://source.unsplash.com/random/400x400/?audi-a4",
        status: "Available",
        stock: 6,
        rating: 4.7,
        sales: 80,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1100
        },
        createdAt: "2024-03-06",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_007",
        name: "Volkswagen Golf",
        description: "Versatile hatchback combining performance and practicality.",
        price: 52.99,
        category: "Compact",
        image: "https://source.unsplash.com/random/400x400/?volkswagen-golf",
        status: "Available",
        stock: 12,
        rating: 4.3,
        sales: 130,
        specs: {
            seats: 5,
            transmission: "Manual",
            fuelType: "Gasoline",
            mileageLimit: 1000
        },
        createdAt: "2024-03-07",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_008",
        name: "Nissan Sentra",
        description: "Efficient and comfortable sedan for everyday use.",
        price: 49.99,
        category: "Compact",
        image: "https://source.unsplash.com/random/400x400/?nissan-sentra",
        status: "Available",
        stock: 17,
        rating: 4.2,
        sales: 115,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1000
        },
        createdAt: "2024-03-08",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_009",
        name: "Hyundai Elantra",
        description: "Reliable sedan with modern design and features.",
        price: 48.99,
        category: "Compact",
        image: "https://source.unsplash.com/random/400x400/?hyundai-elantra",
        status: "Available",
        stock: 16,
        rating: 4.3,
        sales: 125,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1000
        },
        createdAt: "2024-03-09",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_010",
        name: "Kia Forte",
        description: "Affordable sedan offering great value and performance.",
        price: 45.99,
        category: "Compact",
        image: "https://source.unsplash.com/random/400x400/?kia-forte",
        status: "Available",
        stock: 18,
        rating: 4.1,
        sales: 105,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 950
        },
        createdAt: "2024-03-10",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_011",
        name: "Chevrolet Malibu",
        description: "Mid-size sedan with a comfortable interior and smooth ride.",
        price: 56.99,
        category: "Sedan",
        image: "https://source.unsplash.com/random/400x400/?chevrolet-malibu",
        status: "Available",
        stock: 10,
        rating: 4.4,
        sales: 98,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1050
        },
        createdAt: "2024-03-11",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_012",
        name: "Dodge Charger",
        description: "Powerful and stylish sedan with impressive performance.",
        price: 79.99,
        category: "Sedan",
        image: "https://source.unsplash.com/random/400x400/?dodge-charger",
        status: "Limited",
        stock: 7,
        rating: 4.6,
        sales: 85,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1100
        },
        createdAt: "2024-03-12",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_013",
        name: "Porsche Taycan",
        description: "Berline électrique haute performance",
        price: 1899.99,
        category: "Electric",
        image: "https://source.unsplash.com/random/400x400/?porsche-taycan",
        status: "Limited",
        stock: 2,
        rating: 4.9,
        sales: 55,
        specs: {
            seats: 4,
            transmission: "Automatic",
            fuelType: "Electric",
            mileageLimit: 1500
        },
        createdAt: "2024-03-20",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_014",
        name: "Tesla Model 3",
        description: "Innovative electric sedan with cutting-edge technology.",
        price: 1299.99,
        category: "Electric",
        image: "https://source.unsplash.com/random/400x400/?tesla-model-3",
        status: "Available",
        stock: 5,
        rating: 4.8,
        sales: 70,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Electric",
            mileageLimit: 1400
        },
        createdAt: "2024-03-21",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_015",
        name: "Tesla Model S",
        description: "Premium electric sedan with exceptional performance and range.",
        price: 1599.99,
        category: "Electric",
        image: "https://source.unsplash.com/random/400x400/?tesla-model-s",
        status: "Available",
        stock: 3,
        rating: 4.9,
        sales: 60,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Electric",
            mileageLimit: 1600
        },
        createdAt: "2024-03-22",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_016",
        name: "Jeep Wrangler",
        description: "Rugged SUV built for off-road adventures.",
        price: 99.99,
        category: "SUV",
        image: "https://source.unsplash.com/random/400x400/?jeep-wrangler",
        status: "Available",
        stock: 8,
        rating: 4.7,
        sales: 90,
        specs: {
            seats: 5,
            transmission: "Manual",
            fuelType: "Gasoline",
            mileageLimit: 1300
        },
        createdAt: "2024-03-23",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_017",
        name: "Subaru Outback",
        description: "Versatile wagon with all-wheel drive, perfect for adventures.",
        price: 84.99,
        category: "SUV",
        image: "https://source.unsplash.com/random/400x400/?subaru-outback",
        status: "Available",
        stock: 9,
        rating: 4.6,
        sales: 85,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1200
        },
        createdAt: "2024-03-24",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_018",
        name: "Volvo XC90",
        description: "Spacious and safe SUV, ideal for family trips.",
        price: 109.99,
        category: "Luxury",
        image: "https://source.unsplash.com/random/400x400/?volvo-xc90",
        status: "Available",
        stock: 4,
        rating: 4.8,
        sales: 65,
        specs: {
            seats: 7,
            transmission: "Automatic",
            fuelType: "Diesel",
            mileageLimit: 1100
        },
        createdAt: "2024-03-25",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_019",
        name: "Land Rover Discovery",
        description: "Luxury SUV designed for both on-road and off-road performance.",
        price: 119.99,
        category: "Luxury",
        image: "https://source.unsplash.com/random/400x400/?land-rover-discovery",
        status: "Available",
        stock: 5,
        rating: 4.9,
        sales: 50,
        specs: {
            seats: 7,
            transmission: "Automatic",
            fuelType: "Diesel",
            mileageLimit: 1000
        },
        createdAt: "2024-03-26",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_020",
        name: "Mazda CX-5",
        description: "Compact SUV with a sleek design and agile handling.",
        price: 79.99,
        category: "SUV",
        image: "https://source.unsplash.com/random/400x400/?mazda-cx-5",
        status: "Available",
        stock: 10,
        rating: 4.5,
        sales: 85,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1100
        },
        createdAt: "2024-03-27",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_021",
        name: "Lexus RX",
        description: "Luxury crossover offering comfort and advanced safety features.",
        price: 99.99,
        category: "Luxury",
        image: "https://source.unsplash.com/random/400x400/?lexus-rx",
        status: "Available",
        stock: 6,
        rating: 4.8,
        sales: 70,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Hybrid",
            mileageLimit: 1200
        },
        createdAt: "2024-03-28",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_022",
        name: "Infiniti Q50",
        description: "Sleek sedan with powerful performance and luxury features.",
        price: 89.99,
        category: "Luxury",
        image: "https://source.unsplash.com/random/400x400/?infiniti-q50",
        status: "Available",
        stock: 7,
        rating: 4.7,
        sales: 75,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1150
        },
        createdAt: "2024-03-29",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_023",
        name: "Acura TLX",
        description: "Stylish sedan offering a blend of performance and luxury.",
        price: 84.99,
        category: "Luxury",
        image: "https://source.unsplash.com/random/400x400/?acura-tlx",
        status: "Available",
        stock: 8,
        rating: 4.6,
        sales: 80,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1100
        },
        createdAt: "2024-03-30",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_024",
        name: "Cadillac ATS",
        description: "Luxurious sedan with a bold design and advanced features.",
        price: 94.99,
        category: "Luxury",
        image: "https://source.unsplash.com/random/400x400/?cadillac-ats",
        status: "Available",
        stock: 5,
        rating: 4.8,
        sales: 60,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1050
        },
        createdAt: "2024-03-31",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_025",
        name: "Jaguar XF",
        description: "Refined luxury sedan with dynamic performance.",
        price: 109.99,
        category: "Luxury",
        image: "https://source.unsplash.com/random/400x400/?jaguar-xf",
        status: "Available",
        stock: 4,
        rating: 4.9,
        sales: 55,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1150
        },
        createdAt: "2024-04-01",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_026",
        name: "Alfa Romeo Giulia",
        description: "Sporty sedan with Italian design and dynamic performance.",
        price: 99.99,
        category: "Luxury",
        image: "https://source.unsplash.com/random/400x400/?alfa-romeo-giulia",
        status: "Available",
        stock: 4,
        rating: 4.8,
        sales: 60,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1100
        },
        createdAt: "2024-04-02",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_027",
        name: "Mini Cooper",
        description: "Iconic compact car with a fun driving experience.",
        price: 59.99,
        category: "Compact",
        image: "https://source.unsplash.com/random/400x400/?mini-cooper",
        status: "Available",
        stock: 10,
        rating: 4.5,
        sales: 95,
        specs: {
            seats: 4,
            transmission: "Manual",
            fuelType: "Gasoline",
            mileageLimit: 900
        },
        createdAt: "2024-04-03",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_028",
        name: "Fiat 500",
        description: "Charming city car perfect for urban environments.",
        price: 44.99,
        category: "Compact",
        image: "https://source.unsplash.com/random/400x400/?fiat-500",
        status: "Available",
        stock: 12,
        rating: 4.2,
        sales: 100,
        specs: {
            seats: 4,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 800
        },
        createdAt: "2024-04-04",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_029",
        name: "Chevrolet Spark",
        description: "Economical and agile car ideal for city driving.",
        price: 39.99,
        category: "Compact",
        image: "https://source.unsplash.com/random/400x400/?chevrolet-spark",
        status: "Available",
        stock: 15,
        rating: 4.1,
        sales: 110,
        specs: {
            seats: 4,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 800
        },
        createdAt: "2024-04-05",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_030",
        name: "Mitsubishi Mirage",
        description: "Compact and efficient car, perfect for daily commuting.",
        price: 38.99,
        category: "Compact",
        image: "https://source.unsplash.com/random/400x400/?mitsubishi-mirage",
        status: "Available",
        stock: 16,
        rating: 4.0,
        sales: 105,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 850
        },
        createdAt: "2024-04-06",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_031",
        name: "Subaru Impreza",
        description: "Reliable compact car with all-wheel drive capabilities.",
        price: 50.99,
        category: "Compact",
        image: "https://source.unsplash.com/random/400x400/?subaru-impreza",
        status: "Available",
        stock: 14,
        rating: 4.3,
        sales: 100,
        specs: {
            seats: 5,
            transmission: "Manual",
            fuelType: "Gasoline",
            mileageLimit: 950
        },
        createdAt: "2024-04-07",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_032",
        name: "Dodge Dart",
        description: "Stylish compact sedan with a modern design.",
        price: 47.99,
        category: "Compact",
        image: "https://source.unsplash.com/random/400x400/?dodge-dart",
        status: "Available",
        stock: 13,
        rating: 4.2,
        sales: 90,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 900
        },
        createdAt: "2024-04-08",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_033",
        name: "Kia Optima",
        description: "Mid-size sedan with a comfortable interior and efficient performance.",
        price: 56.99,
        category: "Compact",
        image: "https://source.unsplash.com/random/400x400/?kia-optima",
        status: "Available",
        stock: 11,
        rating: 4.3,
        sales: 95,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1000
        },
        createdAt: "2024-04-09",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_034",
        name: "Hyundai Sonata",
        description: "Elegant mid-size sedan with advanced safety features.",
        price: 59.99,
        category: "Compact",
        image: "https://source.unsplash.com/random/400x400/?hyundai-sonata",
        status: "Available",
        stock: 12,
        rating: 4.4,
        sales: 105,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1000
        },
        createdAt: "2024-04-10",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_035",
        name: "Honda Accord",
        description: "Spacious and reliable sedan, perfect for family trips.",
        price: 62.99,
        category: "Compact",
        image: "https://source.unsplash.com/random/400x400/?honda-accord",
        status: "Available",
        stock: 14,
        rating: 4.5,
        sales: 110,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1050
        },
        createdAt: "2024-04-11",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_036",
        name: "Ford Fusion",
        description: "Reliable mid-size sedan with a comfortable ride.",
        price: 58.99,
        category: "Compact",
        image: "https://source.unsplash.com/random/400x400/?ford-fusion",
        status: "Available",
        stock: 13,
        rating: 4.3,
        sales: 100,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1000
        },
        createdAt: "2024-04-12",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_037",
        name: "Nissan Altima",
        description: "Comfortable sedan with a refined design and smooth performance.",
        price: 57.99,
        category: "Compact",
        image: "https://source.unsplash.com/random/400x400/?nissan-altima",
        status: "Available",
        stock: 12,
        rating: 4.4,
        sales: 95,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1000
        },
        createdAt: "2024-04-13",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_038",
        name: "Toyota Camry",
        description: "Popular mid-size sedan known for its reliability and comfort.",
        price: 60.99,
        category: "Compact",
        image: "https://source.unsplash.com/random/400x400/?toyota-camry",
        status: "Available",
        stock: 14,
        rating: 4.5,
        sales: 105,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1050
        },
        createdAt: "2024-04-14",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_039",
        name: "Buick Regal",
        description: "Mid-size sedan with a smooth ride and upscale features.",
        price: 64.99,
        category: "Luxury",
        image: "https://source.unsplash.com/random/400x400/?buick-regal",
        status: "Available",
        stock: 7,
        rating: 4.6,
        sales: 85,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1100
        },
        createdAt: "2024-04-15",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_040",
        name: "GMC Sierra",
        description: "Full-size pickup truck offering power and versatility.",
        price: 74.99,
        category: "Van",
        image: "https://source.unsplash.com/random/400x400/?gmc-sierra",
        status: "Available",
        stock: 6,
        rating: 4.5,
        sales: 75,
        specs: {
            seats: 3,
            transmission: "Automatic",
            fuelType: "Diesel",
            mileageLimit: 1200
        },
        createdAt: "2024-04-16",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_041",
        name: "Ram 1500",
        description: "Robust pickup truck known for its durability and performance.",
        price: 79.99,
        category: "Van",
        image: "https://source.unsplash.com/random/400x400/?ram-1500",
        status: "Available",
        stock: 5,
        rating: 4.6,
        sales: 70,
        specs: {
            seats: 3,
            transmission: "Automatic",
            fuelType: "Diesel",
            mileageLimit: 1150
        },
        createdAt: "2024-04-17",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_042",
        name: "Ford F-150",
        description: "America's best-selling pickup truck with unmatched capability.",
        price: 84.99,
        category: "Van",
        image: "https://source.unsplash.com/random/400x400/?ford-f150",
        status: "Available",
        stock: 4,
        rating: 4.7,
        sales: 65,
        specs: {
            seats: 3,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1200
        },
        createdAt: "2024-04-18",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_043",
        name: "Chevrolet Silverado",
        description: "Durable and powerful pickup truck for heavy-duty tasks.",
        price: 85.99,
        category: "Van",
        image: "https://source.unsplash.com/random/400x400/?chevrolet-silverado",
        status: "Available",
        stock: 4,
        rating: 4.7,
        sales: 60,
        specs: {
            seats: 3,
            transmission: "Automatic",
            fuelType: "Diesel",
            mileageLimit: 1250
        },
        createdAt: "2024-04-19",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_044",
        name: "Honda CR-V",
        description: "Compact SUV with a spacious interior and modern features.",
        price: 69.99,
        category: "SUV",
        image: "https://source.unsplash.com/random/400x400/?honda-crv",
        status: "Available",
        stock: 8,
        rating: 4.6,
        sales: 80,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1100
        },
        createdAt: "2024-04-20",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_045",
        name: "Toyota RAV4",
        description: "Versatile compact SUV perfect for urban and off-road adventures.",
        price: 74.99,
        category: "SUV",
        image: "https://source.unsplash.com/random/400x400/?toyota-rav4",
        status: "Available",
        stock: 9,
        rating: 4.7,
        sales: 85,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1150
        },
        createdAt: "2024-04-21",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_046",
        name: "Nissan Rogue",
        description: "Compact SUV with advanced safety features and a comfortable ride.",
        price: 72.99,
        category: "SUV",
        image: "https://source.unsplash.com/random/400x400/?nissan-rogue",
        status: "Available",
        stock: 9,
        rating: 4.6,
        sales: 80,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1100
        },
        createdAt: "2024-04-22",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_047",
        name: "Ford Escape",
        description: "Compact SUV offering agility and efficiency for urban driving.",
        price: 68.99,
        category: "SUV",
        image: "https://source.unsplash.com/random/400x400/?ford-escape",
        status: "Available",
        stock: 10,
        rating: 4.5,
        sales: 90,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1050
        },
        createdAt: "2024-04-23",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_048",
        name: "Jeep Grand Cherokee",
        description: "Premium SUV with robust capabilities and luxury features.",
        price: 99.99,
        category: "Luxury",
        image: "https://source.unsplash.com/random/400x400/?jeep-grand-cherokee",
        status: "Available",
        stock: 6,
        rating: 4.8,
        sales: 70,
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1150
        },
        createdAt: "2024-04-24",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_049",
        name: "Dodge Journey",
        description: "Spacious SUV ideal for family trips and long journeys.",
        price: 64.99,
        category: "SUV",
        image: "https://source.unsplash.com/random/400x400/?dodge-journey",
        status: "Available",
        stock: 8,
        rating: 4.4,
        sales: 75,
        specs: {
            seats: 7,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1000
        },
        createdAt: "2024-04-25",
        updatedAt: "2024-03-15"
    },
    {
        id: "car_050",
        name: "Chevrolet Traverse",
        description: "Large SUV with ample space and modern amenities for comfort.",
        price: 79.99,
        category: "SUV",
        image: "https://source.unsplash.com/random/400x400/?chevrolet-traverse",
        status: "Available",
        stock: 7,
        rating: 4.6,
        sales: 80,
        specs: {
            seats: 7,
            transmission: "Automatic",
            fuelType: "Gasoline",
            mileageLimit: 1100
        },
        createdAt: "2024-04-26",
        updatedAt: "2024-03-15"
    }
];


// Fonctions utilitaires adaptées aux voitures
export const getCarsByFuelType = (fuelType: string): Product[] => {
    return mockProducts.filter(product => product.specs.fuelType === fuelType);
};

export const getCarsByPriceRange = (min: number, max: number): Product[] => {
    return mockProducts.filter(product =>
        product.price >= min && product.price <= max
    );
};

// Fonctions utilitaires pour les produits
export const getProductById = (id: string): Product | undefined => {
    return mockProducts.find(product => product.id === id);
};

export const getProductsByCategory = (category: ProductCategory): Product[] => {
    return mockProducts.filter(product => product.category === category);
};

export const getProductsByStatus = (status: ProductStatus): Product[] => {
    return mockProducts.filter(product => product.status === status);
};

export const getTopSellingProducts = (limit: number = 10): Product[] => {
    return [...mockProducts]
        .sort((a, b) => b.sales - a.sales)
        .slice(0, limit);
};

export const getNewProducts = (limit: number = 10): Product[] => {
    return [...mockProducts]
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, limit);
};

export const searchProducts = (query: string): Product[] => {
    const searchTerm = query.toLowerCase();
    return mockProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
}; 