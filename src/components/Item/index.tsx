import clsx from "clsx";
import lamiImg from "../../assets/lambda_transparente.png";

export enum ItemType {
	Activity = "activity",
	Talk = "talk",
}

export type ItemProps = {
	title: string;
	subtitle?: string;
	speaker?: string;
	type: ItemType;
};

const Item = ({ title, subtitle, speaker, type }: ItemProps) => {
	return (
		<div className={clsx("flex items-center gap-4  px-4 py-3 justify-between mb-2 rounded-lg", type === "talk" && "bg-white", type === "activity" && "bg-[#f8f1d9]")}>
			<div className="flex items-center gap-4">
				<div
					className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg h-14 w-fit"
					style={{ backgroundImage: `url(${lamiImg})` }}
				></div>
				<div className="flex flex-col justify-center">
					<p className="text-[#151711] text-base font-medium leading-normal line-clamp-1">{title} {speaker && "-"} {speaker}</p>
					<p className="text-[#7a8764] text-sm font-normal leading-normal line-clamp-2">{subtitle}</p>
				</div>
			</div>
			{/* <div className="shrink-0">
				<button
					className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f3f4f0] text-[#151711] text-sm font-medium leading-normal w-fit"
				>
					<span className="truncate">Mas info</span>
				</button>
			</div> */}
		</div>
	)
}

export default Item;