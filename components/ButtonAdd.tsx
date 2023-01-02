/** @format */

import React from "react";
import {FAB} from "react-native-paper";
import {projectPage} from "../style/pageProgectStyle";

interface ButtonText {
    text: string;
    setActive: (active: boolean) => void;
}

export const ButtonAdd: React.FC<ButtonText> = ({text, setActive}) => {
    return (
        <>
            <FAB
                icon='plus'
                style={projectPage.addButton}
                onPress={() => setActive(true)}
            />
        </>
    );
};
