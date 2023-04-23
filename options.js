// options.js
const enableFeatureCheckbox = document.getElementById("enable-feature");

// Save settings
function saveSettings() {
  const enableFeature = enableFeatureCheckbox.checked;
  chrome.storage.sync.set({ enableFeature }, () => {
    console.log("Settings saved.");
  });
}

// Load settings
function loadSettings() {
  chrome.storage.sync.get("enableFeature", (data) => {
    enableFeatureCheckbox.checked = data.enableFeature || false;
  });
}

// Attach event listeners
enableFeatureCheckbox.addEventListener("change", saveSettings);

// Load settings when the options page is opened
loadSettings();
