import {Injectable, } from '@angular/core';
import {IStorage} from '../interface/storage.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService{
  private readonly STORAGE_KEY = 'MONEY'

  public getLocalStorage(): IStorage[] {
    const data = localStorage.getItem(this?.STORAGE_KEY)

    return JSON.parse(data as string) || []
  }

  public setLocalStorage(data: IStorage[]): void {
    localStorage.setItem(this?.STORAGE_KEY, JSON.stringify(data));
  }

  public clearAllStorage(): void {
    localStorage.clear()
  }
}
