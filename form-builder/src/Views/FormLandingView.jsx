import React, { Fragment } from "react";
import PageTitle from "../Components/PageTitle/PageTitle";
import FormTable from "../Components/FormTable/FormTable";

const FormLandingView = (props) => {
    return (
        <Fragment>

            <PageTitle title="Forms"/>
            <FormTable {...props}/>
        </Fragment>
    )
}

export default FormLandingView