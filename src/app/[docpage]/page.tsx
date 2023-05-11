import routesJson from './routes.json';



export interface Route {
	route: string,
	title: string,
}

export const routes: Route[] = routesJson.routes;
export async function generateStaticParams () {
	return routes.map(r => ({docpage: r.route}));
}

interface DocsPageParams {
	docpage: string
};

interface DocsPageProps {
	params: DocsPageParams
};

export default function DocsPage ({params}: DocsPageProps) {
	const {docpage} = params;

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
				<h1>DocsPage</h1>
				<h2>Page: {docpage}</h2>
			</div>
		</main>
	);
}
