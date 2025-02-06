import ButtonPrimary from "../ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary";

type Props = {
    id: number,
    message: string,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    onDialogAnswer: Function
}

export default function DialogConfirmation({ id, message, onDialogAnswer }: Props) {

    return (
        <div className="crgtask-dialog-background" onClick={() => onDialogAnswer(false, id)}>
            <div className="crgtask-dialog-box" onClick={(event) => event.stopPropagation()}>
                <h2>{message}</h2>
                <div className="crgtask-dialog-btn-container">
                    <div onClick={() => onDialogAnswer(false, id)}><ButtonSecondary text="Não" /></div>
                    <div onClick={() => onDialogAnswer(true, id)}><ButtonPrimary text="Sim" /></div>
                </div>
            </div>
        </div>
    )
}