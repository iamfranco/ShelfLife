import { Table } from "@mantine/core"
import FoodItem from "../../models/FoodItem/FoodItem"
import dateService from "../../scripts/date/dateService"

interface Props {
  foodItems: FoodItem[]
}

const ItemsTable = ({foodItems}: Props) => {
  const noItemsLabel = <div>No items</div>

  const rows = foodItems.map((item) => (
    <Table.Tr key={item.id}>
      <Table.Td>{item.name}</Table.Td>
      <Table.Td>{dateService.format(item.expiryDate)}</Table.Td>
    </Table.Tr>
  ))

  return (
    <>
    {
      foodItems.length == 0
      ? noItemsLabel
      :
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Item</Table.Th>
              <Table.Th>Expiry Date</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {rows}
          </Table.Tbody>
        </Table>
    }
    </>
  )
}

export default ItemsTable