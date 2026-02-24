# Bug-Dokumentation — Chaos App

> **Nur für Dozenten** — Diese Datei enthält die vollständige Lösung aller 5 Bugs.

---

## Bug 1: String statt Number (Typ-Fehler)

**Datei:** `script.js`, Zeile 4
**Symptom:** `Endpreis Maus: 3010` statt `40`

**Problem:**
Der Preis der Maus ist als String `"30"` definiert. JavaScript konvertiert den `+`-Operator bei Strings zu Konkatenation:
```js
"30" + 10  // → "3010" (String-Konkatenation)
30 + 10    // → 40 (Addition)
```

**Fix:** `price: "30"` → `price: 30`

**TypeScript erkennt diesen Bug:** Ja — wenn `price: number` im Interface definiert ist, meldet der Compiler einen Typfehler bei `"30"`.

---

## Bug 2: Fehlendes Property (undefined)

**Datei:** `script.js`, Zeile 5
**Symptom:** `Gesamtwert Lager: NaN`

**Problem:**
Der Monitor hat kein `stock`-Property. Die Berechnung `200 * undefined` ergibt `NaN`, was die gesamte Summe zu `NaN` macht.

**Fix:** `{ id: 3, title: "Monitor", price: 200 }` → `{ id: 3, title: "Monitor", price: 200, stock: 8 }`

**TypeScript erkennt diesen Bug:** Ja — wenn `stock: number` im Interface required ist, meldet der Compiler, dass `stock` fehlt.

---

## Bug 3: Fehlende Null-Prüfung (Runtime Crash)

**Datei:** `script.js`, Zeile 29
**Symptom:** `TypeError: Cannot read properties of undefined (reading 'price')`

**Problem:**
`products.find(p => p.id === 99)` gibt `undefined` zurück, da kein Produkt mit ID 99 existiert. Der Zugriff auf `product.price` crasht.

**Fix:**
```js
const product = products.find(p => p.id === productId);
if (!product) {
    console.log(`Produkt mit ID ${productId} nicht gefunden!`);
    return;
}
```

**TypeScript erkennt diesen Bug:** Ja — `find()` gibt `Product | undefined` zurück. Mit `strictNullChecks` meldet der Compiler, dass `product` möglicherweise `undefined` ist.

---

## Bug 4: Inkonsistente Property-Namen (undefined)

**Datei:** `script.js`, Zeile 19
**Symptom:** `Willkommen, undefined! Deine E-Mail: beat@example.ch`

**Problem:**
Die Kunden-Objekte verwenden unterschiedliche Property-Namen: `name` vs. `firstName`. Die Funktion `printCustomerGreeting` greift auf `customer.name` zu, aber Beat Keller hat `firstName` statt `name`.

**Fix:** `{ id: 2, firstName: "Beat Keller", ... }` → `{ id: 2, name: "Beat Keller", ... }`

**TypeScript erkennt diesen Bug:** Ja — wenn das `Customer`-Interface `name: string` (required) definiert, meldet der Compiler, dass `firstName` kein gültiges Property ist und `name` fehlt.

---

## Bug 5: null statt Array (Runtime Crash)

**Datei:** `script.js`, Zeile 22
**Symptom:** `TypeError: Cannot read properties of null (reading 'filter')`

**Problem:**
`specialOffers` ist `null` (simuliert eine fehlgeschlagene API-Antwort). Die Funktion `getAffordableProducts` ruft `.filter()` auf `null` auf, was crasht.

**Fix:** `const specialOffers = null` → `const specialOffers = []` (oder null-Check in der Funktion)

**TypeScript erkennt diesen Bug:** Ja — wenn der Parameter als `items: Product[]` typisiert ist, kann `null` nicht übergeben werden. Der Compiler meldet: `Argument of type 'null' is not assignable to parameter of type 'Product[]'`.

---

## Zusammenfassung

| Bug | Symptom | TypeScript findet ihn? | Compiler-Feature |
|-----|---------|------------------------|------------------|
| 1. String-Preis | `"3010"` statt `40` | Ja | Interface mit `price: number` |
| 2. Fehlendes stock | `NaN` | Ja | Required Properties |
| 3. Null-Zugriff | Runtime Crash | Ja | `strictNullChecks` |
| 4. name vs firstName | `undefined` | Ja | Interface-Validierung |
| 5. null statt Array | Runtime Crash | Ja | `strictNullChecks` |

**Alle 5 Bugs werden vom TypeScript-Compiler erkannt**, wenn die Interfaces korrekt definiert und `strictNullChecks` aktiviert ist (was in `tsconfig.json` der Fall ist).

Das ist die zentrale Erkenntnis: **TypeScript als statisches Typsystem findet zur Kompilierzeit Fehler, die in JavaScript erst zur Laufzeit auftreten.**
