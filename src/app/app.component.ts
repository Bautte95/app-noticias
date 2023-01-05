import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Buscador de noticias';

  listaNoticias: any[] = [];
  loading = false;

  constructor(private _noticiasService: NoticiaService){

  }

  buscarNoticia(parametro: any){
    this.loading = true;
    this.listaNoticias = [];

    setTimeout(() => {
      this._noticiasService.getNoticias(parametro).subscribe(data => {
        this.listaNoticias = data.articles;
        this.loading = false;
      }, error => {
        console.log(error);
        this.loading = false;
      })
    }, 1000);
  }
}
 