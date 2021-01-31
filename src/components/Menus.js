import { Menu } from 'antd';
import { APIContext } from './Main'
import React, { useContext, memo } from 'react';
import { FireOutlined } from '@ant-design/icons';
import citys from '../assets/countryName.json'
const Menus = () => {
    const { dispatch } = useContext(APIContext)

    const cityNames = citys.map((item, index) => {
        return (<Menu.Item key={index} icon={<FireOutlined />} onClick={() => {
            dispatch.setActive(() => item.Coordinates);
        }}>
            {item.CityName}
        </Menu.Item>)
    })
    return (<Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        {cityNames}
    </Menu>)
}
const MemoMenus = memo(Menus)
export default MemoMenus