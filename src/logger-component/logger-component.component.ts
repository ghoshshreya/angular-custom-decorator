import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logger-component',
  standalone: true,
  template: '<div> Logger Component </div>',
  styleUrls: ['./logger-component.component.css'],
})
export class LoggerComponentComponent implements OnInit {
  constructor() {}
  @log()
  ngOnInit() {
    console.log('Inside ngOninit');
    console.log(this.add(10, 32));
  }

  @log()
  randomFunction() {
    console.log('Inside randomFunction');
  }

  @log()
  private add(a: number, b: number) {
    console.log('Inside add');
    return a + b;
  }
}

/*-----
The target of the decorator. This can be a class, an object, or a function. In this case, the target is the function factorial()

Name of the property or method being decorated
descriptor describes the property or method being decorated. This object contains information such as the property's name, type, value, and visibility.
---*/

export function log() {
  return function (target: any, key: string, descriptor: any) {
    const originalMd = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`Entering ${key}`);
      const result = originalMd.apply(this, args);
      console.log(`Leaving ${key}`);
      return result;
    };
    return descriptor.value;
    // const originalMethod = descriptor.value;

    // descriptor.value = function (...args: any[]) {
    //   console.log(`Entering ${key} method`);
    //   const result = originalMethod.apply(this, args);
    //   console.log(`Leaving ${key} method`);

    //   return result;
    // };

    // return descriptor;
  };
}
