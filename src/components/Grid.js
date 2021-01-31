import { Layout, Menu } from 'antd';
import Map from '../components/Map'
import Menus from './Menus'

const { Header, Content, Footer, Sider } = Layout;

const Grid = () => {
    return (<Layout>
        <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
            }}
        >
            <div className="logo" />
            <Menus />
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
            <Header style={{ padding: 0, background: '#fff' }} />
            <Content style={{ margin: '24px 16px 0' }}>
                <div style={{ padding: 24, minHeight: 360, background: '#fff' }}>
                    <Map />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    </Layout>)
}
export default Grid

