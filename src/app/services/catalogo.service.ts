import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  private url: string = environment.apiUrl

  private http = inject(HttpClient)

  //conculta para obtener lista de catalogos
  public getCatalogos() {
    return this.http.get(this.url + 'webresources/opacd/catalogos?estado=1');
  }

  //consulta para obtener lista de libros
  public getConsulta(catalogo: string, tipo: string, palabra: string) {
    return this.http.get(this.url + 'webresources/opacd/consultapalabra?catalogo=' + catalogo + '&tipo=' + tipo + '&palabra=' + palabra);
  }
  //consulta para obtener lista de libros por raiz
  public getConsultaRaiz(catalogo: string, tipo: string, palabra: string) {
    return this.http.get(this.url + 'webresources/opacd/raiz?catalogo=' + catalogo + '&tipo=' + tipo + '&palabra=' + palabra);
  }
  //consulta para obtener los detalles del libro
  public getLibrosDatalles(ficha: number) {
    return this.http.get(this.url + 'webresources/opacd/datosficha?catalogo=1&ficha=' + ficha);
  }
  //consulta para obtener las notas del libro
  public getLibrosDetallesNotas(ficha: number) {
    return this.http.get(this.url + 'webresources/opacd/datosgrupo?catalogo=1&ficha=' + ficha + '&grupo=6');
  }
  public getLibrosDetallesTemas(ficha: number) {
    return this.http.get(this.url + 'webresources/opacd/datosgrupo?catalogo=1&ficha=' + ficha + '&grupo=7');
  }
  public getLibrosDetallesOtros(ficha: number) {
    return this.http.get(this.url + 'webresources/opacd/datosgrupo?catalogo=1&ficha=' + ficha + '&grupo=8');
  }
  public getLibrosDetallesExistencia(ficha: number) {
    return this.http.get(this.url + 'webresources/opacd/inventario?catalogo=1&ficha=' + ficha);
  }
  public getLibrosDetallesMarc(ficha: number) {
    return this.http.get(this.url + 'webresources/opacd/fichamarc?catalogo=1&ficha=' + ficha);
  }
  public getLibrosDetallesISDB(ficha: number) {
    return this.http.get(this.url + 'webresources/opacd/datosficha?catalogo=1&ficha=' + ficha);
  }
  /////////////////////////////////////////
  // consultas seriadas /////////////////
  public getSeriadasDatosGenerales(catalogo: string) {
    return this.http.get(this.url + 'webresources/opacd/seriadas?catalogo=' + catalogo + '&tema=null');
  }
  public getSeriadasResultadoDatosGenerales(catalogo: string, seriada: number) {
    return this.http.get(this.url + 'webresources/opacd/existenciasseriada?catalogo=' + catalogo + '&seriada=' + seriada + '&tema=null');
  }
  public getSeriadasTemas(catalogo: string) {
    return this.http.get(this.url + 'webresources/opacd/explorarseriadas?catalogo=' + catalogo);
  }
  public getSeriadasTemasResultado(catalogo: string, tema: number) {
    return this.http.get(this.url + 'webresources/opacd/seriadastema?catalogo=' + catalogo + '&tema=' + tema);
  }
  public getSeriadasTemasEjemplares(catalogo: string) {
    return this.http.get(this.url + 'webresources/opacd/explorarejemplares?catalogo=' + catalogo);
  }
  public getSeriadasTemasEjemplaresResultado(catalogo: string, tema: number) {
    return this.http.get(this.url + 'webresources/opacd/existenciastema?catalogo=1&seriada=null&tema=' + tema);
  }
  public getSeriadasTextoCompleto(fecha1: Date, fecha2: Date, seriada: number, tema: number) {
    if (fecha1 == null && fecha2 == null) {
      return this.http.get(this.url + 'webresources/opacd/textocompletolibre?catalogo=1&seriada=' + seriada + '&tema=' + tema + '&palabra=medicina&fechai=0&fechaf=0');
    } else {
      return this.http.get(this.url + 'webresources/opacd/textocompletolibre?catalogo=1&seriada=' + seriada + '&tema=' + tema + '&palabra=medicina&fechai=' + fecha1 + '&fechaf=' + fecha2);
    }
  }

  public ExplorarCatatlogo1(catalogo: number) {
    return this.http.get(this.url + 'webresources/opacd/explorari?catalogo=' + catalogo);
  }
  public ExplorarCatatlogo2(catalogo: number, area: number) {
    return this.http.get(this.url + 'webresources/opacd/explorarii?catalogo=' + catalogo + '&area=' + area);
  }
  public ExplorarCatatlogo3(catalogo: number, area: number) {
    return this.http.get(this.url + 'webresources/opacd/explorariii?catalogo=' + catalogo + '&area=' + area);
  }
  public ExplorarCatatlogo4(catalogo: number, area: number) {
    return this.http.get(this.url + 'webresources/opacd/signatura?catalogo=' + catalogo + '&palabra=' + area);
  }

}

