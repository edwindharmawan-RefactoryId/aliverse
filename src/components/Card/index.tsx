import { randomBg, randomString } from "../../utils"
import imgIcon from "../../assets/icon/imgicon.png"
import starIcon from "../../assets/icon/starIcon.png"
import targetIcon from "../../assets/icon/targetIcon.png"
import repeatIcon from "../../assets/icon/repeatIcon.png"

interface Iprops {
	name: string,
	image: string,
	activity: string,
	projectName: string,
	updatedtime: string,
}

const Card = (props: Iprops) => {
	const { name, image, updatedtime, projectName, activity } = props

	return (
		<div className="flex py-5 px-4 justify-between">
			<div className="flex flex-col gap-3">
				<div className="flex flex-col gap-1">
					<div className="flex gap-2">
						<span className="text-sm">{projectName}</span>
						<span className="flex bg-[#f1fbf8] text-[#009083] rounded-md text-[10px] px-3 items-center">Obiect Detection</span>
					</div>
					<span className="text-xs text-zinc-400">{activity}</span>
				</div>
				<div className="flex gap-4">
					<div className="flex items-center gap-1">
						<img
							src={imgIcon}
							className="w-3 h-3 aspect-square"
						/>
						<span className="text-[10px] text-[#009083]">images</span>
					</div>
					<div className="flex items-center gap-1">
						<img
							src={starIcon}
							className="w-3 h-3 aspect-square"
						/>
						<span className="text-[10px] text-[#009083]">1</span>
					</div>
					<div className="flex items-center gap-1">
						<img
							src={targetIcon}
							className="w-3 h-3 aspect-square"
						/>
						<span className="text-[10px] text-[#009083]">90%</span>
					</div>
					<div className="flex items-center gap-1">
						<img
							src={repeatIcon}
							className="w-3 h-3 aspect-square"
						/>
						<span className="text-[10px] text-[#009083]">1</span>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-between">
				<div className="flex w-full justify-end">
					<span style={{ backgroundColor: `#${randomBg()}`}} className="flex items-center justify-center rounded-full aspect-square w-8 h-8 text-xs text-white">{name.slice(0, 2).toUpperCase()}</span>
				</div>
				<span className="text-xs text-zinc-400">{updatedtime}</span>
			</div>
		</div>
	)
}

export default Card