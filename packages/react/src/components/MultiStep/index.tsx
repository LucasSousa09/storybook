import { ComponentProps } from "react";
import { Label, MultiStepContainer, Step, Steps } from "./styles";

export interface MultiStepsProps {
    size: number
    currentStep?: number
}

export function MultiSteps({ size, currentStep = 1 }: MultiStepsProps){
    return (
        <MultiStepContainer>
            <Label>
                Passo {currentStep} de {size}

                <Steps css={{ '--steps-size': size }}>
                    {Array.from({length: size}, (_, i) => i + 1).map(step => {
                        return <Step key={step} active={currentStep >= step}/>
                    })}

                </Steps>
            </Label>
        </MultiStepContainer>
    )
}

MultiSteps.displayName = 'MultiSteps'
