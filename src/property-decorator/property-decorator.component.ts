import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-property-decorator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './property-decorator.component.html',
  styleUrls: ['./property-decorator.component.css'],
})
export class PropertyDecoratorComponent implements OnInit {
  @Required public name: any = null;

  constructor() {}

  ngOnInit() {
    console.log(this.name);
  }
}

export function Required(target: Object, key: string) {
    Object.defineProperty(target, key, {
      get() {
        throw new Error(`Attribute ${key} is required`);
      },
      set(value) {
        Object.defineProperty(target, key, {
          value,
          writable: true,
          configurable: true,
        });
      },
      configurable: true,
    });
}
