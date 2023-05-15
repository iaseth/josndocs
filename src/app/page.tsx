import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Link from 'next/link';



export default function Home () {
	return (
		<main className="min-h-screen text-center">
			<header className="bg-red-500 text-white py-6">
				<Header />
				<main className="px-8 py-16 space-y-6">
					<h1 className="H4">Josn</h1>
					<h4>Josn is a command line JSON viewer.</h4>
				</main>

				<footer className="px-4 py-6">
					<section className="max-w-xs mx-auto grid grid-cols-2 space-x-4">
						<Link href="/getting-started" className="big-button">Try</Link>
						<Link href="/getting-started" className="big-button">Docs</Link>
					</section>
				</footer>
			</header>

			<Footer />
		</main>
	);
}
