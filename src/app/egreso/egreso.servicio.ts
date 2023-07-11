import { Input } from "@angular/core";
import { Egreso } from "./egreso.model";

export class EgresoServicio{
    egresos: Egreso[]=[
        new Egreso("Renta de Departamento",900),
        new Egreso("Ropa",200)
    ];       
    
    eliminar(egreso: Egreso): void{
        const indice: number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1);
    }

    
}