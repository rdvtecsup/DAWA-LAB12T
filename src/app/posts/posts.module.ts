import { RouterModule, Routes } from '@angular/router';
import { NgModule, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from '../posts/post-list/post-list.component';
import { PostDetailComponent } from '../posts/post-detail/post-detail.component';

const routes: Routes = [
  { path: 'posts-list', component: PostListComponent },
  { path: 'post/:id', component: PostDetailComponent },
];

@NgModule({
  declarations: [
    PostListComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)  
  ],
  exports:[
    PostListComponent,
    PostDetailComponent
  ]
})
export class PostsModule {
  @Output() showDetails = new EventEmitter<number>();
  showPostDetails(postId: number): void {
    this.showDetails.emit(postId)
  }
}
