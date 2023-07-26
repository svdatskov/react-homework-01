import React from "react";

const PersonData = ({ hiding }) => {
    const data = {
        name: 'Stepan',
        age: 25
    };

    return <React.Fragment>
        { hiding ? <p>Name: {data.name}, age: {data.age}</p> : null}
    </React.Fragment>
}

export default PersonData;