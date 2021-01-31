import { Table } from 'react-bootstrap'
const MaskTable = (props) => {
    return (<Table striped bordered hover size="sm">
        <tbody>
            <tr>
                <td>店名</td>
                <td>{props.shopData.name}</td>
            </tr>
            <tr>
                <td>電話</td>
                <td>{props.shopData.phone}</td>
            </tr>
            <tr>
                <td>地址</td>
                <td>{props.shopData.address}</td>
            </tr>
            <tr>
                <td>成人口罩</td>
                <td>{props.shopData.mask_adult}</td>
            </tr>
            <tr>
                <td>兒童口罩</td>
                <td>{props.shopData.mask_child}</td>
            </tr>
        </tbody>
    </Table>)
}
export default MaskTable;