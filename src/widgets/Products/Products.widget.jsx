//utils
import React, { useEffect } from "react"
import { useSelector } from "react-redux"
//styles
import styles from "./Products.widget.module.css"
//selectors
import { getProducts } from "../../store/selectors/products.selector"
//hooks
import { useAction } from "../../hooks/useAction"
//components
import { LoadingOutlined } from "@ant-design/icons"
import List from "../../components/List/List"
import ProductError from "../../components/Product-error/ProductError.component"
import ProductItem from "../../components/Product-item/ProductItem.component"

export default function Products() {
	const { items, isLoading, isFail } = useSelector(getProducts)
	const { LOADING_PRODUCTS } = useAction()

	useEffect(() => {
		LOADING_PRODUCTS()
	}, [])
	return (
		<div className={styles.widget}>
			{isLoading ? (
				<LoadingOutlined />
			) : isFail ? (
				<ProductError />
			) : (
				<List data={items}>{({ name, price, id }) => <ProductItem title={name} price={price} link={`${import.meta.env.VITE_URL_HOME}${id}`} />}</List>
			)}
		</div>
	)
}
