import React from "react";
import { useField } from "formik";

export default function FormikHOC(IncomingComponent){
    function OutgoingComponent({name,...rest}){
        const [data,meta]= useField(name);
        const {value,onchange,onBlur}= data;
        const {error,touched}= meta;

        return (
        <IncomingComponent
            {...rest}
            {...data}
            error={error}
            touched={touched}
        />
        );
    }
    return OutgoingComponent;
}