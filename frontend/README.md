# RentRide

A complete responsive React car-rental website built with a component-based structure similar to the supplied reference architecture.

## Included
- Home page with hero search and categories
- Car catalogue with search, category and price filters
- Car detail pages
- Wishlist with localStorage persistence
- Login/register/forgot-password UI
- Checkout and booking confirmation
- My Bookings with cancellation
- Profile editing
- Responsive navbar/footer
- Redux Toolkit state management
- Demo seed data in `db.json`

## Project structure

```text
rentride/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── ProductCard/   # CarCard in this project
│   │   ├── Banner/
│   │   ├── SearchBar/
│   │   ├── Loader/
│   │   └── CategoryCard/
│   ├── pages/
│   │   ├── Home/
│   │   ├── Login/
│   │   ├── Register/
│   │   ├── ForgotPassword/
│   │   ├── Cars/
│   │   ├── CarDetails/
│   │   ├── Wishlist/
│   │   ├── Bookings/
│   │   ├── Profile/
│   │   ├── Checkout/
│   │   ├── OrderSuccess/
│   │   └── NotFound/
│   ├── redux/
│   │   ├── store.js
│   │   └── slices/
│   ├── services/
│   ├── routes/
│   ├── data/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/
├── db.json
├── index.html
├── package.json
└── README.md
```

## Run locally

Requirements: Node.js 18+.

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Important
The project is a functional frontend prototype. Authentication, payment processing, live vehicle availability, admin operations and persistent server-side bookings require a backend. `src/services/api.js` is intentionally isolated so a REST API can be connected there without changing the page architecture.

For deployment, run:

```bash
npm run build
```

Then deploy the generated `dist/` folder to a static hosting provider.
