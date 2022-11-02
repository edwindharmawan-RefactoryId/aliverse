import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomeScreen from "./screens/Home";

const RoutesScreen = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomeScreen/>} />
			</Routes>
		</BrowserRouter>
	)
}

export default RoutesScreen