/** @format */

import React from "react";
import {Button} from "react-native-paper";
import {Text} from "react-native";
import {darkerColor} from "../style/variables";

interface ButtonText {
    text: string;
    setActive: (active: boolean) => void;
}

export const ButtonAdd: React.FC<ButtonText> = ({text, setActive}) => {
    return (
        <>
            <Button
                icon='plus'
                mode='contained'
                buttonColor={darkerColor}
                onPress={() => setActive(true)}>
                <Text>{text}</Text>
            </Button>
        </>
    );
};
