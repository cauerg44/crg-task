// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FormTextArea(props: any) {

    const { 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        validation, 
        invalid = "false", 
        dirty = "false", 
        onTurnDirty, 
        ...textAreaProps } = props;

    function handleBluer() {
        onTurnDirty(props.name)
    }

    return (
        <textarea
            {...textAreaProps}
            data-invalid={invalid}
            onBlur={handleBluer}
            data-dirty={dirty}
        />
    );
}