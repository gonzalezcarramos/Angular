import { Component } from "@angular/core";

@Component({
    selector: 'app-persona',
    templateUrl: './persona.component.html'
    // template: '<p>Componente en linea Angular</p>'
})
export class PersonaComponent{
    // declaración variables y son publicos 
    nombre:string = 'Juan';
    apellido:string = 'Ramos';
    // Para hacer que la variable sea privada, con colocar la palabra reservada private y para acceder a variables privada se necesita un método o función get
    private edad:number = 28;

    getEdad():number {
        return this.edad;
    }

}