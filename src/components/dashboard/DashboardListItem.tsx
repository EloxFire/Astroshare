import { Link } from 'react-router-dom'
import { FiEdit, FiEye, FiEyeOff, FiTrash2 } from 'react-icons/fi'
import '../../styles/components/dashboard/dashboardListItem.scss'

interface ItemProperty {
  label: string
  value: string | number
  type?: 'text' | 'image'
  alt?: string
}
interface Props {
  properties: ItemProperty[]
  updateUrl?: string
  isVisible?: boolean
  onVisibilityChange?: () => void
  onDelete: () => void
}

export default function DashboardListItem({ properties, updateUrl, isVisible, onVisibilityChange, onDelete }: Props) {
  return (
    <tr className="dashboard-list-item">
      {properties.map((property: ItemProperty) => (
        <td key={`item-property-${property.label}`} className="dashboard-list-item__property">
          {property.type === 'image' ? (
            <img
              loading='lazy'
              className="dashboard-list-item__property__image"
              src={property.value as string}
              alt={property.alt ? property.alt : "Image de la galerie photo"}
            />
          ) : (
            <p className="dashboard-list-item__property__value">{property.value}</p>
          )}
        </td>
      ))}
      <td className="dashboard-list-item__actions">
        {updateUrl && (
          <Link className="dashboard-list-item__actions__action" to={updateUrl}>
            <FiEdit style={{ verticalAlign: "middle" }} />
          </Link>
        )}
        {onVisibilityChange && (
          <button onClick={() => onVisibilityChange()} className="dashboard-list-item__actions__action">
            {isVisible ? <FiEyeOff style={{ verticalAlign: "middle" }} /> : <FiEye style={{ verticalAlign: "middle" }} />}
          </button>
        )}
        <button onClick={() => onDelete()} className="dashboard-list-item__actions__action dashboard-list-item__actions__action--red">
          <FiTrash2 style={{ verticalAlign: "middle" }} />
        </button>
      </td>
    </tr>
  )
}
