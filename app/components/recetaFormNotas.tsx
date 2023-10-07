import React from "react";
import { IReceta, IIngrediente } from '../interfaces/Types';
import { UseFormGetValues, useFieldArray } from "react-hook-form";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

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
                        <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            size="small"
                            sx={{ marginTop: "-30px" }}
                            onClick={() => { remove(index) }}
                        >
                            Delete
                        </Button>
                    </div>
                );
            })}
            <Button
                variant="outlined"
                startIcon={<AddIcon />}
                onClick={() => { append('') }}
            >
                Añadir Nota
            </Button>
            <hr />
        </div>
    );
}
