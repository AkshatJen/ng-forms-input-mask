import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFormsInputMasksModule } from '../../projects/angular-forms-input-masks/src/lib/angular-forms-input-masks.module';
import { AppComponent } from './app.component';
import { DemoCardComponent } from './components/demo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoCardComponent,
  ],
  imports: [
    BrowserModule,
    AngularFormsInputMasksModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
