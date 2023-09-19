//utils
import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
//styles
import styles from "./Product.widget.module.css"
//selectors
import { getProduct } from "../../store/selectors/product.selector"
//hooks
import { useAction } from "../../hooks/useAction"
//components
import { LoadingOutlined } from "@ant-design/icons"
import { Button, Card as CardRender } from "antd"
import ProductError from "../../components/Product-error/ProductError.component"

export default function Product() {
	const { activeProduct, isLoading, isFail } = useSelector(getProduct)

	const { productId } = useParams()

	const { LOADING_PRODUCT } = useAction()

	useEffect(() => {
		LOADING_PRODUCT(productId)
	}, [])

	return (
		<div className={styles.widget}>
			{isLoading ? (
				<LoadingOutlined />
			) : isFail ? (
				<ProductError />
			) : (
				<>
					<CardRender style={{ width: "100%" }} title={activeProduct.name}>
						<p> Цена: {activeProduct.price}</p>
						<p> Описание: {activeProduct.content}</p>
					</CardRender>
					<Link to={import.meta.env.VITE_URL_HOME}>
						<Button type="primary" style={{ backgroundColor: "#63F381" }}>
							Main
						</Button>
					</Link>
				</>
			)}
		</div>
	)
}
