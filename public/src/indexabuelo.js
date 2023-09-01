//Importa, coger todos los componentes agruparlos e indicarles como van a funcionar.
import * as components from "./components/indexpadre.js" 
import data from "./data.js"
class Appcontainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
       
    }

    render(){
        data.forEach((user)=>{
            this.shadowRoot.innerHTML += `  
            <my-profile name="${user.name}" uid="${user.id}" city="${user.city}"></my-profile>
            <my-button message = "Registra tu favorito"></my-button>
            `
        })
    }
}

customElements.define("app-container", Appcontainer);
