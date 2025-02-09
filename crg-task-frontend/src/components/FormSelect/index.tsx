import Select from "react-select";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FormSelect(props: any) {

    const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        className,
        validation,
        invalid = "false",
        dirty = "false",
        onTurnDirty,
        ...selectProps } = props;

    function handleBluer() {
        onTurnDirty(props.name)
    }

    return (
        <div
        
            className={className}
            data-dirty={dirty}
            data-invalid={invalid}>
            <Select
                {...selectProps}

                onBlur={handleBluer}

            />
        </div>
    );
}