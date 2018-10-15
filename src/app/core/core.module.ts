//OBSOLETE

import { ShoppingCartService } from "../restaurant-detail/shopping-cart/shopping-cart.service";
import { OrderService } from "../order/order.service";
import { RestaurantsService } from "../restaurants/restaurants.service";
import { NgModule } from "@angular/core";

@NgModule({
  providers: [ShoppingCartService, OrderService, RestaurantsService]
})

export class CoreModule{

}
