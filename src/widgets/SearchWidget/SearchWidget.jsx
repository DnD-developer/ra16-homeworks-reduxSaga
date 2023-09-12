//styles
import * as styles from "./SearchWidget.module.css"
//hooks
import useInput from "../../hooks/useInput"
//components
import Search from "../../components/Search"

export const SearchWidget = () => {
	const [inputValue, onInput] = useInput()

	return (
		<div className={styles.widget}>
			<Search value={inputValue} onInput={onInput} />
		</div>
	)
}
