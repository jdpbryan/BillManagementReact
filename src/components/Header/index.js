import { Input, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const Header = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    height: 56,
    backgroundColor: '#f0f2f5',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
  }}>
    <h1 style={{ margin: 0, fontSize: 24, fontWeight: 600 }}>Bill Management</h1>
    <div style={{ display: 'flex', gap: 16 }}>
      <Input
        placeholder="搜索"
        style={{ width: 200 }}
      />
      <Button
        type="text"
        icon={<MenuOutlined style={{ fontSize: 20 }} />}
        shape="circle"
      />
    </div>
  </div>
);

export default Header;