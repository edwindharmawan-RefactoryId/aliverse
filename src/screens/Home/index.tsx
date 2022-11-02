import { randomBg, randomString } from "../../utils"
import { Header, Sidebar, Card } from '../../components'
import banner from '../../assets/banner.png'
import foldericon from '../../assets/icon/foldericon.png'

const Home = () => {

  return (
		<div className='flex-1 h-screen w-screen'>
			{/* HEADER */}
			<Header
				name="Burhan UI Tayyab"
				bgColor={`#${randomBg()}`}
			/>

			<div className='flex h-full'>
				{/* SIDE BAR */}
				<Sidebar
					name="Burhan UI Tayyab"
					bgColor={`#${randomBg()}`}
					memberStatus="Pro Member"
					totalProjects={25}
				/>

				{/* PAGE */}
				<div className='flex flex-col gap-2 p-5'>
					<img src={banner} className="h-[150px] w-[1200px] rounded-md" alt="" />
					<div className='flex gap-5'>
						<div className='flex flex-col gap-2'>
							<div className="flex items-center">
								<img
									className="w-3 h-3 mr-2"
									src={foldericon}
								/>
								<p className="text-sm">Projects</p>
							</div>
							<div className="flex text-sm gap-2 flex-wrap">
								<input type="text" className='w-[300px] p-1 border border-gray-300 rounded-md' placeholder="Project Name, Owner, AI Model" />
								<select className="w-[80px] p-1 border border-gray-300 rounded-md bg-slate-50 px-2">
									<option value="Type">Type</option>
								</select>
								<select className="w-[80px] p-1 border border-gray-300 rounded-md bg-slate-50 px-2">
									<option value="Type">Model</option>
								</select>
								<select className="w-[80px] p-1 border border-gray-300 rounded-md bg-slate-50 px-2">
									<option value="Type">Sort</option>
								</select>
								<button className="bg-[#069589] text-white rounded-md px-3">Create New</button>
							</div>
							<div className="flex flex-col border border-gray-300 divide-y devide-gray-300 overflow-auto" style={{ maxHeight: "60vh"}}>
								{/* card */}
								{new Array(50).fill(0).map((e, i) => 
									<Card
										key={i}
										name={randomString()}
										projectName={"Project" + (i + 1)}
										updatedtime="Updated Yesterday"
										activity="I want to detect workers wearing helmet, goggles, and safety jacket"
										image="https://customercare.igloosoftware.com/.api2/api/v1/communities/10068556/previews/thumbnails/4fc20722-5368-e911-80d5-b82a72db46f2?width=680&height=680&crop=False"
									/>
								)}
							</div>
						</div>
						<div className='flex flex-col text-xs w-[300px] gap-2'>
							<p>Recent Activity</p>
							<div className="flex flex-col devide-y devide-gray-300 gap-4">
								{new Array(5).fill(0).map((e, i) => 
									<div className="flex">
										<span className="mr-5">•</span>
										<div className="flex flex-col">
											<span className="text-zinc-400">Yesterday</span>
											<span>User A added you to Project X</span>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home