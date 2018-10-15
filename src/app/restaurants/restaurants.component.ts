import {Component, OnInit} from '@angular/core';
import {Restaurant} from './restaurant/restaurant.model'
import {RestaurantsService} from './restaurants.service'
import {trigger, state, style, transition, animate} from '@angular/animations'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations:[
    trigger('toggleSearch', [
      state('hidden', 
        style({
          opacity: 0,
          "max-heigth": "0px"
        })),
      state('visible', 
        style({
          opacity: 1,
          "max-heigth": "70px",
          "margin-top": "20px",
          "margin-bottom": "40px" 
        })),
      transition('* => *', animate('200ms 0s ease-in-out'))
      ])
    ]
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  searchBarState = 'hidden'


  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants)
  }

  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }
}
