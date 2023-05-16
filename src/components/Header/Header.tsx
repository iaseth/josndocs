


export default function Header () {
	return (
		<header className="absolute w-full top-0 left-0">
			<section className="max-w-5xl mx-auto px-2 space-x-2 flex">
				<div className="grow"></div>
				<a href="https://github.com/iaseth/josn" className="header-link">GitHub</a>
				<a href="https://www.npmjs.com/package/josn-cli" className="header-link">Npm</a>
				<a href="https://twitter.com/iankurseth" className="header-link">Twitter</a>
			</section>
		</header>
	);
}
