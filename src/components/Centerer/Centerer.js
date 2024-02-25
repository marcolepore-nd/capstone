import React from "react";
import "./Centerer.scss";

const Centerer = (props) => {

    const classComposer = () => {
        let className = 'centerer'
        if (!!props.row || !props.column) {
            className += ' row';
        } else if (!!props.column) {
            className += ' column';
        }
        return className;
    }

    return (
        <div className={classComposer()}>
            {props.children}
        </div>
    );
}

export default Centerer;