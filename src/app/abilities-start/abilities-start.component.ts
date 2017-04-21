import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  	selector: 'app-abilities-start',
  	templateUrl: './abilities-start.component.html',
  	styleUrls: ['./abilities-start.component.css']
})
export class AbilitiesStartComponent implements OnInit {

	@Input('count') count_star;

  	constructor() { }

  	ngOnInit() {
  	}

}
