class PlaceFinder {
    constructor() {
        const addressForm = document.querySelector("form");
        const locateUserButton = document.getElementById("locate-btn");

        locateUserButton.addEventListener("click", this.locateUserHandler);
        addressForm.addEventListener("submit", this.findAddressHandler);
    }

    // handles user trying to get current location
    locateUserButton(event) {
        if (!navigator.geolocation) {
            alert(
                "Location feature is not available in your browser. Please use a modern browser."
            );
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (successResult) => {
                const coordinates = {
                    lat: successResult.lat,
                    long: successResult.long,
                };
            },
            (error) => {
                alert("Failed to get current location due to error.");
                return;
            }
        );
    }

    // handles user trying to get location by manually entering address (string)
    findAddressHandler(event) {}
}

new PlaceFinder();
