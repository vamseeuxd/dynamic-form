import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DynamicFormGeneratorComponent} from './form-config-tab/dynamic-form-generator/dynamic-form-generator.component';
import {FormConfigTabComponent} from './form-config-tab/form-config-tab.component';
import {NflSearchResultFilterComponent} from './nfl-search-result-filter/nfl-search-result-filter.component';
import {TableHeaderComponentComponentComponent} from './table-header-component-component/table-header-component-component.component';
import {PageOneComponent} from './page-one/page-one.component';
import {FocusDirective} from './directives/focus.directive';
import {ModalModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    DynamicFormComponent,
    AppComponent,
    DynamicFormGeneratorComponent,
    FormConfigTabComponent,
    NflSearchResultFilterComponent,
    TableHeaderComponentComponentComponent,
    PageOneComponent,
    FocusDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  entryComponents: [
    FormConfigTabComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
