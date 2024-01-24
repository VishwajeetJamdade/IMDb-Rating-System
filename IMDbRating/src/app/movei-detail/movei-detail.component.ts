import { Component, OnInit } from '@angular/core';
import { RatingService } from '../Services/rating.service';

@Component({
  selector: 'app-movei-detail',
  templateUrl: './movei-detail.component.html',
  styleUrls: ['./movei-detail.component.css']
})
export class MoveiDetailComponent implements OnInit {
showMovie:any;
filMovies:any;
filterHide:boolean=false
  constructor(private _ser:RatingService) { }

  ngOnInit() {
    this.getMovie()
  }

getMovie(){
  this._ser.MovieData.subscribe((res)=>{
    console.log('this is my subject data',res);
    this.showMovie=res
    console.log('this is my array data',this.showMovie);
    
  })
}

// filter movies
FilterMovie(SearchMovie:any){
  this.filterHide=true
  console.log(SearchMovie);
  
      this._ser.getFilterMovies(SearchMovie).subscribe((res)=>{
        console.log(`filter res`,res);
        this.filMovies=res.results
      })
}


}
