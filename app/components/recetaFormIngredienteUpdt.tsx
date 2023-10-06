import React from "react";
import { useFieldArray } from "react-hook-form";
import Grid from '@mui/material/Grid';


function getIndex(id: number) {

}

export default function RecetaFormIngredientesUpdt(props: {indexGrp: number, control: any; register: any }) {
    const { indexGrp, control, register } = props;
    const { fields, remove, append } = useFieldArray({
        control,
        name: `IngredientesGrupo.${indexGrp}.Ingredientes`
    });

    return (
        <div>
            {
                fields.map((field, index) => {
                    return (
                        <div key={index}>
                            <Grid container spacing={2} >
                                <Grid item md={12} lg={12} xl={12}>
                                    <input
                                        placeholder="Nombre"
                                        {...register(`IngredientesGrupo.${indexGrp}.Ingredientes.${index}.Nombre`, {
                                            required: true
                                        })}
                                        style={{ marginRight: "25px" }}
                                    />
                                </Grid>
                                <Grid item md={2} lg={2} xl={2}>
                                    <input
                                        placeholder="Cantidad"
                                        {...register(`IngredientesGrupo.${indexGrp}.Ingredientes.${index}.Cantidad`, {
                                            required: true
                                        })}
                                        style={{ marginRight: "25px", marginTop: "0px", marginBottom: "0px" }}
                                    />
                                </Grid>
                                <Grid item md={4} lg={4} xl={4}>
                                    <input
                                        placeholder="Unidad"
                                        {...register(`IngredientesGrupo.${indexGrp}.Ingredientes.${index}.Unidad`, {
                                            required: true
                                        })}
                                        style={{ marginRight: "25px", marginTop: "0px", marginBottom: "0px" }}
                                    />
                                </Grid>
                                <Grid item md={6} lg={6} xl={6}>
                                    <button type="button"
                                        style={{ backgroundColor: "#555", borderRadius: "4px", padding: "0px 29px 0px", marginBottom: "10px" }}
                                        onClick={() => {
                                            remove(index)
                                        }}>
                                        Delete Nested
                                    </button>
                                </Grid>
                            </Grid>
                        </div>
                    );
                })
            }
        </div>
    );

}
