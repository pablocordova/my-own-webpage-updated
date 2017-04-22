import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  	selector: 'app-abilities-start',
  	templateUrl: './abilities-start.component.html',
  	styleUrls: ['./abilities-start.component.css']
})
export class AbilitiesStartComponent implements OnInit {
	/**
	 * Input variable from Html parent
	 */

	@Input('count') count_star;

	/**
	 * Variables with numbers of stars(yellow) and no_star(empty) 
	 */

	star;
	no_star;

	/**
	 * Numbers of star, default 5 stars
	 */

	numbers_star = 5;

  	constructor() {}

  	ngOnInit() {
  		this.star = Array(this.count_star.number).fill('0');
  		this.no_star = Array(this.numbers_star - this.count_star.number).fill('0');

  	}

}
