import React from 'react';
import { MainTitle, PageStyle, IconBox, Title } from './PageTitle.style'

import { FaWpforms } from 'react-icons/fa'
import { IconContext } from "react-icons";

const PageTitle = (props) => {
    return (
        <PageStyle>
            <MainTitle>
                <IconBox>
                    <IconContext.Provider value={{ color: "grey", size: "2em", className: "icon" }}>
                        <div>
                            <FaWpforms />
                        </div>
                    </IconContext.Provider>
                </IconBox>
                <Title>{props.title}</Title>
            </MainTitle>
        </PageStyle>
    )

}

export default PageTitle;
