import { faker } from "@faker-js/faker";
import FoodItem from "./FoodItem";

export const getRandomFoodItem = () : FoodItem => ({
  id: faker.number.int(),
  name: faker.commerce.productName(),
  expiryDate: faker.date.future()
})

export const getRandomFoodItems = (count: number = 3) : FoodItem[] => 
  [...Array(count).keys()].map(_ => getRandomFoodItem())