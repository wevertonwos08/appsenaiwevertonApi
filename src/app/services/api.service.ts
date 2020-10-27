import { ResponseApi } from "./../models/response-api";
import { User } from "./../models/user";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  public url: string = environment.baseUrl;
  constructor(public http: HttpClient) {}

  public getUser(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(this.url + "?results=10&?format=prety");
  }
}
