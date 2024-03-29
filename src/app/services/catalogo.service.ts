import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  private url: string = environment.apiUrl

  constructor(private readonly httpClient: HttpClient){}

  public getCatalogos() {
    return this.httpClient.get(`${this.url}webresources/opacd/catalogos?estado=1`);
  }

}
