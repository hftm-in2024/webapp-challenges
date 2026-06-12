# Web App Challenges

Willkommen bei den **Challenges** des HFTM Web Applications Kurses!

In diesem Repository findest du verschiedene Coding-Challenges: BugHunts, Refactoring-Aufgaben, In-Class-Challenges und mehr. Je nach Challenge-Typ arbeitest du alleine, zu zweit oder im Team.

---

## Challenge-Typen

| Typ | Was du tust | Ablauf |
|-----|-------------|--------|
| **BugHunt** | Bugs im Code finden und fixen | Fork → Fix → PR → CodeGuardian-Review |
| **Refactoring** | Redundanten Code mit TypeScript-Features DRY machen | Fork → Refactor → PR → CodeGuardian-Review |
| **In-Class Coding** | Coding-Aufgabe direkt im Unterricht | Starter-App öffnen, loscoden |
| **Team-Wettbewerb** | Im Team gegen andere Teams antreten | Im Unterricht, Teams à 2–3 |
| **Gruppenarbeit** | Konzeptuelle Aufgabe (z.B. Diagramme zeichnen) | Im Unterricht, Whiteboard/Papier |
| **Partnerarbeit** | Zu zweit Schwachstellen analysieren | Im Unterricht, Partnerarbeit |
| **Homework** | Zu Hause vorbereiten, im Unterricht präsentieren | Vor dem Kurstag bearbeiten |

---

## So funktioniert's (BugHunt & Refactoring)

> **Wichtig: Arbeite nie direkt auf `main`.**
> Dein `main` ist dein sauberer Startpunkt für jede neue Challenge. Sobald du dort Code änderst oder eine eigene Lösung hineinmergst, landet diese Lösung im nächsten Pull Request mit drin und der Review wird unbrauchbar. Lass `main` immer unangetastet und arbeite ausschliesslich auf deinen Challenge-Branches.

### 1. Repository forken (einmalig)

Klicke oben rechts auf **Fork**, um eine eigene Kopie des Repos unter deinem GitHub-Account zu erstellen.

Klone das Repo danach lokal:

```bash
git clone https://github.com/<dein-username>/webapp-challenges.git
cd webapp-challenges
```

### 2. `main` aktualisieren (pro Challenge)

Stelle sicher, dass du die neuesten Challenges hast und von einem sauberen Stand startest:

1. Gehe auf GitHub zu **deinem Fork** und klicke auf **Sync fork → Update branch**
2. Hole die Änderungen lokal:

```bash
git switch main
git pull
```

### 3. Branch erstellen

Erstelle einen neuen Branch für deine Lösung (Beispiel für die `chaos-app`):

```bash
git switch -c challenge-chaos-app
```

Halte dich an das Schema `challenge-<challenge-name>`, dann ist im Pull Request sofort erkennbar, um welche Challenge es geht.

### 4. Aufgabe lösen

Öffne die Challenge, lies die **README.md** und löse die Aufgabe (Bugs fixen / Code refactoren). Schau dir auch die **`.codeguardian.json`** an — dort stehen die Symptome der Bugs.

### 5. Commit und Push

```bash
git add .
git commit -m "fix: Lagermenge wird jetzt korrekt berechnet"
git push -u origin challenge-chaos-app
```

### 6. Pull Request erstellen

Nach dem Push zeigt dir GitHub einen Banner **"Compare & pull request"**. Klicke darauf und prüfe, dass der PR gegen das Original-Repo geht:

- **base repository:** `hftm-in2024/webapp-challenges`, **base:** `main`
- **head repository:** `<dein-username>/webapp-challenges`, **compare:** `challenge-chaos-app`

GitHub setzt das bei einem Fork normalerweise automatisch richtig.

Schreibe eine kurze Beschreibung: Welche Bugs hast du gefunden? Was war die Ursache? Wie hast du sie gefixt?

### 7. CodeGuardian-Review abwarten

Sobald du deinen Pull Request erstellst, startet **CodeGuardian** automatisch als GitHub Action. Der Review-Bot analysiert deinen Code-Diff und gibt dir Feedback:

- Welche Bugs du korrekt gefixt hast
- Ob es noch offene Probleme gibt
- Ob deine Fixes sauber umgesetzt sind

Das Review erscheint als Kommentar in deinem Pull Request. Lies das Feedback aufmerksam durch.

> **Hinweis:** CodeGuardian basiert auf KI. Das Feedback ist meistens hilfreich, aber nicht unfehlbar. Falls etwas unklar ist, frag den Dozenten.

### Für die nächste Challenge

Beginne wieder bei **Schritt 2**: `main` aktualisieren, neuen Branch erstellen (z.B. `challenge-<naechste-app>`), lösen, Pull Request. Deinen alten Pull Request lässt du einfach offen — merge ihn **nicht** in deinen `main`.

---

## Verfügbare Challenges

| KT | Challenge | Typ | Dauer | Schwierigkeit |
|----|-----------|-----|-------|---------------|
| 01 | [chaos-app](challenges/chaos-app/) | BugHunt | 30 Min. | Einsteiger |
| 02 | [senior-refactoring](challenges/senior-refactoring/) | Refactoring | 30 Min. | Mittel |
| 04 | [component-io](challenges/component-io/) | BugHunt | 15 Min. | Einsteiger |
| 05 | [bundle-size-optimization](challenges/bundle-size-optimization/) | Team-Wettbewerb | 20 Min. | Mittel |
| 06 | [dark-mode-challenge](challenges/dark-mode-challenge/) | In-Class Coding | 15 Min. | Einsteiger |
| 07 | [api-breaking-change](challenges/api-breaking-change/) | In-Class Coding | 25 Min. | Mittel |
| 08 | [reactive-graph](challenges/reactive-graph/) | Gruppenarbeit | 15 Min. | Mittel |
| 09 | [security-audit](challenges/security-audit/) | Partnerarbeit | 15 Min. | Mittel |
| 10 | [form-bugs](challenges/form-bugs/) | BugHunt | 15 Min. | Einsteiger |
| 11 | [vulnerable-app](challenges/vulnerable-app/) | Homework | HW + 20 Min. | Fortgeschritten |
| 12 | [regression-roulette](challenges/regression-roulette/) | In-Class Coding | 20 Min. | Mittel |

---

## Regeln

- Fixe nur die Bugs / löse nur die gestellte Aufgabe — ändere nicht die grundlegende Struktur des Codes
- Ein Commit pro Bug ist eine gute Praxis, aber nicht Pflicht
- Du darfst `console.log` und den VS Code Debugger verwenden
- Bei Homework-Challenges: KI-Einsatz ist erlaubt, aber dokumentiere was du getan hast
