/** @format */

import {StyleSheet} from "react-native";
import {backgroundMain} from "./variables";

export const projectPage = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundMain,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
    },
    projectBox: {
        marginTop: "5%",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        flexWrap: "wrap",
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
