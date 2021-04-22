import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { mq, colors, pen, pen_sm, exlude, exlude_sm, sample, sample_sm, widths } from "../utils/styles";
import useWindowWidth from "../utils/useWindowWidth";

const Task = ({ task = {}, getCurrentId = (f) => f }) => {
    const { id, title, descr, deadline, priority, tick, condition } = task;
    const { tabletPageWidth, desktopPageWidth } = widths;
    const { width } = useWindowWidth();

    const changeDescrLength = (descr, width, ...wrapper) => {
        if (descr?.length > 18 && width < tabletPageWidth) return `${descr.slice(0, 18)}...`;
        if (descr?.length > 40 && width > tabletPageWidth && width < desktopPageWidth)
            return `${descr.slice(0, 40)}...`;
        if (descr?.length > 53 && width > desktopPageWidth) return `${descr.slice(0, 53)}...`;
        return descr;
    };

    return (
        <TaskWrapper>
            <Title to={`/${id}`}>
                <TitleIcon>
                    {condition
                        ? width > tabletPageWidth
                            ? exlude
                            : exlude_sm
                        : width > tabletPageWidth
                        ? sample
                        : sample_sm}
                    <TitleIconTick tick={tick}></TitleIconTick>
                </TitleIcon>
                <TitleDescr>
                    <span>{title}</span>
                    <span>{changeDescrLength(descr, width, tabletPageWidth, desktopPageWidth)}</span>
                </TitleDescr>
            </Title>
            <Deadline>
                <span>{deadline?.split(" ").slice(0, 4).join(" ")}</span>
                <span>{deadline?.split(" ").slice(-2)[0].split(":").slice(0, 2).join(":")}</span>
            </Deadline>
            <Priority>
                <span>{priority}</span>
            </Priority>
            <Edit onClick={() => getCurrentId(id)}>{width > tabletPageWidth ? pen : pen_sm}</Edit>
        </TaskWrapper>
    );
};

export default Task;

/** Task styled components **/
const TaskWrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr 1fr minmax(20px, 3%);
    width: 96%;
    height: 87px;
    border-bottom: 1px solid ${colors.accent};
    ${mq[1]} {
        height: 48px;
    }
`;

const Title = styled(Link)`
    color: inherit;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const TitleIcon = styled.div`
    display: flex;
    flex-direction: column;
    ${mq[1]} {
        svg {
            margin-left: 2px;
        }
    }
`;

const TitleIconTick = styled.div`
    width: 24px;
    height: 8px;
    background-color: ${(props) => props.tick};
    border-radius: 4px;
    margin-top: 3px;
`;

const TitleDescr = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 2%;
    span:nth-child(1) {
        font-size: 18px;
        color: ${colors.textTasks};
        font-weight: 500;
        text-decoration: underline;
        line-height: 21px;
        ${mq[1]} {
            font-size: 12px;
        }
    }
    span:nth-child(2) {
        font-size: 14px;
        color: ${colors.textSecondary};
        font-weight: 400;
        ${mq[1]} {
            font-size: 10px;
        }
    }
`;

const Deadline = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    span:nth-child(1) {
        font-size: 18px;
        color: ${colors.textTasks};
        font-weight: 500;
        ${mq[1]} {
            font-size: 10px;
        }
    }
    span:nth-child(2) {
        font-size: 14px;
        color: ${colors.textSecondary};
        font-weight: 400;
        ${mq[1]} {
            font-size: 10px;
        }
    }
`;

const Priority = styled.div`
    display: grid;
    align-items: center;
    justify-content: start;
    color: ${colors.textTasks};
    font-size: 18px;
    ${mq[1]} {
        font-size: 12px;
    }
`;

const Edit = styled.div`
    display: grid;
    align-items: center;
    justify-content: start;
`;
