export interface IIngrediente {
    Nombre: string;
    Cantidad: number;
    Unidad: string;
    Sustituto: string[];
}

export interface IIngredientesGrupo {
    Grupo: string;
    Ingredientes: IIngrediente[];
}

export interface IElaboracion {
    Paso: number;
    Descripcion: string;
}

export interface IReceta {
    Nombre: string;
    Foto: string;
    Comensales: number;
    Dificultad: number;
    TiempoCoccion: number;
    TiempoElaboracion: number;
    TecnicaElaboracion: string;
    IngredientesGrupo: IIngredientesGrupo[];
    Elaboracion: IElaboracion[];
    Notas: string[];
}