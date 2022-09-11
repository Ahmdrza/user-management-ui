import {
  DeleteOutlined,
  EditOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import { Button, Row, Space, Table, Tag, Typography } from 'antd';

import './App.less';
import { Layout } from './components';
import { User } from './types/user';

const { Column } = Table;

function App() {
  const dataSource: User[] = [
    {
      id: 1,
      first_name: 'Ahmad',
      last_name: 'Raza',
      email: 'Ahmdrzalifa@gmail.com',
      role: 'Doctor',
      status: 'Active',
    },
    {
      id: 2,
      first_name: 'Ahmad',
      last_name: 'Raza',
      email: 'Ahmdrzalifa@gmail.com',
      role: 'Admin',
      status: 'InActive',
    },
    {
      id: 3,
      first_name: 'Ahmad',
      last_name: 'Raza',
      email: 'Ahmdrzalifa@gmail.com',
      role: 'Accountant',
      status: 'Active',
    },
    {
      id: 4,
      first_name: 'Ahmad',
      last_name: 'Raza',
      email: 'Ahmdrzalifa@gmail.com',
      role: 'Accountant',
      status: 'InActive',
    },
  ];
  return (
    <Layout>
      <Space direction="vertical" style={{ width: '100%' }} size={16}>
        <Row justify="space-between" align="middle">
          <Typography.Title level={2} style={{ margin: 0 }}>
            Users
          </Typography.Title>
          <Button icon={<UserAddOutlined />}>Add User</Button>
        </Row>
        <Table dataSource={dataSource} pagination={false}>
          <Column
            dataIndex="id"
            title="ID"
            render={(value) => (
              <Typography.Text strong>{value}</Typography.Text>
            )}
          />
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
              <Tag color={value === 'Active' ? 'green' : 'red'}>{value}</Tag>
            )}
          />
          <Column
            dataIndex="actions"
            title="Actions"
            render={(_, a) => {
              return (
                <Space>
                  <Button
                    size="small"
                    type="text"
                    shape="circle"
                    icon={<EditOutlined style={{ color: '#6D64FF' }} />}
                  />
                  <Button
                    size="small"
                    type="text"
                    shape="circle"
                    icon={<DeleteOutlined style={{ color: '#FF595A' }} />}
                  />
                </Space>
              );
            }}
          />
        </Table>
      </Space>
    </Layout>
  );
}

export default App;
