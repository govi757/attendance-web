import React from 'react';
export const ClassCard = ({ title = 'Title', desc = 'Description', onClick }) => {
    return (
        <div className="col-sm-3" onClick={onClick}>
            <div className="card rounded ">
                <div className="card-body">
                    <h3 style={{ textAlign: 'start' }}>{title}</h3>
                    <h5 style={{ textAlign: 'start' }}>{desc}</h5>
                </div>
            </div>
        </div>
    );
}