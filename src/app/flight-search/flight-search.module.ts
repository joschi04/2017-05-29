import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "app/shared/shared.module";
import { FlightSearchComponent } from "app/flight-search/flight-search.components";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule // <-- Kommt mit CityPipe
    ],
    declarations: [
        FlightSearchComponent
    ],
    providers: [],
    exports: [
        FlightSearchComponent
    ]
})
export class FlightSearchModule { }
