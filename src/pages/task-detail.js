import React from "react";
import styled from "styled-components";

import { mq, left_arrow, exlude, trash_bin, pen, sample, colors } from "../utils/styles";
import { ContentSection } from "../components";

const TaskDetail = ({
    width,
    widths,
    deleteTask = (f) => f,
    getCurrentId = (f) => f,
    changeCondition = (f) => f,
    history,
    match,
    tasksList = [],
}) => {
    const id = match.params.id;
    const goBack = () => history.goBack();
    const taskId = tasksList?.find((task) => task.id === id);
    const { tabletPageWidth, desktopPageWidth } = widths;

    return (
        <ContentSection>
            <TaskDetailContent>
                <Title onClick={goBack}>
                    {left_arrow} <div></div>
                    <span>{taskId?.title || ""}</span>
                </Title>
                <Icons>
                    <button onClick={() => changeCondition(id)}>
                        {taskId?.condition ? sample : exlude}
                        {width > desktopPageWidth ? (
                            taskId?.condition ? (
                                <span>Новая</span>
                            ) : (
                                <span>Выполнена</span>
                            )
                        ) : null}
                    </button>
                    <button onClick={() => deleteTask({id, goBack})}>
                        {trash_bin}
                        {width > desktopPageWidth ? <span>Удалить</span> : null}
                    </button>
                    <button onClick={() => getCurrentId(id)}>
                        {pen}
                        {width > desktopPageWidth ? <span>Редактировать</span> : null}
                    </button>
                </Icons>
            </TaskDetailContent>
            <TaskDetailBar>
                <TaskDetailBarElement>
                    {width < tabletPageWidth ? (taskId?.condition ? exlude : sample) : null}
                    <div>
                        <span>Статус задачи</span>
                        {taskId?.condition ? <span>Выполнена</span> : <span>Новая</span>}
                    </div>
                </TaskDetailBarElement>
                <TaskDetailBarElement>
                    <span>Приоритет</span>
                    <span>{taskId?.priority || `Высокий`}</span>
                </TaskDetailBarElement>
                <TaskDetailBarElement>
                    <span>Дедлайн</span>
                    <span>{taskId?.deadline || ""}</span>
                </TaskDetailBarElement>
                <TaskDetailBarElement>
                    <span>Метка</span>
                    <TaskDetailBarElementDiv tick={taskId?.tick || "#000000"}></TaskDetailBarElementDiv>
                </TaskDetailBarElement>
            </TaskDetailBar>
            <TaskDetailText>{taskId?.descr || ""}</TaskDetailText>
        </ContentSection>
    );
};

export default TaskDetail;

/** TaskDetail styled components **/
const TaskDetailContent = styled.div`
    width: 96%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    border-bottom: 1px solid ${colors.accent};
    ${mq[1]} {
        height: 60px;
        margin-top: 0;
    }
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    div {
        height: 30px;
        width: 1px;
        background-color: ${colors.accent};
        margin-left: 10px;
    }
    span {
        font-size: 24px;
        font-weight: 500;
        margin-left: 10px;
        ${mq[1]} {
            font-size: 12px;
            margin-left: 2px;
        }
    }
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    button {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 145px;
        height: 40px;
        background-color: transparent;
        outline: none;
        border: 1px solid ${colors.textSecondary};
        border-radius: 4px;
        cursor: pointer;
        span {
            font-size: 14px;
            font-weight: 400;
        }
        ${mq[2]} {
            width: 40px;
        }
    }
    button + button {
        margin-left: 10px;
        ${mq[1]} {
            margin-left: 5px;
        }
    }
`;

const TaskDetailBar = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 96%;
    border-radius: 10px;
    background-color: white;
    ${mq[1]} {
        width: 100%;
        border-radius: 0;
    }
`;

const TaskDetailBarElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 40px;
    position: relative;
    min-width: 200px;
    &:first-child {
        flex-direction: row;
        align-items: center;
        div {
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-left: 5px;
        }
    }
    @media (min-width: 1024px) {
        &:not(:first-child):before {
            content: "";
            position: absolute;
            top: 25%;
            left: 0;
            width: 1px;
            height: 40px;
            background-color: ${colors.accent};
        }
    }
    span:nth-child(1) {
        font-weight: 400;
        font-size: 14px;
        color: ${colors.textSecondary};
        margin-bottom: 5px;
        ${mq[1]} {
            white-space: nowrap;
            font-size: 10px;

            margin-bottom: 1px;
        }
    }
    span:nth-child(2) {
        font-weight: 400;
        font-size: 18px;
        color: ${colors.text};
        ${mq[1]} {
            font-size: 12px;
            white-space: nowrap;
        }
    }
    ${mq[1]} {
        padding: 8px 10%;
        width: 50%;
        min-width: 150px;
        &:nth-child(-n + 2) {
            border-bottom: 1px solid ${colors.background};
        }
    }
`;

const TaskDetailBarElementDiv = styled.div`
    width: 42px;
    height: 21px;
    border-radius: 5px;
    background-color: ${(props) => props.tick};
    ${mq[1]} {
        width: 30px;
        height: 10px;
    }
`;

const TaskDetailText = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: ${colors.textTasks};
    padding: 2%;
    align-self: flex-start;
    ${mq[1]} {
        font-size: 12px;
    }
`;
