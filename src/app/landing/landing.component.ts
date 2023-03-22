import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-landing',
  template: `
    <div class="m-5">
      <!--  HEADER  -->
      <div class="flex sm:flex-row flex-col justify-between items-center mb-5 py-3
    px-10 text-xl font-hairline border-2 border-gray-800
    bg-gray-900 text-gray-500 leading-normal">
        <h1>CORONAVIRUS in Italia - COVID-19</h1>
        <h2 class="text-lg text-center">Aggiornamenti in tempo
          reale: {{myDate | amLocal | amDateFormat: 'YYYY-MM-DD HH:mm'}}</h2>
      </div>

      <!--  PANEL DATA-->
      <app-panel-data [data]="globalData" [title]="'Globali'"></app-panel-data>
      <app-panel-data [data]="italyData" [title]="'Italia'" [typeTotal]="true"></app-panel-data>

      <!--  REGIONS  -->
      <app-region-table [data]="regions"></app-region-table>

      <!--  FONTI  -->
      <div class="flex justify-between mt-5 mb-5 py-3
      px-10 text-xl font-hairline border-2 border-gray-800
      bg-gray-900 text-gray-500 leading-normal">
        <div class="text-lg text-center">Fonti:
          <a class="text-gray-100" href="https://www.who.int/" target="_blank">who.int</a>
          -
          <a class="text-gray-100" href="http://www.salute.gov.it/" target="_blank">salute.gov.it</a>
          -
          <a class="text-gray-100" href="http://www.protezionecivile.gov.it/"
             target="_blank">protezionecivile.gov.it</a>
        </div>
      </div>

      <!--  SHARE  -->
      <div class="flex justify-around h-6">
        <div class="fb-share-button leading-loose rounded-md text-sm h-full"
             data-href="https://www.coronavirus-live.it/"
             data-layout="button_count" data-size="large"><a
            target="_blank"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.coronavirus-live.it%2F&amp;src=sdkpreparse"
            class="fb-xfbml-parse-ignore">Condividi</a></div>

        <a
            class="twitter-share-button leading-none font-medium"
            href="https://twitter.com/intent/tweet?text=Aggiornamenti%20Coronavirus%20-%20https://www.coronavirus-live.it%20#coronavirus"
            target="_blank">
          <div class="rounded-sm bg-blue-500 pl-2 pr-4 text-sm flex items-center justify-center h-full">
            <img class="w-1/4 mr-2"
                 src="../../assets/imgs/twitter.svg"
                 alt="">
            <div>Twitter</div>
          </div>
        </a>

        <a class="leading-none font-medium"
           href="https://api.whatsapp.com/send?phone=&text=Aggiornamenti%20Coronavirus%20-%20https%3A%2F%2Fwww.coronavirus-live.it">
          <div class="rounded-sm bg-green-400 text-sm flex items-center justify-center h-full px-3">
            <img class="w-4 mr-2"
                 src="../../assets/imgs/whatsapp.svg" alt="">
            <div class="text-sm">WhatsApp</div>
          </div>
        </a>
      </div>

      <!--  BANNER  -->
      <ng-adsense
          class="flex overflow-hidden w-full"
          [adClient]="'ca-pub-4986387636395258'"
          [adSlot]="8589764592"
      ></ng-adsense>

    </div>
  `,
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  globalData;
  italyData;
  regions;
  myDate;

  constructor(public apiSvc: ApiService) {
  }

  ngOnInit(): void {
    this.apiSvc.getCoronaData().pipe(
        tap(val => {
          this.globalData = val[0];
          this.regions = val[1];
          this.italyData = Object.values(val[1]).reduce((prev, current) => ({
            infected: prev.infected + current.infected,
            deaths: prev.deaths + current.deaths,
            healed: prev.healed + current.healed,
            total_cases: prev.total_cases + current.total_cases,
          }));
        })
    ).subscribe();
  }

}
