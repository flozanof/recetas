import React from "react";
import { IReceta, IIngrediente } from '../interfaces/Types';
import { useFieldArray } from "react-hook-form";


export default function RecetaFormIngredientesUpdt(props: { indexGrp: number; ingredientesRef: number[]; control: any; register: any }) {
    const { indexGrp, ingredientesRef, control, register } = props;
    const { fields, remove, append } = useFieldArray({
        control,
        name: `Ingredientes`
    });

//                        {ingredientesGrupo(props.getValues().Ingredientes, item.IngredientesRef, register, remove)}
return (
    <div>
        {
            fields.filter((x, index) => ingredientesRef.includes(index)).map((i, index) => {
                return (
                    <div key={index}>
                        <input
                            placeholder="Nombre"
                            {...register(`Ingredientes.${ingredientesRef[index]}.Nombre`, {
                                required: true
                            })}
                            style={{ marginRight: "25px" }}
                        />
                        <input
                            placeholder="Cantidad"
                            {...register(`Ingredientes.${ingredientesRef[index]}.Cantidad`, {
                                required: true
                            })}
                            style={{ marginRight: "25px" }}
                        />
                        <input
                            placeholder="Unidad"
                            {...register(`Ingredientes.${ingredientesRef[index]}.Unidad`, {
                                required: true
                            })}
                            style={{ marginRight: "25px" }}
                        />
                        {/*
                        <input placeholder="Cantidad" defaultValue={i.Cantidad} {...register("Cantidad")} />
                        <input placeholder="Unidad" defaultValue={i.Unidad} {...register("Unidad")} />
                */}
                        <button type="button" onClick={() => remove(index)}>
                            Delete Nested
                        </button>
                    </div>
                );
            })
        }
    </div>
);

}
