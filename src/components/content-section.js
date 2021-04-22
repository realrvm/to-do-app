import React from "react";
import styled from "styled-components";

import { mq } from "../utils/styles";

const ContentSection = ({ children }) => <ContentDiv>{children}</ContentDiv>;

export default ContentSection;

/** ContentSection styled component **/
const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    ${mq[1]} {
        width: 100%;
        position: absolute;
        left: 0;
    }
`;
