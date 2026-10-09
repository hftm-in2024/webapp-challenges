# Security Audit — Auth-Lücken finden

**Kurstag:** 09 — Authentication / Authorization
**Typ:** Partnerarbeit
**Dauer:** 15 Min.
**Schwachstellen:** 5
**Format:** In-Class, zu zweit

---

## Ausgangslage

Ihr erhaltet eine Angular-App mit einer implementierten Authentifizierung. Auf den ersten Blick funktioniert alles:

- Login/Logout funktioniert
- Geschützte Bereiche sind nach dem Login erreichbar
- Ein Token wird für API-Calls verwendet

Aber die Implementierung hat **5 Sicherheitslücken**, die ein Angreifer ausnutzen könnte.

## Setup

```bash
cd challenges/security-audit
npm install
ng serve
```

Öffne `http://localhost:4200` im Browser und die DevTools (F12).

**Login:** Nutze `max` oder `admin` als Benutzername (Passwort beliebig).

## Aufgabe

Arbeitet zu zweit und findet die **5 Schwachstellen** in der Auth-Implementierung.

### Prüfbereiche

- **Route Guards**: Welcher Guard-Typ wird verwendet? Prüft er vor oder nach dem Matching der Route? Welche Alternative gibt es?
- **Token-Speicherung**: Wo wird das Token gespeichert? Könnte JavaScript es lesen?
- **Route-Parameter**: Wie werden Routen-Parameter gelesen? Was passiert bei Navigation zwischen Blog-Details?
- **Token-Validierung**: Wird das Ablaufdatum geprüft?
- **Client-Konfiguration**: Welche Informationen sind im Quellcode sichtbar?

### Schwierigkeitsgrade

- **Basis:** 2--3 Schwachstellen finden
- **Erweitert:** Alle 5 finden und Kritikalität bewerten (Hoch/Mittel/Niedrig)
- **Experte:** Für jede Schwachstelle einen konkreten Fix vorschlagen

## Vorgehen

1. **5 Min.**: Code studieren — `app.routes.ts`, `auth.service.ts`, `auth.guard.ts`, `blog-detail.component.ts`
2. **5 Min.**: DevTools nutzen — Application > Local Storage, Network Tab, Console
3. **5 Min.**: Findings dokumentieren (nutzt die `checklist.md`)

## Hinweise

- Öffne die DevTools > Application > Local Storage: Was siehst du nach dem Login?
- Tippe in die Console: `localStorage.getItem('access_token')` — Was passiert?
- Navigiere zwischen Blog-Details hin und her (z.B. Blog 1 > Blog 2 via "Weitere Beiträge"): Aktualisiert sich die Anzeige?
- Navigiere ohne Login direkt zu `/create`: Der Guard leitet dich um. Wurde die Route dafür zuerst gematcht? Was würde `canMatch` anders machen als `canActivate`?
- Schau dir `auth.service.ts` an: Welche Konfiguration ist sichtbar? Was fehlt beim Token-Lesen?

## Praxisbezug

In der Praxis sind unsichere Auth-Implementierungen eine der häufigsten Schwachstellen in Web-Applikationen. Das **OWASP Top 10** listet "Broken Authentication" und "Security Misconfiguration" als kritische Risiken. Die sichere Alternative — das **BFF-Pattern** — lernt ihr im Kurzinput nach der Challenge.
