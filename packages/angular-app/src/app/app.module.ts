import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

const components = [
  AppComponent,
  HeaderComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  entryComponents: [
    ...components
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const { injector } = this
    const ngCustomElementHeader = createCustomElement(HeaderComponent, { injector })
    window.customElements.define('ng-header', ngCustomElementHeader)
  }
}
