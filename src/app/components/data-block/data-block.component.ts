import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-block',
  template: `
    <div class="flex flex-col items-center flex-grow px-5">
      <h1 class="text-2xl">{{title}}</h1>
      <div class="flex justify-center items-center px-10 text-6xl font-bold text-gray-500 leading-none">
        <div class="cursor-pointer" [ngClass]="color" [countUp]="_value"></div>
      </div>
    </div>
  `,
  styleUrls: ['./data-block.component.scss']
})
export class DataBlockComponent implements OnInit {
  @Input() title;
  @Input() color;

  constructor() {
  }

  _value = 0;

  @Input() get value() {
    return this._value;
  }

  set value(val) {
    if (val) {
      this._value = val;
    }
  }

  ngOnInit(): void {
  }

}
