
   
import {makeAutoObservable} from "mobx";

export default class TokenStore {
    constructor() {
        this._types = [
          {id: 2, name: 'Staked only'},
          {id: 3, name: 'Show finished'}

        ]
        this._brands = [
          {id: 1, name: 'All'},
          {id: 2, name: 'BSW'},
          {id: 3, name: 'BNB'}

        ]
        this._tokens = [
          {id: 3, name:'TEST NAME', price: 28.2, apy: 83},
          {id: 4, name:'TEST NAME2', price: 18.2, apy: 83},
          {id: 5, name:'TEST NAME3', price: 38.2, apy: 83},
          {id: 6, name:'TEST NAME4', price: 8.2, apy: 83}

        ]
        this._selectedType = {}
        this._selectedBrand = {}

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
    setSelectedType(type) {
this._selectedType = type
    }
    setSelectedBrand(brand) {
      this._selectedBrand = brand
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

  get selectedType() {
    return this._selectedType
}
get selectedBrand() {
  return this._selectedBrand
}
}