import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-another-component',
  standalone: true,
  templateUrl: './another-component.component.html',
  styleUrls: ['./another-component.component.css'],
})
@AutoUnsubscribe()
export class AnotherComponentComponent implements OnInit, OnDestroy {
  public intervalSubscription: Subscription | null = null;
  constructor() {}

  ngOnInit() {
    this.intervalSubscription = interval(1000)
      .pipe(take(100))
      .subscribe((x) => console.log(x));
  }

  ngOnDestroy() {
    console.log('Inside ng on destory');
    this.intervalSubscription?.unsubscribe();
  }
}

export function AutoUnsubscribe() {
  return function (constructor: any) {
    const originalDestroyMd = constructor.prototype.ngOnDestroy; // storing the original method

    constructor.prototype.ngOnDestroy;
  };
}
