import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-shadow',
  templateUrl: './view-encapsulation-shadow.component.html',
  styleUrls: ['./view-encapsulation-shadow.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ViewEncapsulationShadowComponent {

}
