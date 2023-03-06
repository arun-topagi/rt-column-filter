import { createContext, useContext } from 'react'

const initialValue = {}

const Filters = createContext(initialValue)

export const useFilters = () => useContext(Filters)

export default Filters