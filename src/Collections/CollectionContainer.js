import React from "react";
import { connect } from "react-redux";
import CollectionScreen from "./CollectionScreen";
import CollectionUploadContainer from "./Upload/CollectionUploadContainer";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { toJS } from "../common/hocs/to-js";

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

const mapStateToProps = () => {};

export default connect(mapStateToProps)(toJS(CollectionContainer));
