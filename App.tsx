/** @format */

import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import {PageProjects} from "./pages/PageProjects";
import {projectPage} from "./style/pageProgectStyle";

export default function App() {
    return (
        <View style={projectPage.container}>
            {/* <Text>Open up App.tsx to start working on your app!!!!</Text> */}
            <PageProjects />
            <StatusBar style='auto' />
        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//     },
// });
