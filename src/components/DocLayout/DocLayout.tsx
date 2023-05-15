import Sidebar from "./Sidebar/Sidebar";



export default function DocLayout ({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="flex h-screen overflow-hidden">
			<Sidebar />
			<article className="grow">
				<header className="text-blue-600 px-4 py-8 overflow-y-scroll">
					<h1 className="H5">DocLayout</h1>
				</header>

				<main>{children}</main>

				<footer className="bg-zinc-800 text-white px-4 py-16 text-center">
					<h4>Created by <a href="https://github.com/iaseth">Ankur Seth</a>.</h4>
				</footer>
			</article>
		</div>
	);
}