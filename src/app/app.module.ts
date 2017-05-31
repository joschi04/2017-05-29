import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from 'app/flight-search/flight-search.components';
import { FlightService } from 'app/flight-search/flight.service';
import { BASE_URL } from 'app/app.tokens';
import { CityPipe } from 'app/shared/pipes/city.pipe';
import { FlightSearchModule } from 'app/flight-search/flight-search.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FlightSearchModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    // { provide: FlightService, useClass: FlightService }
    // FlightService
    { provide: BASE_URL, useValue: 'http://www.angular.at/api/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
