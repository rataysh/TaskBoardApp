/** @format */

// import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ScreenProjects} from "../screens/ScreenProjects";
import {ScreenTasks} from "../screens/ScreenTasks";
import {createStackNavigator} from "@react-navigation/stack";

export type RootStackParams = {
    Projects: any;
    Tasks: any;
};

const MyNavigationStack = createNativeStackNavigator<RootStackParams>();

const MyStackNavigator = () => {
    return (
        <NavigationContainer>
            <MyNavigationStack.Navigator initialRouteName='Projects'>
                <MyNavigationStack.Screen
                    name='Projects'
                    component={ScreenProjects}
                    options={{title: "All projects"}}
                />
                <MyNavigationStack.Screen
                    name='Tasks'
                    component={ScreenTasks}
                    // options={{headerShown: false}}
                />
            </MyNavigationStack.Navigator>
        </NavigationContainer>
    );
};

export default MyStackNavigator;
