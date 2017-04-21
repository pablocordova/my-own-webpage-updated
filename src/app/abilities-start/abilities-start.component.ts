import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  	selector: 'app-abilities-start',
  	templateUrl: './abilities-start.component.html',
  	styleUrls: ['./abilities-start.component.css']
})
export class AbilitiesStartComponent implements OnInit {

	@Input('count') count_star;
	star;
	no_star;

  	constructor() {}

  	ngOnInit() {
  		this.star = Array(this.count_star.number).fill('0');
  		this.no_star = Array(5-this.count_star.number).fill('0');

  	}

}
