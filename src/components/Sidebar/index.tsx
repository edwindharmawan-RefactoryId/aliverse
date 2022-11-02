import { randomBg, randomString } from "../../utils"
import checkIcon from '../../assets/icon/checkIcon.png'
import imgIcon from '../../assets/icon/imgIcon.png'
import hashIcon from '../../assets/icon/hashIcon.png'
import moonIcon from '../../assets/icon/moonIcon.png'

interface Iprops {
	name: string,
	bgColor: string,
	memberStatus: string,
	totalProjects: number,
}
const Sidebar = (props: Iprops) => {
	const { name, bgColor, memberStatus, totalProjects } = props
	return (
		<div className='w-[350px] py-4 bg-[#fafbfc] px-2 flex flex-col justify-between' style={{ maxHeight: "95vh"}}>
			<div>
			<div className="flex px-5 pt-2 pb-5 border-b-[1px] border-b-zinc-200">
				<div className="h-full">
					<div style={{ backgroundColor: bgColor}} className={"flex items-center justify-center rounded-full aspect-square w-8 h-8 text-xs text-white mr-4"}>{name.slice(0,2).toUpperCase()}</div>
				</div>
				<div className="flex flex-col justify-between h-20">
					<div>
						<span className="text-sm">{name}</span>
						<div className="flex text-xs text-zinc-400 gap-2">
							<div className="flex items-center">
								<img src={checkIcon} className="w-3 h-3" />
							</div>
							<span>{memberStatus}</span>
						</div>
					</div>
					<span className="text-xs text-zinc-400">Created {totalProjects} Projects</span>
				</div>
			</div>

			<div className="flex p-5 border-b-[1px] border-b-zinc-200 flex-col">
				<span className="text-sm mb-2">Recent Projects</span>
				<div className="flex flex-col gap-4">
					<div className="flex">
						<img src={imgIcon} className="mr-2 h-3 w-3 mt-1" />
						<div className="flex flex-col items-start">
							<span className="text-teal-600 text-sm flex">Project name 010</span>
							<span className="text-xs text-zinc-400">You added 5 images</span>
						</div>
					</div>
					{new Array(3).fill(0).map(() => 
						<div className="flex">
							<img src={hashIcon} className="mr-2 h-3 w-3 mt-1" />
							<div className="flex flex-col">
								<span className="text-teal-600 text-sm flex">Project name 013</span>
								<span className="text-xs text-zinc-400">You retrained the models twice and gained 12% accuracy</span>
							</div>
						</div>
					)}
				</div>
			</div>

			<div className="flex flex-col p-5 justify-between">
				<div className="flex flex-col">
					<span className="text-sm mb-3">All Members</span>
					<div className="flex flex-wrap gap-2">
						{new Array(28).fill(0).map(() => 
							<div style={{ backgroundColor: `#${randomBg()}`}} className="flex items-center justify-center rounded-full aspect-square w-8 h-8 text-xs text-white">{randomString().slice(0,2)}</div>
						)}
					</div>
				</div>
			</div>

			</div>
			<div className="p-5">
				
				<img src={moonIcon} className="w-4 h-4" />
			</div>
		</div>
	)
}

export default Sidebar