# Auto Theme Switcher

This is a Chrome extension that automatically switches any website to dark mode at night and light mode during the day.

## 📦 Installation

1. Download this repo as a ZIP
2. Extract it
3. Go to `chrome://extensions`
4. Turn on Developer Mode
5. Click “Load unpacked” and select the folder

## ⚙️ How it works

When you open or refresh any tab, the extension checks your local time:
- Before 7am or after 7pm → dark mode (applies a visual filter)
- Between 7am and 7pm → light mode (normal)

## ✏️ Customization

You can tweak the hours or filter styles in `background.js`.

