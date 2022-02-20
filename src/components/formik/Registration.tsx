import * as React from "react";
import { IValues } from '../../interface'
import { Form, Formik, Field } from "formik"
import { MyFields } from "./MyFields";
import { Button } from "@material-ui/core";

interface Props {
    onSubmit: (values: IValues) => void
}

export const Registration: React.FC<Props>= ({onSubmit}) => {
    return (
        <Formik
        initialValues={{ first_name: "", last_name: "", email: "", password: "" }}
        onSubmit={values => {onSubmit(values)}}  
        >
            <Form>
                <div>
                    <Field
                        name="first_name"
                        placeholder="Firstname"
                        component={MyFields}
                    />
                </div>
                 <div>
                    <Field
                        name="last_name"
                        placeholder="Lastname"
                        component={MyFields}
                    />
                </div>
                <div>
                    <Field
                        name="email"
                        placeholder="email"
                        component={MyFields}
                    />
                </div>
                <div>
                    <Field
                        name="password"
                        placeholder="create a password"
                        component={MyFields}
                    />
                </div>
                <Button type="submit">submit</Button>
               
            </Form>
        </Formik>
    )
}

