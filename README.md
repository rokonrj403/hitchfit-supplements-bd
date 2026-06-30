# HitchFit Supplements BD

A demo e-commerce storefront for a fictional sports-supplement brand, built as a
front-end assignment. It is a BDT-priced clone of
[hitchfitsupplements.com](https://hitchfitsupplements.com), built with plain
**HTML, CSS and JavaScript** — no frameworks, no build step.

🔗 **Live site:** https://rokonrj403.github.io/hitchfit-supplements-bd/

---

## Features

- **16-product catalog** with prices in **BDT** (converted from the original USD prices).
- **Shop page** with category filter tabs (Proteins, Pre-Workouts & More, Daily
  Nutrition, Stacks).
- **Dynamic product pages** — a single `product.html` renders any product via a
  `?id=` URL parameter, reading from a shared data file.
- **Product options** — flavor selector and quantity stepper.
- **Shopping cart** with line items, quantity controls, remove buttons, and a live
  **subtotal / delivery / total**. Delivery is **free over BDT 5,000**, otherwise
  BDT 100.
- **Checkout** — delivery details form, payment method (Cash on Delivery, bKash,
  Nagad), and an order-confirmation screen with a generated order number.
- **Persistent cart and orders** via the browser's `localStorage`, so state
  survives page navigation and refreshes.
- **Responsive** layout for mobile and desktop.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Homepage — hero, featured products, about, newsletter |
| `shop.html` | Full product grid with category filters |
| `product.html` | Dynamic product detail page (`product.html?id=<product-id>`) |
| `cart.html` | Cart with subtotal, delivery and total |
| `checkout.html` | Checkout form and order confirmation |
| `products.js` | Product catalog data + shared helpers |
| `script.js` | Rendering, cart and checkout logic |
| `style.css` | All styling |

## Running locally

No build tools required. Either:

```bash
# Option 1: open the file directly
open index.html        # macOS  (use "start" on Windows, "xdg-open" on Linux)

# Option 2: serve it (recommended, avoids any file:// quirks)
python3 -m http.server
# then visit http://localhost:8000
```

## Demo flow

1. Browse featured products on the homepage.
2. Open **Shop** and filter products by category.
3. Open a product, pick a flavor and quantity, and **Add to Cart**.
4. Open the **Cart**, adjust quantities, and watch the totals update.
5. **Checkout**, fill in delivery details, choose a payment method, and
   **Place Order** to see the confirmation.

## Notes

- This is a **front-end demo** — the cart and orders are stored client-side in
  `localStorage`. There is no backend; checkout does not process real payments.
  A production version would send orders to a server.
- Product prices were converted from USD at roughly **120 BDT per USD**, rounded
  to the nearest 100.
- Each of the 16 products has its own product image in the `images/` folder,
  referenced by the `image` field in `products.js`.
