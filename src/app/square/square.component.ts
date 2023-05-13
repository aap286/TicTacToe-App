import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: ` <button> {{ value }} </button> `,
  styles: [],
})
export class SquareComponent {

  // ? UI component
  //  creates a button that holds X or O value
  @Input() value!: 'X' | 'O';
}
