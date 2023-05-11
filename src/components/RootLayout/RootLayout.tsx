import Sidebar from "./Sidebar/Sidebar";



export default function RootLayout ({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className="flex">
				<Sidebar />
				<article className="grow">
					<header className="bg-red-500 text-white px-4 py-8">
						<h1>Heading</h1>
					</header>
					<main>{children}</main>
					<footer className="bg-red-700 text-white px-4 py-8 text-center">
						<h4>Created by Ankur Seth.</h4>
					</footer>
				</article>
			</body>
		</html>
	);
}
