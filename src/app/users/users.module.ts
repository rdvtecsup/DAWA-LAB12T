import { NgModule, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {path:'users-list',component:UserListComponent},
  {path:'user/:id',component:UserDetailComponent}
]

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)  
  ],
  exports: [
    UserListComponent,
    UserDetailComponent
  ]
})
export class UsersModule {
  @Output() showDetails = new EventEmitter<number>();
  showUserDetails(userId: number): void {
    this.showDetails.emit(userId)
  }
}
