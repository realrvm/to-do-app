import { useState } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import { ModalProvider } from "styled-react-modal";

import { Header, LeftNavBar, ModalCreateTask } from "../components";
import { Tasks, TaskDetail } from "../pages";
import useWindowWidth from "../utils/useWindowWidth";
import { widths } from "../utils/styles";
import { LeftNavBarTasksList, initialModalState, changedModalState } from "../utils/store";

function App() {
    const { width } = useWindowWidth();
    const { tabletPageWidth } = widths;

    const [isOpen, setOpen] = useState(width > tabletPageWidth ? true : false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [modalContent, setModalContent] = useState(initialModalState);
    const [tasksList, setTasksList] = useState([]);
    const [currentId, setCurrentId] = useState("");
    const [tasks, setTask] = useState(LeftNavBarTasksList);

    function toggleModal(id) {
        setIsOpenModal(!isOpenModal);
        setModalContent(id ? changedModalState : initialModalState);
    }

    const getCurrentId = (id) => {
        setCurrentId(id);
        toggleModal(id);
    };

    const deleteModalBin = (id) => {
        const newTasksList = tasksList?.filter((task) => task.id !== id);
        setTasksList(newTasksList);
        toggleModal();
    };

    const deleteTask = ({ id, goBack }) => {
        const newTasksList = tasksList?.filter((task) => task.id !== id);
        setTasksList(newTasksList);
        goBack();
    };

    const changeCondition = (id) => {
        const newCondition = tasksList?.find((task) => task.id === id);
        const newConditionObj = { ...newCondition, condition: !newCondition.condition };
        const newTasksList = tasksList?.filter((task) => task.id !== id);
        setTasksList([...newTasksList, newConditionObj]);
    };

    const headerProps = { setOpen, width, tabletPageWidth, getCurrentId };

    return (
        <ModalProvider>
            <Header {...headerProps} />
            <ModalCreateTask
                toggleModal={toggleModal}
                isOpenModal={isOpenModal}
                modalContent={modalContent}
                setTasksList={setTasksList}
                tasksList={tasksList}
                currentId={currentId}
                deleteTask={deleteTask}
                deleteModalBin={deleteModalBin}
            />
            <AppWrapper>
                {isOpen ? <LeftNavBar tasks={tasks} setTask={setTask} /> : null}
                <Switch>
                    <Route
                        exact
                        path={`/`}
                        render={(props) => (
                            <Tasks
                                {...props}
                                tasksList={tasksList}
                                getCurrentId={getCurrentId}
                                toggleModal={toggleModal}
                                tasksConditions={tasks}
                            />
                        )}
                    />
                    <Route
                        path={`/:id`}
                        render={(props) => (
                            <TaskDetail
                                {...props}
                                width={width}
                                widths={widths}
                                deleteTask={deleteTask}
                                tasksList={tasksList}
                                getCurrentId={getCurrentId}
                                changeCondition={changeCondition}
                            />
                        )}
                    />
                </Switch>
            </AppWrapper>
        </ModalProvider>
    );
}

export default App;

/** App styled components **/
const AppWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
