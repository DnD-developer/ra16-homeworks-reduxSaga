//styles
import * as styles from "./SearchWidget.module.css"
//hooks
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useAction } from "../../hooks/useAction"
//selectors
import { getSearch } from "../../store/selectors/search.selector"
//components
import { LoadingOutlined } from "@ant-design/icons"
import List from "../../components/List/List"
import { SearchItem } from "../../components/Search-item/SearchItem"
import Search from "../../components/Search/Search"

export const SearchWidget = () => {
	const { isLoading, items, isFail, search } = useSelector(getSearch)

	const { SEARCHING } = useAction()

	const onInputHandler = value => {
		SEARCHING(value)
	}

	useEffect(() => {
		SEARCHING("")
	}, [])

	return (
		<div className={styles.widget}>
			<Search value={search} onInput={onInputHandler} />
			<div className={styles.loader}>{isLoading ? <LoadingOutlined /> : isFail ? "Ошибка" : <></>}</div>
			<div className={styles.content}>
				<List data={items}>{({ name }) => <SearchItem dataText={name} />}</List>
			</div>
		</div>
	)
}
