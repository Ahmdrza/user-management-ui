import { useContext, useState } from 'react';
import {
  DeleteOutlined,
  EditOutlined,
  QuestionCircleOutlined,
  CopyOutlined,
} from '@ant-design/icons';
import {
  Button,
  Popconfirm,
  Space,
  Table,
  Tag,
  Tooltip,
  Typography,
} from 'antd';

import { UserContext } from '../../context/UserContextProvider';
import { User } from '../../types/user';
import { UpdateUserModal } from './UpdateUserModal';
import { styles } from './styles';

const { Column } = Table;

export const UsersTable: React.FC = () => {
  const { users, deleteUser } = useContext(UserContext);
  const [editUserId, setEditUserId] = useState<User['id'] | null>(null);

  return (
    <>
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
          render={(_, user: User) => {
            return (
              <Space>
                <Typography.Text
                  copyable={{
                    icon: <CopyOutlined style={styles.copyButtonIcon} />,
                    text: user.id,
                    tooltips: 'Copy ID',
                  }}
                />
                <Tooltip title="Edit">
                  <Button
                    size="small"
                    type="text"
                    shape="circle"
                    icon={<EditOutlined style={styles.editButtonIcon} />}
                    onClick={() => setEditUserId(user.id)}
                  />
                </Tooltip>
                <Tooltip title="Delete">
                  <Popconfirm
                    title="Are you sure you want to delete this user?"
                    onConfirm={() => deleteUser(user.id)}
                    okText="Yes"
                    cancelText="No"
                    placement="left"
                    icon={<QuestionCircleOutlined style={styles.popupIcon} />}
                  >
                    <Button
                      size="small"
                      type="text"
                      shape="circle"
                      icon={<DeleteOutlined style={styles.deleteButtonIcon} />}
                    />
                  </Popconfirm>
                </Tooltip>
              </Space>
            );
          }}
        />
      </Table>
      {editUserId && (
        <UpdateUserModal
          userId={editUserId}
          visible={!!editUserId}
          onClose={() => setEditUserId(null)}
        />
      )}
    </>
  );
};
