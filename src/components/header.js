import React from "react";
import styled from "styled-components";

import Hamburger from "hamburger-react";
import { mq, colors, plus, plus_sm } from "../utils/styles";

const Header = ({ setOpen, width, tabletPageWidth, getCurrentId = (f) => f }) => (
    <HeaderWrapper>
        <HeaderContainer>
            <HamburgerContainer>
                {width < tabletPageWidth ? (
                    <Hamburger
                        color={`#FFFFFF`}
                        size={24}
                        onToggle={(toggled) => {
                            toggled ? setOpen(true) : setOpen(false);
                        }}
                    />
                ) : null}
                <Title>To-Do List</Title>
            </HamburgerContainer>
            <StyledButton onClick={() => getCurrentId(0)}>{width > tabletPageWidth ? plus : plus_sm}</StyledButton>
        </HeaderContainer>
    </HeaderWrapper>
);

export default Header;

/** Header styled components **/
const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 75px;
    background-color: ${colors.header};
    z-index: 4;
    ${mq[1]} {
        height: 40px;
    }
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    width: 100%;
    padding: 0 20px;
`;

const HamburgerContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Title = styled.h1`
    font-weight: 900;
    font-size: 48px;
    line-height: 56.25px;
    margin-left: 5px;
    color: ${colors.headerTitle};
    text-shadow: 3px 5px 10px rgba(0, 0, 0, 0.1);
    ${mq[1]} {
        font-size: 24px;
    }
`;

const StyledButton = styled.button`
    border-radius: 50%;
    outline: none;
    border: none;
    width: 50px;
    height: 50px;
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px #00000040;
    &::active,
    &::focus {
        outline: none;
    }
    ${mq[1]} {
        height: 30px;
        width: 30px;
    }
`;
