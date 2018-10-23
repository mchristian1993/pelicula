import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ContentCategoriasComponent} from './content-categorias/content-categorias.component';
import {ContentPeliculasComponent} from './content-peliculas/content-peliculas.component';
import {CardsPeliculasComponent} from './cards-peliculas/cards-peliculas.component';
import {ListarCategoriasComponent} from './listar-categorias/listar-categorias.component';
import {Routes, RouterModule} from '@angular/router';
import {BuscarCategoriaComponent} from './buscar-categoria/buscar-categoria.component';



const appRoutes: Routes = [

  {path: 'card/:id', component: ContentPeliculasComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentCategoriasComponent,
    ContentPeliculasComponent,
    CardsPeliculasComponent,
    ListarCategoriasComponent,
    BuscarCategoriaComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
