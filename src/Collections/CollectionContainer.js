import React, { memo } from "react";
import CollectionScreen from "./CollectionScreen";
import CollectionUploadContainer from "./Upload/CollectionUploadContainer";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const CollectionContainer = () => {
  let match = useRouteMatch();
  return (
    <Switch>
      <Route
        path={`${match.url}/upload`}
        component={CollectionUploadContainer}
      />
      <Route path={`${match.url}/`} component={CollectionScreen} />
    </Switch>
  );
};

export default memo(CollectionContainer);
