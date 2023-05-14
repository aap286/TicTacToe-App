import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: ` <button class="default" *ngIf="!value">{{ value }}</button>
    <button class="cross" *ngIf="value == 'X'">{{ value }}</button>
    <button class="dot" *ngIf="value == 'O'">{{ value }}</button>`,
  styles: [
    `
      .default {
        height: 200px;
        width: 200px;
        font-size: 60px;
        background-color: whitesmoke;
      }

      .cross {
        height: 200px;
        width: 200px;
        font-size: 60px;
        color: white;
        background-color: pink;
      }

      .dot {
        height: 200px;
        color: white;
        width: 200px;
        font-size: 60px;
        background-color: darkslateblue;
      }
    `,
  ],
})
export class SquareComponent {
  // ? UI component
  //  creates a button that holds X or O value
  @Input() value!: 'X' | 'O';
}
