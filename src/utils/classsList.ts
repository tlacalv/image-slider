import { CssClassObj } from '../types'
//helper function to generate a string of css classess
export default function classList(classes:CssClassObj): string {
  return Object
    .entries(classes)
    .filter(entry => entry[1])
    .map(entry => entry[0])
    .join(' ')
}