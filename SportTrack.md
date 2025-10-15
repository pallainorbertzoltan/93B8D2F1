# SportTrack – Next.js Projekt

## Projekt leírás
A **SportTrack** egy egyszerű sportinformációs webalkalmazás, amely három oldalt tartalmaz.  
A cél, hogy egy modern, reszponzív felületen keresztül sportokkal, hírekkel és edzéstervekkel kapcsolatos adatokat jelenítsen meg.

## Oldalak
1. **Főoldal (`/`)**
   - Rövid bemutatás az oldalról és a céljáról.
   - Navigáció a többi oldalra.
2. **Sportok (`/sports`)**
   - Különböző sportágak listája (pl. futás, úszás, kerékpár).
   - Minden sporthoz egy rövid leírás és kép.
3. **Edzéstervek (`/plans`)**
   - Egyszerű edzéstervek jelenítése.
   - GET kérés egy kis API-ról, ami az edzéstervek adatait adja vissza JSON formátumban.

## Használt technológiák
- **Next.js** – frontend és API szerver (GET endpoint megvalósításához)
- **React** – komponens alapú felépítés
- **Node.js** – backend futtatókörnyezet
- **Postman** – a GET endpoint teszteléséhez

## Backend (API)
- Készül egy egyszerű **GET szerver** az `/api/plans` útvonalon, ami JSON formátumban visszaadja az edzésterveket.
- Példa válasz:
  ```json
  [
    { "id": 1, "name": "Futás kezdőknek", "duration": "30 perc" },
    { "id": 2, "name": "Alap úszóedzés", "duration": "45 perc" }
  ]
