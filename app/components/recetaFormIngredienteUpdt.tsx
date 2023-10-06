import React from "react";
import { IReceta, IIngrediente } from '../interfaces/Types';
import { useFieldArray } from "react-hook-form";
import Grid from '@mui/material/Grid';


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
                            <Grid container spacing={2} >
                                <Grid item md={12} lg={12} xl={12}>
                                    <input
                                        placeholder="Nombre"
                                        {...register(`Ingredientes.${ingredientesRef[index]}.Nombre`, {
                                            required: true
                                        })}
                                        style={{ marginRight: "25px" }}
                                    />
                                </Grid>
                                <Grid item md={2} lg={2} xl={2}>
                                    <input
                                        placeholder="Cantidad"
                                        {...register(`Ingredientes.${ingredientesRef[index]}.Cantidad`, {
                                            required: true
                                        })}
                                        style={{ marginRight: "25px", marginTop: "0px", marginBottom: "0px" }}
                                    />
                                </Grid>
                                <Grid item md={4} lg={4} xl={4}>
                                    <input
                                        placeholder="Unidad"
                                        {...register(`Ingredientes.${ingredientesRef[index]}.Unidad`, {
                                            required: true
                                        })}
                                        style={{ marginRight: "25px", marginTop: "0px", marginBottom: "0px" }}
                                    />
                                </Grid>
                                <Grid item md={6} lg={6} xl={6}>
                                    {/*
                        <input placeholder="Cantidad" defaultValue={i.Cantidad} {...register("Cantidad")} />
                        <input placeholder="Unidad" defaultValue={i.Unidad} {...register("Unidad")} />
                */}
                                    <button type="button"
                                        style={{ backgroundColor: "#555", borderRadius: "4px", padding: "0px 29px 0px", marginBottom: "10px" }}
                                        onClick={() => remove(index)}>
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
