import pagesJson from './pages.json';



export interface PageRoute {
	route?: string,
	title: string,
}

export const pages: PageRoute[] = pagesJson.pages;
export async function generateStaticParams () {
	return pages.filter(page => page.route).map(page => ({docpage: page.route}));
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
