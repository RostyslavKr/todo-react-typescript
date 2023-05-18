import React from 'react';
import clsx from 'clsx';
import css from './Button.module.css';
interface IButtonProps extends React.ComponentPropsWithRef<'button'>{
  
  selected: boolean
}
export const Button: React.FC<IButtonProps> = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(css.btn, { [css.isSelected]: selected })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};
