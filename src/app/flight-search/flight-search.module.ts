import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "app/shared/shared.module";
import { FlightSearchComponent } from "app/flight-search/flight-search.components";
import { FlightCardComponent } from "app/flight-search/flight-card.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule // <-- Kommt mit CityPipe
    ],
    declarations: [
        FlightSearchComponent,
        FlightCardComponent
    ],
    providers: [],
    exports: [
        FlightSearchComponent
    ]
})
export class FlightSearchModule { }
