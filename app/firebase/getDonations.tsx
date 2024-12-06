import { Donation } from "@/models/Donation";

export function getDonations(): Donation[] {
    const dummyDonations: Donation[] = [
        {
            id: 1,
            foodName: "Apples",
            quantity: 20,
            expirationDate: new Date(2024, 11, 10), // December 10, 2024
            location: "Community Center, 123 Main St",
            description: "Fresh apples, perfect for snacks or pies.",
            image: "https://example.com/images/apples.jpg",
            userId: 101
        },
        {
            id: 2,
            foodName: "Canned Beans",
            quantity: 50,
            expirationDate: new Date(2025, 0, 15), // January 15, 2025
            location: "Local Food Bank, 456 Elm St",
            description: "Canned kidney beans, high in protein.",
            image: "https://example.com/images/canned-beans.jpg",
            userId: 102
        },
        {
            id: 3,
            foodName: "Loaf of Bread",
            quantity: 5,
            expirationDate: new Date(2024, 11, 8), // December 8, 2024
            location: "Baker's Co-op, 789 Oak St",
            description: "Whole wheat bread, freshly baked.",
            image: "https://example.com/images/whole-wheat-bread.jpg",
            userId: 103
        },
        {
            id: 4,
            foodName: "Oranges",
            quantity: 10,
            expirationDate: new Date(2024, 11, 12), // December 12, 2024
            location: "Fruit Stand, 101 Pine St",
            description: "Fresh and juicy oranges, great for vitamin C.",
            image: "https://example.com/images/oranges.jpg",
            userId: 104
        },
        {
            id: 5,
            foodName: "Pack of Spaghetti",
            quantity: 15,
            expirationDate: new Date(2025, 1, 1), // February 1, 2025
            location: "SuperMart, 202 Birch St",
            description: "Durum wheat spaghetti, ideal for dinner meals.",
            image: "https://example.com/images/spaghetti.jpg",
            userId: 105
        },
        {
            id: 6,
            foodName: "Fresh Lettuce",
            quantity: 8,
            expirationDate: new Date(2024, 11, 6), // December 6, 2024
            location: "Green Farm, 303 Maple St",
            description: "Crisp and fresh lettuce, perfect for salads.",
            image: "https://example.com/images/lettuce.jpg",
            userId: 106
        },
        {
            id: 7,
            foodName: "Tomato Sauce",
            quantity: 12,
            expirationDate: new Date(2025, 2, 10), // March 10, 2025
            location: "Spice & Sauce Shop, 404 Cedar St",
            description: "Tomato sauce, great for pasta dishes.",
            image: "https://example.com/images/tomato-sauce.jpg",
            userId: 107
        },
        {
            id: 8,
            foodName: "Pack of Eggs",
            quantity: 2,
            expirationDate: new Date(2024, 11, 20), // December 20, 2024
            location: "Egg Mart, 505 Pine St",
            description: "Organic eggs, ideal for breakfast or baking.",
            image: "https://example.com/images/eggs.jpg",
            userId: 108
        },
        {
            id: 9,
            foodName: "Bananas",
            quantity: 15,
            expirationDate: new Date(2024, 11, 9), // December 9, 2024
            location: "Fresh Fruit Market, 606 Birch St",
            description: "Sweet and ripe bananas, a healthy snack.",
            image: "https://example.com/images/bananas.jpg",
            userId: 109
        },
        {
            id: 10,
            foodName: "Granola Bars",
            quantity: 30,
            expirationDate: new Date(2025, 0, 5), // January 5, 2025
            location: "Health Mart, 707 Oak St",
            description: "Healthy granola bars, perfect for on-the-go energy.",
            image: "https://example.com/images/granola-bars.jpg",
            userId: 110
        }
    ];    

    return dummyDonations;
}