import React from "react";
import { getSchedule } from "@/utils/sanity/sanity.service";
import ClientImageList from "./ClientImageList";

export const revalidate = 60; // revalidate this page every 60 seconds


const Schedule = async () => {
	const schedule = await getSchedule();
	return (
		<div className="flex min-h-screen w-full flex-col items-center mx-auto  max-w-screen-xl px-8 md:px-16 ">
			<div className={"max-w-screen-md self-start mt-16"}>
				<h1 className="section_title !text-left">{schedule.name}</h1>
			</div>
				<div className="flex flex-col md:flex-row w-full gap-8 py-6">
					<ClientImageList gallery={schedule.gallery} />
				</div>
		</div>
	);
};

export default Schedule;
