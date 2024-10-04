document.addEventListener('DOMContentLoaded', function () {
    let zoneOneDisplay = document.getElementById('zoneOne');
    let zoneTwoDisplay = document.getElementById('zoneTwo');
    let syncIconStatus = document.getElementById('syncIconStatus');


    // Definování funkcí uvnitř události, aby měly přístup k 'zoneOneDisplay' a 'zoneTwoDisplay'
    let zoneOne = 22;
    let zoneTwo = 22;
    let sync = true;

    let smallFont = "22px";
    let mediumFont = "38px";
    updateText();
    updateSync();

    function updateText() {
        if (zoneOne === 28) {
            zoneOneDisplay.style.fontSize = smallFont;
            zoneOneDisplay.innerText = "HIGH";
        }
        else if (zoneOne === 16) {
            zoneOneDisplay.style.fontSize = smallFont;
            zoneOneDisplay.innerText = "LOW";
        }
        else{
            zoneOneDisplay.style.fontSize = mediumFont;
            zoneOneDisplay.innerText = zoneOne;
        }


        if (zoneTwo === 28) {
            zoneTwoDisplay.style.fontSize = smallFont;
            zoneTwoDisplay.innerText = "HIGH";
        }
        else if (zoneTwo === 16) {
            zoneTwoDisplay.style.fontSize = smallFont;
            zoneTwoDisplay.innerText = "LOW";
        }
        else{
            zoneTwoDisplay.style.fontSize = mediumFont;
            zoneTwoDisplay.innerText = zoneTwo;
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
        if ( zoneOne !== 28) {
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
        if (sync === true) {
            zoneTwo = zoneOne
        }
        updateText();
        updateSync();
    }


    function removeTempZoneTwo() {
        if (zoneTwo !== 16) {
            zoneTwo--
        }
        if (sync === true) {
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

})