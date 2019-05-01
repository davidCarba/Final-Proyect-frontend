import { Component } from '@angular/core';

@Component({
  selector: 'al-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  title = 'Bienvenidos a Alvezinc!!';
  subtitle = 'Mi nombre es David y este es mi proyecto ';
  description = `Para mas informacion sobre mi o sobre mis proyectos, puedes consultar :`;
  links = [
    { url: 'https://www.linkedin.com/in/david-carballal-alvedro/', name: 'LinkedIn' },
    { url: 'https://github.com/davidCarba', name: 'Github' }
  ];

  contact = {
    description: 'Para contactar puedes enviar un email a: ',
    mail: 'da.carballal@gmail.com'
  };
}
