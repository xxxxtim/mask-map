import { Table } from "react-bootstrap";
const MaskTable = (props) => {
  return (
    <Table striped bordered hover size="sm">
      <tbody>
        <tr>
          <td>Station number</td>
          <td>{props.btsNum}</td>
        </tr>
        <tr>
          <td>Cell Id</td>
          <td>{props.cellId}</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>{props.address}</td>
        </tr>
        <tr>
          <td>Connection</td>
          <td>{props.connection}</td>
        </tr>
        {/* <tr>
          <td>兒童口罩</td>
          <td>{props.shopData.mask_child}</td>
        </tr> */}
      </tbody>
    </Table>
  );
};
export default MaskTable;
