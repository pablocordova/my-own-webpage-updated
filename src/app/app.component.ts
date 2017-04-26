import { Component } from '@angular/core';
import { Contact } from "./contact";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    /**
     * Video variable to set with infinite loop the video.
     */
    video;
    /**
     * Contact variables
     */
    data: string;
    /*
    fname: string;
    sname: string;
    email: string;
    message: string;
    */
    myContact = new Contact('fname','sname','email','message'); // this is our green car instance

    constructor() { }

    ngOnInit() {
        this.video = document.getElementById('video-welcome');
        this.video.loop = true;
        this.video.load();
    }

    saveForm() {
        //this.data = JSON.stringify(data);
        console.log(this.myContact);
        //Observable<Response> ob = this.http.post(this.url, book, options); 
        //console.log(this.fname);
    }
}
