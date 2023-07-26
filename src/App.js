import './App.css';
import React, {useState} from "react";
import PersonData from "./PersonData";

const App = () => {
    const [hiding, setHiding] = useState(false);

    const hidingHandler = () => {
        setHiding(!hiding)
    }

    return (
        <React.Fragment>
            <PersonData hiding={hiding} />
            <button onClick={hidingHandler}>{ hiding ? 'Hide' : 'Show' }</button>
        </React.Fragment>
    );
}

export default App;
