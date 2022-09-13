import { Form, Input, message, Modal, Select, Switch } from 'antd';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContextProvider';
import { Role } from '../../types/role';

const { Option } = Select;

interface UpdateUserModalProps {
  userId: string;
  visible: boolean;
  onClose: () => void;
}

type FormPayload = {
  email: string;
  first_name: string;
  last_name: string;
  role: Role;
  status: boolean;
};

export const UpdateUserModal: React.FC<UpdateUserModalProps> = ({
  userId,
  visible,
  onClose,
}) => {
  const { users, updateUser } = useContext(UserContext);

  const [form] = Form.useForm();

  const handleSubmit = (values: FormPayload) => {
    const existingEmail = users.findIndex(
      (user) => user.email === values.email.toLowerCase() && user.id !== userId,
    );

    if (existingEmail > -1) {
      message.error('User with given email already exists!');
      return;
    }

    updateUser({
      ...values,
      id: userId,
      status: !!values.status ? 'active' : 'inactive',
    });
    message.success('User updated successfully!');
    form.resetFields();
    onClose();
  };

  useEffect(() => {
    const user = users.find((user) => user.id === userId);
    if (user) {
      form.setFieldsValue({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        role: user.role,
        status: user.status === 'active' ? true : false,
      });
    }
  }, [form, userId, users]);

  return (
    <Modal
      title="Update User"
      okText="Update User"
      open={visible}
      onCancel={onClose}
      closable
      okButtonProps={{ onClick: () => form.submit() }}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="First Name"
          name="first_name"
          rules={[{ required: true, message: 'First Name is required' }]}
        >
          <Input placeholder="First Name" />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="last_name"
          rules={[{ required: true, message: 'Last Name is required' }]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Email is required' }]}
        >
          <Input placeholder="Email Name" />
        </Form.Item>
        <Form.Item
          name="role"
          label="Role"
          rules={[{ required: true, message: 'Role is required' }]}
        >
          <Select placeholder="Select Role" allowClear>
            <Option value="admin">Admin</Option>
            <Option value="doctor">Doctor</Option>
            <Option value="accountant">Accountant</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Status" name="status" valuePropName="checked">
          <Switch />
        </Form.Item>
      </Form>
    </Modal>
  );
};
