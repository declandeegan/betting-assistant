document.addEventListener("DOMContentLoaded", () => {
  // Fetch and display odds comparison data
  async function fetchOddsComparison() {
    const apiUrl = `https://therundown-therundown-v1.p.rapidapi.com/sports/1/events?include=all_periods&odds_format=american`;
    const response = await fetchData(apiUrl);
    const oddsComparisonDiv = document.getElementById("odds-comparison");
    oddsComparisonDiv.innerHTML = JSON.stringify(response);
  }

  // Fetch and display betting tips data (In this example, I'm fetching upcoming events as betting tips)
  async function fetchBettingTips() {
    const apiUrl = `https://therundown-therundown-v1.p.rapidapi.com/sports/1/events`;
    const response = await fetchData(apiUrl);
    const bettingTipsDiv = document.getElementById("betting-tips");
    bettingTipsDiv.innerHTML = JSON.stringify(response);
  }

  // Fetch and display match and player statistics data (In this example, I'm fetching a specific event by ID)
  async function fetchStatistics() {
    const eventId = "12345"; // Replace with a valid event ID
    const apiUrl = `https://therundown-therundown-v1.p.rapidapi.com/events/${eventId}`;
    const response = await fetchData(apiUrl);
    const statisticsDiv = document.getElementById("statistics");
    statisticsDiv.innerHTML = JSON.stringify(response);
  }

  // Fetch and display live score updates data
  async function fetchLiveScore() {
    const apiUrl = `https://therundown-therundown-v1.p.rapidapi.com/sports/1/events/live`;
    const response = await fetchData(apiUrl);
    const liveScoreDiv = document.getElementById("live-score");
    liveScoreDiv.innerHTML = JSON.stringify(response);
  }

  // Helper function to fetch data from the API
  async function fetchData(apiUrl) {
    try {
      const response = await fetch(apiUrl, {
        headers: {
          "X-RapidAPI-Host": "therundown-therundown-v1.p.rapidapi.com",
          "X-RapidAPI-Key": "YOUR_API_KEY",
        },
      });
      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // Open the settings/options page
  function openSettings() {
    chrome.runtime.openOptionsPage();
  }

  // Attach the openSettings function to the button click event
  const openSettingsButton = document.getElementById("open-settings");
  openSettingsButton.addEventListener("click", openSettings);

  // Fetch data when the popup is opened
  fetchOddsComparison();
  fetchBettingTips();
  fetchStatistics();
  fetchLiveScore();
});
