// ============================================
//  CHAOS APP - Lagerverwaltung v1.0 (TypeScript)
//  Musterlösung — alle 5 Bugs behoben
// ============================================

// --- INTERFACES ---

interface Product {
    readonly id: number;
    readonly title: string;
    readonly price: number;   // Fix Bug 1: price ist immer number (nicht string)
    readonly stock: number;   // Fix Bug 2: stock ist required (nicht optional)
}

interface Customer {
    readonly id: number;
    readonly name: string;    // Fix Bug 4: einheitlich "name" (nicht "firstName")
    readonly email: string;
}

// --- DATENQUELLE ---

const products: Product[] = [
    { id: 1, title: "Tastatur", price: 50, stock: 12 },
    { id: 2, title: "Maus", price: 30, stock: 5 },     // Fix Bug 1: 30 statt "30"
    { id: 3, title: "Monitor", price: 200, stock: 8 }   // Fix Bug 2: stock hinzugefügt
];

const shippingCosts: number = 10;

const customers: Customer[] = [
    { id: 1, name: "Anna Müller", email: "anna@example.ch" },
    { id: 2, name: "Beat Keller", email: "beat@example.ch" },  // Fix Bug 4: name statt firstName
    { id: 3, name: "Carla Rossi", email: "carla@example.ch" }
];

const specialOffers: Product[] = [];  // Fix Bug 5: leeres Array statt null

// --- LOGIK ---

// 1. Endpreis berechnen
function getFinalPrice(product: Product): number {
    return product.price + shippingCosts;
}

// 2. Gesamtwert des Lagers
function calculateTotalValue(items: Product[]): number {
    let total = 0;
    items.forEach(item => {
        total += item.price * item.stock;
    });
    return total;
}

// 3. Produkt suchen & Rabatt — Fix Bug 3: null-Check + neues Objekt statt Mutation
function applyDiscount(productId: number, discount: number): void {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.log(`Produkt mit ID ${productId} nicht gefunden!`);
        return;
    }
    // Wegen readonly: neuen Preis berechnen, ohne das Original zu verändern
    const newPrice = product.price - discount;
    console.log(`Neuer Preis für ${product.title}: ${newPrice}`);
}

// 4. Kunden begrüssen
function printCustomerGreeting(customer: Customer): void {
    console.log(`Willkommen, ${customer.name}! Deine E-Mail: ${customer.email}`);
}

// 5. Günstige Produkte filtern
function getAffordableProducts(items: Product[], maxPrice: number): Product[] {
    return items.filter(item => item.price <= maxPrice);
}

// --- EXECUTION ---

console.log("=== Chaos App - Lagerverwaltung ===\n");

console.log("--- Preis-Check mit Versand ---");
console.log(`Endpreis Tastatur: ${getFinalPrice(products[0])}`);
console.log(`Endpreis Maus: ${getFinalPrice(products[1])}`);

console.log("\n--- Inventar-Check ---");
console.log("Gesamtwert Lager:", calculateTotalValue(products));

console.log("\n--- Kunden-Begrüssung ---");
customers.forEach(c => printCustomerGreeting(c));

console.log("\n--- Sonderangebote (max. 100 CHF) ---");
console.log("Günstige Produkte:", getAffordableProducts(specialOffers, 100));

console.log("\n--- Discount-Aktion ---");
applyDiscount(99, 5);
applyDiscount(2, 5);
