import './styles.css'

type Props = {
    text: string
}

export default function ButtonTertiary({ text }: Props) {

    return (
        <button className='crgtask-btn-tertiary'>
            {text}
        </button>
    )
}