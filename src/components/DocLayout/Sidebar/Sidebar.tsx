import Link from 'next/link';

import pagesJson from '../../../app/[docpage]/pages.json';
import { PageRoute } from '../../../app/[docpage]/page';

import PageLink from './PageLink';
import SectionHeader from './SectionHeader';

export const pages: PageRoute[] = pagesJson.pages;

function Entry ({page}: {page: PageRoute}) {
	return page.route ? <PageLink page={page} /> : <SectionHeader page={page} />;
}

export default function Sidebar () {
	return (
		<nav className="absolute w-4/5 z-50 md:static md:w-1/4 max-w-xs bg-slate-50 border-r border-red-600 sans-serif overflow-y-scroll">
			<header className="bg-red-600 text-white text-center px-2 py-5">
				<h1 className="py-1">
					<Link href="/">Josn</Link>
				</h1>
				<h4>Playing with JSON!</h4>
			</header>

			<main className="">
				<section className="pt-2 pb-6 h4 space-y-1">
					{pages.map((page, k) => <Entry key={k} page={page} />)}
				</section>
			</main>
		</nav>
	);
}
