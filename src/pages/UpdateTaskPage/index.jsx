import { Button, Input, Card, Form } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ROUTES } from "../../constants/routes";

import { updateTaskAction } from "../../redux/actions";

import * as S from "./styles";

const UpdateTaskPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { taskList } = useSelector((state) => state.task);

  const taskDetail = taskList.find((item) => item.id === id);

  const handleUpdateTask = (values) => {
    dispatch(updateTaskAction({ id: id, data: values }));
    navigate(ROUTES.TASK_LIST);
  };

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <h3>Update Task</h3>
        <Button onClick={() => navigate(ROUTES.TASK_LIST)}>Back</Button>
      </S.TopWrapper>
      <S.FormWrapper>
        <Card size="small">
          <Form
            name="updateTask"
            layout="vertical"
            initialValues={{
              title: taskDetail?.title,
              content: taskDetail?.content,
            }}
            onFinish={(values) => handleUpdateTask(values)}
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

export default UpdateTaskPage;
