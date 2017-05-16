require('./index.less');

import * as $ from 'jquery';

import {cambiarColor, suma, validarDatos} from './utilerias';

window.$ = window.jQuery = $;

let startApp = () => {
    $('#formulario').submit(
        function(evt){
            evt.preventDefault();
            let ret=true;
            let nombre=$('#nombre').val();
            let edad=$('#edad').val();
            let color=$('#color').val();
            let id=$('#id').val();
            if(validarDatos(nombre, edad, color, id)) {
                cambiarColor();
            } else {
                alert('Verifica los datos ingresados');
            }
        }
    );   
}
window.startApp = startApp;
