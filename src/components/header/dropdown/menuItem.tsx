import React from 'react';

interface ItemProps {
    name: string;
    leftIcon: any;
    rightIcon?: any;
    description?: string;
    action: any;
}

function MenuItem(props: ItemProps) {

    return (
        <button className="menu-item" onClick={() => props.action}>
            {props.leftIcon}
            <div className="item-details">
                {props.name}
                {props.description}
            </div>
            {props.rightIcon}
        </button>
    )
};

export default MenuItem;