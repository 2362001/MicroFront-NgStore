import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { AddToCart } from '../stores/cart.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shell';
  items = [
    {
      id: 1,
      name: 'iPhone 16 pro max',
      code: 'IP16PM'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      code: 'SS24U'
    },
    {
      id: 3,
      name: 'Air pods 4',
      code: 'AP4'
    }
  ]

  constructor(private store: Store<{cart: {count: number}}>){}

  onAddToCart(){
    this.store.dispatch(AddToCart({count: 1}))
  }
}
