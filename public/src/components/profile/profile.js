class profile extends HTMLElement {
    //primer componente, el de observar los atributos. 
    static get observedAttributes (){
        //decirle qué atributos quiero observar.
        return ["name", "id", "city"]
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"}); 
    }
    //método que se encarga de informar qué va a pasar cuando mi componente se incruste en el html.
    connectedCallback(){
    this.RENDER();
    }

    //Método para escuchar los ambios de nuestras variables.
    attributeChangeCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }
    render(){
        `
        <section>
        <h1> ${this.name}</h1?
        <p> ID: ${this.id}</p>
        <p><strong>From: ${this.city}</strong></p>
        `
    }
}

customElements.define("my-profile")