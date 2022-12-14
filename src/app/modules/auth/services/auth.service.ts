import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StorageService } from 'src/app/shared/services/storage.service';
import { DefaultRole, IRole } from '../models/auth.model';
import { AuthRepositoryService } from './auth-repository.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Properties
  email = '';
  isLogin = false;
  roleAs: IRole = DefaultRole;

  //Constructor
  constructor(private $storage: StorageService, private $authRepository:AuthRepositoryService) { }

  //Methods
  public async login(email: string, password: string): Promise<{ success: boolean, role: IRole}> {

    // Login API
    const apiResponse = await this.$authRepository.doSignIn(email, password);
    const role:IRole = apiResponse?.role as IRole || DefaultRole;

    // Save Status in Storage
    const storageResponse = await this.$storage.saveAuth({
      token: apiResponse?.token || '',
      email:  apiResponse?.email || '',
      role:  apiResponse?.role as IRole || DefaultRole,
      state: 'AUTH_IN',
      update_at: new Date()
    });

    // Set State in this service
    this.isLogin = storageResponse;
    this.roleAs = role as IRole;
    this.email = email;

    return { success: this.isLogin, role: this.roleAs };
  }

  public async logout(): Promise<{ success: boolean, role: IRole}> {

    // Logout API
    const email = this.email;
    const apiResponse = await this.$authRepository.doSignOut(email);
    const role:IRole = DefaultRole;

    // Save Status in Storage
    const storageResponse = await this.$storage.saveAuth({
      token: '',
      email: '',
      role: role,
      state:'',
      update_at: new Date()
    });

    // Set State in this service
    this.isLogin = true;
    this.roleAs = role;
    this.email = '';

    return { success: this.isLogin, role: this.roleAs };
  }

  public isAuth() {
    return this.$storage.getAuth();
  }

  public isAdmin() {
    return this.roleAs === 'RoleAdmin';
  }

  public isUser() {
    return this.roleAs === 'RoleUser';
  }

  public isAnon() {
    return !( this.isAdmin() || this.isUser());
  }

  public getRole() {
    return this.roleAs;
  }

  public async mockLogin(role: IRole){

    const email = 'client@mock.com.co';

    // Login API
    const apiResponse = {
      role: role,
      token: String(Math.random()) + String(Math.random()),
      email: email,
    }

    // Save Status in Storage
    const storageResponse = await this.$storage.saveAuth({
      token: apiResponse?.token || '',
      email:  apiResponse?.email || '',
      role:  apiResponse?.role as IRole || DefaultRole,
      state: 'AUTH_IN',
      update_at: new Date()
    });

    // Set State in this service
    this.isLogin = storageResponse;
    this.roleAs = role as IRole;
    this.email = email;

    return { success: this.isLogin, role: this.roleAs };
  }

}
