"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Genre } from "@/lib/definitions";
import { redirect } from "next/navigation";

const FormSchema = z.object({
	genres: z
		.array(z.string())
		.max(3, { message: "You can only select up to 3 genres." })
		.refine((value) => value.some((genre) => genre), {
			message: "You have to select at least one item.",
		}),
});

export function PreferencesForm({ genres }: { genres: Genre[] }) {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),

		// TODO: SET DEFAULT VALUES TO STORED VALUES
		defaultValues: {
			genres: [],
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		// TODO: SAVE THESE TO USER PROFILE
		console.log(data);
		redirect("/");
		// return data;
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="genres"
					render={() => (
						<FormItem>
							<div className="mb-4 ">
								<FormDescription>
									Select up to THREE genres of your preference.
								</FormDescription>
							</div>
							<div className="grid grid-cols-2 space-y-2">
								{genres.map((genre) => (
									<FormField
										key={genre.genre_name}
										control={form.control}
										name="genres"
										render={({ field }) => {
											return (
												<FormItem
													key={genre.genre_name}
													className="flex flex-row items-center space-x-2 space-y-0"
												>
													<FormControl>
														<Checkbox
															checked={field.value?.includes(genre.genre_name)}
															onCheckedChange={(checked) => {
																return checked
																	? field.onChange([
																			...field.value,
																			genre.genre_name,
																	  ])
																	: field.onChange(
																			field.value?.filter(
																				(value) => value !== genre.genre_name
																			)
																	  );
															}}
														/>
													</FormControl>
													<FormLabel className="text-sm font-normal">
														{genre.genre_name}
													</FormLabel>
												</FormItem>
											);
										}}
									/>
								))}
							</div>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-full">Submit</Button>
			</form>
		</Form>
	);
}
