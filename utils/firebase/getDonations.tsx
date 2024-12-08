import { Donation } from "@/models/Donation";

export function getDonations(): Donation[] {
    const dummyDonations: Donation[] = [
        {
            id: 1,
            foodName: "Pasta",
            quantity: 10,
            expirationDate: new Date(2024, 11, 10), // December 10, 2024
            location: "Community Center, 123 Main St",
            description: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
            image: "https://img.spoonacular.com/recipes/716429-312x231.jpg"
        },
        {
            id: 2,
            foodName: "Baked Apples",
            quantity: 50,
            expirationDate: new Date(2025, 0, 15), // January 15, 2025
            location: "Local Food Bank, 456 Elm St",
            description: "Baked Apples in White Wine",
            image: "https://img.spoonacular.com/recipes/633419-312x231.jpg"
        },
        {
            id: 3,
            foodName: "Pork and Pasta",
            quantity: 5,
            expirationDate: new Date(2024, 11, 8), // December 8, 2024
            location: "Fruit Stand, 101 Pine St",
            description: "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
            image: "https://img.spoonacular.com/recipes/715538-312x231.jpg"
        },
        {
            id: 4,
            foodName: "Chocolate Silk Pie",
            quantity: 5,
            expirationDate: new Date(2024, 11, 12), // December 12, 2024
            location: "Baker's Co-op, 789 Oak St",
            description: "Chocolate Silk Pie with Marshmallow Meringue",
            image: "https://img.spoonacular.com/recipes/284420-312x231.jpg"
        },
        {
            id: 5,
            foodName: "Apple Or Peach Strudel",
            quantity: 15,
            expirationDate: new Date(2025, 1, 1), // February 1, 2025
            location: "SuperMart, 202 Birch St",
            description: "An Apple Or Peach Strudel",
            image: "https://img.spoonacular.com/recipes/73420-312x231.jpg"
        },
        {
            id: 6,
            foodName: "Apple Tart",
            quantity: 8,
            expirationDate: new Date(2024, 11, 6), // December 6, 2024
            location: "Green Farm, 303 Maple St",
            description: "Apricot Glazed Apple Tart",
            image: "https://img.spoonacular.com/recipes/632660-312x231.jpg"
        },
        {
            id: 7,
            foodName: "Soft Chin Chin",
            quantity: 12,
            expirationDate: new Date(2025, 2, 10), // March 10, 2025
            location: "Spice & Sauce Shop, 404 Cedar St",
            description: "Baked with love",
            image: "https://img.spoonacular.com/recipes/716267-556x370.jpg"
        },
        {
            id: 8,
            foodName: "Grilled Fish",
            quantity: 2,
            expirationDate: new Date(2024, 11, 20), // December 20, 2024
            location: "Egg Mart, 505 Pine St",
            description: "Grilled Fish With Sun Dried Tomato Relish",
            image: "https://img.spoonacular.com/recipes/645714-556x370.jpg"
        },
        {
            id: 9,
            foodName: "Yoghurt",
            quantity: 15,
            expirationDate: new Date(2024, 11, 9), // December 9, 2024
            location: "Fresh Fruit Market, 606 Birch St",
            description: "Mixed Berry Yogurt with Almonds",
            image: "https://img.spoonacular.com/recipes/652111-556x370.jpg"
        },
        {
            id: 10,
            foodName: "Jambalaya",
            quantity: 30,
            expirationDate: new Date(2025, 0, 5), // January 5, 2025
            location: "Health Mart, 707 Oak St",
            description: "Red Kidney Bean Jambalaya",
            image: "https://img.spoonacular.com/recipes/782601-556x370.jpg"
        }
    ];    

    return dummyDonations;
}