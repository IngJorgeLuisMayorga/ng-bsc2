import { Injectable } from '@angular/core';
import { IAuth } from 'src/app/modules/auth/models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public getAuth(){
    return !!localStorage.getItem('BSC_AUTH_TOKEN');
  }

  public async saveAuth(payload: IAuth): Promise<boolean>{
    try {
      localStorage.setItem('BSC_AUTH_EMAIL', payload.email);
      localStorage.setItem('BSC_AUTH_ROLE', payload.role);
      localStorage.setItem('BSC_AUTH_STATE', payload.state);
      localStorage.setItem('BSC_AUTH_TOKEN', payload.token);
      localStorage.setItem('BSC_AUTH_UPDATE_AT_GET_TIME', String(payload.update_at.getTime()));
      return true;
    } catch(e){
      console.log(' ERROR SAVING LOCAL STORAGE');
      return false;
    }
  }

  public async loadAuth(): Promise<IAuth | null>{
    let payload: any = {
      email: null,
      role: null,
      state: null,
      token: null,
      update_at: null
    }
    try{
      payload.email = localStorage.getItem('BSC_AUTH_EMAIL');
      payload.role = localStorage.getItem('BSC_AUTH_ROLE');
      payload.state = localStorage.getItem('BSC_AUTH_STATE');
      payload.token = localStorage.getItem('BSC_AUTH_TOKEN');
      payload.update_at_get_time = localStorage.getItem('BSC_AUTH_UPDATE_AT_GET_TIME');
      payload.update_at = new Date(parseInt(payload.update_at_get_time));
      delete payload.update_at_get_time;
      return payload;
    } catch(e){
      console.error(' Error Loading LocalStorage::loadAuth ')
      return null;
    }
  }

}
