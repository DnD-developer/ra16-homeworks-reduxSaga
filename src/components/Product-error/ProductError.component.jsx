//utils
import React from "react"
//styles
import styles from "./ProductError.component.module.css"
//components
import { Alert, Button } from "antd"

export default function ProductError({ onClick }) {
	return (
		<div className={styles.button}>
			<Alert message="Произошла ошибка" type="error" />
			<Button type="primary" style={{ backgroundColor: "#F36363" }} onClick={onClick}>
				Reload
			</Button>
		</div>
	)
}
