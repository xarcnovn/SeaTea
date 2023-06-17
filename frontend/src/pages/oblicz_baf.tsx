import { useState } from 'react'
import { Button } from '@/components/Button'
import { FindPlot } from '@/components/steps/FindPlot'
import { StepOne } from '@/components/steps/StepOne'
import { StepTwo } from '@/components/steps/StepTwo'
import { StepThree } from '@/components/steps/StepThree'
import { StepFour } from '@/components/steps/StepFour'
import { StepFive } from '@/components/steps/StepFive'

const steps = [FindPlot, StepOne, StepTwo, StepThree, StepFour, StepFive]

export default function CalculateBaf() {
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const [isButtonDisabled, setIsDisabled] = useState(false)

  const handleNextStep = () => {
    if (activeStepIndex === steps.length - 1) return
    setActiveStepIndex(activeStepIndex + 1)
  }

  const handlePreviousStep = () => {
    if (activeStepIndex === 0) return
    setActiveStepIndex(activeStepIndex - 1)
  }

  const ActiveStep = steps[activeStepIndex]

  return (
    <div className="flex">
      <div className="w-1/2 bg-lines h-screen py-24 px-16">
        <ActiveStep />
      </div>
      {activeStepIndex === 0 ? (
        <div className="w-1/2 bg-find-plot" />
      ) : (
        <div>cos innego</div>
      )}
    </div>
  )
}
