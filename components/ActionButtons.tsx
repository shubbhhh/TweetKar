
interface ActionButtonProps {
    label: string,
    secondary?: boolean,
    fullwidth?: boolean,
    large?: boolean,
    onClick?: () => void,
    disable?: boolean,
    outline?: boolean
}

export default function ActionButton({
    label, 
    secondary, 
    fullwidth, 
    large, 
    onClick, 
    disable, 
    outline 
}: ActionButtonProps) {

    return (
        <button 
            disabled={disable}
            onClick={onClick}
            className={`
                disabled:opacity-70
                disabled:cursor-not-allowed
                rounded-full
                font-semibold
                hover:opacity-80
                transition
                border-2
                ${fullwidth ? 'w-full' : 'w-fit'}
                ${secondary ? 'bg-white' : 'bg-sky-500'}
                ${secondary ? 'bg-white' : ''}
                ${secondary ? 'border-white' : 'border-sky-500'}
                ${large ? 'text-xl': 'text-md'}
                ${large ? 'px-5' : 'px-4'}
                ${large ? 'py-3' : 'py-2'}
                ${outline ? 'bg-transparent' : ''}
                ${outline ? 'border-2' : ''}
            `}
        >
            {label}
        </button>
    )
}