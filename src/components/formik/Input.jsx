import React from "react";
import { Field } from "formik";
import { TextField, Tooltip } from "@mui/material";

function Input(props)
{
    const {
        label,
        name,
        type,
        disabled,
        width,
        ...rest
    } = props;


    return (
        <Field
            name={name}>
            {({ field, form }) =>
            {
                return (
                    <Tooltip title={form.values[name]}>
                        <TextField
                            name={name}
                            id={name}
                            type={type}
                            label={label}
                            disabled={disabled}
                            error={form.errors[name] && form.touched[name] ?
                                true : false}
                            helperText={form.errors[name] && form.touched[name] ?
                                form.errors[name] : null}
                            variant="outlined"
                            sx={{mb:"5px",  }}
                            fullWidth
                            {...field}
                            {...rest}
                        />
                    </Tooltip>
                );
            }}
        </Field>
    );
}

export default Input;
