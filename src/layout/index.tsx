import { Image, Layout as AntLayout, Row, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

import { LogoMinimal } from '../assets';

const { Header, Content } = AntLayout;

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AntLayout>
      <Header>
        <Row justify="space-between" align="middle" style={{ height: '100%' }}>
          <Image
            src={LogoMinimal}
            alt="header-logo"
            preview={false}
            height={40}
            style={{ display: 'flex' }}
          />
          <Button icon={<LogoutOutlined />} type="primary">
            Logout
          </Button>
        </Row>
      </Header>
      <Content
        style={{
          height: 'calc(100vh - 64px)',
          margin: '0 auto',
          width: '92%',
          paddingTop: '8px',
        }}
      >
        {children}
      </Content>
    </AntLayout>
  );
};
