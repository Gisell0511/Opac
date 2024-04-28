import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpContext,
} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

interface HttpRequestOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  context?: HttpContext;
  observe?: 'body';
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private _serverUrl: string = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  get<T>(
    route: string,
    options?: HttpRequestOptions,
    useFullPath = false
  ): Observable<T> {
    return this.http
      .get<T>(
        useFullPath ? route : `${this._serverUrl}/${route}`,
        {
          ...options,
        }
      )
      .pipe(map(data => data));
  }

  post<T, D>(
    route: string,
    body: T,
    options?: HttpRequestOptions
  ): Observable<D> {
    return this.http
      .post<D>(`${this._serverUrl}/${route}`, body, {
        ...options,
      })
      .pipe(map(data => data));
  }

  put<T, D>(
    route: string,
    body: T,
    options?: HttpRequestOptions
  ): Observable<D> {
    return this.http
      .put<D>(`${this._serverUrl}/${route}`, body, {
        ...options,
      })
      .pipe(map(data => data));
  }

  delete<T>(route: string, options?: HttpRequestOptions): Observable<T> {
    return this.http
      .delete<T>(`${this._serverUrl}/${route}`, {
        ...options,
      })
      .pipe(map(data => data));
  }
}
