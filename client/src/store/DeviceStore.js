import {makeAutoObservable} from "mobx"

export default class UserStore{
    constructor() {
        this._types = [
            {id: 1, name: 'Fridges'},
            {id: 2, name: 'Phones'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Sony'},
        ]
        this._devices =[
            {id: 1, name: "Iphone", price: 20, img: ""},
            {id: 2, name: "Iphone", price: 20, img: ""},
            {id: 3, name: "Iphone", price: 20, img: ""},
            {id: 4, name: "Iphone", price: 20, img: ""},
            {id: 5, name: "Iphone", price: 20, img: ""},
            {id: 6, name: "Iphone", price: 20, img: ""},
            {id: 7, name: "Iphone", price: 20, img: ""},
            {id: 8, name: "Iphone", price: 20, img: ""}
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
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type){
        this._selectedType = type
    }

    setSelectedBrand(brand){
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get devices() {
        return this._devices
    }
    get brands() {
        return this._brands
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}