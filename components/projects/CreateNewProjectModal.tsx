/** @format */

import React, {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {checkDescription} from "../../logic/checkDescription";
import {checkName} from "../../logic/checkName";
import {idAdd} from "../../logic/idAdd";
import {useTypedSelector} from "../../src/hooks/useTypedSelector";
import {
    Modal,
    Box,
    FormControl,
    Input,
    Center,
    Button,
    Text,
    Heading,
    WarningOutlineIcon,
} from "native-base";

interface ICreateNewProjectModal {
    active: boolean;
    setActive: (active: boolean) => void;
}

export const CreateNewProjectModal: React.FC<ICreateNewProjectModal> = ({
    active,
    setActive,
}) => {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    // check condition for UNLOCK button "Creeat new project"
    const [valid, setValid] = useState<boolean>(false);
    //  all previous redux projects for CREATE NEW ID
    const dataProject = useTypedSelector((state) => state.projects);

    const dispatch = useDispatch();

    const inputName = (text: string) => {
        setName(() => text);
        //  Check correct name for projects and unlock button
        checkName(name) ? setValid(true) : setValid(false);
    };

    const inputDiscription = (text: string) => {
        setDescription(() => text);
    };

    const clearInput = () => {
        setDescription("");
        setName("");
        setValid(false);
    };

    const createNewProject = () => {
        dispatch({
            type: "ADD_PROJECT",
            payload: {
                id: idAdd(dataProject),
                title: name,
                description: checkDescription(description),
                status: 0,
                tasks: [],
            },
        });
        setActive(!active);
        clearInput();
    };

    return (
        <Modal
            isOpen={active}
            onClose={() => {
                setActive(false);
                clearInput();
            }}>
            <Modal.Content size={"sm"}>
                <Modal.CloseButton />
                <Modal.Header>
                    <Heading>Create new project</Heading>
                </Modal.Header>
                <Modal.Body style={{backgroundColor: "#fff"}}>
                    <FormControl>
                        <FormControl.Label>Project name</FormControl.Label>

                        <Input
                            size={"xl"}
                            placeholder='My project...'
                            value={name}
                            onChangeText={inputName}
                        />
                        {/* <FormControl.ErrorMessage
                            isInvalid={!valid}
                            leftIcon={<WarningOutlineIcon size='xs' />}>
                            Enter a project name
                        </FormControl.ErrorMessage> */}

                        <FormControl.Label>
                            Project description
                        </FormControl.Label>
                        <Input
                            size={"lg"}
                            style={{height: 80}}
                            placeholder='My project description...'
                            value={description}
                            onChangeText={inputDiscription}
                        />
                    </FormControl>
                </Modal.Body>
                <Modal.Footer>
                    <Button isDisabled={!valid} onPress={createNewProject}>
                        CREATE
                    </Button>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    );
};
