import React from 'react'
import '../../../styles/components/planner/panels/nextStep.scss'
import { usePlanner } from '../../../contexts/PlannerAppContext'

interface NextStepProps {
  disabled: boolean
}


export default function NextStep({ disabled }: NextStepProps) {

  const { nextStep } = usePlanner()

  return (
    <div className="next-step">
      <button disabled={disabled} onClick={() => nextStep()} className="custom-button">Étape suivante</button>
    </div>
  )
}
