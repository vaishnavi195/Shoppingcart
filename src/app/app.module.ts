import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FooterComponent } from './SharedComponent/footer/footer.component';
import { HeaderComponent } from './SharedComponent/header/header.component';
import { NavComponent } from './SharedComponent/nav/nav.component';
import { ShoppingCartComponent } from './ShoppingCart/shopping-cart/shopping-cart.component';
import { FilterComponent } from './ShoppingCart/filter/filter.component';
import { ProductlistComponent } from './ShoppingCart/productlist/productlist.component';
import { CartComponent } from './ShoppingCart/cart/cart.component';
import { CartListComponent } from './ShoppingCart/cart/cart-list/cart-list.component';
import { ProductitemComponent } from './ShoppingCart/productlist/productitem/productitem.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    ShoppingCartComponent,
    FilterComponent,
    ProductlistComponent,
    CartComponent,
    CartListComponent,
    ProductitemComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
