# Demo product CSV maintenance

The storefront loads `armanihovex_bulk_products_100.csv` at runtime from the same directory as `index.html` and `script.js`.

## Add products later
1. Open the CSV in Google Sheets or Excel.
2. Add a row at the bottom, preserving these exact columns: `index,id,name,category,price,image,description,productType,priceLabel`.
3. Use a new unique ID such as `demo-101`, then `demo-102`. Keep IDs unique.
4. Category must be one of: `Men's Clothing`, `Women's Fashion`, `Shoes`, `Bags`, `Watches`, `Accessories`.
5. Use a numeric demo price in BDT, a public HTTPS image URL, a description, `demo` as productType, and `DEMO PRICE — SAMPLE ONLY` as priceLabel.
6. Save/export as UTF-8 CSV with the same filename and commit it beside the website files. Publish the site, then refresh it. No JavaScript edit is needed for ordinary new rows.
7. Add rows at the bottom and keep existing row order stable because generated numeric catalog IDs are based on row position.

Demo items are labelled as not for sale, and WhatsApp checkout blocks carts containing demo items. Invalid/non-HTTPS image URLs are replaced by a placeholder; image load failures use the existing image fallback. Because the CSV is fetched, test via GitHub Pages or a local web server rather than opening the page as `file://`.
