
   
import {makeAutoObservable} from "mobx";

export default class TokenStore {
    constructor() {
        this._types = [
          {id: 1, name: 'USDT'},
          {id: 2, name: 'USDT2'}
        ]
        this._brands = [
          {id: 1, name: 'BNB'},
          {id: 2, name: 'BSW'}
        ]
        this._tokens = [
          {id: 3, name:'TEST NAME', price: 28.2, apy: 83},
          {id: 4, name:'TEST NAME2', price: 18.2, apy: 83},
          {id: 5, name:'TEST NAME3', price: 38.2, apy: 83},
          {id: 6, name:'TEST NAME4', price: 8.2, apy: 83}

        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setTokens(tokens) {
      this._tokens = tokens
  }


    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get tokens() {
      return this._tokens
  }
}