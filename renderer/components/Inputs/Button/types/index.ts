export interface IButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string
  type: 'button' | 'submit'
  buttonSize?: 'sm' | 'md' | 'lg'
  typeStyle?: 'primary' | 'default' | 'disabled'
}
