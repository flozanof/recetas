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
        </div>
    );
}
