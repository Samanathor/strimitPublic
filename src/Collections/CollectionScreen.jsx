import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const CollectionScreen = () => {
  let match = useRouteMatch();
  return (
    <div>
      <h1>Colecciones</h1>
      <Link to={`${match.url}/upload`}>Crear nueva colección</Link>
    </div>
  );
};

export default CollectionScreen;
