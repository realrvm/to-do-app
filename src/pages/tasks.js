import React from "react";
import styled from "styled-components";

import { mq, colors } from "../utils/styles";
import { Task, ContentSection } from "../components";

const Tasks = ({ toggleModal = (f) => f, tasksList = [], getCurrentId = (f) => f, tasksConditions = [] }) => {
    const choicedCondition = tasksConditions?.find((condition) => condition.clicked);

    const getTasksList = () => {
        if (choicedCondition?.id === 1) return tasksList?.filter((task) => !task.condition);
        if (choicedCondition?.id === 2) return tasksList?.filter((task) => task.condition);
        if (choicedCondition?.id === 3) return tasksList;
        if (choicedCondition?.id === 4) return tasksList?.filter((task) => task.priority === "Высокий");
        if (choicedCondition?.id === 5) return tasksList?.filter((task) => task.priority === "Средний");
        if (choicedCondition?.id === 6) return tasksList?.filter((task) => task.priority === "Низкий");
    };

    return (
        <ContentSection>
            <TasksContent>
                <span>Название</span>
                <span>Дедлайн</span>
                <span>Приоритет</span>
                <span>{``}</span>
            </TasksContent>
            {getTasksList().map((task) =>
                tasksList.length ? (
                    <Task key={task?.id} task={task} toggleModal={toggleModal} getCurrentId={getCurrentId} />
                ) : null
            )}
        </ContentSection>
    );
};

export default Tasks;

/** Tasks styled components **/
const TasksContent = styled.div`
    display: grid;
    height: 81px;
    width: 96%;
    border-bottom: 1px solid ${colors.accent};
    grid-template-columns: 3fr 1fr 1fr minmax(20px, 3%);
    span {
        display: grid;
        align-items: center;
        justify-items: start;
        font-weight: 500;
        font-size: 18px;
        margin-top: 20px;
        color: ${colors.textTasks};
    }
    span:nth-child(1) {
        margin-left: 5%;
    }
    ${mq[1]} {
        height: 37px;
        span {
            font-size: 12px;
            margin-top: 0;
        }
    }
`;
