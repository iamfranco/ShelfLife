const months : string[] = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

const format = (date: Date) : string => `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`

export default {
  format
}