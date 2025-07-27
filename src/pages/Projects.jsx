import { FiFile } from "react-icons/fi";
import Heading from "../components/Heading";
import CreateProjectForm from "../components/CreateProjectForm";
import ProjectsTable from "../components/ProjectTable";
import ProjectActions from "@/components/ProjectActions";

const data = [
	{
		projectId: "728ed52f",
		whitelist: "example.com",
		name: "Default Project",
	},
	{
		projectId: "728ed52f",
		whitelist: "",
		name: "Default Project",
	},
];

const columns = [
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "whitelist",
		header: "Whitelist",
	},
	{
		id: "actions",
		cell: ({ row }) => <ProjectActions project={row.original} />,
	},
];

export default function Projects() {
	return (
		<div className="">
			<Heading title="Projects" />

			<div className="flex items-center justify-between mb-10">
				<div className="flex items-center gap-2 mt-2">
					<p className="text-gray-400 text-sm">1 of 3 projects used</p>
					<div className="w-1 h-1 bg-gray-700 rounded-full"></div>
					<div className="flex text-blue-600 hover:text-blue-400 gap-1">
						<FiFile />

						<a href="#" className="underline text-xs p-0.5 ">
							Get started with projects
						</a>
					</div>
				</div>

				<CreateProjectForm />
			</div>

			<ProjectsTable columns={columns} data={data} />
		</div>
	);
}
