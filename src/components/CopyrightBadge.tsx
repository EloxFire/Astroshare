import '../styles/components/copyrightBadge.scss'

export default function CopyrightBadge() {
  return (
    <p className="copy-badge">Copyright &copy; Enzo Avagliano | {new Date().getFullYear()}</p>
  )
}
