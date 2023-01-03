/** @format */

import React from "react";
import {StatusBar} from "expo-status-bar";
import {View} from "react-native";
import {ScreenProjects} from "./screens/ScreenProjects";
import {projectPage} from "../style/pageProgectStyle";

export const Main: React.FC = () => {
    return (
        <View style={projectPage.container}>
            <ScreenProjects />
            <StatusBar style='auto' />
        </View>
    );
};
