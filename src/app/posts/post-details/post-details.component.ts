import { AuthService } from './../../core/auth.service';
import { DatePipe } from '@angular/common';
import { Post } from './../Post';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  editing:boolean=false;
  constructor(private route:ActivatedRoute,
    private postService:PostService,
    private router:Router,
    public auth:AuthService
    ) { }
post:Post
  ngOnInit(): void {
    this.getPost()
   // console.log(this)
  }
getPost(){
  const id = this.route.snapshot.paramMap.get('id');
  return this.postService.getPostData(id).subscribe(data=>{
    this.post=data;
  
  })
}
delete(){
  const id = this.route.snapshot.paramMap.get('id');
  this.postService.delete(id)
  this.router.navigate(['/blog'])
}

updatePost(){
  const formData={
    title: this.post.title,
    content: this.post.content,

  };
const id = this.route.snapshot.paramMap.get('id');
this.postService.update(id,formData)
this.editing=false;
}

}
