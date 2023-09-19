//utils
import React from "react"
import { Link } from "react-router-dom"
//style
import styles from "./ProductItem.componets.module.css"
//components
import { Card as CardRender } from "antd"

export default function ProductItem({ title, link, price }) {
	return (
		<div className={styles.item}>
			<CardRender style={{ width: "100%" }} title={title} extra={<Link to={link}>More</Link>}>
				<p> Цена: {price}</p>
			</CardRender>
		</div>
	)
}
