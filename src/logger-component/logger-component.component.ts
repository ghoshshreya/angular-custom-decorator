import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logger-component',
  standalone: true,
  templateUrl: './logger-component.component.html',
  styleUrls: ['./logger-component.component.css'],
})
export class LoggerComponentComponent implements OnInit {
  constructor() {}
  @log()
  ngOnInit() {
    this.add(10, 32);
  }

  @log()
  private add(a: number, b: number) {
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
    console.log(originalMd);
    descriptor.value = (...args: any[]) => {
      // console.log('Hello', args);
      console.log('Entering method ', key);
      const result = originalMd.apply(this, args);
      console.log('Leaving method ', key);
      return result;
    };
    return descriptor;
  };
}
