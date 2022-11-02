const Home = (props: { children: any }) => {
  return (
		<>
			<div className='bg-red-400'>HEADER</div>
			<div>SIDEBAR</div>
			{props.children}
			<div>HOME</div>
		</>
	)
}

export default Home