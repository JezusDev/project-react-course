import {render} from "react-dom";
import {App} from "app/App";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {ThemeProvider} from "app/providers/ThemeProvider";

render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)