chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    const now = new Date();
    const hour = now.getHours();
    const isDark = hour < 7 || hour >= 19;

    chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: (dark) => {
        document.documentElement.style.filter = dark
          ? "invert(1) hue-rotate(180deg)"
          : "none";
      },
      args: [isDark],
    });
  }
});
