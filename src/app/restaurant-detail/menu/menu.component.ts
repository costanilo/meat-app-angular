import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from '../../restaurants/restaurants.service'
import {ActivatedRoute} from '@angular/router'
import {Observable} from 'rxjs/Observable'
import {MenuItem} from '../menu-item/menu-item.model'
import {ShoppingCartService} from '../shopping-cart/shopping-cart.service'

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menus : Observable<MenuItem[]>

  constructor(private restaurantService: RestaurantsService,
              private route: ActivatedRoute,
              private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.menus = this.restaurantService.menuOfRestaurant(this.route.parent.snapshot.params["id"])
  }

}
