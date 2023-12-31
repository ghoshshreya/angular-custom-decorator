import 'zone.js/dist/zone';
import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AnotherComponentComponent } from './another-component/another-component.component';
import { LoggerComponentComponent } from './logger-component/logger-component.component';
import { PropertyDecoratorComponent } from './property-decorator/property-decorator.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    AnotherComponentComponent,
    LoggerComponentComponent,
    PropertyDecoratorComponent,
    FormsModule,
  ],
  template: `
  <!--<app-another-component *ngIf="show"></app-another-component>
  <button (click)="show = !show">click</button> <br><br>
  <app-logger-component></app-logger-component> <br><br>-->
  <app-property-decorator></app-property-decorator>`,
})
export class App {
  name = 'Angular';
  public show = false;
}

bootstrapApplication(App);
