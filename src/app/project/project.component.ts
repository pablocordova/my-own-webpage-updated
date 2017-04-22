import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

    /**
     * Input value from html tag <app-project>
     */
    @Input('data') data_project;

    /**
     * Variable to pass to child project html
     */
    tags;

    constructor() { }

    ngOnInit() {
        this.tags = this.data_project.tags;
    }

}
