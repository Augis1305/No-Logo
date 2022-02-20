import { Controller } from "@hotwire/stimulus";

export default class extends Controller {
    connect() {
        console.log("Connected");
        const messages = document.getElementById("messages");
        messages.addEventListener("DOMNodeInserted", this.resetScroll);
        this.resetScroll(messages);
    }

    disconnect() {
        console.log("Disconected");
    }

    resetScroll() {
        messages.scrollTop = messages.scrollHeight - messages.clientHeight;
    }
}
