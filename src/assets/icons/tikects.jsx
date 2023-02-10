import React from 'react';

// import { Container } from './styles';

const IconTiket = (props) =>  
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        xmlSpace="preserve"
        {...props}
    >
        <path d="M4 3c-1.1 0-2 .9-2 2v3c1.1 0 2 .9 2 2s-.9 2-2 2v3c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3c-1.1 0-2-.9-2-2s.9-2 2-2V5c0-1.1-.9-2-2-2H4zm.1 15L19 21.6c1.1.3 2.1-.4 2.4-1.5L22 18H4.1z" />
        <path
            style={{
                fill: "none",
            }}
            d="M0 0h24v24H0z"
        />
    </svg>

export default IconTiket;