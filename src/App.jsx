//utils
import { createBrowserRouter, RouterProvider } from "react-router-dom"

//Routes
import MainRoute from "./routes/main.route"
import ProductRoute from "./routes/product.route"

export default function App() {
	const router = createBrowserRouter([
		{
			path: import.meta.env.VITE_URL_HOME,
			element: <MainRoute />
		},
		{
			path: `${import.meta.env.VITE_URL_HOME}:productId`,
			element: <ProductRoute />
		}
	])
	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}
