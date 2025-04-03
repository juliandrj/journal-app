import { ChangeEvent, useState } from "react";

export function useForm<Type>(initialForm:Type) {
    const [formState, setFormState] = useState(initialForm);
    const onInputChange = ({currentTarget}:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = currentTarget;
        setFormState({
            ...formState,
            [name]: value
        });
    };
    const onResetForm = () => {
        setFormState(initialForm);
    };
    return {
        formState,
        onInputChange,
        onResetForm
    };
}
