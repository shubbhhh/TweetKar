
interface InputProps {
    placeholder?: string
    value?: string
    type?: string
    disabled?: boolean
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ placeholder, value, type, disabled, onChange }: InputProps) {

    return (
        <input 
            disabled={disabled}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className="w-full p-4 text-lg border-2 rounded-md outline-none focus:border-sky-500 focus:border-2 transition disabled:bg-neutral-400 disabled:opacity-70 disabled:cursor-not-allowed"
        />
    )
}