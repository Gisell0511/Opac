import { Injectable } from "@angular/core";
import { RequestService } from "../../shared/library/request/request.service";

export interface ICatalogo {
  autor:             null;
  autorTitulo:       string;
  dfisica:           string;
  edicion:           string;
  editorial:         string;
  fecha:             null;
  isbn:              string;
  signatura:         string;
  titulo:            string;
  woResultadoOpacPK: WoResultadoOpacPK;
 }

 export interface WoResultadoOpacPK {
  ficha:       string;
  fkWaEmpresa: number;
 }



@Injectable ({
  providedIn: 'root'
})
export class CatalogoService {
 constructor(private readonly requestService: RequestService){}

 buscarPalabra(catalogo: string,tipo: string,palabra: string){

 return this.requestService.get<ICatalogo>(`restlmC/webresources/opacd/consultapalabra?catalogo=${catalogo}&tipo=${tipo}&palabra=${palabra}`)
}
}
