import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {LandingComponent} from './landing/landing.component';
import {AngularFireModule} from '@angular/fire';
import {DataBlockComponent} from './components/data-block/data-block.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CookieLawModule} from 'angular2-cookie-law';
import {MomentModule} from 'ngx-moment';
import {PanelDataComponent} from './components/panel-data/panel-data.component';
import {CountUpModule} from 'ngx-countup';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {Angulartics2Module} from 'angulartics2';
import {AdsenseModule} from 'ng2-adsense';
import {RegionTableComponent} from './components/region-table/region-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DataBlockComponent,
    PanelDataComponent,
    RegionTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // BrowserAnimationsModule is required
    CookieLawModule, // import Angular's CookieLaw modules
    MomentModule,
    AppRoutingModule,
    CountUpModule,
    Angulartics2Module.forRoot(),
    // shown passing global defaults (optional)
    AdsenseModule.forRoot({
      adClient: 'AD_ID',
      adSlot: 999999,
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
