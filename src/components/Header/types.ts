//type for props
export interface IProps {
  places: Array<string>
  activePlace: string
}
//type for date
export interface IDateTimeFormatOptions {
  weekday?: 'long' | 'short' | 'narrow'
  year?: 'numeric' | '2-digit'
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow'
  day?: 'numeric' | '2-digit'
}
