// Initialize the extension when it is installed
chrome.runtime.onInstalled.addListener(async () => {
    console.log("Sports Betting Assistant installed.");
  
    // Set up an alarm to fetch data periodically (e.g., every 15 minutes)
    chrome.alarms.create("fetchData", {
      periodInMinutes: 15,
    });
  });
  
  // Listen for the alarm event
  chrome.alarms.onAlarm.addListener(async (alarm) => {
    if (alarm.name === "fetchData") {
      try {
        // Fetch and process data in the background
        // Replace the example API URL with the actual API you want to use
        const apiUrl = "https://api.example.com/data";
        const response = await fetch(apiUrl);
        const data = await response.json();
  
        // Process and store the fetched data
        // You can also send the data to other parts of the extension using chrome.runtime.sendMessage()
        console.log("Fetched data:", data);
      } catch (error) {
        console.error("Error fetching data in background:", error);
      }
    }
  });
  
  // Add more event listeners or background tasks as needed
  