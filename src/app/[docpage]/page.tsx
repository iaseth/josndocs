import Header from '@/components/Header/Header';
import pagesJson from './pages.json';



export interface PageRoute {
	route?: string,
	title: string,
	description?: string,
}

const pages: PageRoute[] = pagesJson.pages;
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
	const page: PageRoute = pages.find(page => page.route === docpage) || pages[0];

	return (
		<main className="min-h-screen">
			<header className="relative bg-red-500 text-white px-4 py-8 pt-16">
				<Header />
				<h1>{page.title}</h1>
				<h4>{page.description || "This page has no description."}</h4>
			</header>

			<footer className="px-4 py-6">
				<h1>DocsPage</h1>
				<h2>Page: {docpage}</h2>
			</footer>
		</main>
	);
}
