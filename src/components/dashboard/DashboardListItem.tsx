import '../../styles/components/dashboard/dashboardListItem.scss'

interface Props {
  properties: { label: string, value: string | number }[]
  updateUrl?: string
  deleteUrl?: string
  changeVisibility?: () => void
}

export default function DashboardListItem({ properties, updateUrl, deleteUrl, changeVisibility }: Props) {
  return (
    <div className="dashboard-list-item">DashboardListItem</div>
  )
}
