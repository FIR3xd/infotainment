//---Parameters---//
export const vehicleBrand = "EAGLE"
export const vehicleModel = "Tourer"
export const vehicleTrim = "Executive"
export const odometer = 2596 //IN KM

export const isElectric = false

export const engineName = "TSI"
export const enginePower = "190" //IN HP
export const engineLayout = "I" // I, V, F, B
export const engineCylCount = "4"
export const engineDisplacement = "2.0" //IN LITERS




//---DESIGN---//
const primaryColor = "#04aa6d" //DEFAULT IS #04aa6d
const containerColor = "#1b1b1b"; // Default is #1b1b1b
const secondaryColor = "#222222"; // Default is #222222
const secondaryColorLight = "#333333"; // Default is #333333
const tertiaryColor = "#171717"; // Default is #171717
const textColor = "#ffffff"; // Default is #ffffff

const headerBorderRadius = "30px" //DEFAULT IS 30px
const buttonBorderRadius = "50px" //DEFAULT IS 50px
const iconBorderRadius = "10px" //DEFAULT IS 10px


//---CLIMATE CONTROL---//
export const hasZoneTwo = true ; // TWO ZONE CLIMATE TOGGLE
export const fanSpeedLevels = 4 ; // AMOUNT OF CLIMATE FAN SPEED LEVELS





//DO NOT TOUCH
document.documentElement.style.setProperty("--primary-color", primaryColor);
document.documentElement.style.setProperty("--container-color", containerColor);
document.documentElement.style.setProperty("--secondary-color", secondaryColor);
document.documentElement.style.setProperty("--secondary-color-light", secondaryColorLight);
document.documentElement.style.setProperty("--tertiary-color", tertiaryColor);
document.documentElement.style.setProperty("--text-colour", textColor);
document.documentElement.style.setProperty("--header-border-radius", headerBorderRadius);
document.documentElement.style.setProperty("--button-border-radius", buttonBorderRadius);
document.documentElement.style.setProperty("--icon-border-radius", iconBorderRadius);

try {
    document.getElementById("vehicle-name").innerHTML = vehicleBrand + " " + vehicleModel;
    document.getElementById("engine-specs").innerHTML = engineDisplacement + "L " + engineName + " " + enginePower + "hp";
    document.getElementById("vehicle-trim").innerHTML = vehicleTrim;
    document.getElementById("odometer").innerHTML = odometer + " KM";
}
catch (error) {}
