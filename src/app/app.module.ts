import { PostService } from './posts/post.service';
import { Observable, from, observable } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { PostsModule } from './posts/posts.module';
import { HttpClientModule } from  '@angular/common/http';
import {DatePipe} from '@angular/common';
import { FooterComponent } from './footer/footer.component'
// import {}


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
   // AngularFireAuth, // auth
    AngularFireStorageModule, // storage
    BrowserAnimationsModule,
    AngularFireAnalyticsModule,
    PostsModule,
    HttpClientModule,
 

    
  ],
  providers: [PostService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
