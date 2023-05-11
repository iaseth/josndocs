import { routes } from '../../../app/[docpage]/page';



export default function Sidebar () {
	return (
		<nav className="w-1/4 max-w-xs bg-slate-300">
			<section>
				<ul className="py-4 px-3 space-y-1">
					{routes.map((route, k) => <li key={k}>
						<a href="" className="font-bold">{route.title}</a>
					</li>)}
				</ul>
			</section>
		</nav>
	);
}
