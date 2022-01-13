import Home from "../components/Home/Home"
import Navbar from "../components/Navbar/Navbar"
import Slider from "../components/Slider/Slider"
import style from "./HomeWrapper.module.css"

const HomeWrapper = () => {
	return (
			<div>
		<Navbar/>
		<div className={style.homewrapper}>
				<Home/>
				<Slider/>
		</div>
		</div>
	)
}

export default HomeWrapper;