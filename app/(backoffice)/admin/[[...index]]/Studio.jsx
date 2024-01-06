// ./src/app/studio/[[...index]]/Studio.tsx
"use client";

import { NextStudio } from "next-sanity/studio";

import config from "@/utils/sanity/sanity.config";

export function Studio() {
	//  Supports the same props as `import {Studio} from 'sanity'`, `config` is required
	return (
		<div className="z-50 absolute top-0 left-0 w-full">
			<NextStudio config={config} />
		</div>
	);
}
