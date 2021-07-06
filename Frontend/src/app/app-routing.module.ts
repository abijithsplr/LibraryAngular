import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "addbook", canActivate:[AuthguardGuard], component: AddbookComponent },
  { path: "addauthor",canActivate:[AuthguardGuard], component: AddauthorComponent },
  { path: "books",canActivate:[AuthguardGuard], component: BooksComponent},
  { path: "books/:id",canActivate:[AuthguardGuard], component: BookComponent},
  { path: "authors", canActivate:[AuthguardGuard],component: AuthorsComponent},
  { path: "authors/:id",canActivate:[AuthguardGuard], component: AuthorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
