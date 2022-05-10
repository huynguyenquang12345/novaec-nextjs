import { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  variant?: 'nova-green' | 'nova-border-white' | 'nova-icon-blue';
}

const BTN_VARIANTS = {
  'nova-green': 'rounded-sm px-4 py-1 bg-nova-green text-white hover:bg-opacity-90 active:bg-opacity-100',
  'nova-border-white': 'rounded-sm px-4 py-[0.438rem] border-white border bg-white text-nova-dark-blue hover:text-white hover:bg-transparent active:bg-[#00984a] active:bg-opacity-80',
  'nova-icon-blue': 'rounded-xl bg-nova-dark-blue p-2 text-2xl text-white hover:bg-opacity-80 active:bg-opacity-100'
};

const Button: React.FC<ButtonProps> = ({ children, className, variant, ...props }) => (
  <button {...props} className={`cursor-pointer transition-colors duration-200 ring-0 outline-none leading-6${className ? ` ${className}` : ''}${variant ? ` ${BTN_VARIANTS[variant]}` : ''}`}>{children}</button>
);

Button.defaultProps = {
};

export default Button;
