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
    <div className="dashboard-list-item">
      <div className="dashboard-list-item__properties" style={{ justifyContent: properties.length > 2 ? 'space-between' : 'flex-start' }}>
        {
          properties.map((property: ItemProperty) => {
            return (
              <div key={`item-property-${property.label}`} className="dashboard-list-item__properties__property">
                {
                  property.type !== 'image' && <p className="dashboard-list-item__properties__property__label">{property.label}</p>
                }
                {
                  (property.type && property.type === 'image') && <img loading='lazy' className="dashboard-list-item__properties__property__image" src={property.value as string} alt={property.alt ? property.alt : "Image de la galerie photo"} />
                }
                {
                  (property.type !== 'image' || !property.type) && <p className="dashboard-list-item__properties__property__value">{property.value}</p>
                }
              </div>
            )
          })
        }
      </div>
      <div className="dashboard-list-item__actions">
        {updateUrl && <Link className="dashboard-list-item__actions__action" to={updateUrl}><FiEdit style={{ verticalAlign: "middle" }} /></Link>}
        {onVisibilityChange && <button onClick={() => onVisibilityChange()} className="dashboard-list-item__actions__action">{isVisible ? <FiEyeOff style={{ verticalAlign: "middle" }} /> : <FiEye style={{ verticalAlign: "middle" }} />}</button>}
        <button onClick={() => onDelete()} className="dashboard-list-item__actions__action dashboard-list-item__actions__action--red"><FiTrash2 style={{ verticalAlign: "middle" }} /></button>
      </div>
    </div>
  )
}
