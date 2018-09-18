import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

myVar: String = 'Going up';
updateMyVar() {
  this.myVar = 'Going up and up';
}
}
