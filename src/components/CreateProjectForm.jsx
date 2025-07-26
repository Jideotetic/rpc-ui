import {
	Description,
	Dialog,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { GiPadlock } from "react-icons/gi";
import CustomInput from "./CustomInput";

export default function CreateProjectForm() {
	let [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className="bg-green-700 cursor-pointer text-white rounded p-1 text-sm flex items-center gap-1"
			>
				<BiPlus />
				Create project
			</button>
			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className="relative z-50"
			>
				<div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-[#000]/75">
					<DialogPanel className="max-w-lg w-lg space-y-4 rounded-2xl bg-white p-12">
						<DialogTitle className="font-bold">
							Create a New Project
						</DialogTitle>
						<Description>Enter your project details below</Description>
						<CustomInput
							label="Project Name"
							placeholder="Enter your project name"
						/>

						<CustomInput
							label="Whitelisted Domain"
							placeholder="Enter your domain name"
						/>

						<div className="flex gap-2 sm:gap-4 flex-col sm:flex-row">
							<button
								className="grow bg-gray-400 cursor-pointer text-white rounded p-1 text-sm"
								onClick={() => setIsOpen(false)}
							>
								Cancel
							</button>
							<button
								className="grow bg-green-700 cursor-pointer text-white rounded p-1 text-sm"
								onClick={() => setIsOpen(false)}
							>
								Submit
							</button>
						</div>
					</DialogPanel>
				</div>
			</Dialog>
		</>
	);
}
