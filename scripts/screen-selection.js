document.addEventListener('DOMContentLoaded', function () {
    let iframe = document.getElementById('iframe');

    function changeScreen(screen) {
        switch (screen) {
            case "car":
                iframe.src = "pages/car.html";
                break;
            case "radio":
                iframe.src = "pages/radio.html";
                break;
            case "more":
                iframe.src = "pages/more-apps.html";
                break;
            default:
                console.warn("Screen not found");
                break;
        }
    }


    document.getElementById('carButton').addEventListener('click', changeScreen.bind(this, "car"));
    document.getElementById('radioButton').addEventListener('click', changeScreen.bind(this, "radio"));
    document.getElementById('moreApps').addEventListener('click', changeScreen.bind(this, "more"));
})