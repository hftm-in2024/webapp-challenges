# The Chaos App

> *Ein Praktikant hat kurz vor den Ferien eine Lagerverwaltungs-App geschrieben. Sie "funktioniert irgendwie" — aber irgendetwas stimmt nicht...*

Du hast die App übernommen und sollst sie in Ordnung bringen. Die Aufgabe besteht aus zwei Teilen:

---

## Teil 1: Bug Hunt (JavaScript) — ca. 30 Min.

### Setup

```bash
npm install
npm start
```

### Erwartete Ausgabe

So **sollte** die App funktionieren:

```
=== Chaos App - Lagerverwaltung ===

--- Preis-Check mit Versand ---
Endpreis Tastatur: 60
Endpreis Maus: 40

--- Inventar-Check ---
Gesamtwert Lager: 2350

--- Kunden-Begrüssung ---
Willkommen, Anna Müller! Deine E-Mail: anna@example.ch
Willkommen, Beat Keller! Deine E-Mail: beat@example.ch
Willkommen, Carla Rossi! Deine E-Mail: carla@example.ch

--- Sonderangebote (max. 100 CHF) ---
Günstige Produkte: []

--- Discount-Aktion ---
Produkt mit ID 99 nicht gefunden!
```

### Tatsächliche Ausgabe

Führe `npm start` aus und vergleiche. Du wirst feststellen: **Es läuft einiges schief.**

### Deine Aufgabe

1. Finde alle **5 Bugs** in `script.js`
2. Nutze `console.log` und den **VS Code Debugger** (Breakpoints, Step Over, Variable Inspector) um die Fehler zu lokalisieren
3. Fixe jeden Bug direkt in `script.js`
4. **Notiere dir für jeden Bug:**
   - Was war das Problem?
   - Wie hast du es gefunden?
   - Wie lange hat es gedauert?

### Debugging-Tipps

- **Breakpoints setzen**: Klicke links neben die Zeilennummer in VS Code
- **Debugger starten**: F5 drücken, "Node.js" auswählen
- **Variablen inspizieren**: Hover über Variablen oder "Variables"-Panel links
- **Debug Console**: Ausdrücke live auswerten während der Debugger pausiert ist

| Shortcut | Aktion |
|----------|--------|
| `F5` | Debugger starten / Weiter bis zum nächsten Breakpoint |
| `F10` | Nächste Zeile ausführen (Step Over) |
| `F11` | In Funktion hineinspringen (Step Into) |
| `Shift+F11` | Aus Funktion herausspringen (Step Out) |
| `Shift+F5` | Debugger stoppen |

---

## Teil 2: The Resurrection (TypeScript) — ca. 45 Min.

Jetzt wird es spannend: Du wandelst die App in TypeScript um und lässt den **Compiler** die Bugs finden.

### Schritt 1: Datei umbenennen

```bash
cp script.js script.ts
```

### Schritt 2: TypeScript-Compiler starten

```bash
npx tsc
```

VS Code wird jetzt "rot" — der Compiler hat Probleme gefunden.

### Schritt 3: Interfaces definieren

Erstelle passende Interfaces für die Datenstrukturen:

```typescript
interface Product {
    // Welche Properties braucht ein Produkt?
    // Welche Typen sind korrekt?
}

interface Customer {
    // Wie stellst du sicher, dass alle Kunden
    // die gleichen Properties haben?
}
```

### Schritt 4: Typen zuweisen

Tippe alle Variablen, Funktionsparameter und Rückgabewerte. Nutze deine Interfaces.

### Schritt 5: Kompilieren und ausführen

```bash
npm run start:ts
```

### Reflexionsfragen

- Wie viele der 5 Bugs hätte der TypeScript-Compiler **automatisch** gefunden?
- Welche Bugs kann TypeScript **nicht** finden? Warum?
- Was ist der Unterschied zwischen einem **Laufzeitfehler** und einem **Kompilierfehler**?

### Bonus: Readonly Properties

Überlege: Sollte der Preis eines Produkts direkt verändert werden dürfen (`product.price -= discount`)? Was wäre eine sicherere Alternative?

```typescript
interface Product {
    readonly id: number;
    readonly title: string;
    readonly price: number;  // Was passiert jetzt bei applyDiscount()?
    readonly stock: number;
}
```

---

## Abgabe

Nach Abschluss beider Teile solltest du:

- [ ] Alle 5 Bugs in `script.js` gefunden und gefixt haben
- [ ] Eine funktionierende `script.ts` mit Interfaces und korrekten Typen haben
- [ ] Die Reflexionsfragen beantworten können
- [ ] `npm run start:ts` läuft fehlerfrei und zeigt die erwartete Ausgabe
