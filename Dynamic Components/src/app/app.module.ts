import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{PortalModule} from '@angular/cdk/portal'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DisplayComponent]
})
export class AppModule { }
