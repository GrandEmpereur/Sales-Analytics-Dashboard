import { Order, mockOrders } from "./orders";

export type CustomerStatus = 'Active' | 'Inactive' | 'Blocked';
export type CustomerTier = 'Bronze' | 'Silver' | 'Gold' | 'Platinum';

export interface Customer {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    avatar: string;
    status: CustomerStatus;
    tier: CustomerTier;
    totalOrders: number;
    totalSpent: number;
    address: {
        street: string;
        city: string;
        zipCode: string;
        country: string;
    };
    company?: {
        name: string;
        position: string;
    };
    createdAt: string;
    updatedAt: string;
}

export const mockCustomers: Customer[] = [
    {
        id: "usr_001",
        firstName: "Jean",
        lastName: "Dupont",
        email: "jean.dupont@email.com",
        phone: "+33 6 12 34 56 78",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,1",
        status: "Active",
        tier: "Gold",
        totalOrders: 5,
        totalSpent: 15799.88,
        address: {
            street: "123 Rue de Paris",
            city: "Paris",
            zipCode: "75001",
            country: "France"
        },
        company: {
            name: "Tech Solutions",
            position: "Directeur"
        },
        createdAt: "2023-01-15",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_002",
        firstName: "Marie",
        lastName: "Martin",
        email: "marie.martin@email.com",
        phone: "+33 6 23 45 67 89",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,1",
        status: "Active",
        tier: "Platinum",
        totalOrders: 8,
        totalSpent: 32799.88,
        address: {
            street: "45 Avenue des Champs-Élysées",
            city: "Paris",
            zipCode: "75008",
            country: "France"
        },
        company: {
            name: "Marketing Pro",
            position: "Consultante"
        },
        createdAt: "2023-02-20",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_003",
        firstName: "Pierre",
        lastName: "Bernard",
        email: "pierre.bernard@email.com",
        phone: "+33 6 34 56 78 90",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,2",
        status: "Active",
        tier: "Silver",
        totalOrders: 3,
        totalSpent: 8799.94,
        address: {
            street: "78 Rue de Lyon",
            city: "Lyon",
            zipCode: "69002",
            country: "France"
        },
        createdAt: "2023-03-10",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_004",
        firstName: "Sophie",
        lastName: "Petit",
        email: "sophie.petit@email.com",
        phone: "+33 6 45 67 89 01",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,2",
        status: "Active",
        tier: "Bronze",
        totalOrders: 2,
        totalSpent: 6599.94,
        address: {
            street: "12 Rue du Commerce",
            city: "Bordeaux",
            zipCode: "33000",
            country: "France"
        },
        createdAt: "2023-04-05",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_005",
        firstName: "Lucas",
        lastName: "Dubois",
        email: "lucas.dubois@email.com",
        phone: "+33 6 56 78 90 12",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,3",
        status: "Inactive",
        tier: "Bronze",
        totalOrders: 1,
        totalSpent: 7199.94,
        address: {
            street: "34 Avenue Jean Jaurès",
            city: "Toulouse",
            zipCode: "31000",
            country: "France"
        },
        company: {
            name: "Auto Plus",
            position: "Mécanicien"
        },
        createdAt: "2023-05-20",
        updatedAt: "2024-02-15"
    },
    {
        id: "usr_006",
        firstName: "Alice",
        lastName: "Lemoine",
        email: "alice.lemoine@email.com",
        phone: "+33 6 67 89 01 23",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,3",
        status: "Active",
        tier: "Gold",
        totalOrders: 4,
        totalSpent: 12000.00,
        address: {
            street: "15 Rue de Rivoli",
            city: "Paris",
            zipCode: "75004",
            country: "France"
        },
        company: {
            name: "Creative Minds",
            position: "Designer"
        },
        createdAt: "2023-06-10",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_007",
        firstName: "Antoine",
        lastName: "Durand",
        email: "antoine.durand@email.com",
        phone: "+33 6 78 90 12 34",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,4",
        status: "Active",
        tier: "Silver",
        totalOrders: 6,
        totalSpent: 15000.50,
        address: {
            street: "22 Avenue Victor Hugo",
            city: "Lyon",
            zipCode: "69003",
            country: "France"
        },
        createdAt: "2023-07-12",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_008",
        firstName: "Camille",
        lastName: "Fournier",
        email: "camille.fournier@email.com",
        phone: "+33 6 89 01 23 45",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,4",
        status: "Active",
        tier: "Platinum",
        totalOrders: 7,
        totalSpent: 21000.00,
        address: {
            street: "10 Rue de la République",
            city: "Marseille",
            zipCode: "13002",
            country: "France"
        },
        company: {
            name: "Digital Hub",
            position: "Manager"
        },
        createdAt: "2023-08-05",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_009",
        firstName: "Julien",
        lastName: "Moreau",
        email: "julien.moreau@email.com",
        phone: "+33 6 90 12 34 56",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,5",
        status: "Active",
        tier: "Silver",
        totalOrders: 5,
        totalSpent: 13000.75,
        address: {
            street: "5 Boulevard des Capucines",
            city: "Nice",
            zipCode: "06000",
            country: "France"
        },
        createdAt: "2023-09-15",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_010",
        firstName: "Claire",
        lastName: "Leroy",
        email: "claire.leroy@email.com",
        phone: "+33 6 01 23 45 67",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,5",
        status: "Active",
        tier: "Gold",
        totalOrders: 3,
        totalSpent: 9500.00,
        address: {
            street: "80 Rue de l'Opéra",
            city: "Paris",
            zipCode: "75002",
            country: "France"
        },
        createdAt: "2023-10-01",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_011",
        firstName: "Thomas",
        lastName: "Garcia",
        email: "thomas.garcia@email.com",
        phone: "+33 6 12 34 56 90",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,6",
        status: "Active",
        tier: "Bronze",
        totalOrders: 2,
        totalSpent: 7200.00,
        address: {
            street: "33 Rue Victor Hugo",
            city: "Lyon",
            zipCode: "69004",
            country: "France"
        },
        company: {
            name: "Innovatech",
            position: "Consultant"
        },
        createdAt: "2023-11-10",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_012",
        firstName: "Emma",
        lastName: "Morel",
        email: "emma.morel@email.com",
        phone: "+33 6 23 45 67 01",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,6",
        status: "Active",
        tier: "Silver",
        totalOrders: 4,
        totalSpent: 11000.00,
        address: {
            street: "18 Rue des Fleurs",
            city: "Bordeaux",
            zipCode: "33001",
            country: "France"
        },
        createdAt: "2023-12-05",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_013",
        firstName: "Hugo",
        lastName: "Lambert",
        email: "hugo.lambert@email.com",
        phone: "+33 6 34 56 78 12",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,7",
        status: "Active",
        tier: "Gold",
        totalOrders: 6,
        totalSpent: 14000.00,
        address: {
            street: "27 Avenue de la Liberté",
            city: "Strasbourg",
            zipCode: "67000",
            country: "France"
        },
        company: {
            name: "Global Tech",
            position: "CEO"
        },
        createdAt: "2024-01-15",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_014",
        firstName: "Léa",
        lastName: "Marchand",
        email: "lea.marchand@email.com",
        phone: "+33 6 45 67 89 23",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,7",
        status: "Active",
        tier: "Platinum",
        totalOrders: 7,
        totalSpent: 22500.00,
        address: {
            street: "9 Rue des Martyrs",
            city: "Marseille",
            zipCode: "13003",
            country: "France"
        },
        createdAt: "2024-02-10",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_015",
        firstName: "Maxime",
        lastName: "Petit",
        email: "maxime.petit@email.com",
        phone: "+33 6 56 78 90 34",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,8",
        status: "Active",
        tier: "Silver",
        totalOrders: 5,
        totalSpent: 12500.00,
        address: {
            street: "101 Rue Lafayette",
            city: "Paris",
            zipCode: "75009",
            country: "France"
        },
        createdAt: "2024-02-20",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_016",
        firstName: "Chloé",
        lastName: "Renaud",
        email: "chloe.renaud@email.com",
        phone: "+33 6 67 89 01 45",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,8",
        status: "Inactive",
        tier: "Bronze",
        totalOrders: 2,
        totalSpent: 6800.00,
        address: {
            street: "55 Boulevard Saint-Germain",
            city: "Paris",
            zipCode: "75006",
            country: "France"
        },
        company: {
            name: "Fashion Hub",
            position: "Stylist"
        },
        createdAt: "2024-03-01",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_017",
        firstName: "Alexandre",
        lastName: "Caron",
        email: "alexandre.caron@email.com",
        phone: "+33 6 78 90 12 56",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,9",
        status: "Active",
        tier: "Gold",
        totalOrders: 6,
        totalSpent: 13500.00,
        address: {
            street: "77 Rue de Belleville",
            city: "Lille",
            zipCode: "59000",
            country: "France"
        },
        company: {
            name: "Biz Solutions",
            position: "Manager"
        },
        createdAt: "2024-03-05",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_018",
        firstName: "Manon",
        lastName: "Gauthier",
        email: "manon.gauthier@email.com",
        phone: "+33 6 89 01 23 67",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,9",
        status: "Active",
        tier: "Platinum",
        totalOrders: 7,
        totalSpent: 22000.00,
        address: {
            street: "88 Rue de la République",
            city: "Nantes",
            zipCode: "44000",
            country: "France"
        },
        createdAt: "2024-03-10",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_019",
        firstName: "Baptiste",
        lastName: "Leclerc",
        email: "baptiste.leclerc@email.com",
        phone: "+33 6 90 12 34 78",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,10",
        status: "Active",
        tier: "Silver",
        totalOrders: 4,
        totalSpent: 9800.00,
        address: {
            street: "44 Rue de la Paix",
            city: "Strasbourg",
            zipCode: "67000",
            country: "France"
        },
        createdAt: "2024-03-15",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_020",
        firstName: "Pauline",
        lastName: "Nicolas",
        email: "pauline.nicolas@email.com",
        phone: "+33 6 01 23 45 78",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,10",
        status: "Active",
        tier: "Bronze",
        totalOrders: 3,
        totalSpent: 8700.00,
        address: {
            street: "66 Avenue de la Gare",
            city: "Toulouse",
            zipCode: "31000",
            country: "France"
        },
        company: {
            name: "Travel Experts",
            position: "Agent"
        },
        createdAt: "2024-03-20",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_021",
        firstName: "Arthur",
        lastName: "Robert",
        email: "arthur.robert@email.com",
        phone: "+33 6 12 34 56 77",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,11",
        status: "Active",
        tier: "Gold",
        totalOrders: 5,
        totalSpent: 15000.00,
        address: {
            street: "23 Rue de Belleville",
            city: "Paris",
            zipCode: "75011",
            country: "France"
        },
        createdAt: "2024-03-22",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_022",
        firstName: "Juliette",
        lastName: "Simon",
        email: "juliette.simon@email.com",
        phone: "+33 6 23 45 67 02",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,11",
        status: "Active",
        tier: "Platinum",
        totalOrders: 6,
        totalSpent: 21000.00,
        address: {
            street: "50 Rue des Fleurs",
            city: "Lyon",
            zipCode: "69005",
            country: "France"
        },
        company: {
            name: "Event Co",
            position: "Coordinator"
        },
        createdAt: "2024-03-25",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_023",
        firstName: "Victor",
        lastName: "Dubois",
        email: "victor.dubois@email.com",
        phone: "+33 6 34 56 78 23",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,12",
        status: "Active",
        tier: "Silver",
        totalOrders: 4,
        totalSpent: 10200.00,
        address: {
            street: "77 Avenue des Ternes",
            city: "Paris",
            zipCode: "75017",
            country: "France"
        },
        createdAt: "2024-03-28",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_024",
        firstName: "Anaïs",
        lastName: "Robin",
        email: "anais.robin@email.com",
        phone: "+33 6 45 67 89 34",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,12",
        status: "Active",
        tier: "Bronze",
        totalOrders: 3,
        totalSpent: 8900.00,
        address: {
            street: "11 Rue de la Liberté",
            city: "Marseille",
            zipCode: "13004",
            country: "France"
        },
        createdAt: "2024-03-30",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_025",
        firstName: "Benjamin",
        lastName: "Dupuis",
        email: "benjamin.dupuis@email.com",
        phone: "+33 6 56 78 90 45",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,13",
        status: "Active",
        tier: "Gold",
        totalOrders: 5,
        totalSpent: 13800.00,
        address: {
            street: "99 Boulevard Haussmann",
            city: "Paris",
            zipCode: "75009",
            country: "France"
        },
        company: {
            name: "Finance Corp",
            position: "Analyste"
        },
        createdAt: "2024-04-01",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_026",
        firstName: "Sarah",
        lastName: "Lefevre",
        email: "sarah.lefevre@email.com",
        phone: "+33 6 67 89 01 56",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,13",
        status: "Active",
        tier: "Platinum",
        totalOrders: 7,
        totalSpent: 22500.00,
        address: {
            street: "82 Rue Saint-Honoré",
            city: "Paris",
            zipCode: "75001",
            country: "France"
        },
        company: {
            name: "Creative Agency",
            position: "Directrice"
        },
        createdAt: "2024-04-03",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_027",
        firstName: "Nicolas",
        lastName: "Fontaine",
        email: "nicolas.fontaine@email.com",
        phone: "+33 6 78 90 12 67",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,14",
        status: "Active",
        tier: "Silver",
        totalOrders: 4,
        totalSpent: 10500.00,
        address: {
            street: "40 Rue de Rivoli",
            city: "Paris",
            zipCode: "75004",
            country: "France"
        },
        createdAt: "2024-04-05",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_028",
        firstName: "Caroline",
        lastName: "Martel",
        email: "caroline.martel@email.com",
        phone: "+33 6 89 01 23 78",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,14",
        status: "Active",
        tier: "Bronze",
        totalOrders: 3,
        totalSpent: 9200.00,
        address: {
            street: "27 Avenue de la République",
            city: "Lyon",
            zipCode: "69006",
            country: "France"
        },
        createdAt: "2024-04-07",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_029",
        firstName: "Guillaume",
        lastName: "Perrot",
        email: "guillaume.perrot@email.com",
        phone: "+33 6 90 12 34 89",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,15",
        status: "Active",
        tier: "Gold",
        totalOrders: 5,
        totalSpent: 14000.00,
        address: {
            street: "12 Rue de la Paix",
            city: "Nice",
            zipCode: "06000",
            country: "France"
        },
        company: {
            name: "Luxury Auto",
            position: "Conseiller"
        },
        createdAt: "2024-04-10",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_030",
        firstName: "Inès",
        lastName: "Roche",
        email: "ines.roche@email.com",
        phone: "+33 6 01 23 45 89",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,15",
        status: "Active",
        tier: "Platinum",
        totalOrders: 6,
        totalSpent: 21000.00,
        address: {
            street: "30 Boulevard des Capucines",
            city: "Paris",
            zipCode: "75002",
            country: "France"
        },
        createdAt: "2024-04-12",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_031",
        firstName: "Romain",
        lastName: "Chauvin",
        email: "romain.chauvin@email.com",
        phone: "+33 6 12 34 56 88",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,16",
        status: "Active",
        tier: "Silver",
        totalOrders: 4,
        totalSpent: 10800.00,
        address: {
            street: "75 Rue de l'Université",
            city: "Lyon",
            zipCode: "69007",
            country: "France"
        },
        createdAt: "2024-04-14",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_032",
        firstName: "Laura",
        lastName: "Pires",
        email: "laura.pires@email.com",
        phone: "+33 6 23 45 67 89",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,16",
        status: "Active",
        tier: "Bronze",
        totalOrders: 3,
        totalSpent: 9500.00,
        address: {
            street: "18 Rue de l'Église",
            city: "Marseille",
            zipCode: "13005",
            country: "France"
        },
        createdAt: "2024-04-16",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_033",
        firstName: "Kevin",
        lastName: "Bernard",
        email: "kevin.bernard@email.com",
        phone: "+33 6 34 56 78 34",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,17",
        status: "Active",
        tier: "Gold",
        totalOrders: 5,
        totalSpent: 13200.00,
        address: {
            street: "42 Rue de la République",
            city: "Nantes",
            zipCode: "44000",
            country: "France"
        },
        company: {
            name: "InnovAction",
            position: "CEO"
        },
        createdAt: "2024-04-18",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_034",
        firstName: "Emma",
        lastName: "Lemoine",
        email: "emma.lemoine@email.com",
        phone: "+33 6 45 67 89 45",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,17",
        status: "Active",
        tier: "Platinum",
        totalOrders: 6,
        totalSpent: 21500.00,
        address: {
            street: "29 Rue des Beaux-Arts",
            city: "Paris",
            zipCode: "75003",
            country: "France"
        },
        company: {
            name: "Art & Co",
            position: "Directrice Artistique"
        },
        createdAt: "2024-04-20",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_035",
        firstName: "David",
        lastName: "Caron",
        email: "david.caron@email.com",
        phone: "+33 6 56 78 90 56",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,18",
        status: "Active",
        tier: "Silver",
        totalOrders: 4,
        totalSpent: 11800.00,
        address: {
            street: "66 Rue de la Paix",
            city: "Nice",
            zipCode: "06000",
            country: "France"
        },
        createdAt: "2024-04-22",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_036",
        firstName: "Zoé",
        lastName: "Lambert",
        email: "zoe.lambert@email.com",
        phone: "+33 6 67 89 01 67",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,18",
        status: "Active",
        tier: "Bronze",
        totalOrders: 3,
        totalSpent: 9800.00,
        address: {
            street: "77 Avenue des Champs",
            city: "Marseille",
            zipCode: "13006",
            country: "France"
        },
        company: {
            name: "Fashionista",
            position: "Styliste"
        },
        createdAt: "2024-04-24",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_037",
        firstName: "Adrien",
        lastName: "Moreau",
        email: "adrien.moreau@email.com",
        phone: "+33 6 78 90 12 78",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,19",
        status: "Active",
        tier: "Gold",
        totalOrders: 6,
        totalSpent: 14500.00,
        address: {
            street: "55 Rue de la Liberté",
            city: "Lille",
            zipCode: "59000",
            country: "France"
        },
        createdAt: "2024-04-26",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_038",
        firstName: "Clara",
        lastName: "Dupont",
        email: "clara.dupont@email.com",
        phone: "+33 6 89 01 23 89",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,19",
        status: "Active",
        tier: "Platinum",
        totalOrders: 7,
        totalSpent: 23000.00,
        address: {
            street: "80 Rue de Rivoli",
            city: "Paris",
            zipCode: "75004",
            country: "France"
        },
        company: {
            name: "Media Corp",
            position: "Responsable Communication"
        },
        createdAt: "2024-04-28",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_039",
        firstName: "Julien",
        lastName: "Simon",
        email: "julien.simon@email.com",
        phone: "+33 6 90 12 34 90",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,20",
        status: "Active",
        tier: "Silver",
        totalOrders: 5,
        totalSpent: 12500.00,
        address: {
            street: "17 Rue de la République",
            city: "Nantes",
            zipCode: "44000",
            country: "France"
        },
        createdAt: "2024-04-30",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_040",
        firstName: "Lisa",
        lastName: "Renault",
        email: "lisa.renault@email.com",
        phone: "+33 6 01 23 45 90",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,20",
        status: "Active",
        tier: "Bronze",
        totalOrders: 3,
        totalSpent: 9400.00,
        address: {
            street: "34 Rue des Lombards",
            city: "Lyon",
            zipCode: "69008",
            country: "France"
        },
        createdAt: "2024-05-02",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_041",
        firstName: "Mathieu",
        lastName: "Guerin",
        email: "mathieu.guerin@email.com",
        phone: "+33 6 12 34 56 99",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,21",
        status: "Active",
        tier: "Gold",
        totalOrders: 5,
        totalSpent: 14000.00,
        address: {
            street: "48 Rue Saint-Honoré",
            city: "Paris",
            zipCode: "75001",
            country: "France"
        },
        company: {
            name: "Consulting Group",
            position: "Consultant"
        },
        createdAt: "2024-05-05",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_042",
        firstName: "Sarah",
        lastName: "Olivier",
        email: "sarah.olivier@email.com",
        phone: "+33 6 23 45 67 90",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,21",
        status: "Active",
        tier: "Platinum",
        totalOrders: 6,
        totalSpent: 21500.00,
        address: {
            street: "66 Avenue Montaigne",
            city: "Paris",
            zipCode: "75008",
            country: "France"
        },
        company: {
            name: "Fashion House",
            position: "Directrice"
        },
        createdAt: "2024-05-08",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_043",
        firstName: "Pierre",
        lastName: "Martin",
        email: "pierre.martin@email.com",
        phone: "+33 6 34 56 78 45",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,22",
        status: "Active",
        tier: "Silver",
        totalOrders: 4,
        totalSpent: 11000.00,
        address: {
            street: "21 Rue de Rivoli",
            city: "Paris",
            zipCode: "75004",
            country: "France"
        },
        createdAt: "2024-05-10",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_044",
        firstName: "Marion",
        lastName: "Petit",
        email: "marion.petit@email.com",
        phone: "+33 6 45 67 89 56",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,22",
        status: "Active",
        tier: "Bronze",
        totalOrders: 3,
        totalSpent: 9800.00,
        address: {
            street: "14 Rue de la Paix",
            city: "Lyon",
            zipCode: "69009",
            country: "France"
        },
        createdAt: "2024-05-12",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_045",
        firstName: "Fabien",
        lastName: "Laurent",
        email: "fabien.laurent@email.com",
        phone: "+33 6 56 78 90 67",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,23",
        status: "Active",
        tier: "Gold",
        totalOrders: 5,
        totalSpent: 14200.00,
        address: {
            street: "58 Avenue de l'Opéra",
            city: "Paris",
            zipCode: "75002",
            country: "France"
        },
        company: {
            name: "Tech Innovators",
            position: "CTO"
        },
        createdAt: "2024-05-15",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_046",
        firstName: "Amandine",
        lastName: "Durand",
        email: "amandine.durand@email.com",
        phone: "+33 6 67 89 01 78",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,23",
        status: "Active",
        tier: "Platinum",
        totalOrders: 6,
        totalSpent: 22000.00,
        address: {
            street: "39 Rue des Tuileries",
            city: "Paris",
            zipCode: "75001",
            country: "France"
        },
        company: {
            name: "Creative Solutions",
            position: "Directrice"
        },
        createdAt: "2024-05-18",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_047",
        firstName: "Eric",
        lastName: "Vidal",
        email: "eric.vidal@email.com",
        phone: "+33 6 78 90 12 89",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,24",
        status: "Active",
        tier: "Silver",
        totalOrders: 4,
        totalSpent: 11500.00,
        address: {
            street: "76 Rue de Rivoli",
            city: "Marseille",
            zipCode: "13006",
            country: "France"
        },
        createdAt: "2024-05-20",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_048",
        firstName: "Aurélie",
        lastName: "Carpentier",
        email: "aurelie.carpentier@email.com",
        phone: "+33 6 89 01 23 90",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,24",
        status: "Active",
        tier: "Bronze",
        totalOrders: 3,
        totalSpent: 9800.00,
        address: {
            street: "31 Boulevard des Italiens",
            city: "Paris",
            zipCode: "75009",
            country: "France"
        },
        createdAt: "2024-05-22",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_049",
        firstName: "Sébastien",
        lastName: "Marchal",
        email: "sebastien.marchal@email.com",
        phone: "+33 6 90 12 34 91",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,man,25",
        status: "Active",
        tier: "Gold",
        totalOrders: 5,
        totalSpent: 14500.00,
        address: {
            street: "42 Rue de la République",
            city: "Lille",
            zipCode: "59000",
            country: "France"
        },
        company: {
            name: "Enterprise Ltd",
            position: "Manager"
        },
        createdAt: "2024-05-25",
        updatedAt: "2024-03-15"
    },
    {
        id: "usr_050",
        firstName: "Olivia",
        lastName: "Bernard",
        email: "olivia.bernard@email.com",
        phone: "+33 6 01 23 45 91",
        avatar: "https://source.unsplash.com/random/200x200/?portrait,woman,25",
        status: "Active",
        tier: "Platinum",
        totalOrders: 7,
        totalSpent: 23000.00,
        address: {
            street: "64 Avenue des Champs-Élysées",
            city: "Paris",
            zipCode: "75008",
            country: "France"
        },
        company: {
            name: "Global Ventures",
            position: "Directrice"
        },
        createdAt: "2024-05-28",
        updatedAt: "2024-03-15"
    }
];


// Fonctions utilitaires
export const getCustomerById = (id: string): Customer | undefined => {
    return mockCustomers.find(customer => customer.id === id);
};

export const getCustomersByStatus = (status: CustomerStatus): Customer[] => {
    return mockCustomers.filter(customer => customer.status === status);
};

export const getCustomersByTier = (tier: CustomerTier): Customer[] => {
    return mockCustomers.filter(customer => customer.tier === tier);
};

export const getCustomerOrders = (customerId: string): Order[] => {
    return mockOrders.filter(order => order.userId === customerId);
};

export const getTopCustomers = (limit: number = 5): Customer[] => {
    return [...mockCustomers]
        .sort((a, b) => b.totalSpent - a.totalSpent)
        .slice(0, limit);
};

export const searchCustomers = (query: string): Customer[] => {
    const searchTerm = query.toLowerCase();
    return mockCustomers.filter(customer =>
        customer.firstName.toLowerCase().includes(searchTerm) ||
        customer.lastName.toLowerCase().includes(searchTerm) ||
        customer.email.toLowerCase().includes(searchTerm) ||
        customer.company?.name.toLowerCase().includes(searchTerm)
    );
};

export const getCustomerMetrics = (customerId: string) => {
    const customer = getCustomerById(customerId);
    const orders = getCustomerOrders(customerId);

    return {
        totalOrders: orders.length,
        activeOrders: orders.filter(order => order.status === 'Active').length,
        totalSpent: orders.reduce((sum, order) => sum + order.totalAmount, 0),
        averageOrderValue: orders.length > 0
            ? orders.reduce((sum, order) => sum + order.totalAmount, 0) / orders.length
            : 0
    };
}; 