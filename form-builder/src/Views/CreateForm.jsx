import React, { Fragment } from "react"
import Form  from "../Components/CreateForm/Form"
import PageTitle from "../Components/PageTitle/PageTitle"

const CreateForm = (props) => {
    return (
        <Fragment>
            <PageTitle title="Create Form"></PageTitle>
            <Form action="edit"></Form>
        </Fragment>
    )
}

export default CreateForm