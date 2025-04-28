import { PreferencesForm } from "@/components/ui/preferences-form";
import { fetchAllGenres } from "@/lib/data";

const PreferencesPage = async () => {
	const genres = await fetchAllGenres();
	return (
		<main className="w-full flex justify-center items-center p-6 my-12">
			<div className="w-full">
				<div className="flex justify-start">Choose your preferences</div>
				<PreferencesForm genres={genres} />
			</div>
		</main>
	)
}

export default PreferencesPage;