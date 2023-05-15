import { PageRoute } from "@/app/[docpage]/page";



export default function SectionHeader ({page}: {page: PageRoute}) {
	return (
		<h4 className="px-4 pt-4 pb-2 text-zinc-700">{page.title}</h4>
	);
}
