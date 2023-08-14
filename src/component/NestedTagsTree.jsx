import React, { useState } from "react";
import TagView from "./TagView";

function NestedTagsTree() {
  const initialTree = {
    name: "root",
    children: [],
  };

  const [tree, setTree] = useState(initialTree);
  const [exportedJSON, setExportedJSON] = useState(null);

  const handleAddChild = (parent) => {
    parent.children = parent.children || [];
    const newChild = { name: "New Child", data: "Data" };
    parent.children.push(newChild);
    setTree({ ...tree });
  };

  const handleNameChange = (tag, newName) => {
    tag.name = newName;
    setTree({ ...tree });
  };
  const handleDataChange = (tag, newData) => {
    tag.data = newData;
    setTree({ ...tree });
  };

  const handleExport = () => {
    const exportedData = JSON.stringify(tree, ["name", "children", "data"], 2);
    setExportedJSON(exportedData);
  };

  return (
    <div>
      <TagView
        tag={tree}
        onAddChild={handleAddChild}
        onNameChange={handleNameChange}
        onDataChange={handleDataChange}
        onCollapse={() => {}}
      />
      <button className="export-button" onClick={handleExport}>
        Export
      </button>
      {exportedJSON && <pre className="exported-json">{exportedJSON}</pre>}
    </div>
  );
}

export default NestedTagsTree;
