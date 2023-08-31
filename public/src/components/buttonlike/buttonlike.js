class buttonlike extends HTMLElement (){
    constructor(){
        super();
        this.attachShadow({mode:"open"});
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
    this.addEventListener
    this.addEventListener();
}

}