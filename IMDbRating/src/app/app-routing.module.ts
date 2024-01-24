import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoveiDetailComponent } from './movei-detail/movei-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'movieDetail',component:MoveiDetailComponent},
  {path:'**',component:PagenotfoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
