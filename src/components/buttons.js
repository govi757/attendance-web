import React from 'react';
export const BasicButton = ({ buttonText = "Button", style, customClass="", onClick }) => {
    return (
        <div className={customClass} style={{ ...style }}>
            <a onClick={onClick} className="btn btn-primary btn-lg active" role="button" aria-pressed="true">{buttonText}</a>
        </div>
    )
}