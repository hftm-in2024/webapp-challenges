# Web App Challenges

Willkommen bei den **BugHunt Challenges** des HFTM Web Applications Kurses!

In diesem Repository findest du Coding-Challenges mit absichtlichen Bugs. Deine Aufgabe: Bugs finden, fixen und einen Pull Request erstellen. Ein automatischer Code-Review-Bot (**CodeGuardian**) gibt dir Feedback zu deinem Fortschritt.

---

## So funktioniert's

### 1. Repository forken

Klicke oben rechts auf **Fork**, um eine eigene Kopie des Repos zu erstellen.

### 2. Challenge auswählen

Jede Challenge liegt in einem eigenen Ordner unter `challenges/`. Starte mit der Challenge, die im Unterricht angegeben wird.

```
challenges/
└── chaos-app/          # Lagerverwaltung mit 5 Bugs
```

### 3. Branch erstellen

Erstelle einen neuen Branch für deine Lösung:

```bash
git checkout -b fix/chaos-app
```

### 4. Bugs fixen

Öffne die Challenge, lies die README und fixe die Bugs direkt im Code.

### 5. Pull Request erstellen

Committe deine Änderungen und erstelle einen Pull Request **gegen das Original-Repository** (nicht deinen Fork):

```bash
git add .
git commit -m "fix: chaos-app bugs behoben"
git push origin fix/chaos-app
```

Dann auf GitHub: **New Pull Request** → Base: `hftm-in2024/webapp-challenges` `main` ← Compare: `dein-fork` `fix/chaos-app`

### 6. CodeGuardian Feedback

Nach dem Erstellen des PRs analysiert **CodeGuardian** automatisch deine Änderungen und postet einen Review-Kommentar mit:

- Welche Bugs du gefunden hast
- Ob die Fixes korrekt sind
- Tipps für noch nicht gefundene Bugs
- Deinen Fortschritt (z.B. "3/5 Bugs gefixt")

---

## Verfügbare Challenges

| Challenge | Beschreibung | Bugs | Schwierigkeit |
|-----------|-------------|------|---------------|
| [chaos-app](challenges/chaos-app/) | Lagerverwaltungs-App mit JS-Bugs | 5 | Einsteiger |

---

## Regeln

- Fixe nur die Bugs — ändere nicht die grundlegende Struktur des Codes
- Jeder Bug-Fix sollte in einem eigenen Commit sein (best practice)
- Die `solution/`-Ordner sind **nur für Dozenten** — nicht reinschauen!
- Du darfst `console.log` und den VS Code Debugger verwenden
