import { UserAddOutlined } from '@ant-design/icons';
import { Button, Row, Typography } from 'antd';
import { styles } from './styles';

interface UsersHeaderProps {
  onClickNewUser: () => void;
}

export const UsersHeader: React.FC<UsersHeaderProps> = ({ onClickNewUser }) => {
  return (
    <Row justify="space-between" align="middle">
      <Typography.Title level={2} style={styles.title}>
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
