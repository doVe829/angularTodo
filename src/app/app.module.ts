import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ButtonComponent } from './components/button/button.component';
import { ModalComponent } from './components/modal/modal.component';
import { FilterItemsPipe } from './pipes/filter-items-pipe';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoItemComponent,
    TodoListComponent,
    ButtonComponent,
    ModalComponent,
    FilterItemsPipe,
    WelcomeComponent,
    DisclaimerComponent,
  ],
  imports: [BrowserModule, NgbModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
