import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import configureStore from './store';
import AppNavigation from "./components/appNavigation";

class App extends React.Component {
    render(){
        return (
            <Provider store={configureStore()}>
                <AppNavigation />
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));