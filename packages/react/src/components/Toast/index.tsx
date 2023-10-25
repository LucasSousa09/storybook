import { ComponentProps } from "react";
import { ToastContainer, ToastHeading } from "./styles";
import { X } from "phosphor-react";

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
    scheduledDate: 'string'
}

export function Toast({scheduledDate}: ToastProps){
    return (
        <ToastContainer>
            <ToastHeading>
                <strong>
                    Agendamento realizado
                </strong>
                <X />
            </ToastHeading>
            <span>
                {scheduledDate}
            </span>
        </ToastContainer>
    )
}