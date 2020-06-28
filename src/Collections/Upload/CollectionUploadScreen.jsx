import React from "react";
import {
  DragDrop,
  Input,
  Select,
  Button,
  Textarea,
  InputTags,
} from "Components";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import { faUpload, faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const CollectionUploadScreen = (props) => {
  const { onSendUploadCollection } = props;
  const onSubmit = (values) => {
    console.log(values);
  };
  const { register, handleSubmit, errors, setValue } = useForm();
  const setDragFile = (files) => {
    setValue("portada", files);
  };
  const setTags = (tags) => {
    console.log(tags);
    setValue("tags", tags);
  };
  useEffect(() => {
    register({ name: "portada" }, { required: true });
  }, [register]);
  useEffect(() => {
    register({ name: "tags" });
  }, [register]);
  return (
    <div>
      <div className="p-4">
        <h3 className="text-2xl font-bold">Subir una nueva colección</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4 px-4">
            <label>Portada</label>
            <DragDrop
              setDragFile={setDragFile}
              name="portada"
              border={errors.portada ? "red" : "purple"}
            />
            {errors.portada && (
              <p className=" text-red-800 text-xs">
                La colección debe tener una imagen de portada válida.
              </p>
            )}
          </div>
          <div className="mt-4 px-4">
            <label>Titulo</label>
            <Input
              propRef={register({ required: true })}
              name="title"
              placeholder="Ingresa el título de la colección de videos"
              border={errors.title ? "red" : "purple"}
            />
            {errors.title && (
              <p className=" text-red-800 text-xs">Escribe un título vâlido</p>
            )}
          </div>
          <div className="mt-4 flex">
            <div className="w-2/3 px-4">
              <label>Categoria</label>
              <Select
                name="category"
                propRef={register({ required: true })}
                border={errors.category ? "red" : "purple"}
                placeholder="Selecciona una categoria"
                options={[{ value: 1, name: "opcion1" }]}
              />
              {errors.category && (
                <p className=" text-red-800 text-xs">
                  Debes seleccionar una cátegoria
                </p>
              )}
            </div>
            <div className="w-1/3 px-4">
              <label>
                Precio <small className="text-xs">(Minimo: 4 USD)</small>
              </label>
              <Input
                type="number"
                propRef={register({ required: true, min: 4, max: 1000 })}
                placeholder="Precio en Dólares"
                name="price"
                border={errors.category ? "red" : "purple"}
              />
              {errors.category && (
                <p className=" text-red-800 text-xs">
                  Ingresa un valor númerico entre 4 y 1000
                </p>
              )}
            </div>
          </div>
          <div className="mt-4 flex">
            <div className="w-1/2 px-4">
              <Button
                icon={faUpload}
                color="pink"
                text="Subir Video de presentación"
              />
            </div>
            <div className="w-1/2 px-4">
              <Button icon={faFileUpload} color="pink" text="Subir Portada" />
            </div>
          </div>
          <div className="mt-4 px-4">
            <label>Descripción</label>
            <Textarea name="description" propRef={register} border="purple" />
          </div>
          <div className="mt-4 px-4">
            <label>
              Etiquetas <small className="text-xs">(Máximo 10)</small>
            </label>
            <div className="w-full h-14 border-purple-900 rounded-lg border p-4 ">
              <InputTags name="tags" setFormTags={setTags} />
            </div>
          </div>
          <div className="mt-4 px-4 mx-auto w-1/3">
            <Button type="submit" text="Guardar" color="pink" icon={faSave} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CollectionUploadScreen;
