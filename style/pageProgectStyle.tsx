/** @format */

import {StyleSheet} from "react-native";
import {backgroundMain, darkerColor, lightColor} from "./variables";

export const projectPage = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: backgroundMain,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
    },
    projectList: {width: "90%", height: "100%"},
    projectBox: {
        paddingBottom: 12,
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderColor: lightColor,
        borderRadius: 25,
    },
    addButton: {
        position: "absolute",
        margin: 16,
        right: 0,
        bottom: 0,
        borderRadius: 100,
    },
    // header: {
    //     display: "flex",
    //     flexDirection: "column",
    //     paddingTop: "3rem",
    //     paddingBottom: "1rem",
    //     fontSize: "xx-large",
    //     textAlign: "center",
    //     color: "white",
    //     borderBottom: "1px solid white",
    // },
    // description: {marginTop: "2rem", color: "$backBoard", fontSize: "x-large"},
});
