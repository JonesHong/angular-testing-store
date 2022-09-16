import { Component } from '@angular/core';
// import { Store } from '../../libs/yaotai-store/mycena-store.unittest';
import { Store } from '@yaotai/frontend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testing';

  constructor() {
    console.log('>>>HeHeHe<<<', Store);
    // Store.subscribe(entity => console.log('Store----> ', entity));
    // StoreWithRelation.subscribe(smartEntity => console.log('Relation store ------> ', smartEntity));
  }
}
