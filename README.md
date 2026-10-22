# CloseCook Multi-Page Concept Website

A responsive, multi-page front-end concept site for the CloseCook student startup presentation.

## Pages
- `index.html` — home / concept overview
- `meals.html` — searchable and filterable illustrative sample menu
- `chefs.html` — fictional sample home-chef profiles
- `how-it-works.html` — proposed order and pickup workflow
- `about.html` — concept, differentiation and validation roadmap
- `contact.html` — front-end-only interest form and FAQs
- `css/style.css` — shared responsive design system
- `js/main.js` — menu, filters, search, demo modal and form interactions

## Run locally
Open `index.html` in a modern browser. No build tools or dependencies are needed. You may also use any editor's static-server preview, but no server is required.

## Publish on GitHub Pages
1. Create a public repository named `closecook-demo`.
2. Upload all six HTML files plus the `css/` and `js/` folders to the repository root (keep the folder structure).
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose branch `main` and folder `/(root)`, then save.
6. Wait for GitHub Pages to publish and copy the exact URL shown in Settings → Pages.

## Important scope note
This is a student concept prototype, not a live marketplace. Sample chefs, meals, prices and profiles are fictional. The demo does not process orders/payments or store contact-form data. No interviews, customer transactions, food-safety checks, or operational validation are claimed.

## Interaction checks
- On a narrow screen, use the menu icon to open the mobile navigation.
- On **Explore meals**, search and category filters work together and show a no-results message when appropriate.
- **Preview demo** opens a demonstration-only modal; it never places an order or processes a payment.
- The **Get involved** form only shows local feedback and never sends or saves data.

