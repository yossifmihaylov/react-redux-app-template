import React from 'react';
import { hot } from "react-hot-loader";
import LandingPageLayout from '../layouts/landingPageLayout';

class LandingPage extends React.Component {
    render(){
        return (
            <LandingPageLayout />
        )
    }
}

export default hot(module)(LandingPage);