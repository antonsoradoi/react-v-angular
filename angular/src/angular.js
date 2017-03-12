import {Component, View} from 'angular2/core';

@Component({
  selector: 'angular'
})

@View({
  templateUrl: 'angular.html'
})

export class Angular {

  constructor() {
    console.info('Angular Component Mounted Successfully');
  }

}
