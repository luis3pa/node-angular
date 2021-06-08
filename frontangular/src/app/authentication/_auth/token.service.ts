import { Injectable } from '@angular/core';

import * as CryptoJS from 'crypto-js';

declare var require: any;
const SecureStorage = require('secure-web-storage');
const SECRET_KEY = 'L3pa';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const USERID_KEY = 'AuthUserId';
const PERMISSION_KEY = 'AuthPermission';
const ROLE_KEY = 'AuthRole';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  roles: Array<string> = [];

  constructor() { }

  public secureStorage = new SecureStorage(localStorage, {
    hash: function hash(key) {
      key = CryptoJS.SHA256(key, SECRET_KEY);

      return key.toString();
    },
    encrypt: function encrypt(data) {
      data = CryptoJS.AES.encrypt(data, SECRET_KEY);

      data = data.toString();

      return data;
    },
    decrypt: function decrypt(data) {
      data = CryptoJS.AES.decrypt(data, SECRET_KEY);

      data = data.toString(CryptoJS.enc.Utf8);

      return data;
    }
  });


  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    this.secureStorage.setItem(TOKEN_KEY, token);
    // window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    // return sessionStorage.getItem(TOKEN_KEY);
    return this.secureStorage.getItem(TOKEN_KEY);
  }

  public setUserName(userName: string): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    this.secureStorage.setItem(USERNAME_KEY, userName);
  }

  public setPermission(permission: string): void {
    window.sessionStorage.removeItem(PERMISSION_KEY);
    this.secureStorage.setItem(PERMISSION_KEY, permission);
  }

  public setRole(role: string): void {
    window.sessionStorage.removeItem(ROLE_KEY);
    this.secureStorage.setItem(ROLE_KEY, role);
  }

  public getUserName(): string {
    return this.secureStorage.getItem(USERNAME_KEY);
  }

  public setUserId(userId: string): void {
    window.sessionStorage.removeItem(USERID_KEY);
    this.secureStorage.setItem(USERID_KEY, userId);
  }

  public getUserId(): string {
    return this.secureStorage.getItem(USERID_KEY);
  }

  public getPermission(): string {
    return this.secureStorage.getItem(PERMISSION_KEY);
  }

  public getRole(): string {
    return this.secureStorage.getItem(ROLE_KEY);
  }

  public logOut(): void {
    this.secureStorage.clear();
    //window.sessionStorage.clear();
    window.location.reload();
  }
}
