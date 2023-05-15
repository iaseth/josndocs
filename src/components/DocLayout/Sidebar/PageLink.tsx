import Link from 'next/link';

import { PageRoute } from "@/app/[docpage]/page";



export default function PageLink ({page}: {page: PageRoute}) {
	return (
		<Link href={page.route || ""} className="block text-blue-700 px-4 py-1">{page.title}</Link>
	);
}
