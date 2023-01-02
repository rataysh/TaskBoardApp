/** @format */

import React from "react";
// import ReactDOM from "react-dom/client";
// import {Provider} from "react-redux";
// import {BrowserRouter} from "react-router-dom";
import {AppRegistry} from "react-native";
import App from "./App";
import {Provider as PaperProvider} from "react-native-paper";
// import {persistor, store} from "./store";
// import {PersistGate} from "redux-persist/integration/react";




export default function Main() {
    return (
        <PaperProvider>
            <App />
        </PaperProvider>
    );
}



// // const root = ReactDOM.createRoot(
// //     document.getElementById("root") as HTMLElement
// // );
// // root.render(
//     // <React.StrictMode>
//     // <Provider store={store}>
//     //     <PersistGate loading={null} persistor={persistor}>
//     //         <BrowserRouter>
//     // <PaperProvider>
//         {/* <App /> */}
//     {/* </PaperProvider> */}
//     //         </BrowserRouter>
//     //     </PersistGate>
//     // </Provider>
//     // </React.StrictMode>
// // );
