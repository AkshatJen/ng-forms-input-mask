import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';

import { demoAppAnimations } from './utils/app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: demoAppAnimations,
})
export class AppComponent {

  demoFormGroup = new UntypedFormGroup({
    validateMask: new UntypedFormControl(null),
    simpleMask: new UntypedFormControl(null),
    multiMask: new UntypedFormControl(null),
    unmaskedMask: new UntypedFormControl(null),

    simpleCurrency: new UntypedFormControl(null),
    customCurrency: new UntypedFormControl(null),
    clearCurrency: new UntypedFormControl(null),
    custom2Currency: new UntypedFormControl(null),

    wrappedMask: new UntypedFormControl(null),
  });

}
