import { Modal } from "antd";
import { FormTodo } from "../FormTodo";

export function ModalForm() {
    return (
        <Modal

        >
            <FormTodo
                onAdd={() => {}}
            />
        </Modal>
    )
}