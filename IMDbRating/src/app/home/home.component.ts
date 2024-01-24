import { Component, OnInit } from '@angular/core';
import { RatingService } from '../Services/rating.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filterHide:boolean=false
  allMovies:any;
  filMovies:any;

  constructor(private _Serv:RatingService,private _route:Router) { }

  ngOnInit() {
    this.ShowMovies();
    // this.showDetails()
    
  }

ShowMovies(){
  this._Serv.getMovies().subscribe((res)=>{
    console.log(`all movies`,res);
    this.allMovies=res.results
    
  })
}

//get single movie info
showDetails(id:number){
  this._Serv.getUnique(id).subscribe((res)=>{
          console.log(res);
  this._Serv.MovieData.next(res)        
  this._route.navigate(['movieDetail'])
          
  })
}


// filter movies
FilterMovie(SearchMovie:any){
  this.filterHide=true
  console.log(SearchMovie);
  
      this._Serv.getFilterMovies(SearchMovie).subscribe((res)=>{
        console.log(`filter res`,res);
        this.filMovies=res.results
      })
}

}
