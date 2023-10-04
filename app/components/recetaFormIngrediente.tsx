import React from "react";
import { IReceta, IIngrediente } from '../interfaces/Types';
import { UseFormGetValues, useFieldArray } from "react-hook-form";
import IngredientesGrupoUPdt from "./recetaFormIngredienteUpdt";


export default function RecetaFormIngredientes(props: { indexGrp: number; control: any; register: any; getValues: UseFormGetValues<IReceta> }) {
    const { indexGrp, control, register } = props;
    const { fields, remove, append } = useFieldArray({
        control,
        name: `IngredientesGrupo`
    });

    console.log("Indice grupo: " + indexGrp);

    return (
        <div>
            {fields.filter((x, y) => y === indexGrp).map((item, k) => {
                //                console.log("ITEM-INGREDIETNESREF: " + item.IngredientesRef);
                console.log("Para cada grupo generamos sus ingredientesssssssssssssssssssssssssssssssss: ");
                let ingredientesRef = item.IngredientesRef;
                return (
                    <div key={item.id} style={{ marginLeft: 20 }}>
                        <IngredientesGrupoUPdt {...{indexGrp, ingredientesRef, control, register }}  />

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
