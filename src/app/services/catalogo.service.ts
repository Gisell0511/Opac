import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  private url = environment

  private http = inject(HttpClient)

  public getCatalogos() {
    return this.http.get(this.url + 'webresources/opacd/catalogos?estado=1');
  }

}
