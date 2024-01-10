import Image from "next/image";
import React from "react";
import Calendar from "../icons/Calendar";
import Clock from "../icons/Clock";

const ModalityCard = ({ modality }) => {
	const { _id, name, tags, image, schedule, professors } = modality;
	console.log("🚀 ~ image:", image);

	return (
		<div
			className="col-span-6 sm:col-span-3 md:col-span-3 xl:col-span-3 card w-full min-w-72 sm:min-w-full  bg-base-100 shadow-xl transition duration-300 hover:-translate-y-1"
			key={_id}>
			<figure id="image-from-modality" className="relative min-h-48 ">
				<Image
					src={
						"https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					}
					alt={name}
					fill
					className="object-cover"
				/>
				<div id="tags-from-modality" className="absolute top-3 left-6 ">
					{!tags ? null : (
						<>
							{tags.map((tag) => (
								<div
									key={`tag-${_id}`}
									className="badge badge-primary text-[11px] h-full font-semibold">
									{tag}
								</div>
							))}
						</>
					)}
				</div>
				<h1
					className="font-display font-bold text-2xl text-gray-50 absolute bottom-0 w-full h-2/3 bg-transparent bg-gradient-to-t from-gray-900/95 pb-3 pl-6 from-0% flex items-end "
					id="name-from-modality">
					{name}
				</h1>
			</figure>
			<div className="px-6 py-4">
				<div id="schedule-from-modality">
					{!schedule ? null : (
						<>
							{schedule.map((danceClass) => (
								<div
									key={danceClass._id}
									className=" flex justify-between text-sm font-semibold mb-4">
									<p className="flex gap-2">
										<Calendar />
										{danceClass.dayOfWeek}
									</p>
									<p className="flex gap-2">
										<Clock /> {danceClass.hours}
									</p>
								</div>
							))}
						</>
					)}
				</div>
				<div id="professors-from-modality" className="text-xs">
					{!professors ? null : (
						<>
							{professors.map((professor) => {
								console.log("🚀 ~ {professors.map ~ professor:", professor);
								return (
									<div key={professor._id}>
										<div className="avatar">
											<div className="w-8 rounded-full">
												<img src={professor.image.asset._ref} />
											</div>
										</div>
										<p>{professor.name}</p>
									</div>
								);
							})}
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default ModalityCard;
