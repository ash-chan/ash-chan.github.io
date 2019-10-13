import React from 'react';

import './BackPanel.css'
import {Heading} from '../config/Typography'

function BackPanel(props) {
    return (
        <div className="back-panel">
            <Heading>{props.title}</Heading>
            {props.children}
        </div>

    );
};
export default BackPanel;