interface Iprops {
	title: string,
}
const Story = (props: Iprops) => {
	return (
		<div className='flex flex-col text-xs w-[300px] gap-2'>
			<p>{props.title}</p>
			<div className="flex flex-col devide-y devide-gray-300">
				{new Array(5).fill(0).map((e, i) => 
					<div className="flex">
						<div className="flex justify-start absolute bg-[#c3e5e2] text-lg z-10 w-2 h-2 rounded-full" />
						<div className="border-l-[1px] border-[#c3e5e2] pl-3 ml-[3px] relative pt-1 h-16">
							<p className="text-xs text-primaryText">Yesterday</p>
							<p className="mt-1 text-sm">User A added you to Project X</p>
							<div className="h-2 w-2 rounded-full bg-darkCyanAV absolute top-[-2px] left-[-5px]" />
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Story