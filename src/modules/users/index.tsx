import { useState } from 'react';
import { Space } from 'antd';

import { Layout } from '../../layout';
import { AddUserModal } from './AddUserModal';
import { UsersHeader } from './UsersHeader';
import { UsersTable } from './UsersTable';
import { styles } from './styles';

export const Users: React.FC = () => {
  const [addNewUserModalVisible, setAddNewUserModalVisible] = useState(false);

  const _handleOnClickNewUser = () => setAddNewUserModalVisible(true);

  return (
    <Layout>
      <Space direction="vertical" style={styles.container} size={16}>
        <UsersHeader onClickNewUser={_handleOnClickNewUser} />
        <UsersTable />
      </Space>
      <AddUserModal
        visible={addNewUserModalVisible}
        onClose={() => setAddNewUserModalVisible(false)}
      />
    </Layout>
  );
};
