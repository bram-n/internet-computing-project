import Link from "next/link";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const CheckoutInformation = () => {
	return (
		<main>
			<div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-1">
				<div className="flex flex-col md:row-span-1 md:col-span-2 md:border-r md:border-neutral-50">
					<div>
						<Link href="/">Home</Link>
					</div>
					<div>
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem>
									<BreadcrumbLink href="/checkout/information">Information</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator />
								<BreadcrumbItem>
									<BreadcrumbLink href="/checkout/shipping">Components</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator />
								<BreadcrumbItem>
									<BreadcrumbLink href="/checkout/Payment">Payment</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator />
								<BreadcrumbItem>
									<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>
					<div></div>
				</div>
				<div className="flex md:row-span-1 md:col-span-1"></div>
			</div>
		</main>
	);
};

export default CheckoutInformation;
