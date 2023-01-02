/** @format */

import {Provider as PaperProvider} from "react-native-paper";
import {persistor, store} from "./src/store";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import {Main} from "./src/Main";

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <PaperProvider>
                    <Main />
                </PaperProvider>
            </PersistGate>
        </Provider>
    );
}
