import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { PostService } from './../post.service';
import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';



@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {
  title: string
  image: any = null
  content: string
  // file:File =null
  buttonText: string = "Create Post"

  uploadPercent: Observable<number>
  downloadURL: Observable<string>
  constructor(private auth: AuthService,
    private postService: PostService,
    private storage: AngularFireStorage,
    private router:Router) {
    // const ref = this.storage.ref('users/davideast.jpg');
    // this.profileUrl = ref.getDownloadURL();
  }

  ngOnInit(): void {
  }
  createPost() {
    const data = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,

      content: this.content,
      image: this.image,
      published: new Date(),
      title: this.title
    };
    this.postService.create(data)
    this.title = ''
    this.content = ''
    this.buttonText = 'Post Created!! Please wait redirecting to your post'
    setTimeout(()=>this.router.navigate(['/blog']),2000);

    setTimeout(() => (this.buttonText = "Create Post"), 3000)
  }
  uploadImage(event) {
     const file = event.target.files[0]
    const path = `posts/${file.name}`
    // console.log(event.target.files)
    if (file.type.split('/')[0] !== 'image') {
      return alert('only image files')
      
      
    }
    else {
      
      // const task = this.storage.upload(path,file)
      // this.uploadPercent = task.percentageChanges()
      // console.log('Image Uploaded')
      // const fileRef = this.storage.ref(path);
      const fileRef = this.storage.ref(path);
      const task = this.storage.upload(path, file);
       // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    
  // observe percentage changes
  this.uploadPercent = task.percentageChanges();
  // get notified when the download URL is available
      // observe percentage changes
      this.uploadPercent = task.percentageChanges();
      // get notified when the download URL is available
      task.snapshotChanges().pipe(
          finalize(() => fileRef.getDownloadURL().subscribe(url=>{
            this.image = url
            this.downloadURL=url
            console.log(url)
          }) )
       )
      .subscribe()
    }
  
}
}


  



