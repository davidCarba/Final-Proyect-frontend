import { Component, OnInit, OnDestroy } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'al-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  spinnerIcon: IconProp = faGithub;

  ngOnInit() {
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy() {
    document.body.style.overflow = 'auto';
  }
}
