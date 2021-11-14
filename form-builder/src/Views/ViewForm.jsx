import axios from "axios"
import React, { Fragment, useEffect } from "react"
import Form  from "../Components/CreateForm/Form"
import PageTitle from "../Components/PageTitle/PageTitle"

const FormView = (props) => {
    const {match} = props;
    const id = match.params.id

    return (
        <div style={{padding : "50px"}}>
             <PageTitle title="View Form"></PageTitle>
            <Form action="view" id={id}></Form>
        </div>
    )
}

export default FormView