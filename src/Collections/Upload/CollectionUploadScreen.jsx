import React from "react";
import {
  DragDrop,
  Input,
  Select,
  Button,
  Textarea,
  InputTags,
} from "Components";

const CollectionUploadScreen = () => {
  return (
    <div>
      <div className="p-4">
        <h3 className="text-2xl font-bold">Subir una nueva colección</h3>
        <form>
          <div className="mt-4 px-4">
            <label>Portada</label>
            <DragDrop />
          </div>
          <div className="mt-4 px-4">
            <label>Titulo</label>
            <Input
              name="titulo"
              placeholder="Ingresa el título de la colección de videos"
              border="purple"
            />
          </div>
          <div className="mt-4 flex">
            <div className="w-2/3 px-4">
              <label>Categoria</label>
              <Select
                border="purple"
                placeholder="Selecciona una categoria"
                options={[{ value: 1, name: "opcion1" }]}
              />
            </div>
            <div className="w-1/3 px-4">
              <label>Precio</label>
              <Input
                placeholder="Ingresa el valor que deseas cobrar por la colección"
                name="precio"
                border="purple"
              />
            </div>
          </div>
          <div className="mt-4 flex">
            <div className="w-1/2 px-4">
              <Button color="pink" text="Subir Video de presentación" />
            </div>
            <div className="w-1/2 px-4">
              <Button color="pink" text="Subir Portada" />
            </div>
          </div>
          <div className="mt-4 px-4">
            <label>Descripción</label>
            <Textarea border="purple" />
          </div>
          <div className="mt-4 px-4">
            <label>Etiquetas</label>
            <div className="w-full h-20 border-purple-900 rounded-lg border">
              <InputTags />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CollectionUploadScreen;
