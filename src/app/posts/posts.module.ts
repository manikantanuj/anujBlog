import { SharedModule } from './../shared/shared.module';
import { PostService } from './post.service';
import { NgModule } from '@angular/core';

import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostListComponent } from './post-list/post-list.component';



@NgModule({
  declarations: [PostDashboardComponent, PostDetailsComponent, PostListComponent],
  imports: [
    
   SharedModule
  ],
  providers:[PostService]
})
export class PostsModule { }
