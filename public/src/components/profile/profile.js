class profile extends HTMLElement {
    //primer componente, el de observar los atributos. 
    static get observedAttributes (){
        //decirle qué atributos quiero observar.
        return ["name", "uid", "city"]
    }
    constructor(){
        super();
        this.attachShadow({mode:'open'}); 
    }
    //método que se encarga de informar qué va a pasar cuando mi componente se incruste en el html.
    connectedCallback(){
    this.render();
    }

    //Método para escuchar los ambios de nuestras variables.
    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML =
        `
        <link rel="stylesheet" href="./src/components/profile/profile.css">
        <section>
        <h1> ${this.name}</h1>
        <p>  ${this.uid}</p>
        <p><strong>From: ${this.city}</strong></p>
        `
    }
}

customElements.define("my-profile", profile);
export default profile;
