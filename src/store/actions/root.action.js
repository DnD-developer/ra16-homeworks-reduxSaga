//actions
import { ProductSLice } from "../reducers/Product.reducer"
import { ProductsSLice } from "../reducers/Products.reducer"
import { SearchSLice } from "../reducers/Search.reducer"

export const rootActions = {
	...SearchSLice.actions,
	...ProductsSLice.actions,
	...ProductSLice.actions
}
