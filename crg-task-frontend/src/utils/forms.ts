// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function update(inputs: any, name: string, newValue: any) {
    return { ...inputs, [name]: { ...inputs[name], value: newValue} }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toValues(inputs: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = {}
    for (let name in inputs) {
        data[name] = inputs[name].value
    }
    return data
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function updateAll(inputs: any, newValues: any) {
    const newInputs: any = {}
    for (let name in inputs) {
        newInputs[name] = { ...inputs[name], value: newValues[name] }
    }
    return newInputs
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function validate(inputs: any, name: string) {
    if (!inputs[name].validation) {
        return inputs
    }
    const isInvalid = !inputs[name].validation(inputs[name].value)
    return { ...inputs, [name]: { ...inputs[name], invalid: !isInvalid.toString()}}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toDirty(inputs: any, name: string) {
    return { ...inputs, [name]: { ...inputs[name], dirty: "true"}}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function updateAndValidate(inputs: any, name: string, newValue: any) {
    const dataUpdated = update(inputs, name, newValue)
    return validate(dataUpdated, name)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function dirtyAndValidate(inputs: any, name: string) {
    const dataDirty = toDirty(inputs, name)
    return validate(dataDirty, name)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toDirtyAll(inputs: any) {
    const newInputs: any = {}
    for (let name in inputs) {
        newInputs[name] = { ...inputs[name], dirty: "true" }
    }
    return newInputs
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function validateAll(inputs: any) {
    const newInputs: any = {}
    for (let name in inputs) {
        if (inputs[name].validation) {
            const isInvalid = !inputs[name].validation(inputs[name].value)
            newInputs[name] = { ...inputs[name], invalid: isInvalid.toString() }
        }
        else {
            newInputs[name] = { ...inputs[name] }
        }
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function dirtyAndValidateAll(inputs: any) {
    return validateAll(toDirtyAll(inputs))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function hasAnyInvalid(inputs: any) {
    for (let name in inputs) {
        if (inputs[name].dirty === "true" && inputs[name].invalid === "true") {
            return true
        }
    }
    return false
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setBackendErros(inputs: any, erros: any[]) {
    const newInputs = { ...inputs }
    erros.forEach(item => {
        newInputs[item.fieldName].message = item.message;
        newInputs[item.fieldName].dirty = "true";
        newInputs[item.fieldName].invalid = "true";
    })
    return newInputs
}