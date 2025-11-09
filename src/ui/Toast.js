export class Toast {
    constructor(){
        this.card(message,bg);
    }
  static card(message, bg) {
      let card = document.createElement("div");
      card.style.cssText = `
        padding:0.5rem 1rem;
        border-radius:5px;
        background-color:${bg};
        color:white;
        position:fixed;
        top:2rem;
        left:50%;
        transform:translate(-50%,0);
        text-align :center;
        box-shadow:2px 2px 10px #33333357;
        `;
      card.innerHTML = message;
      document.body.appendChild(card);
      setTimeout(() => {
       card.remove()
    }, 3000);
  }

  static success(message) {
    this.card(message, "#37ff00ff");
  }
  static error(message) {
    this.card(message, "#ff3c00ff");
  }
  static info(message) {
    this.card(message, "#564dffff");
  }
}
