import { PostDashboardComponent } from './posts/post-dashboard/post-dashboard.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',component:PostListComponent},
  {path:'blog',component:PostListComponent},
  {path:'blog/:id',component:PostDetailsComponent},
  {path:'dashboard',component:PostDashboardComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
