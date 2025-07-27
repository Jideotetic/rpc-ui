import ChargingBalance from "@/components/ChargingBalance";
import Heading from "@/components/Heading";
import Payments from "@/components/Payments";
import PeriodicPayments from "@/components/PeriodicPayments";

export default function Billings() {
	return (
		<>
			<Heading title="Billings" />

			<div className="flex flex-col lg:flex-row lg:items-stretch gap-4 mt-6">
				<div className="grow flex flex-col gap-4">
					<ChargingBalance />

					<PeriodicPayments />
				</div>
				<div className="grow space-y-4">
					<Payments />
				</div>
			</div>
		</>
	);
}
