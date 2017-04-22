import { Component } from '@angular/core';

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

    constructor() { }

    ngOnInit() {
        this.video = document.getElementById('video-welcome');
        this.video.loop = true;
        this.video.load();
    }
}
