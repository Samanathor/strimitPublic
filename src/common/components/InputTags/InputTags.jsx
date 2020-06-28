import React from "react";
import { WithContext as ReactTags } from "react-tag-input";
import { useState } from "react";
import "./InputTagStyles.css";

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const InputTags = ({ tags, suggestions }) => {
  const [stateTags, setTags] = useState(tags);
  const [stateSuggestions, setSuggestions] = useState(suggestions);
  const handleDelete = (i) => {
    setTags(stateTags.filter((tag, index) => index !== i));
  };
  const handleAddition = (tag) => {
    if (stateTags?.length < 10) {
      return setTags([...stateTags, tag]);
    } else {
      return;
    }
  };
  const handleDrag = (tag, currPos, newPos) => {
    const newTags = stateTags.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    setTags(newTags);
  };

  return (
    <ReactTags
      placeholder="Agregar Etiqueta"
      tags={stateTags}
      suggestions={stateSuggestions}
      handleDelete={handleDelete}
      handleAddition={handleAddition}
      handleDrag={handleDrag}
      delimiters={delimiters}
    />
  );
};

InputTags.defaultProps = {
  tags: [],
  suggestions: [],
};

export default InputTags;
