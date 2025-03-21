//---------------------VARIABLES---------------------//
import { hasZoneTwo } from "./config.js"
import { fanSpeedLevels } from "./config.js"


// CLIMATE CONTROLS SCRIPT
//------DO NOT FUCK AROUND WITH ANYTHING OR IT WILL BRAKE------//
document.addEventListener('DOMContentLoaded', function () {
    let zoneOneDisplay = document.getElementById('zoneOne');
    let zoneTwoDisplay = document.getElementById('zoneTwo');
    let zoneTwoMenu = document.getElementById('zoneTwoMenu');
    let syncIconStatus = document.getElementById('syncIconStatus');
    let syncButton = document.getElementById('syncButton');
    let divider = document.getElementById('divider');
    let appAccess = document.getElementById('appAccess');
    let fanZone = document.getElementById('fanZone');
    let fan = document.getElementById('fan');

    let fanSpeed = 1;
    let zoneOne = 22;
    let zoneTwo = 22;
    let sync = true;

    let smallFont = "22px";
    let mediumFont = "38px";

    if (!hasZoneTwo) {
        syncButton.style.display = "none";
        zoneTwoMenu.style.display = "none";
        appAccess.style.padding = "0 30px";
        divider.style.display = "none";
        fanZone.style.display = "flex";
    }

    updateText();
    updateSync();

    function updateText() {
        switch (zoneOne) {
            case 28:
                zoneOneDisplay.style.fontSize = smallFont;
                zoneOneDisplay.innerText = "HIGH";
                break;
            case 16:
                zoneOneDisplay.style.fontSize = smallFont;
                zoneOneDisplay.innerText = "LOW";
                break;
            case 0:
                zoneOneDisplay.style.fontSize = smallFont;
                zoneOneDisplay.innerText = "OFF";
                break;
            default:
                zoneOneDisplay.style.fontSize = mediumFont;
                zoneOneDisplay.innerText = zoneOne;
                break;
        }


        switch (zoneTwo) {
            case 28:
                zoneTwoDisplay.style.fontSize = smallFont;
                zoneTwoDisplay.innerText = "HIGH";
                break;
            case 16:
                zoneTwoDisplay.style.fontSize = smallFont;
                zoneTwoDisplay.innerText = "LOW";
                break;
            case 0:
                zoneTwoDisplay.style.fontSize = smallFont;
                zoneTwoDisplay.innerText = "OFF";
                break;
            default:
                zoneTwoDisplay.style.fontSize = mediumFont;
                zoneTwoDisplay.innerText = zoneTwo;
                break;
        }

        switch (fanSpeed) {
            case 0:
                fan.innerText = "OFF";
                break
            default:
                fan.innerText = fanSpeed;
                break
        }

    }

    function updateSync() {
        if (sync) {
            syncIconStatus.style.backgroundColor = "var(--primary-color)";
        } else {
            syncIconStatus.style.backgroundColor = "var(--secondary-color-light)";
        }
    }

    function setSync() {
        if (sync) {
            sync = false
        } else {
            sync = true
            zoneTwo = zoneOne
        }
        updateText();
        updateSync();
    }


    function addTempZoneOne() {
        if (zoneOne !== 28) {
            zoneOne++
        }
        if (sync === true) {
            zoneTwo = zoneOne
        }
        updateText();
        updateSync();
    }

    function removeTempZoneOne() {
        if (zoneOne !== 16) {
            zoneOne--
        }
        if (sync) {
            zoneTwo = zoneOne
        }
        updateText();
        updateSync();
    }

    function addFanSpeed() {
        if (fanSpeed !== fanSpeedLevels) {
            fanSpeed++
        }
        updateText();
    }

    function removeFanSpeed() {
        if (fanSpeed !== 0) {
            fanSpeed--
        }
        updateText();
    }


    function removeTempZoneTwo() {
        if (zoneTwo !== 16) {
            zoneTwo--
        }
        if (sync) {
            sync = false;
        }
        updateText();
        updateSync();
    }

    function addTempZoneTwo() {
        if (zoneTwo !== 28) {
            zoneTwo++
        }
        if (sync === true) {
            sync = false;
        }
        updateText();
        updateSync();
    }


    document.getElementById('plus-zone-1').addEventListener('click', addTempZoneOne);
    document.getElementById('plus-zone-2').addEventListener('click', addTempZoneTwo);
    document.getElementById('minus-zone-1').addEventListener('click', removeTempZoneOne);
    document.getElementById('minus-zone-2').addEventListener('click', removeTempZoneTwo);
    document.getElementById('syncButton').addEventListener('click', setSync);
    document.getElementById('plus-fan').addEventListener('click', addFanSpeed);
    document.getElementById('minus-fan').addEventListener('click', removeFanSpeed);
})