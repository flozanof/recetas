import React from "react";
import { useFieldArray } from "react-hook-form";
import NestedArray from "./nestedFieldArray";
import FormSectionGen from "./recetaFormSectionGen"

let renderCount = 0;

export default function FieldObject({ control, register, setValue, getValues }) {
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: "test"
  });

  renderCount++;

  return (
    <>
      <ul>
          <li key={item.id}>
          <FormSectionGen receta={recipe} register={register} />

            <NestedArray nestIndex={index} {...{ control, register }} />
          </li>
      </ul>

      <section>
        <button
          type="button"
          onClick={() => {
            append({ name: "append" });
          }}
        >
          append
        </button>

        <button
          type="button"
          onClick={() => {
            setValue("test", [
              ...(getValues().test || []),
              {
                name: "append",
                nestedArray: [{ field1: "append", field2: "append" }]
              }
            ]);
          }}
        >
          Append Nested
        </button>

        <button
          type="button"
          onClick={() => {
            prepend({ name: "append" });
          }}
        >
          prepend
        </button>

        <button
          type="button"
          onClick={() => {
            setValue("test", [
              {
                name: "append",
                nestedArray: [{ field1: "Prepend", field2: "Prepend" }]
              },
              ...(getValues().test || [])
            ]);
          }}
        >
          prepend Nested
        </button>
      </section>

      <span className="counter">Render Count: {renderCount}</span>
    </>
  );
}
