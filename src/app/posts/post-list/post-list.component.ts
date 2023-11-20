import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserDetailComponent } from 'src/app/users/user-detail/user-detail.component';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    { id: 1, title: 'Publicación 1', content: 'Contenido de la publicación 1' },
    { id: 2, title: 'Publicación 2', content: 'Contenido de la publicación 2' },
    { id: 3, title: 'Publicación 3', content: 'Contenido de la publicación 3' },
    { id: 4, title: 'Publicación 4', content: 'Contenido de la publicación 4' },
    { id: 5, title: 'Publicación 5', content: 'Contenido de la publicación 5' },
    
  ];
  constructor(private modalService: NgbModal){

  }
  showPostDetails(postId: number): void {
    const ref = this.modalService.open(UserDetailComponent);
    ref.componentInstance.postId = postId
  }
}
