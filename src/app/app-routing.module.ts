import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { authGuard } from './auth.guard';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'unaccepted', component: DisclaimerComponent },
  { path: 'todos', component: TodoListComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
