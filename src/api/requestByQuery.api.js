export default async function requestByQuery(query, mainUrl, subURL) {
	const params = new URLSearchParams({ q: query })
	const response = await fetch(`${mainUrl}${subURL}?${params}`)

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return await response.json()
}
