import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent implements OnInit {
@Input() title: string 
@Input() category: string 
@Input() price: string 
@Input() rating: number
@Input() image: string
public fullStars: number = 0
public emptyStars: number = 0

 ngOnInit() :void {
  this.fullStars = Math.floor(this.rating);
  this.emptyStars = 5 - this.fullStars;
}
}
