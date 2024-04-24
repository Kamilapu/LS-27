import { LogoIcon } from "../../icons/Logo/LogoIcon"
import { Link } from "react-router-dom"


export const Sidebar = () => {
	return (
		<div className="sidebar">
			<Link to="/"> <LogoIcon /></Link>

			<ul className="navigation">
				<li>
					<Link className="nav-link" to="/"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M19.82 2H4.18C2.97602 2 2 2.97602 2 4.18V19.82C2 21.024 2.97602 22 4.18 22H19.82C21.024 22 22 21.024 22 19.82V4.18C22 2.97602 21.024 2 19.82 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M7 2V22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M17 2V22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M2 12H22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M2 7H7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M2 17H7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M17 17H22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M17 7H22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
						Home</Link>
				</li>

				<li >
					<Link className="nav-link" to="/favorites"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M20.8401 4.60999C20.3294 4.099 19.7229 3.69364 19.0555 3.41708C18.388 3.14052 17.6726 2.99817 16.9501 2.99817C16.2276 2.99817 15.5122 3.14052 14.8448 3.41708C14.1773 3.69364 13.5709 4.099 13.0601 4.60999L12.0001 5.66999L10.9401 4.60999C9.90843 3.5783 8.50915 2.9987 7.05012 2.9987C5.59109 2.9987 4.19181 3.5783 3.16012 4.60999C2.12843 5.64169 1.54883 7.04096 1.54883 8.49999C1.54883 9.95903 2.12843 11.3583 3.16012 12.39L4.22012 13.45L12.0001 21.23L19.7801 13.45L20.8401 12.39C21.3511 11.8792 21.7565 11.2728 22.033 10.6053C22.3096 9.93789 22.4519 9.22248 22.4519 8.49999C22.4519 7.77751 22.3096 7.0621 22.033 6.39464C21.7565 5.72718 21.3511 5.12075 20.8401 4.60999V4.60999Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
						Favorite</Link>
				</li>

				<li >
					<Link className="nav-link" to="/trending"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M17 6H23V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
						Trending </Link>
				</li>

				<li > <Link className="nav-link" to="/"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M16 2V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M8 2V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M3 10H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
					Coming soon</Link> </li>
			</ul>

			<ul className="social">
				<li ><Link className="nav-link" to="/"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M23 20.9999V18.9999C22.9993 18.1136 22.7044 17.2527 22.1614 16.5522C21.6184 15.8517 20.8581 15.3515 20 15.1299" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
					Community</Link></li>

				<li ><Link className="nav-link" to="/"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
					Social</Link></li>
			</ul>

			<ul className="setting">
				<li ><Link className="nav-link" to="/"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M4 21V14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M4 10V3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M12 21V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M12 8V3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M20 21V16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M20 12V3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M1 14H7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M9 8H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M17 16H23" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
					Settings</Link></li>

				<li ><Link className="nav-link" to="/"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M16 17L21 12L16 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M21 12H9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
					Logout</Link></li>
			</ul>

		</div>
	)
}
