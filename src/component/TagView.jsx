import React, { useState } from "react";

function TagView({ tag, onAddChild, onNameChange, onDataChange, onCollapse }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="tag">
      <div className="name-header">
        <button className="collapse-button" onClick={toggleCollapse}>
          {collapsed ? ">" : "v"}
        </button>
        <input
          type="text"
          className="name-input"
          value={tag.name}
          onChange={(e) => onNameChange(tag, e.target.value)}
        />
        <button className="add-child-button" onClick={() => onAddChild(tag)}>
          Add Child
        </button>
      </div>
      {!collapsed && (
        <>
          {tag.data !== undefined && (
            <div className="data-field">
              <span>Data</span>
              <input
                type="text"
                className="data-input"
                value={tag.data}
                onChange={(e) => onDataChange(tag, e.target.value)}
              />
            </div>
          )}
          <div className="children-container">
            {tag.children &&
              tag.children.map((child, index) => (
                <TagView
                  key={index}
                  tag={child}
                  onAddChild={onAddChild}
                  onNameChange={onNameChange}
                  onDataChange={onDataChange}
                  onCollapse={onCollapse}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default TagView;
