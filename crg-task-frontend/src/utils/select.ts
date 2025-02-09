export const selectStyles = {
    control: (provided: any) => ({
        ...provided,
        border: "none",
    }),
    placeholder: (provided: any) => ({
        ...provided,
        color: "var(--crgtask-font-color-secondary)"
    }),
    indicatorSeparator: (provided: any) => ({
        ...provided,
        display: "none"
    })
}