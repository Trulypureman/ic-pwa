# Synly Printing Services

A lightweight mobile PWA for Synly print jobs: IC or digital driving licence front and back on one tidy A4 page (cards at real size, like a photocopy), and merchant DuitNow QR posters at A5.

Created by AhChai for Synly Trading & Bookstore S/B.

## Why

Customers send IC or driving licence screenshots to the shop phone. Printing them directly with the printing app's 2-in-1 setting makes each card fill half an A4, far too big. This tool places each card at 85.6 × 54 mm instead.

## Features

- Home screen with one button per service: **IC Copy**, **A5 QR Poster**, **To PDF**, **Stamp Booking**, **Name Tag**, plus small **About us** and **Contact us** buttons at the top right (Contact us has opening hours with live open status, address with Google Maps, phone and WhatsApp). Synly green gradient theme, light and dark mode, smooth slide transitions (respects reduced-motion). Phone back button returns home; links ending in `#ic`, `#qr`, `#pdf`, `#stamp` or `#about` open that screen directly

- Pick Depan and Belakang screenshots (PNG, JPG, WebP; HEIC only where the browser supports it)
- Free crop box for both IC and A5 QR: drag corners or edges to resize, drag inside to move, pinch or slide to zoom. Optional "Lock card shape" for IC (the cropped IC area is fitted to the 85.6 × 54 mm card)
- Rotate left or right if the screenshot is the wrong way round
- Both cards centred on A4 at real size
- Rounded corners (3.18 mm radius), optional border, optional grayscale
- Size % setting for print calibration (all options saved on the device)
- Share photos straight from WhatsApp or Gallery to the installed app (Android); paste or drag-and-drop also works
- Re-crop or remove a card after choosing it, and swap Depan / Belakang
- Output: PDF, A4 JPEG, Print, or Share straight to the printing app
- **A5 QR** tab for merchant DuitNow QR posters: one image enlarged to fit the A5 half of an A4 sheet (portrait images turned sideways, like 2-in-1), optional 2 per sheet and cut line. Print at 100% with 2-in-1 off, then cut
- **To PDF** tab for customers and staff: add photos and Word (.docx) files, reorder, crop photos, optional margins and black & white, name the file, then **Send PDF to Synly on WhatsApp** (+60 12-766 4819), Share, or Save. Send customers the link ending in `#pdf` to open this tab directly. DOCX is converted on the phone (docx-preview + html2canvas, in `lib/`); complex Word layouts or fonts may differ slightly, so check the preview. Old .doc files are not supported
- **Stamp Booking** (on the shop device): customer chooses Rectangle (up to 8 lines, max 7 × 2.5 cm, 0.5 cm kept clear each side) or Round (max 6 cm across, double outer ring, optional inner circle, text around the edge or top + bottom, star, up to 3 centre lines; styled after the shop's own stamps), Regular or Self-ink, Blue or Black ink, types the text (optional when a sample is attached), can attach photos or PDFs of an existing stamp (photos can be cropped and are printed on the order sheet), and sees a live preview in that ink colour. Cashier fills in their name and the model and taps Submit to create a one-page A4 PDF (details incl. ink colour and cashier, text, stamp at actual/maximum size with an enlargement when there is room, customer sample photos, signature lines) named `STMP` + last 4 digits of the customer's phone (e.g. `STMP6789.pdf`)
- **Name Tag** booking (on the shop device): Engraved (Option 1: 7 × 2.2 cm, Option 2: 7 × 1.7 cm, Option 3: 6.5 × 2 cm) or Epoxy with logo (Sarawak or Malaysia emblem; 7.5 × 2.5 cm; emblem images in `emblems/`), one line up to 10 letters plus an optional second line (not recommended), Pin / Magnet / Special pin, live preview. Cashier enters their name and taps Submit to create an A4 B&W PDF named `NTAGS` + last 4 digits of the customer's phone (e.g. `NTAGS6789.pdf`)
- Works offline once installed; nothing is uploaded or stored

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole app (HTML, CSS, JavaScript, PDF writer) |
| `manifest.json` | PWA install details |
| `sw.js` | Service worker (offline support, network-first updates) |
| `lib/` | docx-preview (Apache-2.0), JSZip (MIT), html2canvas (MIT) for .docx conversion, loaded only when a .docx is added |
| `donate-qr.png` | DuitNow QR shown by the "Buy me a coffee" button in the footer |
| `fonts/` | Plus Jakarta Sans and Fredoka (SIL Open Font License), self-hosted so they work offline |
| `logo.png` | Synly logo shown in the header |
| `icon-192.png`, `icon-512.png` | Home-screen icons |

## Install on GitHub Pages

1. Create a public repository.
2. Upload the six files above to the repository root (not the zip).
3. Settings, Pages, Deploy from a branch, `main` and `/(root)`, Save.
4. Open `https://YOUR-USERNAME.github.io/REPO-NAME/` in Chrome on the shop phone.
5. Menu, Add to Home screen.

## Update

Upload the new files with the same names and commit. Open the app; when a "new version is ready" message appears, tap Reload. If the old one persists, clear the site data in Chrome, or remove and re-add the home-screen icon.

## How to use

1. In WhatsApp, select both IC photos and share them to **Synly PS**. They open one after another in the crop screen. Or tap Depan and choose the front screenshot. Drag the crop box corners to the card edges, then tap Use crop.
2. Repeat for Belakang.
3. Set options if needed, and check the A4 preview.
4. Tap Share (or Save PDF) and print from the Canon printing app.
5. Tap Clear all after each customer.

## Printing notes

- Turn off 2-in-1 in the printing app. It shrinks each page to half a sheet.
- Print a test page and measure the card width. It should be 85.6 mm. If not, change Size % until it is.
- If the app rescales the PDF, use Save JPEG (A4) as a backup.

## Known limits

- Manual crop only. There is no auto-detect.
- The page is stored as one A4 image inside the PDF, so text is not selectable.
- Output quality depends on the customer's screenshot.
- Rounded corners cut off the screenshot's own corners, so crop just inside them.
- Pinch-zoom should be tested on the actual shop phone.

## Privacy

Everything runs in the browser on the phone. No server, no upload, no storage of customer images. Handle printed and shared copies of IC carefully.

## Changelog

### v1.2 (8 Nov 2026)
- Receive images shared from WhatsApp or Gallery (Android, installed app)
- Crop and remove buttons on each card; Swap button; Clear all now asks first
- Print button (true A4, no margins)
- Paste and drag-and-drop images
- Crop screen: Fit button, double-tap to fit, thirds grid, title shows which side
- Android back button and Escape close the crop screen instead of the app
- Offline fallback fixed; only good responses are cached; update notice with Reload
- All options remembered; size clamped to 70-130%; large photos downscaled
- Manifest: separate any/maskable icons, app id and description

### v1.1 (7 Nov 2026)
- Cards now centred horizontally and vertically on A4
- Added rotate left and right in the crop screen
- Added credit line: "Created by AhChai for Synly Trading & Bookstore S/B"
- New UI in the Synly logo's green, with the logo in the header and as the app icon, plus dark mode
- Added rounded corners (default on) with a toggle; border follows the corners
- Service worker now fetches the latest version first, so updates arrive automatically

### v1.0 (7 Nov 2026)
- First release: crop front and back, A4 PDF output with real-size cards
- Border and grayscale options, size % calibration
- Save PDF, Save JPEG and Share
- Offline-capable PWA
