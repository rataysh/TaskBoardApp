/** @format */

import React from "react";
import {StatusBar} from "expo-status-bar";
import {View} from "react-native";
import {PageProjects} from "../pages/PageProjects";
import {projectPage} from "../style/pageProgectStyle";

export const Main: React.FC = () => {
    return (
        <View style={projectPage.container}>
            <PageProjects />
            <StatusBar style='auto' />
        </View>
    );
};
