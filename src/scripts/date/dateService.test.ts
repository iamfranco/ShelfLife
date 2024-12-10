import { describe, expect, it } from "vitest";
import dateService from "./dateService";

describe('dateService', () => {
  it.each([
    [new Date(2029, 0, 2), '2 Jan 2029'],
    [new Date(2024, 11, 21), '21 Dec 2024'],
    [new Date(2025, 3, 23), '23 Apr 2025'],
    [new Date(2027, 1, 11), '11 Feb 2027']
  ])('Given date, When format, Then return formatted date', (date, formattedDate) => {
    //When
    const result = dateService.format(date)

    //Then
    expect(result).toBe(formattedDate)
  })
})