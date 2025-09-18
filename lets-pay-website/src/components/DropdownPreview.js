import React from 'react';

const DropdownPreview = ({ title, description, imageSrc, icon, visible, id }) => {
  return (
    <aside
      id={id}
      className={`dropdown-preview${visible ? ' show' : ''}`}
      aria-hidden={!visible}
      role="note"
    >
      <div className="dropdown-preview-content">
        {(imageSrc || icon) && (
          <div className="preview-media" aria-hidden="true">
            {imageSrc ? (
              <img src={imageSrc} alt="" className="preview-image" />
            ) : (
              <span className="preview-icon" aria-hidden="true">{icon}</span>
            )}
          </div>
        )}
        <div className="preview-text">
          <h4 className="preview-title">{title}</h4>
          {description && <p className="preview-description">{description}</p>}
        </div>
      </div>
    </aside>
  );
};

export default DropdownPreview;


