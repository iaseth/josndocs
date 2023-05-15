import Sidebar from "./Sidebar/Sidebar";



export default function DocLayout ({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="flex h-screen overflow-hidden">
			<Sidebar />
			<article className="grow overflow-y-scroll">
				<main>{children}</main>

				<footer className="bg-zinc-800 text-white px-4 py-16 text-center">
					<h4>Created by <a href="https://github.com/iaseth">Ankur Seth</a>.</h4>
				</footer>
			</article>
		</div>
	);
}
