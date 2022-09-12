import {
  DeleteOutlined,
  EditOutlined,
  UserAddOutlined,
  QuestionCircleOutlined,
  CopyOutlined,
} from '@ant-design/icons';
import {
  Button,
  Popconfirm,
  Row,
  Space,
  Table,
  Tag,
  Tooltip,
  Typography,
} from 'antd';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContextProvider';

import { Layout } from '../../layout';
import { User } from '../../types/user';
import { AddUserModal } from './components/AddUserModal';
import { UpdateUserModal } from './components/UpdateUserModal';

const { Column } = Table;

export const Users: React.FC = () => {
  const [addNewUserModalVisible, setAddNewUserModalVisible] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const { users, deleteUser } = useContext(UserContext);
  return (
    <Layout>
      <Space direction="vertical" style={{ width: '100%' }} size={16}>
        <Row justify="space-between" align="middle">
          <Typography.Title level={2} style={{ margin: 0 }}>
            Users
          </Typography.Title>
          <Button
            icon={<UserAddOutlined />}
            onClick={() => setAddNewUserModalVisible(true)}
          >
            Add User
          </Button>
        </Row>
        <Table
          dataSource={users.map((user) => {
            return { ...user, key: user.id };
          })}
          pagination={false}
        >
          <Column dataIndex="first_name" title="First Name" />
          <Column dataIndex="last_name" title="Last Name" />
          <Column dataIndex="email" title="Email" />
          <Column
            dataIndex="role"
            title="Role"
            render={(value) => <Tag color="geekblue">{value}</Tag>}
          />
          <Column
            dataIndex="status"
            title="Status"
            render={(value) => (
              <Tag color={value === 'active' ? 'green' : 'red'}>{value}</Tag>
            )}
          />
          <Column
            dataIndex="actions"
            title="Actions"
            render={(_, a: User) => {
              return (
                <Space>
                  <Typography.Text
                    copyable={{
                      icon: <CopyOutlined style={{ color: '#FFB71B' }} />,
                      text: a.id,
                      tooltips: 'Copy ID',
                    }}
                  />
                  <Tooltip title="Edit">
                    <Button
                      size="small"
                      type="text"
                      shape="circle"
                      icon={<EditOutlined style={{ color: '#6D64FF' }} />}
                      onClick={() => setUserId(a.id)}
                    />
                  </Tooltip>
                  <Tooltip title="Delete">
                    <Popconfirm
                      title="Are you sure you want to delete this user?"
                      onConfirm={() => deleteUser(a.id)}
                      okText="Yes"
                      cancelText="No"
                      placement="left"
                      icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                    >
                      <Button
                        size="small"
                        type="text"
                        shape="circle"
                        icon={<DeleteOutlined style={{ color: '#FF595A' }} />}
                      />
                    </Popconfirm>
                  </Tooltip>
                </Space>
              );
            }}
          />
        </Table>
      </Space>
      <AddUserModal
        visible={addNewUserModalVisible}
        onClose={() => setAddNewUserModalVisible(false)}
      />
      {userId && (
        <UpdateUserModal
          userId={userId}
          visible={!!userId}
          onClose={() => setUserId(null)}
        />
      )}
    </Layout>
  );
};
