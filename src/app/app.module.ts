import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //llenar
import { MatTableModule } from '@angular/material/table';
import { SimulationComponent } from './components/simulation/simulation.component';
import { SimulationListarComponent } from './components/simulation/simulation-listar/simulation-listar.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { SimulationCreaeditaComponent } from './components/simulation/simulation-creaedita/simulation-creaedita.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { StudentComponent } from './components/student/student.component';
import { StudentListarComponent } from './components/student/student-listar/student-listar.component';
import { StudentCreaeditaComponent } from './components/student/student-creaedita/student-creaedita.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { UsersComponent } from './components/users/users.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { CreaeditaUsersComponent } from './components/users/creaedita-users/creaedita-users.component';
import { ChatsComponent } from './components/chats/chats.component';
import { ListChatsComponent } from './components/chats/list-chats/list-chats.component';
import { DialogoUsersComponent } from './components/users/list-users/dialogo-users/dialogo-users.component';
import { SimulationDialogoComponent } from './components/simulation/simulation-listar/simulation-dialogo/simulation-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MembershipsComponent } from './components/memberships/memberships.component';
import { ListMembershipsComponent } from './components/memberships/list-memberships/list-memberships.component';
import { CreaeditaMembershipsComponent } from './components/memberships/creaedita-memberships/creaedita-memberships.component';
import { DialogoMembershipsComponent } from './components/memberships/list-memberships/dialogo-memberships/dialogo-memberships.component';
import { CreaeditaChatsComponent } from './components/chats/creaedita-chats/creaedita-chats.component';
import { DialogoChatsComponent } from './components/chats/list-chats/dialogo-chats/dialogo-chats.component';
import { StudentDialogoComponent } from './components/student/student-listar/student-dialogo/student-dialogo.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    SimulationComponent,
    SimulationListarComponent,
    NavbarComponent,
    SimulationCreaeditaComponent,
    StudentComponent,
    StudentListarComponent,
    StudentCreaeditaComponent,
    UsersComponent,
    ListUsersComponent,
    CreaeditaUsersComponent,
    ChatsComponent,
    ListChatsComponent,
    DialogoUsersComponent,
    SimulationDialogoComponent,
    MembershipsComponent,
    ListMembershipsComponent,
    CreaeditaMembershipsComponent,
    DialogoMembershipsComponent,
    CreaeditaChatsComponent,
    DialogoChatsComponent,
    StudentDialogoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
