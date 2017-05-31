import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "app/shared/shared.module";
import { FlightSearchComponent } from "app/flight-search/flight-search.components";
import { FlightCardComponent } from "app/flight-search/flight-card.component";
import { ReactiveFlightSearchComponent } from "app/reactive-flight-search/reactive-flight-search.components";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule // <-- Kommt mit CityPipe
    ],
    declarations: [
        ReactiveFlightSearchComponent,
        FlightSearchComponent,
        FlightCardComponent
    ],
    providers: [],
    exports: [
        ReactiveFlightSearchComponent,
        FlightSearchComponent
    ]
})
export class FlightSearchModule { }
