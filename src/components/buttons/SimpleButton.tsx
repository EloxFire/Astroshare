import '../../styles/components/buttons/simpleButton.scss';

interface SimpleButtonProps {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
  icon?: string;
  target?: '_blank' | '_self';
}

export const SimpleButton = ({ text, href, variant = 'primary', icon, target = '_self' }: SimpleButtonProps) => {
  return (
    <a href={href} className={`simple-button ${variant}`} target={target} rel="noopener noreferrer">
      {icon && <img src={icon} alt="" aria-hidden="true" />}
      {text}
    </a>
  )
}
