import React from "react";
import { IReceta, IIngrediente } from '../interfaces/Types';
import { UseFormGetValues, useFieldArray } from "react-hook-form";
import Ingredientes from "./recetaFormIngrediente"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export default function RecetaFormGrupoIngr(props: { control: any; register: any; getValues: UseFormGetValues<IReceta>; setValue: any }) {
    const { control, register, getValues } = props;
    const { fields, remove, append } = useFieldArray({
        control,
        name: `IngredientesGrupo`
    });

    return (
        <div>
            {fields.map((item, indexGrp) => {
                return (
                    <div key={item.id} style={{ marginLeft: 20 }}>
                        <label>Grupo:</label>
                        <input
                            {...register(`IngredientesGrupo.${indexGrp}.Grupo`, {
                                required: true
                            })}
                            style={{ marginRight: "25px" }}
                        />

                        <Ingredientes  {...{ indexGrp, control, register, getValues }} />
                    </div>
                );
            })}

            <Button
                variant="outlined"
                startIcon={<AddIcon />}
                sx={{ marginBottom: "15px", marginTop: "15px" }}
                onClick={() => { append({}) }}
            >
                Añadir Grupo
            </Button>

            <hr />
        </div>
    );
}
