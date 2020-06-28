import React from "react";
import { connect } from "react-redux";
import CollectionUploadScreen from "./CollectionUploadScreen";
import { toJS } from "common/hocs/to-js";

const CollectionUploadContainer = (props) => {
  return <CollectionUploadScreen {...props} />;
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  onSendUploadConnection: (values) => {
    console.log(values);
  },
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(CollectionUploadContainer));
