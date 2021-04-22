import { components } from "react-select";

import { sample, exlude, elipse } from "./styles";

/** Left Nav Bar store **/
export const LeftNavBarTasksList = [
    { id: 1, title: "Новые", icon: sample, clicked: false },
    { id: 2, title: "Выполненные", icon: exlude, clicked: false },
    { id: 3, title: "Все", icon: elipse, clicked: true },
    { id: 4, title: "Высокий", clicked: false },
    { id: 5, title: "Средний", clicked: false },
    { id: 6, title: "Низкий", clicked: false },
];

/** App component store **/
export const initialModalState = {
    title: "Создание задачи",
    buttonContent: "Создать",
    trash_bin: false,
};

export const changedModalState = {
    title: "Редактирование задачи",
    buttonContent: "Сохранить",
    trash_bin: true,
};

/** Modal component store **/
export const options = [
    { value: "high", label: "Высокий" },
    { value: "medium", label: "Средний" },
    { value: "low", label: "Низкий" },
];

export const IndicatorSeparator = ({ innerProps }) => {
    return <span style={{ width: 0, height: 0 }} {...innerProps} />;
};

export const Placeholder = (props) => {
    return <components.Placeholder {...props} />;
};

export const IndicatorsContainer = (props) => {
    return (
        <div style={{ transform: "translateY(4px)" }}>
            <components.IndicatorsContainer {...props} />;
        </div>
    );
};
