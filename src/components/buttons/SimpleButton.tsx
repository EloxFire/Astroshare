import '../../styles/components/buttons/simpleButton.scss';

interface SimpleButtonProps {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
  icon?: string;
}

export const SimpleButton = ({ text, href, variant = 'primary', icon }: SimpleButtonProps) => {
  return (
    <a href={href} className={`simple-button ${variant}`}>
      {icon && <img src={icon} alt="" aria-hidden="true" />}
      {text}
    </a>
  )
}
