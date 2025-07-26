import APICredits from "./components/APICredits";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Logo from "./components/Logo";
import MobileNav from "./components/MobileNav";
import Projects from "./pages/Projects";

function App() {
	return (
		<div className="bg-gray-100 min-h-screen">
			{/* Mobile Nav Header */}
			<header className="md:hidden fixed left-0 right-0 top-0 h-[70px] bg-gray-200 p-4 shadow-2xl flex justify-between items-center z-10">
				<Logo />

				<div className="flex items-center gap-4">
					<Notifications />
					<MobileNav />
				</div>
			</header>

			{/* Desktop Nav */}
			<div className="hidden md:block px-4 py-6 p-4 w-[200px] fixed top-0 space-y-3 bottom-0 bg-white z-50 shadow-2xl">
				<Logo />
				<Nav />
			</div>

			<div className="px-4 mx-auto max-w-7xl py-4 md:py-6 sm:px-6 lg:px-8">
				<div className="md:ml-[200px] ml-0 mt-[100px] md:mt-0">
					<header className="hidden mb-8 md:flex justify-end gap-2">
						<APICredits />
						<Notifications />
						<Profile />
					</header>

					<Home />
					<br />
					<br />
					<br />
					<Projects />
				</div>
			</div>
		</div>
	);
}

export default App;
