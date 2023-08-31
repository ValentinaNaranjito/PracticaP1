//Importa, coger todos los componentes agruparlos e indicarles como van a funcionar.
import * as components from "./components/indexpadre.js" 
import data from "./data.js"
class Appcontainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
        data.forEach((user)=>{
            this.shadowRoot.innerHTML += `
            <myprofile name= "${user.name}" id= "${user.id}" city= "${user.addres.city}"></my-profile>`
        })
    }

    render(){

    }
}

customElements.define("app-container", Appcontainer);
