import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';
import { PasswordMatchDirective } from './template-driven/passwordMatch.directive';

@NgModule({
  declarations: [
    AppComponent,PasswordMatchDirective,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
