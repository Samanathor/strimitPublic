import React from "react";
import { connect } from "react-redux";
import CollectionUploadScreen from "./CollectionUploadScreen";
import { toJS } from "common/hocs/to-js";
import { CollectionActions } from "../CollectionActions";

const { sendCollectionCreate } = CollectionActions;

const CollectionUploadContainer = (props) => {
  return <CollectionUploadScreen {...props} />;
};

const mapStateToProps = (state) => {
  return {
    collections: {},
  };
};

const mapDispatchToProps = {
  onSendUploadConnection: sendCollectionCreate,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(CollectionUploadContainer));
