import React from 'react';

export default ({ editing, value, onEdit, ...props }) => {
    if (editing) {
        return <Edit value={ value } onEdit={ onEdit } { ...props } />;
    }

    return <h6 className="mb-0" { ...props }>{ value }</h6>;
}

const Edit = ({ onEdit = () => {}, value, ...props }) => (
    <div onClick={ onEdit } { ...props } >
        <h6 className="mb-0">edit: { value }</h6>
    </div>
);