import { observable, action } from 'mobx'

export class MainStore {
  @observable
  isAuthenticated = false;

  @action
  setAuthentication(newValue) {
    this.isAuthenticated = newValue;
  }
}

export const mainStore = new MainStore()
