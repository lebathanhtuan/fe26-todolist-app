import { useState } from "react";
import { Button, Input, Card, Space, Popconfirm } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate, generatePath } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { ROUTES } from "../../constants/routes";

import { deleteTaskAction } from "../../redux/actions";

import * as S from "./styles";

const TaskListPage = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { taskList } = useSelector((state) => state.task);

  const newTaskList = taskList.filter((item) => {
    return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
  });

  const renderTaskList = () => {
    return newTaskList.map((item) => {
      return (
        <Card key={item.id} size="small" style={{ marginBottom: 16 }}>
          <h3>Title: {item.title}</h3>
          <h4>Content: {item.content}</h4>
          <Space>
            <Button
              type="primary"
              ghost
              onClick={() => {
                console.log(generatePath(ROUTES.UPDATE_TASK, { id: item.id }));
                navigate(generatePath(ROUTES.UPDATE_TASK, { id: item.id }));
              }}
            >
              Update
            </Button>
            <Popconfirm
              title="Are you sure to delete this task?"
              onConfirm={() => dispatch(deleteTaskAction({ id: item.id }))}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>Delete</Button>
            </Popconfirm>
          </Space>
        </Card>
      );
    });
  };

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <h3>Task List</h3>
        <Button type="primary" onClick={() => navigate(ROUTES.CREATE_TASK)}>
          Create Task
        </Button>
      </S.TopWrapper>
      <Input
        suffix={<SearchOutlined />}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <S.ListWrapper>{renderTaskList()}</S.ListWrapper>
    </S.Wrapper>
  );
};

export default TaskListPage;
