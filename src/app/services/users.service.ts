import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(){}
  public users: any[] = []

  public categories: string[] = []

  public selectedCategory: string = 'none'

  public nameValue: string = ''

  public maxPrice: number = 0

  public selectedPrice: number = 0

  public selectedRating: number = 5



  public fetchUserData() :void {
    fetch('https://dummyjson.com/products?limit=50')
      .then(res => res.json())
      .then(data => {
        this.users = data.products
        this.categories = Array.from(new Set(this.users.map(product => product.category)));
        this.maxPrice = Math.max(...this.users.map(product => product.price));
        this.selectedPrice = this.maxPrice
        console.log(this.users)
        console.log(this.categories)
        console.log(this.selectedCategory)
      })
  }
  public filterUsers() :any[] {
    if (this.selectedCategory == 'none'){
      return (this.users.filter(user => user.title.toLowerCase().includes(this.nameValue.toLowerCase()) && user.price <= this.selectedPrice && user.rating <= this.selectedRating))
    }else{
      return (this.users.filter(user => user.title.toLowerCase().includes(this.nameValue.toLowerCase()) && user.category == this.selectedCategory && user.price <= this.selectedPrice && user.rating <= this.selectedRating))
    }
      
  }
  


}
