import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom"

const Header = () => {
	const [cookies, setCookie, removeCookie] = useCookies(['authtoken', 'email', 'name', 'user'])
	const history = useHistory()
	const logOut = () => {
		removeCookie('name')
		removeCookie('email')
		removeCookie('authtoken')
		removeCookie('user')
		history.push('/')
	}
	const backBtn = () => {
		history.goBack()
	}
	return (
		<div className="container header-container">

			<img className="img-png-logo" src="/assets/BrainStrmLogo.png" alt="brainStrm Logo" /> 


			<div className="btn btn-primary text-white" onClick={backBtn}> Back</div>
			{cookies.name &&
				<Link to="/create"><div className="btn btn-success text-white">Create</div></Link>
			}
			{cookies.name &&
				<div className="btn btn-danger text-white" onClick={logOut}>{cookies.name} LogOut</div>
			}
			{!cookies.name &&
				<Link to="/login"><div className="btn btn-success text-white">Login</div></Link>
			}
		</div>
	)
}

export default Header
