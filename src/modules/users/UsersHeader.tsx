import { UserAddOutlined } from '@ant-design/icons';
import { Button, Row, Typography } from 'antd';

interface UsersHeaderProps {
  onClickNewUser: () => void;
}

export const UsersHeader: React.FC<UsersHeaderProps> = ({ onClickNewUser }) => {
  return (
    <Row justify="space-between" align="middle">
      <Typography.Title level={2} style={{ margin: 0 }}>
        Users
      </Typography.Title>
      <Button
        type="primary"
        icon={<UserAddOutlined />}
        onClick={onClickNewUser}
      >
        Add User
      </Button>
    </Row>
  );
};
