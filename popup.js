document.getElementById("darkToggle").addEventListener("change", function () {
  const isDark = this.checked;
  chrome.scripting.executeScript({
    target: { tabId: chrome.tabs.TAB_ID_CURRENT },
    func: (dark) => {
      document.documentElement.style.filter = dark ? "invert(1) hue-rotate(180deg)" : "none";
    },
    args: [isDark]
  });
});
