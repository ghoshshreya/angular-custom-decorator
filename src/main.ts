import 'zone.js/dist/zone';
import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AnotherComponentComponent } from './another-component/another-component.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, AnotherComponentComponent],
  template: `<app-another-component *ngIf="show"></app-another-component>
  <button (click)="show = !show">click</button>`,
})
export class App {
  name = 'Angular';
  public show = true;
}

bootstrapApplication(App);
