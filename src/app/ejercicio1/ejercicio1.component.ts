import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component {
  codigo: string = '';
  feedback: string = '';

  verificar() {
    const respuesta = this.codigo;
    const feedback = document.createElement('div');

    try {
      // Aquí creamos una función anónima con el código proporcionado por el usuario
      const usuarioFunc = new Function("a", "b", respuesta);

      // Verificamos si la función creada por el usuario devuelve el resultado correcto
      if (usuarioFunc(2, 3) === 5) {
        feedback.innerHTML = "¡Respuesta correcta!";
      } else {
        feedback.innerHTML = "Respuesta incorrecta, vuelve a intentarlo.";
      }
    } catch (error) {
      // Si hay un error en la evaluación del código proporcionado por el usuario, indicamos que la respuesta es incorrecta
      feedback.innerHTML = "Respuesta incorrecta, vuelve a intentarlo.";
    }

    this.feedback = feedback.innerHTML;
  }
}
