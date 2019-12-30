import React from 'react';
export const Modal = ({ children = null, showModal = false }) => {
    return (
        <div className='col' style={{ height: '80vh', width: '100%', position: 'absolute', justifyContent: 'center', display: showModal===false?'none':'flex' }}>
            <div className='card col-sm-6 my-5' style={{overflow: 'auto', height: '70vh'}} >
                <h1>Modal</h1>
                {children}
            </div>
        </div>
    )
}