import React from "react";
import Dropzone from "react-dropzone";
import drag from "../../assets/drag_drop.jpg";

const DragDrop = (props) => {
  return (
    <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <div className="w-1/4 p-3 h-40 rounded-lg border-2 mt-2">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div className="mx-auto text-center">
              <img className="w-1/4 mx-auto" alt="drag_drop" src={drag} />
            </div>
            <p className="text-xs mt-2 text-center">
              Arrastra tú archivo aquí, o haz click para agregar un archivo
            </p>
          </div>
        </div>
      )}
    </Dropzone>
  );
};

export default DragDrop;
