import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <Conteiner>
                <Component />
                <Component />
                <Component />
            </Conteiner>
        </CollapseWrapper>
    );
};

const Component = ({ value }) => {
    return <div>{value} Компонент списка</div>;
};
Component.propTypes = {
    value: PropTypes.number
};
const Conteiner = ({ children }) => {
    return <>
        {React.Children.map(children, (child, idx) => {
            if (child.type === Component) {
                return React.cloneElement(child, { value: idx + 1 });
            }
            console.log(idx, child);
        })}
    </>;
};
Conteiner.propTypes = {
    children: PropTypes.array
};

export default ChildrenExercise;
