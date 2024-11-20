import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'cart-app';

  itemCount$!: Observable<{count: number}>;

  count = 0;

  private subscription = new Subscription();

  constructor(private store: Store<{cart: {count: number}}>){
    this.itemCount$ = this.store.select('cart');
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  ngOnInit(): void {
    this.itemCount$.subscribe(res=>this.count = res.count)
  }

}
