//components
import { Input } from "antd"

export default function Search({ value, onInput }) {
	const { Search: SearchRender } = Input

	const onInputHandler = ({ target }) => {
		const { value } = target

		onInput(value)
	}
	return (
		<>
			<SearchRender placeholder="Что хочет найти?" style={{ width: "100%" }} onChange={onInputHandler} value={value} />
		</>
	)
}
