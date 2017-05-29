
import { Injectable, Inject } from '@angular/core';
import { Http, URLSearchParams, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { Flight } from "app/entities/flight";
import { BASE_URL } from "app/app.tokens";

@Injectable()
export class FlightService {

    constructor(
        private http: Http,
        @Inject(BASE_URL) private baseUrl: string) { 
        console.debug('Hello from the FlightService');
    }

    find(from: string, to: string): Observable<Flight[]> {
        
        // if (!from || !to) {
            // return Observable.of([]);
            // return Observable.throw("fehler!");
       // }

        let url = this.baseUrl + 'flight';

        let search = new URLSearchParams();
        search.set('from', from);
        search.set('to', to);

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        return this.http
                    .get(url, { search, headers})
                    .map(resp => resp.json());

    }
}