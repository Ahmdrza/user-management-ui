import { Image, Layout as AntLayout, Row } from 'antd';

import { LogoMinimal } from '../assets';
import { styles } from './styles';

const { Header, Content } = AntLayout;

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AntLayout>
      <Header>
        <Row
          justify="space-between"
          align="middle"
          style={styles.headerContentContainer}
        >
          <Image
            src={LogoMinimal}
            alt="header-logo"
            preview={false}
            height={40}
            style={styles.headerLogo}
          />
        </Row>
      </Header>
      <Content style={styles.contentContainer}>{children}</Content>
    </AntLayout>
  );
};
