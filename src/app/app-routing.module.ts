import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo:'users', pathMatch:'full'},
  { path: 'users', loadChildren: () => import('./users/users.module').then((m)=>m.UsersModule) },
  { path: 'posts', loadChildren: () => import('./posts/posts.module').then((m)=>m.PostsModule) },
  { path: '**' , component: NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
