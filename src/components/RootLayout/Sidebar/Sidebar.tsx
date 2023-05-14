import Link from 'next/link';

import { pages } from '../../../app/[docpage]/page';



function Entry ({k}: {k: number}) {
	const page = pages[k];
	if (page.route) {
		return <Link href={page.route} className="block text-blue-700">{page.title}</Link>;
	} else {
		return <h4 className="pt-4">{page.title}</h4>;
	}
}

export default function Sidebar () {
	return (
		<nav className="w-1/4 max-w-xs bg-slate-100 border-r border-blue-800">
			<header className="bg-blue-800 text-white text-center px-2 py-5">
				<h1 className="py-3">
					<Link href="/">josn</Link>
				</h1>
				<h4>Playing with JSON</h4>
			</header>

			<main className="">
				<section className="px-4 pt-2 pb-6 h4 space-y-2">
					{pages.map((page, k) => <Entry key={k} k={k} />)}
				</section>
			</main>
		</nav>
	);
}
