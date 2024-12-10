import { describe, it } from 'vitest'
import { getRandomFoodItems } from '../../models/FoodItem/getRandomFoodItem'
import { render, screen } from '@testing-library/react'
import ItemsTable from './ItemsTable'
import FoodItem from '../../models/FoodItem/FoodItem'
import { MantineProvider } from '@mantine/core'
import dateService from '../../scripts/date/dateService'

describe('ItemsTable', () => {
  const renderComponent = (foodItems: FoodItem[]) => render(
    <MantineProvider>
      <ItemsTable foodItems={foodItems} />
    </MantineProvider>
  )

  it('Given FoodItems non empty, When render ItemsTable, Then every FoodItem rendered within table', () => {
    //Given
    var foodItems = getRandomFoodItems();

    //When
    renderComponent(foodItems)

    //Then
    foodItems.forEach(item => {
      screen.getByText(item.name)
      screen.getByText(dateService.format(item.expiryDate))
    })
  })

  it('Given FoodItems empty, When render ItemsTable, Then displays no items', () => {
    //When
    renderComponent([])

    //Then
    screen.getByText('No items')
  })
})