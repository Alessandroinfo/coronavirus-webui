import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-panel-data',
  template: `
    <div class="flex flex-col mb-5 justify-center py-6
    px-10 text-xl font-hairline border-2 border-gray-800
    bg-gray-900 text-gray-500">
      <div class="flex flex-grow justify-center">
        <h1 class="text-3xl mb-5">{{title}}</h1>
      </div>

      <div class="flex flex-col flex-wrap md:flex-row flex-grow">
        <app-data-block *ngIf="typeTotal" class="w-full md:mb-5 mb-8"
                        [color]="'text-grey-600'"
                        [title]="'Casi totali'"
                        [value]="data?.total_cases"></app-data-block>
        <app-data-block class="w-full md:w-1/3 md:mb-0 mb-5"
                        [color]="'text-red-600'"
                        [title]="typeTotal ? 'Infetti' : 'Casi totali'"
                        [value]="data?.infected"></app-data-block>
        <app-data-block class="w-full md:w-1/3 md:mb-0 mb-5"
                        [color]="'text-black-700'"
                        [title]="'Decessi'"
                        [value]="data?.deaths"></app-data-block>
        <app-data-block class="w-full md:w-1/3 md:mb-0 mb-5"
                        [color]="'text-green-600'"
                        [title]="'Guariti'"
                        [value]="data?.healed"></app-data-block>
      </div>
    </div>
  `,
  styleUrls: ['./panel-data.component.scss']
})
export class PanelDataComponent implements OnInit {

  @Input() data;
  @Input() typeTotal = false;
  @Input() title;

  constructor() {
  }

  ngOnInit(): void {
  }

}
