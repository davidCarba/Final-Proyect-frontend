import { Component } from '@angular/core';
import { faHackerrank } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'al-site-layout-header',
  templateUrl: './site-layout-header.component.html',
  styleUrls: ['./site-layout-header.component.scss']
})
export class SiteLayoutHeaderComponent {
  logo = faHackerrank;
  title = 'Alvezinc';
}
