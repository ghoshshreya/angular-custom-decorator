import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-another-component',
  standalone: true,
  templateUrl: './another-component.component.html',
  styleUrls: ['./another-component.component.css'],
})
@AutoUnsubscribe(['anotherSubscription']) //In case we need to exclude certain subscriptions
export class AnotherComponentComponent implements OnInit, OnDestroy {
  public intervalSubscription: Subscription | null = null;
  public anotherSubscription: Subscription | null = null;

  ngOnInit() {
    this.intervalSubscription = interval(1000)
      .pipe(take(10))
      .subscribe((x) => {
        console.log(x);
      });

    this.anotherSubscription = interval(1000)
      .pipe(take(10))
      .subscribe((x) => {
        console.log('Another Subscription', x);
      });
  }

  ngOnDestroy() {
    console.log('Inside ng on destroy');
  }
}

export function AutoUnsubscribe(blacklist: any[]) {
  return function (constructor: any) {
    const originalDestroyMd = constructor.prototype.ngOnDestroy; // storing the original method

    // overriding functaionality of ngOnDestory to unsubscribe automatically
    constructor.prototype.ngOnDestroy = function () {
      for (let args in this) {
        const property = this[args];
        console.log('Blacklisted subscriptions', blacklist);
        if (
          property &&
          blacklist.indexOf(args) === -1 &&
          typeof property['unsubscribe'] === 'function'
        ) {
          property.unsubscribe();
        }
      }

      // to execute the original method, without this the original method will not be executed
      originalDestroyMd &&
        typeof originalDestroyMd === 'function' &&
        originalDestroyMd.apply(this, arguments);
    };
  };
}
