import React from "react";
import { IReceta, IIngrediente } from '../interfaces/Types';
import { UseFormGetValues, useFieldArray } from "react-hook-form";

export default function RecetaFormNotas(props: { control: any; register: any; getValues: UseFormGetValues<IReceta>; setValue: any }) {
    const { control, register, getValues } = props;
    const { fields, remove, append } = useFieldArray({
        control,
        name: `Notas`
    });

    return (
        <div>
            {fields.map((item, index) => {
                return (
                    <div key={item.id} style={{ marginLeft: 20 }}>
                        <input
                            {...register(`Notas.${index}`, {
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
                Añadir Nota
            </button>
            <hr />
        </div>
    );
}
