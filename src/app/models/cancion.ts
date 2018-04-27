export class Cancion {

    private _id: number;
    private _nombre: String;

    constructor(id: number = -1, nombre: String = "") {
        this._id = id;
        this._nombre = nombre;
    }

    get id() {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre: String) {
        this._nombre = nombre;
    }

}