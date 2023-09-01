class buttonlike extends HTMLElement(){
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.onButtonclicked = this.onButtonclicked.bind(this);
    }

    static get observedAttributes(){
        return ["message"]
    }
    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue
        this.Mount();
    }
    connectedCallback(){
        this.Mount();
    }

    Mount(){
    this.Mount();
    this.addListener();
}

addListener (){
    this.shadowRoot.querySelector("button");
    addEventListener("click",this.onButtonclicked);
}

render (){
    this.shadowRoot.innerHTML = `
    <section>
        <p>${this.message}</p>
        <button>Favorito</button>
    </section>
    `
}
conButtonclicked(){
    const currentValue = this.getAtribute("message");
    this.setAttribute ("message","Gracias"); 
}


}

customElements.define("my-button", buttonlike);
export default buttonlike; 