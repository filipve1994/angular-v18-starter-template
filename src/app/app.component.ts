import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslocoDirective, TranslocoPipe, TranslocoService} from "@jsverse/transloco";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslocoPipe, TranslocoDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-v18-starter-template';

  constructor(private translocoService: TranslocoService) {
  }

  switchLanguage(lang:string) {
    this.translocoService.setActiveLang(lang);
  }
}
