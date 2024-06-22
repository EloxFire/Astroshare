import { Link } from 'react-router-dom'
import '../../styles/components/dashboard/dashboardListItem.scss'
import { FiEdit2, FiEye, FiEyeOff, FiTrash2 } from 'react-icons/fi'

interface ItemProperty {
  label: string
  value: string | number
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
    <div className="dashboard-list-item">
      <div className="dashboard-list-item__properties">
        {
          properties.map((property: ItemProperty) => {
            return (
              <div key={`item-property-${property.label}`} className="dashboard-list-item__properties__property">
                <p className="dashboard-list-item__properties__property__label">{property.label}</p>
                <p className="dashboard-list-item__properties__property__value">{property.value}</p>
              </div>
            )
          })
        }
      </div>
      <div className="dashboard-list-item__actions">
        {updateUrl && <Link className="dashboard-list-item__actions__action" to={updateUrl}><FiEdit2 /></Link>}
        {onVisibilityChange && <button onClick={() => onVisibilityChange} className="action-button">{isVisible ? <FiEyeOff /> : <FiEye />}</button>}
        <button onClick={() => onDelete} className="action-button red"><FiTrash2 /></button>
      </div>
    </div>
  )
}
