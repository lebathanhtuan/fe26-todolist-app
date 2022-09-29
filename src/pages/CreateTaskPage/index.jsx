import { Button, Input, Card, Form } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ROUTES } from "../../constants/routes";

import { createTaskAction } from "../../redux/actions";

import * as S from "./styles";

const CreateTaskPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCreateTask = (values) => {
    dispatch(createTaskAction({ data: values }));
    navigate(ROUTES.TASK_LIST);
  };

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <h3>Create Task</h3>
        <Button onClick={() => navigate(ROUTES.TASK_LIST)}>Back</Button>
      </S.TopWrapper>
      <S.FormWrapper>
        <Card size="small">
          <Form
            name="createTask"
            layout="vertical"
            initialValues={{
              title: "",
              content: "",
            }}
            onFinish={(values) => handleCreateTask(values)}
          >
            <Form.Item
              label="Title"
              name="title"
              validateFirst
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "Required!",
                },
                {
                  type: "string",
                  min: 4,
                  message: "Min is 4!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Content"
              name="content"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "Required!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form>
        </Card>
      </S.FormWrapper>
    </S.Wrapper>
  );
};

export default CreateTaskPage;
