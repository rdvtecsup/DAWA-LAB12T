import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  user: any;
  users = [
    { id: 1, name: 'Usuario 1', email: 'usuario1@example.com' },
    { id: 2, name: 'Usuario 2', email: 'usuario2@example.com' },
    { id: 3, name: 'Usuario 3', email: 'usuario3@example.com' },
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Recuperar el id del usuario de los parámetros de la ruta
    this.route.params.subscribe(params => {
      const userId = +params['id']; // el '+' convierte el parámetro a número
      // Lógica para obtener los detalles del usuario con el userId
      // Puedes usar el servicio, hacer una solicitud HTTP, etc.
      // Por ahora, estoy utilizando la matriz users para obtener el usuario con el id correspondiente
      this.user = this.users.find(u => u.id === userId);
    });
  }
}
