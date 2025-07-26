import { FiFile } from "react-icons/fi";
import Heading from "../components/Heading";
import { GiPadlock } from "react-icons/gi";
import CreateProjectForm from "../components/CreateProjectForm";

export default function Projects() {
	return (
		<div className="">
			<Heading title="Projects" />

			<div className="flex items-center justify-between">
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

				{/* <button className="bg-green-700 cursor-pointer text-white rounded p-1 text-sm flex items-center gap-1">
					<GiPadlock />
					Create project
				</button> */}

				<CreateProjectForm />
			</div>

			<hr className="border-gray-300 my-6" />
		</div>
	);
}
