import { SetStateAction, useState } from "react";
import { Input, Button, Select, DatePicker, Form } from "antd";

const { Option } = Select;

interface IFormTodo {
    onAdd: (task: string, category: string, dueDate: string) => void;
}

export function FormTodo(params: IFormTodo) {
    const { onAdd } = params;
    const [task, setTask] = useState("");
    const [category, setCategory] = useState("work");
    const [dueDate, setDueDate] = useState<string>("");

    const handleSubmit = () => {
        if (!task.trim()) return;
        onAdd(task, category, dueDate);
        setTask("");
        setDueDate("");
    };

    return (
        <Form layout="inline" onFinish={handleSubmit}>
            <Form.Item>
                <Input value={task} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setTask(e.target.value)} placeholder="Nova tarefa" />
            </Form.Item>
            <Form.Item>
                <Select value={category} onChange={setCategory}>
                    <Option value="work">Trabalho</Option>
                    <Option value="personal">Pessoal</Option>
                </Select>
            </Form.Item>
            <Form.Item>
                <DatePicker onChange={() => setDueDate(toString)} />
            </Form.Item>
            <Button type="primary" htmlType="submit">Adicionar</Button>
        </Form>
    );
};