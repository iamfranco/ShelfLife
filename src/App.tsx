import "@mantine/core/styles.css";
import { MantineProvider } from '@mantine/core'
import ItemsTable from './components/ItemsTable/ItemsTable'
import './App.css'
import FoodItem from "./models/FoodItem/FoodItem";

function App() {
  const foodItems: FoodItem[] = [
    {id: 1, name: 'Eggs', expiryDate: new Date('2025-04-01')},
    {id: 2, name: 'Lettuce', expiryDate: new Date('2025-04-02')},
    {id: 3, name: 'Mushroom', expiryDate: new Date('2025-04-03')},
    {id: 4, name: 'Walnuts', expiryDate: new Date('2025-04-04')},
    {id: 5, name: 'Trout', expiryDate: new Date('2025-04-05')},
    {id: 6, name: 'Beansprouts', expiryDate: new Date('2025-04-06')},
    {id: 7, name: 'Egg noodles', expiryDate: new Date('2025-04-07')}
  ]

  return (
    <MantineProvider>
      <div className="container">
        <ItemsTable foodItems={foodItems} />
      </div>
    </MantineProvider>
  )
}

export default App
