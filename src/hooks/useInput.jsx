//utils
import { useState } from "react"

export default function useInput(value = "", validation = () => true, action = () => {}) {
	const [inputValue, setInput] = useState(value)

	const onInput = text => {
		if (validation(text)) {
			setInput(text)
			action(text)
		}
	}

	return [inputValue, onInput]
}
