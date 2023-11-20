import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  post: any;
  posts = [
    { id: 1, title: 'Publicación 1', content: 'Contenido de la publicación 1' },
    { id: 2, title: 'Publicación 2', content: 'Contenido de la publicación 2' },
    { id: 3, title: 'Publicación 3', content: 'Contenido de la publicación 3' },
    { id: 4, title: 'Publicación 4', content: 'Contenido de la publicación 4' },
    { id: 5, title: 'Publicación 5', content: 'Contenido de la publicación 5' },
    
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Recuperar el id del usuario de los parámetros de la ruta
    this.route.params.subscribe(params => {
      const postId = +params['id']; // el '+' convierte el parámetro a número
      // Lógica para obtener los detalles del usuario con el userId
      // Puedes usar el servicio, hacer una solicitud HTTP, etc.
      // Por ahora, estoy utilizando la matriz users para obtener el usuario con el id correspondiente
      this.post = this.posts.find(u => u.id === postId);
    });
  }
}
