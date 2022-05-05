import { ReactNode } from 'react';

export interface ButtonProps {
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => (
  <div>{children}</div>
);

Button.defaultProps = {
};

export default Button;
