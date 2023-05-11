import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'JOSN Docs',
	description: 'Generated by create next app',
};

export default function RootLayout ({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className="flex">
				<nav className="max-w-xs bg-red-200">Navbar</nav>
				<main className="grow">{children}</main>
			</body>
		</html>
	);
}
