class Modal {
    constructor(elementId) {
        this.contentTemplateElement = document.getElementById(elementId);
    }

    toggle() {
        const status = this.contentTemplateElement.style.display;
        if (status === "none") {
            this.contentTemplateElement.style.display = "block";
        } else {
            this.contentTemplateElement.style.display = "none";
        }
    }
}
