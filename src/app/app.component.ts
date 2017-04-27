import { Component } from '@angular/core';
import { Contact } from "./contact";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
    /**
     * Video variable to set with infinite loop the video.
     */

    video;

    /**
     * Contact variables
     */

    data: string;

    myContact = new Contact('fname','sname','email','message');

    constructor(private http: Http) { }

    ngOnInit() {
        this.video = document.getElementById('video-welcome');
        this.video.loop = true;
        this.video.load();
    }

    saveForm() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let requestOptions = new RequestOptions({ headers: headers });
        
        this.data = JSON.stringify(this.myContact);
        console.log(this.data);

        this.http.post('http://localhost:3000/api', this.data, requestOptions).subscribe(res => console.log(res.json()));

    }
}
