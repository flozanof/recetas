import React from "react";
import { IReceta } from '../interfaces/Types';
import { UseFormRegister, FieldValues } from "react-hook-form";

interface IFormProps {
    receta: IReceta;
    register: UseFormRegister<FieldValues>;
}

export default function RecetaFormSectionGen(props : IFormProps) {
  return (
    <>
<div className="form-control">
    <label>Nombre:</label>
    <input defaultValue={props.receta.Nombre} type='text' {...props.register("Nombre")} />
</div>
<div className="form-control">
    <label>Foto:</label>
    <input type='text' defaultValue={props.receta.Foto} {...props.register("Foto")} />
</div>
<div className="form-control">
    <label>Comensales:</label>
    <input type='text' defaultValue={props.receta.Comensales} {...props.register("Comensales")} />
</div>
<div className="form-control">
    <label>Dificultad:</label>
    <input type='text' defaultValue={props.receta.Dificultad} {...props.register("Dificultad")} />
</div>
<div className="form-control">
    <label>Tiempo Elaboracion:</label>
    <input type='text' defaultValue={props.receta.TiempoElaboracion} {...props.register("TiempoElaboracion")} />
</div>
<div className="form-control">
    <label>Tiempo Coccion:</label>
    <input type='text' defaultValue={props.receta.TiempoCoccion} {...props.register("TiempoCoccion")} />
</div>
<div className="form-control">
    <label>Tecnica Elaboracion:</label>
    <input type='text' defaultValue={props.receta.TecnicaElaboracion} {...props.register("TecnicaElaboracion")} />
</div>
</>
  );
}
