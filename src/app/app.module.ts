import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule ,MatIconModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { LoginComponent } from './components/acount/login/login.component';
import { TsComponent } from './components/acount/ts/ts.component';
import { RegisterComponent } from './components/acount/register/register.component';
import { ProfileComponent } from './components/acount/profile/profile.component';
import { ListArticlesComponent } from './components/acount/list-articles/list-articles.component';
import { ListArticleComponent } from './components/article/list-article/list-article.component';
import { MyShopingComponent } from './components/article/my-shoping/my-shoping.component';
import { HomeComponent } from './components/home/home.component';
import { ItemComponent } from './components/shared/item/item.component';
import { StockComponent } from './components/article/stock/stock.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ArticuloComponent } from './components/article/articulo/articulo.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TsComponent,
    RegisterComponent,
    ProfileComponent,
    ListArticlesComponent,
    ListArticleComponent,
    MyShopingComponent,
    HomeComponent,
    ItemComponent,
    StockComponent,
    PageNotFoundComponent,
    ArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,


    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatDividerModule,
    FlexLayoutModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
