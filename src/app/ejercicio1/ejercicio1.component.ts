import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component {


  showMessage(message: string) { // funcion que muestra los mensajes en consola
    const div = document.createElement('div');
    div.classList.add('console-line');
    div.textContent = message;
    const consoleDiv = document.querySelector('.console');

    if (consoleDiv) {
      consoleDiv.appendChild(div);
    }
  }

  codigo: string = '';
  feedback: string = '';

  verificar() {
    const respuesta = this.codigo;
    const feedback = document.createElement('div');

    const button: any = document.querySelector('#buttonRun'); // para cambiar la clase de button run
    button.classList.add('is-loading');

    try {
      // Aquí creamos una función anónima con el código proporcionado por el usuario
      const usuarioFunc = new Function("a", "b", respuesta);

      // Verificamos si la función creada por el usuario devuelve el resultado correcto
      if (usuarioFunc(2, 3) === 5) {
        const consoleDiv = document.querySelector('.console');
        setTimeout(() => {
          this.showMessage('Ejecutando...');
        }, 500);
        setTimeout(() => {
          this.showMessage('Proceso 1');
        }, 1000);

        setTimeout(() => {
          this.showMessage('Proceso 2');
        }, 2000);

        setTimeout(() => {
          this.showMessage('Proceso 3');
        }, 3000);
        setTimeout(() => {
          button.classList.remove('is-loading');
          this.showMessage(feedback.innerHTML = "¡Respuesta correcta!");
        }, 4000);
      } else {
        setTimeout(() => {
          this.showMessage('Ejecutando...');
        }, 500);
        setTimeout(() => {
          this.showMessage('Proceso 1');
        }, 1000);

        setTimeout(() => {
          this.showMessage('Proceso 2');
        }, 2000);

        setTimeout(() => {
          this.showMessage('Proceso 3');
        }, 3000);
        setTimeout(() => {
          button.classList.remove('is-loading');
          this.showMessage(feedback.innerHTML = "Respuesta incorrecta, vuelve a intentarlo.");
          // console.log(feedback.innerHTML, "aca2")
        }, 4000);


      }
    } catch (error) {
      setTimeout(() => {
        this.showMessage('Ejecutando...');
      }, 500);
      setTimeout(() => {
        this.showMessage('Proceso 1');
      }, 1000);

      setTimeout(() => {
        this.showMessage('Proceso 2');
      }, 2000);

      setTimeout(() => {
        this.showMessage('Proceso 3');
      }, 3000);
      setTimeout(() => {
        console.log("aca")
        button.classList.remove('is-loading');
        this.showMessage(feedback.innerHTML = "Respuesta incorrecta, vuelve a intentarlo.");
      }, 4000);
      // Si hay un error en la evaluación del código proporcionado por el usuario, indicamos que la respuesta es incorrecta

    }
    this.feedback = feedback.innerHTML;
    console.log(this.feedback)
  }
}
