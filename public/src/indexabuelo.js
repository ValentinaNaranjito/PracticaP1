//Importa, coger todos los componentes agruparlos e indicarles como van a funcionar.
import * as components from "./components/indexpadre.js" 

class Appcontainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){

    }
}

customElements.define("app-container", Appcontainer);
