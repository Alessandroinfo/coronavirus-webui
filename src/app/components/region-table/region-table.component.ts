import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-region-table',
  template: `
    <h1 class="text-3xl flex justify-center mb-3 text-gray-500">Regioni</h1>
    <div class="border-2 border-gray-800 sm:text-lg text-xs overflow-auto">
      <div class="flex sticky top-0 text-gray-500 bg-gray-900 border-b border-gray-800">
        <div class="p-3 sm:w-1/6 min-w-24 font-medium bg-gray-900 sticky left-0 z-10">Regione</div>
        <div class="p-3 sm:w-1/6 min-w-24 font-medium">Casi totali</div>
        <div class="p-3 sm:w-1/6 min-w-24 font-medium">Infetti</div>
        <div class="p-3 sm:w-1/6 min-w-24 font-medium">Decessi</div>
        <div class="p-3 sm:w-1/6 min-w-24 font-medium">Guariti</div>
        <div class="p-3 sm:w-1/6 min-w-24 font-medium">Tamponi</div>
      </div>
      <div class="flex text-gray-500 hover:text-gray-200 hover:bg-gray-800"
           [ngClass]="[i % 2 ? 'bg-gray-900': 'bg-gray-800']"
           *ngFor="let region of arrData; let i = index">
        <div class="p-3 sm:w-1/6 min-w-24 sticky left-0 z-10"
             [ngClass]="[i % 2 ? 'bg-gray-900': 'bg-gray-800']"
        >{{region[0]}}</div>
        <div class="p-3 sm:w-1/6 min-w-24">{{region[1]?.total_cases}}</div>
        <div class="p-3 sm:w-1/6 min-w-24">{{region[1]?.infected}}</div>
        <div class="p-3 sm:w-1/6 min-w-24">{{region[1]?.deaths}}</div>
        <div class="p-3 sm:w-1/6 min-w-24">{{region[1]?.healed}}</div>
        <div class="p-3 sm:w-1/6 min-w-24">{{region[1]?.tampon}}</div>
      </div>
    </div>
  `,
  styleUrls: ['./region-table.component.scss']
})
export class RegionTableComponent implements OnInit, OnChanges {
  @Input() data;
  arrData;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.data) {
      this.arrData = Object.keys(this.data).map(key => {
        return [key, this.data[key]];
      });
      this.arrData.sort((a, b) => parseFloat(b[1].infected) - parseFloat(a[1].infected));
      // console.log(this.arrData);
    }
  }

}
