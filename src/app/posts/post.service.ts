import { map } from 'rxjs/operators';

import { Post } from './Post';
import {Observable} from 'rxjs/Observable';
import {Subject, asapScheduler, pipe, of, interval, merge, fromEvent} from 'rxjs';


import {
  AngularFirestoreModule,
  AngularFirestore,
  AngularFirestoreCollection,
   AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  private postCollection:AngularFirestoreCollection<Post>
  posts:Observable<Post[]>;

  postDoc:AngularFirestoreDocument<Post>
  constructor(private readonly afs: AngularFirestore) {
    // this.postCollection=this.afs.collection('posts',ref=>
    // ref.orderBy('published','desc')
    // )

    this.postCollection = afs.collection<Post>('posts');
    this.posts = this.postCollection.snapshotChanges().pipe(
      map(actions=>actions.map(a=>{
        const data= a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return {id,...data};
      }))
    )

    // this.posts=this.afs.collection('posts').valueChanges();
   }


  getPosts(){
    return this.posts;
    
    
    // .pipe(map(changes=>{
    //   return changes.map(a=>{
    //     const data = a.payload.doc.data() as Post[]
    //     const id =a.payload.doc.id
    //     return {id,...data}
    //   })}))
  }
  getPostData(id:string){
    this.postDoc = this.afs.doc<Post>(`posts/${id}`)
    return this.postDoc.valueChanges()

  }
  
create(data:Post){
this.postCollection.add(data)
}
update(id:string,formData){
  return this.getPost(id).update(formData)

}

getPost(id:string){
  return this.afs.doc(`posts/${id}`)

}
delete(id:string){
return this.getPost(id).delete();
}
 

}
