/** @format */

import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import {PageProjects} from "./pages/PageProjects";
import {projectPage} from "./style/pageProgectStyle";

export default function App() {
    return (
        <View style={projectPage.container}>
            <PageProjects />
            <StatusBar style='auto' />
        </View>
    );
}
