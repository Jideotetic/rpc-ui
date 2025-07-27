import ChargingBalance from "@/components/ChargingBalance";
import Heading from "@/components/Heading";
import Payments from "@/components/Payments";
import PeriodicPayments from "@/components/PeriodicPayments";
import ProjectActions from "@/components/ProjectActions";
import ProjectsTable from "@/components/ProjectTable";

const data = [
	// {
	// 	projectId: "728ed52f",
	// 	whitelist: "example.com",
	// 	name: "Default Project",
	// },
	// {
	// 	projectId: "728ed52f",
	// 	whitelist: "",
	// 	name: "Default Project",
	// },
];

const columns = [
	{
		accessorKey: "date",
		header: "Date & Time",
	},
	{
		accessorKey: "type",
		header: "Payment Type",
	},
	{
		accessorKey: "status",
		header: "Status",
	},
	// {
	// 	id: "actions",
	// 	cell: ({ row }) => <ProjectActions project={row.original} />,
	// },
];

export default function Billings() {
	return (
		<>
			<Heading title="Billings" />

			<div className="flex flex-col lg:flex-row lg:items-stretch gap-4 mt-6 mb-10">
				<div className="grow flex flex-col gap-4">
					<ChargingBalance />

					<PeriodicPayments />
				</div>
				<div className="grow space-y-4">
					<Payments />
				</div>
			</div>

			<h3 className="text-3xl font-bold text-gray-900 font-pj mb-6">
				Payment History
			</h3>
			<ProjectsTable columns={columns} data={data} />
		</>
	);
}
