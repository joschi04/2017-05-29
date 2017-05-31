import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "app/shared/shared.module";
import { FlightSearchComponent } from "app/flight-search/flight-search.components";
import { FlightCardComponent } from "app/flight-search/flight-card.component";
import { ReactiveFlightSearchComponent } from "app/reactive-flight-search/reactive-flight-search.components";
import { PassengerSearchComponent } from "app/passenger-search/passenger-search.component";
import { FlightSearchRouterModule } from "app/flight-search/flight-search.routes";
import { FlightEditComponent } from "app/flight-edit/flight-edit.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlightSearchRouterModule,
        SharedModule // <-- Kommt mit CityPipe
    ],
    declarations: [
        ReactiveFlightSearchComponent,
        PassengerSearchComponent,
        FlightSearchComponent,
        FlightCardComponent,
        FlightEditComponent
    ],
    providers: [],
    exports: [
        ReactiveFlightSearchComponent,
        FlightSearchComponent
    ]
})
export class FlightSearchModule { }
