import ChargingModel from "../components/ChargingModel";
import Docs from "../components/Docs";
import Heading from "../components/Heading";
import Metrics from "../components/Metrics";
import ProductAndPlans from "../components/ProductAndPlans";
import Socials from "../components/Socials";

export default function Home() {
	return (
		<div>
			<Heading
				title="Welcome to SoroBuild RPC"
				subtitle="Connecting you to the world of blockchain"
			/>

			<div className="flex flex-col lg:flex-row lg:items-start gap-4 mt-6">
				<div className="grow space-y-4">
					<Metrics />

					<ChargingModel />

					<h2 className="text-2xl font-bold text-gray-900 font-pj">
						Products and plans
					</h2>

					<ProductAndPlans />
				</div>

				<div className="grow space-y-2">
					<Docs />

					<Socials />
				</div>
			</div>
		</div>
	);
}
