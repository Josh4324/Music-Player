import React from 'react';
import { Footer, Header } from "../common"

export const Layout = (props) => {
    return (
        <>
            <Header />
                <div className="app-content">{props.children}</div>
            <Footer />
            
        </>
    );
}


