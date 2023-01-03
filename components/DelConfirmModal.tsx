/** @format */

import {Button, Flex, Heading, Modal} from "native-base";
import React from "react";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../src/hooks/useTypedSelector";
import {IProject} from "../src/interface/IProject";

interface IDelConfirmModal {
    delItem: IProject | false;
    active: boolean;
    setActive: (active: boolean) => void;
}

export const DelConfirmModal: React.FC<IDelConfirmModal> = ({
    delItem,
    active,
    setActive,
}) => {
    const dispatch = useDispatch();
    const idAndTask = useTypedSelector((state) => state.idForDelTask);

    const projectDelite = () => {
        dispatch({
            type: "DELETE_PROJECT",
            payload: delItem,
        });
        closeModal();
    };

    const taskDelite = () => {
        dispatch({
            type: "DELETE_TASK",
            payload: {
                projectId: idAndTask.projId,
                task: idAndTask.task,
            },
        });
        dispatch({
            type: "DEL_TASK_RESET_ID_AND_TASK",
        });
        closeModal();
    };

    const closeModal = () => {
        dispatch({
            type: "POP_UP_CLOSE_DEL_TASK",
        });
        delItem === false &&
            dispatch({
                type: "DEL_TASK_RESET_ID_AND_TASK",
            });
        setActive(!active);
    };

    return (
        <>
            <Modal
                isOpen={active}
                onClose={() => {
                    closeModal();
                }}>
                <Modal.Content
                    size={"xs"}
                    style={{display: "flex", width: "90%", height: 180}}>
                    <Modal.CloseButton />
                    <Modal.Header>
                        <Heading style={{textAlign: "center"}}>
                            Are you sure you want to delete this{" "}
                            {delItem === false ? "task" : "project"}?
                        </Heading>
                    </Modal.Header>
                    <Modal.Body style={{backgroundColor: "#fff"}}>
                        <Flex direction='row' justify='space-around'>
                            <Button
                                onPress={() => closeModal()}
                                style={{width: "45%"}}>
                                No
                            </Button>
                            <Button
                                style={{width: "45%"}}
                                colorScheme='secondary'
                                onPress={() => {
                                    delItem === false
                                        ? taskDelite()
                                        : projectDelite();
                                }}>
                                Yes
                            </Button>
                        </Flex>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
            {/* <Modal.Footer> */}
            {/* <Button isDisabled={!valid} onPress={createNewProject}>
                        CREATE
                    </Button> */}
            {/* </Modal.Footer> */}
            {/* <span onClick={() => closeModal()}>
                            <GrClose />
                        </span>

                        <p>
                            Are you sure you want to delete this{" "}
                            {delItem === false ? "task" : "project"}?
                        </p>

                        <div className='buttonBlock'>
                            <button
                                onClick={() => closeModal()}
                                className='effect'>
                                No
                            </button>
                            <button
                                onClick={() => {
                                    delItem === false
                                        ? taskDelite()
                                        : projectDelite();
                                }}
                                className='effect buttonYes'>
                                Yes
                            </button> */}
        </>
    );
};
