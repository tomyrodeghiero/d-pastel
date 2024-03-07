import { ARROW_RIGHT, IMAGE_404 } from "@/utils/constants/assets";
import Link from "next/link";

function NotFoundPage() {
	return (
		<div className="flex relative min-h-[95vh]">
			<div className="w-1/2 pt-24 items-center pl-32">
				<div className="flex flex-col">
					<h1 className="text-[11.5rem] text-gold-500">404</h1>
					<h1 className="mt-[-3rem] text-3xl text-gray-900">
						Lo sentimos, pero esta página<br />no ha sido encontrada.
					</h1>
					<Link
						href="/"
						className="bg-gray-900 mt-5 gap-2 w-48 flex justify-center font-family-jost text-white font-medium rounded-2xl py-4 px-5 items-center"
					>
						Volver al Inicio
						<img src={ARROW_RIGHT} alt="Contact" className='w-3' />
					</Link>
				</div>
			</div>

			<div className="w-[45%] absolute bg-red-200 right-0">
				<img
					src={IMAGE_404}
					alt="Decorative image"
					className="h-[87.5vh] absolute right-0 w-full object-cover rounded-bl-[14rem]"
				/>
			</div>
		</div>
	);
}

export default NotFoundPage;
