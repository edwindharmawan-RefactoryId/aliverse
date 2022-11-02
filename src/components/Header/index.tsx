import appLogo from "../../assets/appLogo.png"
import scopeIcon from "../../assets/icon/scopeIcon.png"
import notifIcon from "../../assets/icon/notifIcon.png"

interface Iprops {
	name: string,
	bgColor: string
}

const Header = (props: Iprops) => {
	const { name, bgColor } = props
	return (
		<div className='bg-[#144442] h-14 px-5 flex items-center justify-between text-white'>
			<div className="flex gap-5 text-sm items-center">
				<img
					className="rounded-full w-8"
					src={appLogo}
				/>
				<div className="flex w-52 bg-[#2c5e5d] h-10 px-4 rounded items-center">
					<img
						src={scopeIcon}
						alt="scope icon"
						className="w-4 h-5"
					/>
					<input placeholder="Search" className="w-full bg-transparent p-1 ml-2 placeholder:text-white text-xs"  />
				</div>
				<span className="cursor-pointer">Projects</span>
				<span className="cursor-pointer">Dashboard</span>
				<span className="cursor-pointer">Domains</span>
			</div>
			<div className="flex gap-5 items-center">
				<div>
					<img src={notifIcon} className="w-5" />
				</div>
				<div style={{ backgroundColor: bgColor}} className="flex items-center justify-center bg-[$] rounded-full aspect-square w-8 h-8 text-xs text-white">{name.slice(0,2).toUpperCase()}</div>
			</div>
		</div>
	)
}

export default Header