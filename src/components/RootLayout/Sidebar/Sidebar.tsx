import Link from 'next/link';

import { routes } from '../../../app/[docpage]/page';



export default function Sidebar () {
	return (
		<nav className="w-1/4 max-w-xs bg-slate-100 border-r border-blue-800">
			<header className="bg-blue-800 text-white text-center px-2 py-5">
				<h1 className="py-3">
					<Link href="/">josn</Link>
				</h1>
				<h4>Playing with JSON</h4>
			</header>

			<main>
				<section className="py-6 px-3">
					{routes.map((route, k) => <h4 key={k} className="grid grid-cols-6 space-x-2 py-1">
						<span className="text-right">{k+1}.</span>
						<Link href={route.route} className="col-span-5 text-blue-700">{route.title}</Link>
					</h4>)}
				</section>
			</main>
		</nav>
	);
}
