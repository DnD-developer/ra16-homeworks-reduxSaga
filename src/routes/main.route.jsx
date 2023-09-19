//utils
import React from "react"
//widgets
import Products from "../widgets/Products/Products.widget"
import { SearchWidget } from "../widgets/SearchWidget/SearchWidget"

export default function MainRoute() {
	return (
		<React.StrictMode>
			<Products />
			<SearchWidget />
		</React.StrictMode>
	)
}
