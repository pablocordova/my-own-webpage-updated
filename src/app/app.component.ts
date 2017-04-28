import { Component } from '@angular/core';
import { Contact } from "./contact";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

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

    myContact = new Contact('','','','');

    // boolean message to check if the data is saved correctly

    successMessage = false;

    // Error message case not fill out the fields.
    errorMessage = false;

    constructor(private http: Http) { }

    ngOnInit() {
        // Make the video with infinite loop
        this.video = document.getElementById('video-welcome');
        this.video.loop = true;
        this.video.load();
    }

    saveForm() {

        // Validate form, I am not using a directive of angular yet.
        // TODO: use directive of angular to validate correctly.

        if(this.myContact['fname'] == '' || 
            this.myContact['sname'] == '' ||
            this.myContact['email'] == '' || 
            this.myContact['message'] == '') {
                this.errorMessage = true;
                return;
        }
        else {
            this.errorMessage = false;
        }

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let requestOptions = new RequestOptions({ headers: headers });
        
        // Encode JSON as string to exchange data to web server.
        this.data = JSON.stringify(this.myContact);

        this.http.post('http://localhost:3000/api', this.data, requestOptions).subscribe(res => {
                let result = res.json();
                if(result['result'] == 'success') {
                    this.successMessage = true;
                }
            }
        );

    }
}
