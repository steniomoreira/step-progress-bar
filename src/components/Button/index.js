import React from "react";
import classNames from 'classnames';

import './style.scss';

export const Button = ({text, className, onClick, disabled, ...rest}) => {
    return (
        <button
            className={classNames('Button', className,{'disabled': disabled})}
            type="button"
            onClick={onClick}
            disabled={disabled}
            {...rest
        }>
            {text}
        </button>

    )
}