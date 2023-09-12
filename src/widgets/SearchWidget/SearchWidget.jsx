//styles
import * as styles from "./SearchWidget.module.css"
//hooks
import useInput from "../../hooks/useInput"
//components
import List from "../../components/List/List"
import { SearchItem } from "../../components/Search-item/SearchItem"
import Search from "../../components/Search/Search"

export const SearchWidget = () => {
	const [inputValue, onInput] = useInput()

	const data = [
		{
			title: "Ant Design Title 1"
		},
		{
			title: "Ant Design Title 2"
		},
		{
			title: "Ant Design Title 3"
		},
		{
			title: "Ant Design Title 4"
		}
	]

	return (
		<div className={styles.widget}>
			<Search value={inputValue} onInput={onInput} />
			<div className={styles.content}>
				<List data={data}>{({ title }) => <SearchItem dataText={title} />}</List>
			</div>
		</div>
	)
}
