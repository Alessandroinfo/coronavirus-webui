import {Component} from '@angular/core';
import {Angulartics2GoogleAnalytics} from 'angulartics2/ga';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <cookie-law></cookie-law>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
    angulartics2GoogleAnalytics.startTracking();
  }
}
