/** @format */

import {Provider as PaperProvider} from "react-native-paper";
import {persistor, store} from "./src/store";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
// import {Main} from "./src/Main";
import {NativeBaseProvider} from "native-base";
import MyStackNavigator from "./src/navigation/ScreenRoots";

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NativeBaseProvider>
                    <PaperProvider>
                        <MyStackNavigator />
                    </PaperProvider>
                </NativeBaseProvider>
            </PersistGate>
        </Provider>
    );
}
