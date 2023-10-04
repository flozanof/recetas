import React from "react";
import { IReceta, IIngrediente } from '../interfaces/Types';
import { UseFormGetValues, useFieldArray } from "react-hook-form";
import Ingredientes from "./recetaFormIngrediente"

export default function RecetaFormGrupoIngr(props: {control: any; register: any; getValues: UseFormGetValues<IReceta>; setValue: any}) {
    const {control, register, getValues} = props;
    const { fields, remove, append } = useFieldArray({
        control,
        name: `IngredientesGrupo`
    });

    return (
        <div>
            {fields.map((item, indexGrp) => {
                console.log("Genera un GRUPOOOOOOO: "+ indexGrp);
                console.log("register: "+ `IngredientesGrupo.${indexGrp}.Grupo`);
                return (
                    <div key={item.id} style={{ marginLeft: 20 }}>
                        <label>Grupo:</label>
                        <input
                            {...register(`IngredientesGrupo.${indexGrp}.Grupo`, {
                                required: true
                            })}
                            style={{ marginRight: "25px" }}
                        />

                        <Ingredientes  {...{indexGrp, control, register, getValues }} />
                    </div>
                );
            })}

            <button
                type="button"
                onClick={() =>
                    append({
                        field1: "field1",
                        field2: "field2"
                    })
                }
            >
                Append Nested
            </button>

            <hr />
        </div>
    );
}
