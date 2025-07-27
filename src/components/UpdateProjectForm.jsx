import {
	Description,
	Dialog,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import CustomInput from "./CustomInput";

export default function UpdateProjectForm() {
	let [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className="cursor-pointer p-1 w-full hover:bg-gray-400 hover:text-white text-left rounded"
			>
				Update Project
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
