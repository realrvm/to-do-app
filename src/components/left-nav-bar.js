import React, { useState } from "react";
import styled from "styled-components";

import { mq, colors, down_arrow, right_arrow } from "../utils/styles";

const LeftNavBar = ({ tasks, setTask }) => {
    const [priority, setPriority] = useState(true);

    const handlePriority = () => {
        setPriority(!priority);
    };

    const handleChange = (e) => {
        const checkedTask = tasks.map((task) => {
            return task.id === parseInt(e.target.value) ? { ...task, clicked: true } : { ...task, clicked: false };
        });
        setTask(checkedTask);
    };

    return (
        <LeftNavBarWrapper>
            <LeftNavBarContainer>
                <LeftNavBarTasks>
                    <StyledUl onChange={(e) => handleChange(e)}>
                        {tasks
                            .filter((task) => task.id < 4)
                            .map((task) => {
                                const { id, clicked, title, icon } = task;
                                return (
                                    <StyledLi clicked={clicked ? 1 : 0} key={id}>
                                        <input type="radio" name="tasks" value={id} id={id} />
                                        <label htmlFor={id}>
                                            {icon} <span>{title}</span>
                                        </label>
                                    </StyledLi>
                                );
                            })}
                    </StyledUl>
                </LeftNavBarTasks>
                <LeftNavBarPriority>
                    <LeftNavBarPriorityTitle onClick={handlePriority}>
                        {priority ? down_arrow : right_arrow}
                        <span>Приоритет</span>
                    </LeftNavBarPriorityTitle>
                    <LeftNavBarPriorityList>
                        <StyledUl onChange={(e) => handleChange(e)}>
                            {priority
                                ? tasks
                                      .filter((task) => task.id > 3)
                                      .map((task) => {
                                          const { id, clicked, title } = task;
                                          return (
                                              <StyledLi clicked={clicked ? 1 : 0} key={id}>
                                                  <input type="radio" name="tasks" value={id} id={id} />
                                                  <label htmlFor={id}>
                                                      <span>{title}</span>
                                                  </label>
                                              </StyledLi>
                                          );
                                      })
                                : null}
                        </StyledUl>
                    </LeftNavBarPriorityList>
                </LeftNavBarPriority>
            </LeftNavBarContainer>
        </LeftNavBarWrapper>
    );
};

export default LeftNavBar;

/** LeftNavBar styled components **/
const LeftNavBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
    flex-shrink: 0;
    align-items: flex-end;
    background-color: ${colors.secondary};
    height: 100vh;
    position: relative;
    z-index: 5;
    ${mq[1]} {
        width: 260px;
    }
`;

const LeftNavBarContainer = styled.div`
    max-width: 310px;
    width: 100%;
    ${mq[1]} {
        width: 250px;
    }
`;

const LeftNavBarTasks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
`;

const StyledUl = styled.ul`
    list-style: none;
    width: 100%;
    transform: translateX(-20px);
    input[type="radio"] {
        opacity: 0;
        width: 0;
        height: 0;
    }
    svg {
        margin-top: 5px;
    }
    label {
        cursor: pointer;
    }
    span {
        display: inline-block;
        margin-left: 10px;
        transform: translateY(-5px);
    }
`;

const StyledLi = styled.li`
    background-color: ${(props) => (props.clicked ? colors.headerTitle : null)};
`;

const LeftNavBarPriority = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const LeftNavBarPriorityTitle = styled.div`
    display: flex;
    margin-left: 45px;
    overflow: hidden;
    border-bottom: 1px solid ${colors.accent};
    padding: 20px 0;
    cursor: pointer;
    span {
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        margin-left: 18px;
    }
`;

const LeftNavBarPriorityList = styled.div`
    margin-left: 28px;
    li {
        padding-top: 10px;
        span {
            font-weight: 400;
        }
    }
`;
