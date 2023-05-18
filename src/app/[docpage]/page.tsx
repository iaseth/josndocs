import Link from 'next/link';

import Header from '@/components/Header/Header';
import pagesJson from './pages.json';



export interface PageRoute {
	route?: string,
	title: string,
	description?: string,
}

const pages: PageRoute[] = pagesJson.pages.filter(page => page.route);
export async function generateStaticParams () {
	return pages.map(page => ({docpage: page.route}));
}

interface DocsPageParams {
	docpage: string
};

interface DocsPageProps {
	params: DocsPageParams
};

export default function DocsPage ({params}: DocsPageProps) {
	const { docpage } = params;
	const pageIndex: number = pages.findIndex(page => page.route === docpage);
	const page: PageRoute = pages[pageIndex];
	const prevPage: PageRoute = pages[pageIndex - 1] || null;
	const nextPage: PageRoute = pages[pageIndex + 1] || null;

	return (
		<main className="min-h-screen flex flex-col">
			<header className="relative bg-red-500 text-white px-4 py-8 pt-16">
				<Header />
				<h1>{page.title}</h1>
				<h4>{page.description || "This page has no description."}</h4>
			</header>

			<main className="grow"></main>

			<footer className="px-4 py-6 bg-slate-200">
				<section className="grid grid-cols-2">
					<div>
						{prevPage && <Link href={prevPage.route || ""}>
							<h5>Previous</h5>
							<h4>{prevPage.title}</h4>
						</Link>}
					</div>
					<div className="text-right">
						{nextPage && <Link href={nextPage.route || ""}>
							<h5>Next</h5>
							<h4>{nextPage.title}</h4>
						</Link>}
					</div>
				</section>
			</footer>
		</main>
	);
}
