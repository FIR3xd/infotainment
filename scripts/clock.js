document.addEventListener("DOMContentLoaded", () => {
    const UPDATE_INTERVAL_MS = 1000;

    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        //const seconds = now.getSeconds().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}`;

        const clockElement = document.getElementById('clock');
        if (clockElement) {
            clockElement.innerHTML = timeString;
        } else {
            console.warn("Element with ID 'clock' not found.");
        }
    }

    updateClock();
    setInterval(updateClock, UPDATE_INTERVAL_MS);
});