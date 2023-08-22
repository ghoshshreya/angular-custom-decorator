import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-another-component',
  standalone: true,
  templateUrl: './another-component.component.html',
  styleUrls: ['./another-component.component.css'],
})
@AutoUnsubscribe()
export class AnotherComponentComponent implements OnDestroy {
  constructor() {}

  ngOnDestroy() {
    console.log('Here');
  }
}

export function AutoUnsubscribe() {
  return function (constructor: any) {
    const originalDestroyMd = constructor.prototype.ngOnDestroy; // storing the original method

    constructor.prototype.ngOnDestroy;
  };
}
