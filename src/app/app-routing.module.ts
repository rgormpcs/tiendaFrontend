import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/acount/login/login.component';
import { RegisterComponent } from './components/acount/register/register.component';
import { ProfileComponent } from './components/acount/profile/profile.component';
import { ListArticleComponent } from './components/article/list-article/list-article.component';
import { MyShopingComponent } from './components/article/my-shoping/my-shoping.component';
import { StockComponent } from './components/article/stock/stock.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"notfound",component:PageNotFoundComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"profile",component:ProfileComponent},
  {path:"list-article",component:ListArticleComponent},
  {path:"my-shoping",component:MyShopingComponent},
  {path:"stock",component:StockComponent},
  {path:"",redirectTo:"/home",pathMatch:'full'},
  {path:"**",redirectTo:"/notfound",pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
