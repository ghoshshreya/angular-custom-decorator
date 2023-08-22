import 'zone.js/dist/zone';
import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AnotherComponentComponent } from './another-component/another-component.component';
import { LoggerComponentComponent } from './logger-component/logger-component.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, AnotherComponentComponent, LoggerComponentComponent],
  template: `<app-another-component *ngIf="show"></app-another-component>
  <button (click)="show = !show">click</button> <br><br>
  <app-logger-component></app-logger-component>`,
})
export class App {
  name = 'Angular';
  public show = false;
}

bootstrapApplication(App);
