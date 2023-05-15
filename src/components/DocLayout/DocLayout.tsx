import Footer from "../Footer/Footer";
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
				<Footer />
			</article>
		</div>
	);
}
