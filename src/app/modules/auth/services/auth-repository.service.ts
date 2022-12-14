import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lastValueFrom, timeout } from 'rxjs';

export interface IAuthAPI{ email: string, token: string, role: string}

@Injectable({
  providedIn: 'root'
})
export class AuthRepositoryService {

  constructor(private http: HttpClient) { }

  async doSignIn(email: string, password: string): Promise<IAuthAPI | null>{
    if(!(email && password)){
      return null;
    }
    return lastValueFrom(
        this.http.post<IAuthAPI>(`${environment.api}/auth/signin`, {email, password})
        .pipe(timeout({ first: 10_000 }))
    )
  }

  async doSignOut(email: string){
    return lastValueFrom(
        this.http.post<IAuthAPI>(`${environment.api}/auth/signout`, { email })
        .pipe(timeout({ first: 10_000 }))
    )
  }

}
