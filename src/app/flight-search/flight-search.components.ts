import { Component, OnInit } from '@angular/core';
import { Flight } from "app/entities/flight";

//               V----------------V--------- Explizit importiert
import { Http, URLSearchParams, Headers } from "@angular/http";
import { FlightService } from "app/flight-search/flight.service";

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    providers: [FlightService]
})
export class FlightSearchComponent implements OnInit {

    from: string;
    to: string;
    flights: Array<Flight> = [];
    selectedFlight: Flight;

    //private http: Http;

    constructor(private flightService: FlightService) { 
        //this.http = http;
    }

    search(): void {

            this
            .flightService
            .find(this.from, this.to)
            .subscribe(
                (flights: Flight[]) => {
                    this.flights = flights;
                },
                (errResponse) => {
                    console.error('Fehler beim Laden', errResponse);
                }
            );


    }

    select(f: Flight): void {
        this.selectedFlight = f;
    }

    ngOnInit() { }
}