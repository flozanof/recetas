export interface IIngrediente {
    Nombre: string;
    Cantidad: number;
    Unidad: string;
    Sustituto: string[];
}

export interface IIngredienteGrupo {
    Grupo: string;
    Ingredientes: IIngrediente[] | null;
}

export interface IElaboracion {
    Paso: number;
    Descripcion: string;
}

export interface IReceta {
    Nombre: string;
    Foto: string;
    Comensales: number | null;
    Dificultad: number | null;
    TiempoCoccion: number | null;
    TiempoElaboracion: number | null;
    TecnicaElaboracion: string;
    IngredientesGrupo: IIngredienteGrupo[] | null;
    Elaboracion: IElaboracion[] | null;
    Notas: string[] | null;
}
