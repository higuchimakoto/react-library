import React from 'react';

export const Button = ({ label, onClick, bgColor }) => {
    const buttonStyle = {
        color: '#fff',
        padding: '8px',
        borderRadius: '8px',
        backgroundColor: bgColor ? bgColor : 'gray',
    };
    return (
        <button style={buttonStyle} onClick={onClick}>
            {label}
        </button>
    );
};
