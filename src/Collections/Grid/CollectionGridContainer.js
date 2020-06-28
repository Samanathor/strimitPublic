import React from "react";
import { connect } from "react-redux";
import CollectionGridScreen from "./CollectionGridScreen";
import { toJS } from "../../common/hocs/to-js";

const CollectionGridContainer = (props) => {
  return <CollectionGridScreen {...props} />;
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
)(toJS(CollectionGridContainer));
