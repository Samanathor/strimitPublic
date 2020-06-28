import React from "react";
import { DragDrop, Input } from "Components";

const CollectionUploadScreen = () => {
  return (
    <div>
      <div className="p-4">
        <h3 className="text-2xl font-bold">Subir una nueva colección</h3>
        <form className="mt-4">
          <label>Portada</label>
          <DragDrop />
          <div className="mt-4">
            <label className="">Titulo</label>
            <Input name="titulo" border="purple" />
          </div>
          <div className="mt-4">
            <label>Categoria</label>
            <select>
              <option>Hola</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CollectionUploadScreen;
