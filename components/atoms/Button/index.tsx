import { ReactNode } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  variant?: 'nova-green' | 'nova-border-white';
}

const BTN_VARIANTS = {
  'nova-green': 'py-1 bg-nova-green text-white hover:bg-opacity-90 active:bg-opacity-100',
  'nova-border-white': 'py-[0.438rem] border-white border bg-white text-nova-dark-blue hover:text-white hover:bg-transparent active:bg-[#00984a] active:bg-opacity-80',
};

const Button: React.FC<ButtonProps> = ({ children, className, variant, ...props }) => (
  <button {...props} className={`rounded-sm cursor-pointer px-4 transition-colors duration-200 leading-6${className ? ` ${className}` : ''}${variant ? ` ${BTN_VARIANTS[variant]}` : ''}`}>{children}</button>
);

Button.defaultProps = {
};

export default Button;
