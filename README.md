# IC Depan Belakang

A lightweight mobile PWA that turns two screenshots (front and back of an IC or digital driving licence) into one tidy A4 PDF, with both cards at real size, centred on the page like a physical photocopy.

Created by AhChai for Synly Trading & Bookstore S/B.

## Why

Customers send IC or driving licence screenshots to the shop phone. Printing them directly with the printing app's 2-in-1 setting makes each card fill half an A4, far too big. This tool places each card at 85.6 × 54 mm instead.

## Features

- Pick Depan and Belakang screenshots (PNG, JPG, WebP; HEIC only where the browser supports it)
- Crop with a fixed card-ratio frame (1.586): drag to move, pinch or slide to zoom
- Rotate left or right if the screenshot is the wrong way round
- Both cards centred on A4 at real size
- Rounded corners (3.18 mm radius), optional border, optional grayscale
- Size % setting for print calibration (saved on the device)
- Output: PDF, A4 JPEG, or Share straight to the printing app
- Works offline once installed; nothing is uploaded or stored

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole app (HTML, CSS, JavaScript, PDF writer) |
| `manifest.json` | PWA install details |
| `sw.js` | Service worker (offline support, network-first updates) |
| `logo.png` | Synly logo shown in the header |
| `icon-192.png`, `icon-512.png` | Home-screen icons |

## Install on GitHub Pages

1. Create a public repository.
2. Upload the six files above to the repository root (not the zip).
3. Settings, Pages, Deploy from a branch, `main` and `/(root)`, Save.
4. Open `https://YOUR-USERNAME.github.io/REPO-NAME/` in Chrome on the shop phone.
5. Menu, Add to Home screen.

## Update

Upload the new files with the same names and commit. Open the app twice; the second open loads the new version. If the old one persists, clear the site data in Chrome, or remove and re-add the home-screen icon.

## How to use

1. Tap Depan and choose the front screenshot. Crop it inside the frame, then tap Use crop.
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
