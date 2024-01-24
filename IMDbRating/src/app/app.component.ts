import { Component } from '@angular/core';
import { RatingService } from './Services/rating.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IMDbRating';

constructor(private _ser: RatingService){}
 //filter movies
  // SearchMovie(searchQuery:any){
  //       console.log(searchQuery);
  //       this._ser.getFilterMovies('Marvel').subscribe((res)=>{
  //         console.log(`this is filter data`,res);
  //         this._ser.filterMovies.next(res)
  //       }) 
  // }

  


}
