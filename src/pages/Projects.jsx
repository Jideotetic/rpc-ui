import { FiFile } from "react-icons/fi";
import Heading from "../components/Heading";
import CreateProjectForm from "../components/CreateProjectForm";
import ProjectsTable from "../components/ProjectTable";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaEllipsisVertical } from "react-icons/fa6";
import UpdateProjectForm from "@/components/UpdateProjectForm";

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
		cell: ({ row }) => {
			const data = row.original;

			return (
				<>
					<Menu>
						<MenuButton className="cursor-pointer focus:outline-none">
							<div className="p-2 bg-gray-100 rounded">
								<FaEllipsisVertical className="text-xl" />
							</div>
						</MenuButton>
						<MenuItems
							anchor="bottom"
							className="focus:outline-none shadow-lg rounded bg-white text-sm z-10"
						>
							<MenuItem className="text-gray-700 p-2 font-bold">
								<div>Actions</div>
							</MenuItem>
							<hr className="border-gray-300" />
							<MenuItem className="text-gray-700 p-2">
								<div className="flex flex-col gap-2 items-start">
									<button
										className="cursor-pointer p-1 w-full hover:bg-gray-400 hover:text-white text-left rounded"
										onClick={() =>
											navigator.clipboard.writeText(data.projectId)
										}
									>
										Copy project ID
									</button>
									<button className="cursor-pointer p-1 w-full hover:bg-gray-400 hover:text-white text-left rounded">
										Toggle Dev Mode
									</button>
									<UpdateProjectForm />
									<button className="bg-red-500 p-1 w-full text-white hover:bg-red-700 text-left rounded cursor-pointer">
										Delete
									</button>
								</div>
							</MenuItem>
						</MenuItems>
					</Menu>
				</>
			);
		},
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
