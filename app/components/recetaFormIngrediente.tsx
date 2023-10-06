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

    return (
        <div>
            {fields.filter((x, y) => y === indexGrp).map((item, k) => {
                return (
                    <div key={item.id} style={{ marginLeft: 20 }}>
                        <IngredientesGrupoUPdt {...{ indexGrp, control, register }} />
                    </div>
                );
            })}
            <button type="button"
                style={{ backgroundColor: "#555", borderRadius: "4px", padding: "0px 29px 0px", marginBottom: "10px" }}
                onClick={() => append({ field1: "field1", field2: "field2" })}>
                Añadir Ingrediente
            </button>
            <hr />
        </div>
    );
}
