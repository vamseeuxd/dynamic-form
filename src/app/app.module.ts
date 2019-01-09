import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DynamicFormGeneratorComponent} from './dynamic-form-generator/dynamic-form-generator.component';
import {FormConfigTabComponent} from './form-config-tab/form-config-tab.component';
import {NflSearchResultFilterComponent} from './nfl-search-result-filter/nfl-search-result-filter.component';

@NgModule({
  declarations: [
    DynamicFormComponent,
    AppComponent,
    DynamicFormGeneratorComponent,
    FormConfigTabComponent,
    NflSearchResultFilterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
