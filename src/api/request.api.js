export default async function request({ query, mainUrl, subURL }) {
	let url

	if (query !== null) {
		const params = new URLSearchParams({ q: query })
		url = `${mainUrl}${subURL}?${params}`
	} else {
		url = `${mainUrl}${subURL}`
	}

	const response = await fetch(url)

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return await response.json()
}
