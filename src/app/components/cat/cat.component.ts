import { Component } from '@angular/core';

@Component({
  selector: 'app-cat',
  template: `
    <h3>Cat</h3>
    <p>
       cat works!
     </p>
   `,
  //template: '<p>cat works</p>',
  styleUrls: ['./cat.component.scss', '../common.scss']
})
export class CatComponent {

}
