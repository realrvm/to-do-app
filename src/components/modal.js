import React, { useState } from "react";
import styled from "styled-components";
import Modal from "styled-react-modal";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";

import { mq, cross, colors, trash_delete, widths } from "../utils/styles";
import { options, IndicatorSeparator, Placeholder, IndicatorsContainer } from "../utils/store";
import useWindowWidth from "../utils/useWindowWidth";

registerLocale("ru", ru);

const ModalCreateTask = ({
    modalContent = {},
    toggleModal = (f) => f,
    isOpenModal,
    setTasksList = (f) => f,
    tasksList = [],
    currentId,
    deleteModalBin = (f) => f,
}) => {
    const [todoId, setTodoId] = useState(0);
    const [todoTitle, setTodoTitle] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [todoColor, setTodoColor] = useState("#000000");
    const [todoDescr, setTodoDescr] = useState("");
    const [todoPriority, setTodoPriority] = useState({ value: "high", label: "Высокий" });

    const { title, buttonContent, trash_bin } = modalContent;
    const { tabletPageWidth } = widths;
    const { width } = useWindowWidth();
    const currentIdValue = tasksList?.find((task) => task.id === currentId);

    const inputContent = {
        fontSize: `${tabletPageWidth < width ? 18 : 12}px`,
        fontWeight: 400,
        transform: "translateY(-16px)",
        color: `${colors.text}`,
    };

    const customStyles = {
        control: (base) => ({
            ...base,
            color: "red",
            border: 0,
            boxShadow: "none",
            outline: "none",
            height: 40,
            minWidth: 280,
        }),
        placeholder: (base) => ({
            ...base,
            ...inputContent,
        }),
        singleValue: (provided) => ({
            ...provided,
            ...inputContent,
        }),
        option: (provided) => ({
            ...provided,
            fontWeight: 400,
            fontSize: `${tabletPageWidth < width ? 18 : 12}px`,
        }),
    };

    const handleInput = (e) => {
        setTodoColor(e.target.value.toUpperCase());
    };

    const handleTodoTitle = (e) => {
        setTodoTitle(e.target.value);
    };

    const handleTodoDescr = (e) => {
        setTodoDescr(e.target.value);
    };

    const handleTodoPriority = (options) => {
        setTodoPriority(options);
    };

    const handleCreateTask = (e, id) => {
        e.preventDefault();
        const todoDate = startDate?.toString().replace(/(GMT.\w+).*$/, "");
        const state = {
            id: id || uuidv4().match(/.{0,8}/)[0],
            title: todoTitle,
            deadline: todoDate,
            tick: todoColor,
            priority: todoPriority?.label,
            descr: todoDescr,
            condition: false,
        };
        const newTasksList = tasksList.filter((task) => task.id !== id);
        setTasksList([...newTasksList, state]);
        toggleModal();
    };

    const beforeOpen = () => {
        setTodoId(currentIdValue?.id);
        setTodoTitle(currentIdValue?.title || "");
        setTodoPriority({ label: currentIdValue?.priority ? currentIdValue?.value : "Высокий" });
        setTodoDescr(currentIdValue?.descr || "");
        setTodoColor(currentIdValue?.tick || "#000000");
    };

    return (
        <StyledModal
            isOpen={isOpenModal}
            onBackgroundClick={toggleModal}
            onEscapeKeydown={toggleModal}
            beforeOpen={beforeOpen}
        >
            <StyledModalContainer onSubmit={(e) => handleCreateTask(e, todoId)}>
                <StyledModalTitle>
                    <span>{title}</span>
                    <button onClick={toggleModal}>{cross}</button>
                </StyledModalTitle>
                <StyledModalContent>
                    <Title>
                        <span>Название</span>
                        <input type="text" value={todoTitle || ""} onChange={handleTodoTitle} required />
                    </Title>
                    <Deadline>
                        <span>Дедлайн</span>
                        <StyledDatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            showTimeSelect
                            dateFormat="dd/MM/yyyy HH:mm"
                            locale="ru"
                        />
                    </Deadline>
                    <Priority>
                        <span>Приоритет</span>
                        <Select
                            onChange={handleTodoPriority}
                            components={{ IndicatorsContainer, IndicatorSeparator, Placeholder }}
                            placeholder={"Выбрать"}
                            styles={customStyles}
                            defaultValue={{ label: currentIdValue?.priority ? currentIdValue?.priority : "Высокий" }}
                            options={options}
                        />
                    </Priority>
                    <Tick>
                        <span>Метка</span>
                        <InputColor>
                            <InputColorWrapper>
                                <input type="color" onInput={(e) => handleInput(e)} name="strange_input" />
                            </InputColorWrapper>
                            <span>{todoColor}</span>
                        </InputColor>
                    </Tick>
                    <Descr>
                        <span>Описание</span>
                        <textarea value={todoDescr || ""} onChange={(e) => handleTodoDescr(e)} type="text" />
                    </Descr>
                </StyledModalContent>
                <StyledModalFooter trash={trash_bin ? 1 : 0}>
                    <Link onClick={() => deleteModalBin(currentIdValue?.id)} to={`/`}>
                        {trash_bin ? trash_delete : null}
                    </Link>
                    <div>
                        <button onClick={toggleModal}>Отменить</button>
                        <input type="submit" value={buttonContent} />
                    </div>
                </StyledModalFooter>
            </StyledModalContainer>
        </StyledModal>
    );
};

export default ModalCreateTask;

/** ModalCreateTask styled components **/
const StyledModal = Modal.styled`
    max-width: 1120px;
    width: 100%;
    border-radius: 20px;
    z-index:100;
    background-color: ${colors.background};
    ${mq[2]} {
        max-width: 984px;
    }
    ${mq[1]} {
        max-width: 96%;
        border-radius: 5px;
        transform: translateY(-30px);
    }
`;

const StyledModalContainer = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;
`;

const StyledModalTitle = styled.div`
    width: 94%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 42px;
    margin-top: 40px;
    margin-bottom: 10px;
    span {
        font-size: 36px;
        font-weight: 400;
        margin-left: auto;
        ${mq[1]} {
            font-size: 18px;
            transform: translateX(5px);
        }
    }
    button {
        margin-left: auto;
        margin-top: 10px;
        background-color: transparent;
        border: 0;
        overflow: hidden;
        outline: none;
        cursor: pointer;
    }
    ${mq[1]} {
        margin-top: 8px;
    }
`;

const StyledModalContent = styled.div`
    display: grid;
    grid-gap: 10px;
    width: 94%;
    margin-bottom: 40px;
    span {
        font-size: 14px;
        font-weight: 400;
        color: ${colors.textTasks};
        margin-bottom: 2px;
        ${mq[1]} {
            font-size: 10px;
        }
    }
    input {
        border: none;
        height: 40px;
        padding: 0 15px;
        outline: none;
        font-size: 18px;
        font-weight: 400;
        border-radius: 5px;
        color: ${colors.text};
        ${mq[1]} {
            font-size: 12px;
        }
    }
    grid-template-areas:
        "title title title"
        "deadline priority tick"
        "descr descr descr";
    ${mq[1]} {
        margin-bottom: 8px;
        grid-template-areas:
            "title"
            "deadline"
            "priority"
            "tick"
            "descr";
    }
`;

const Title = styled.div`
    grid-area: title;
    display: flex;
    flex-direction: column;
`;

const Deadline = styled(Title)`
    grid-area: deadline;
`;

const StyledDatePicker = styled(DatePicker)`
    width: 100%;
    border-radius: 5px;
`;

const Priority = styled(Title)`
    grid-area: priority;
`;

const Tick = styled(Title)`
    grid-area: tick;
`;

const Descr = styled(Title)`
    grid-area: descr;
    border-radius: 5px;
    textarea {
        resize: none;
        height: 105px;
        border-radius: 5px;
        outline: none;
        border: none;
        padding: 15px;
        font-size: 18px;
        font-weight: 400;
        color: ${colors.text};
        ${mq[1]} {
            font-size: 12px;
        }
    }
`;

const StyledModalFooter = styled.div`
    width: 94%;
    display: flex;
    justify-content: ${(props) => (props.trash ? "space-between" : "flex-end")};
    height: 70px;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    border-top: 1px solid ${colors.primary};
    svg {
        cursor: pointer;
    }
    button:first-child {
        border: none;
        margin-right: 20px;
    }
    button,
    input {
        min-width: 75px;
        height: 30px;
        background-color: inherit;
        border: 1px solid ${colors.textSecondary};
        border-radius: 5px;
        outline: none;
        cursor: pointer;
    }
    ${mq[1]} {
        height: 40px;
    }
`;

const InputColor = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    min-width: 290px;
    background-color: white;
    border-radius: 5px;
    span {
        margin-left: 5%;
    }
`;

const InputColorWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    overflow: hidden;
    border-radius: 50%;
    margin-left: 5%;
    input[type="color"] {
        padding: 0;
        border: 0;
        min-width: 50px;
        min-height: 50px;
        cursor: pointer;
        border-radius: 20px;
    }
`;
