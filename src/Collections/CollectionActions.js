import { createActions } from "reduxsauce";

const { Types, Creators } = createActions(
  {
    sendCollectionCreate: ["payload"],
  },
  { prefix: "App/Collection/" }
);

export const CollectionTypes = Types;
export const CollectionActions = Creators;
