import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import drag from "../../assets/drag_drop.jpg";
import dragDropStyles from "./DragDropStyles";
import { useForm } from "react-hook-form";

const DragDrop = (props) => {
  const { setValue } = useForm();
  const { setDragFile, border, name } = props;
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (files) => {
      setDragFile(files);
    },
  });
  return (
    <div className={`${dragDropStyles.base} ${dragDropStyles.border[border]}`}>
      <div {...getRootProps()}>
        <input name={name} {...getInputProps()} />
        <div className="mx-auto text-center">
          <img className="w-1/4 mx-auto" alt="drag_drop" src={drag} />
        </div>
        <p className="text-xs mt-2 text-center">
          Arrastra tú archivo aquí, o haz click para agregar un archivo
        </p>
      </div>
    </div>
  );
};

export default DragDrop;
