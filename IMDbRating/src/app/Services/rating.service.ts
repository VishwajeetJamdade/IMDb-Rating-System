import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private _httpclient:HttpClient) { }
  //this is used for send data into another component
  MovieData=  new BehaviorSubject<any>(null)
 

  // This api For Show all movies
ApiUrl:string=`https://api.themoviedb.org/3/discover/movie?api_key=5c06fed2cdf4dfcdab132d9e67c1c2e7
&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page
=1&with_watch_monetization_types=flatrate`

//This api for get Specific Movie Details
ApiForMovie:string=`https://api.themoviedb.org/3/movie/`

//This api use for filter movies
ApiFilter:string=`https://api.themoviedb.org/3/search/movie`


// This method For Show all movies 
getMovies():Observable<any>{
 return this._httpclient.get(this.ApiUrl)
}

//This method for get Specific Movie Details

getUnique(id:any):Observable<any>{
  return this._httpclient.get(`${this.ApiForMovie}${id}`,{params:{api_key:'5c06fed2cdf4dfcdab132d9e67c1c2e7',language:'en-US'}})
}

//This method use for filter movies

getFilterMovies(value:any):Observable<any>{
return this._httpclient.get(this.ApiFilter,{params:{api_key:'5c06fed2cdf4dfcdab132d9e67c1c2e7',language:'en-US',query:value,page:'1',include_adult:'false'}})
}

}
