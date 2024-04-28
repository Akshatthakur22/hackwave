// Get elements
const localTimeInput = document.getElementById('local-time');
const selectTimezone = document.getElementById('select-timezone');
const convertedTimeInput = document.getElementById('converted-time');

// Update local time input with current time
updateLocalTime();

// Add change event listener to select timezone
selectTimezone.addEventListener('change', () => {
  updateConvertedTime();
});

// Function to update local time input with current time
function updateLocalTime() {
  const currentTime = new Date().toLocaleTimeString();
  localTimeInput.value = currentTime;
}

// Function to update converted time input based on selected timezone
function updateConvertedTime() {
  const selectedTimezone = selectTimezone.value;
  const currentTime = new Date().toLocaleString('en-US', { timeZone: selectedTimezone });
  convertedTimeInput.value = currentTime;
}

