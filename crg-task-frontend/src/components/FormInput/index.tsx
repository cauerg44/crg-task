// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FormInput(props: any) {

    const { 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        validation, 
        invalid = "false", 
        dirty = "false", 
        onTurnDirty, 
        ...inputProps } = props;

    function handleBluer() {
        onTurnDirty(props.name)
    }

    return (
        <input
            {...inputProps}
            data-invalid={invalid}
            onBlur={invalid}
            data-dirty={dirty}
        />
    );
}