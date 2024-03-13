export default class Modal {
    constructor(message) {
        this.message = message;
        this.modalTemplate = document.getElementById("modal-template");
    }

    toggle() {
        if (!("content" in document.createElement("template"))) {
            return;
        }

        let modalBackdrop = document.querySelector("div#modal-template");
        if (modalBackdrop === null) {
            // clone template element into document
            const modalTemplateNode = document.importNode(
                this.modalTemplate.content,
                true
            );
            modalBackdrop = modalTemplateNode.firstElementChild;
            const modalMain = modalTemplateNode.lastElementChild;
            modalMain.insertAdjacentText("afterbegin", this.message);

            document.body.insertAdjacentElement("afterbegin", modalBackdrop);
            document.body.insertAdjacentElement(
                "afterbegin",
                modalMain
            ).style.display = "block";
        } else {
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
}
