import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Angular} from 'angular';

@Component({
  selector: 'main'
})

@View({
  directives: [Angular],
  template: `
    <angular></angular>
  `
})

class Main {

}

bootstrap(Main);
