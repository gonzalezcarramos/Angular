import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
    // styles: [`
    //     h1{
    //         color:blue;
    //     }
    // `],
})
export class PersonasComponent{
    deshabilitar:boolean = false
    mensaje = 'No se se a guardado ninguna persona'

    agregarPersona() {
        this.mensaje = 'Se guardo la persona';
    }
}


// Notas
// --Crear componentes en Angular desde CLI
// comando ng generate component persona o ng g c persona (Va a crear un nuevo directorio dentro de app con sus respectivos componentes)

// --Generación de component en Linea 
// En el archivo de component se declara el atributo templeate: 'Se coloca el html por ejmeplo'
// import { Compo}

// @component({
//     selector: 'app-personas'
//     template: '<h1></<h1><app-personas></app-personas>'
// })

// export class PErsonasComponent {

// }

// --Instalar bootstrap 
// npm install bootstrap --save
// npm install jquery --save
// npm install popper.js --save

// en el archivo de angular.json
// en la parte de styles: [
//     "node_modules/bootstrap/dist/css/bootstrap.min.css"
// ]

// scripts: [
//     "node_modules/jquery/dist/jquery.slim.min.js",
//     "node_modules/popper.js/dist/umd/popper.min.js",
//     "node_modules/bootstrap/dist/js/bootstrap.min.js"
// ]
 