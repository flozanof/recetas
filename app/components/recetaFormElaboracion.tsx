import React from "react";
import { IReceta, IIngrediente } from '../interfaces/Types';
import { UseFormGetValues, useFieldArray } from "react-hook-form";

export default function RecetaFormElaboracion(props: { control: any; register: any; getValues: UseFormGetValues<IReceta>; setValue: any }) {
    const { control, register, getValues } = props;
    const { fields, remove, append } = useFieldArray({
        control,
        name: `Elaboracion`
    });

    return (
        <div>
            <label>Pasos:</label>
            {fields.map((item, index) => {
                return (
                    <div key={item.id} style={{ marginLeft: 20 }}>
                        <input
                            type="number"
                            {...register(`Elaboracion.${index}.Paso`, {
                                required: true
                            })}
                            style={{ marginRight: "25px" }}
                        />
                        <input
                            {...register(`Elaboracion.${index}.Descripcion`, {
                                required: true
                            })}
                            style={{ marginRight: "25px" }}
                        />
                    </div>
                );
            })}

            <button type="button"
                style={{ backgroundColor: "#555", borderRadius: "4px", padding: "0px 29px 0px", marginBottom: "10px" }}
                onClick={() => append({ field1: "field1", field2: "field2" })}>
                Añadir Elaboración
            </button>
            <hr />
        </div>
    );
}
