"use client";
import React, { useEffect, useState } from "react";
import ModalityCard from "@/components/Cards/ModalityCard";

const ModalitiesGrid = ({ allModalities }) => {
	const [searchTextByName, setSearchTextByName] = useState("");
	const [searchTextByDayOfWeek, setSearchTextByDayOfWeek] = useState("");
	const [modalities, setModalities] = useState([]);
	const [searchTimeout, setSearchTimeout] = useState(null);
	const [searchedResults, setSearchedResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const daysOfWeek = new Set(modalities.map((itemOne) => itemOne.schedule.map((itemTwo) => itemTwo.dayOfWeek)).flat());

	useEffect(() => {
		setModalities(allModalities);
	}, [modalities]);

	const filterModalitiesByName = (searchText) => {
		const regex = new RegExp(searchText, "i");
		return modalities.filter((modality) => regex.test(modality.name));
	};

	const filterModalitiesByDayOfWeek = (searchText) => {
		const regex = new RegExp(searchText, "i");
		return modalities.filter((modality) => regex.test(modality.schedule.map((itemTwo) => itemTwo.dayOfWeek)));
	};

	const handleSearchModalitiesName = (e) => {
		clearTimeout(searchTimeout);
		setIsLoading(true);
		setSearchTextByName(e.target.value);
		setSearchTimeout(
			setTimeout(() => {
				const searchResult = filterModalitiesByName(e.target.value);
				setSearchedResults(searchResult);
				setIsLoading(false);
			}, 1000)
		);
	};
	const handleSearchDayOfWeek = (e) => {
		clearTimeout(searchTimeout);
		setIsLoading(true);
		setSearchTextByDayOfWeek(e.target.value);
		setSearchTimeout(
			setTimeout(() => {
				const searchResult = filterModalitiesByDayOfWeek(e.target.value);
				setSearchedResults(searchResult);
				setIsLoading(false);
			}, 1000)
		);
	};

	return (
		<div className="grid grid-cols-6 xl:grid-cols-12 sm:w-full gap-8  mt-16">
			<div className="col-span-6 sm:col-span-3 md:col-span-3 xl:col-span-3 card w-full min-w-72 sm:min-w-full  bg-base-100 shadow-xl">
				<form className="relative w-full flex flex-col gap-8 items-center  h-full px-4 py-6 ">
					<input
						type="text"
						placeholder="Procura por modalidade"
						value={searchTextByName}
						onChange={handleSearchModalitiesName}
						required
						className="block w-full rounded-md 
                        py-2.5 pl-5 pr-12  text-sm font-medium focus:border-base-content bg-base-200 border-2 border-base-200 focus:border-2 focus:outline-none focus:ring-0"
					/>

					<select
						className="select w-full bg-base-200"
						value={searchTextByDayOfWeek}
						onChange={handleSearchDayOfWeek}>
						<option value={""} selected>
							Dia da semana
						</option>
						{[...daysOfWeek].map((day) => (
							<option value={day}>{day}</option>
						))}
					</select>
					<div className="flex flex-col gap-4">
						<p className="text-xs text-center">
							Ainda não sabes qual a modalidade que queres? Vem experimentar, sem custos e sem
							compromisso!
						</p>
						<button className="btn btn-outline btn-primary w-full">
							<a href="">Quero experimentar!</a>
						</button>
					</div>
				</form>
			</div>
			{searchTextByName || searchTextByDayOfWeek ? (
				<>
					{searchedResults.map((modality) => {
						return (
							<>
								{!isLoading ? (
									<ModalityCard key={modality._id} modality={modality} />
								) : (
									<div
										key={modality._id}
										className="col-span-6 sm:col-span-3 md:col-span-3 xl:col-span-3 card w-full min-w-72 sm:min-w-full h-80 animate-pulse bg-base-200">
										<span className="sr-only">Loading...</span>
									</div>
								)}
							</>
						);
					})}
				</>
			) : (
				<>
					{modalities.map((modality) => {
						return <ModalityCard key={modality._id} modality={modality} />;
					})}
				</>
			)}
		</div>
	);
};

export default ModalitiesGrid;
