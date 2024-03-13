export default class PlaceFinder {
    constructor() {
        const addressForm = document.querySelector("form");
        const locateUserButton = document.getElementById("locate-btn");

        locateUserButton.addEventListener(
            "click",
            this.locateUserHandler.bind(this, locateUserButton)
        );
        addressForm.addEventListener("submit", this.findAddressHandler);
    }

    // handles user trying to get current location
    locateUserHandler(locateUserButton) {
        locateUserButton.disabled = true;
        if (!navigator.geolocation) {
            alert(
                "Location feature is not available in your browser. Please use a modern browser."
            );
            locateUserButton.disabled = false;
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (successResult) => {
                const coordinates = {
                    lat: successResult.coords.latitude,
                    long: successResult.coords.longitude,
                };
                locateUserButton.disabled = false;
            },
            (error) => {
                console.log(error.message);
                alert("Failed to get current location due to error.");
                locateUserButton.disabled = false;
                return;
            }
        );
    }

    // handles user trying to get location by manually entering address (string)
    findAddressHandler(event) {}
}

new PlaceFinder();
