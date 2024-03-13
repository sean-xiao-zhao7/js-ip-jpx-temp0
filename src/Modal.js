class Modal {
    constructor(elementId) {
        this.contentTemplate = document.getElementById(elementId);
        this.modalTemplate = document.getElementById("modal-template");
    }

    toggle() {
        if (!("content" in document.createElement("template"))) {
            return;
        }

        // clone template element into document
        const modalTemplateNode = document.importNode(
            this.modalTemplate.content,
            true
        );
        const modalBackdrop = modalTemplateNode.firstElementChild();
        const modalMain = modalTemplateNode.lastsElementChild();

        const status = modalBackdrop.style.display;
        if (status === "none") {
            modalBackdrop.style.display = "block";
            modalMain.style.display = "block";
        } else {
            modalBackdrop.style.display = "none";
            modalMain.style.display = "none";
        }
    }
}
