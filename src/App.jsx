// import APICredits from "./components/APICredits";
// import Notifications from "./components/Notifications";
// import Profile from "./components/Profile";
// import Home from "./pages/Home";
// import Nav from "./components/Nav";
// import Logo from "./components/Logo";
// import MobileNav from "./components/MobileNav";
// import Projects from "./pages/Projects";
// import Billings from "./pages/Billings";
// import { LoginButton } from "@telegram-auth/react";

// import { useEffect } from "react";
// import { Redirect, useLocation } from "react-router-dom";

// import { MainRoutes } from "./constants/routes";

// import useAuthStore from "./store/authStore/useAuthStore";

// import { WalletConnectService } from "./services/globalServices";

// import PageLoader from "./basics/loaders/PageLoader";

// function App() {
// 	const { isLogged } = useAuthStore();

// 	const location = useLocation();

// 	useEffect(() => {
// 		WalletConnectService.autoLogin();
// 	}, []);

// 	// After login redirect to the page from the url params or to the main page
// 	if (isLogged) {
// 		const params = new URLSearchParams(location.search);
// 		const redirect = params.get("redirect");

// 		return <Redirect to={redirect ? `/${redirect}` : MainRoutes.main} />;
// 	}

// 	return <PageLoader />;
// 	// const handleTelegramAuth = async (telegramUser) => {
// 	// 	console.log({ telegramUser });
// 	// 	try {
// 	// 		const res = await fetch("http://localhost:3001/auth/telegram/link", {
// 	// 			method: "POST",
// 	// 			headers: {
// 	// 				"Content-Type": "application/json",
// 	// 				Authorization: "Bearer huyuhjguhhjk",
// 	// 			},
// 	// 			body: JSON.stringify(telegramUser),
// 	// 		});

// 	// 		const data = await res.json();
// 	// 		if (res.ok) {
// 	// 			alert("Telegram linked successfully!");
// 	// 			console.log(data);
// 	// 		} else {
// 	// 			alert(`Failed to link: ${data.message}`);
// 	// 		}
// 	// 	} catch (err) {
// 	// 		console.error("Error linking Telegram:", err);
// 	// 		alert("Something went wrong");
// 	// 	}
// 	// };

// 	// return (
// 	// 	<div className="bg-gray-100 min-h-screen">
// 	// 		{/* Mobile Nav Header */}
// 	// 		<header className="md:hidden fixed left-0 right-0 top-0 h-[70px] bg-gray-200 p-4 shadow-2xl flex justify-between items-center z-10">
// 	// 			<Logo />

// 	// 			<div className="flex items-center gap-4">
// 	// 				<Notifications />
// 	// 				<MobileNav />
// 	// 			</div>
// 	// 		</header>

// 	// 		{/* Desktop Nav */}
// 	// 		<div className="hidden md:block px-4 py-6 p-4 w-[200px] fixed top-0 space-y-3 bottom-0 bg-white z-50 shadow-2xl">
// 	// 			<Logo />
// 	// 			<Nav />
// 	// 		</div>

// 	// 		<div className="px-4 mx-auto max-w-7xl py-4 md:py-6 sm:px-6 lg:px-8">
// 	// 			<div className="md:ml-[200px] ml-0 mt-[100px] md:mt-0">
// 	// 				<header className="hidden mb-8 md:flex justify-end gap-2">
// 	// 					<APICredits />
// 	// 					<Notifications />
// 	// 					<Profile />
// 	// 				</header>

// 	// 				<Home />
// 	// 				<br />
// 	// 				<br />
// 	// 				<br />
// 	// 				<Projects />

// 	// 				<br />
// 	// 				<br />
// 	// 				<br />
// 	// 				<Billings />
// 	// 			</div>
// 	// 		</div>

// 	// 		<LoginButton
// 	// 			botUsername="JideoteticBot"
// 	// 			authCallbackUrl="http://localhost:3001/auth/telegram/link/huyuhjguhhjk"
// 	// 			buttonSize="medium" // "large" | "medium" | "small"
// 	// 			// cornerRadius={5} // 0 - 20
// 	// 			showAvatar={false}
// 	// 			lang="en"
// 	// 		/>
// 	// 	</div>
// 	// );
// }

// export default App;

import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { MainRoutes } from "./constants/routes";
import { getAquaAssetData, getAssetString } from "./helpers/assets";
import { StellarService } from "./services/globalServices";

// Lazy load SwapPage
const SwapPageLazy = lazy(() => import("./pages/SwapPage"));

const Swap = () => {
	const { aquaAssetString } = getAquaAssetData();

	return (
		<Routes>
			<Route
				path={`${MainRoutes.swap}/:source/:destination/`}
				element={<SwapPageLazy />}
			/>
			<Route
				path="*"
				element={
					<Navigate
						to={`${MainRoutes.swap}/${getAssetString(
							StellarService.createLumen()
						)}/${aquaAssetString}`}
						replace
					/>
				}
			/>
		</Routes>
	);
};

export default Swap;
