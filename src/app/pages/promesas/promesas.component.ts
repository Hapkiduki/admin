import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    let promesa = new Promise((resolve, reject) => {

      let contador = 0;
      let itervalo = setInterval(() => {
        contador += 1;
        if (contador === 3) {
          resolve();
          clearInterval(itervalo);
        }
      }, 1000);
    });

    promesa.then(
      () => console.log('Arre!')
    )
      .catch(error => console.error('Ocurrió un error', error));
  }

  ngOnInit() {
  }

}
