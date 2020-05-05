import { AuthService } from './../../core/auth.service';
import { Post } from './../Post';
import { PostService } from './../post.service';
import { Observable } from 'rxjs/observable';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts:Post[]

 dataRes:Subscription
 
  constructor(private postService:PostService,
    private router:Router,
    public auth:AuthService) { }

  ngOnInit(): void {
this.postService.getPosts().subscribe(data=>{
    //  console.log(data)
      this.posts=data;
     
    })
    
  }
  onTitleClick(id:string){
this.router.navigate(['/blog',id])
  }

  delete(id:string){
    this.postService.delete(id)
  }

}
