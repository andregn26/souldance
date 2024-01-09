import React from "react";

const ModalityCard = ({ modality }) => {
	const { name, tags, image, schedule, professors } = modality;

	return (
		<div className="col-span-6 md:col-span-2" key={modality._id}>
			<div id="name-from-modality">
				<h1>{modality.name}</h1>
			</div>
			<div id="professors-from-modality">
				{modality.professors ? (
					<>
						{modality.professors.map((professor) => {
							return <p key={professor._id}>{professor.name} </p>;
						})}
					</>
				) : (
					<p>No professors</p>
				)}
			</div>
		</div>
	);
};

export default ModalityCard;
