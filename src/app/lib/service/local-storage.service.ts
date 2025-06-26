import {Injectable, } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService{
  // private readonly STORAGE_KEY = 'MONEY'
  //
  // public getLocalStorage(): IStorage[] {
  //   const data = localStorage.getItem(this?.STORAGE_KEY)
  //
  //   return JSON.parse(data as string) || []
  // }
  //
  // public setLocalStorage(data: IStorage[]): void {
  //   localStorage.setItem(this?.STORAGE_KEY, JSON.stringify(data));
  // }
  //
  // public clearAllStorage(): void {
  //   localStorage.clear()
  // }
  private readonly STORAGE_KEY = {
    flex: 'FLEX_LEVELS',
    grid: 'GRID_LEVELS',
  }

  public getLocalStorage<T>(key: keyof typeof this.STORAGE_KEY): T | null {
    const data = localStorage.getItem(this.STORAGE_KEY[key]);
    try {
      return data ? JSON.parse(data) as T : null;
    } catch {
      return null;
    }
  }
  public setLocalStorage<T>(key: keyof typeof this.STORAGE_KEY, data: T): void {
    localStorage.setItem(this.STORAGE_KEY[key], JSON.stringify(data));
  }

  public clearKey(key: keyof typeof this.STORAGE_KEY): void {
    localStorage.removeItem(this.STORAGE_KEY[key]);
  }


  public clearAllStorage(): void {
    localStorage.clear()
  }
}
