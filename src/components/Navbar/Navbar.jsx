import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<div className="fixed top-0 left-0 w-full z-50">
				{/* Notice */}
				<div className="w-full bg-primary">
					<div className="notice container mx-auto max-w-7xl flex justify-between items-center text-white p-2 py-3">
						<div className="notice-start flex justify-center items-center">
							<p className="mr-2 text-lg">Follow Us: </p>
							<button className="btn bg-[#ffffff12] border-[#ffffff57]">
								<i className="fa-brands fa-instagram text-white text-base"></i>
							</button>
							<button className="btn bg-[#ffffff12] border-[#ffffff57]">
								<i className="fa-brands fa-x-twitter text-white text-base"></i>
							</button>
							<button className="btn bg-[#ffffff12] border-[#ffffff57]">
								<i className="fa-brands fa-facebook-f text-white text-base"></i>
							</button>
						</div>
						<p className="notice-middle text-lg">Sign up to get 20% off for all collection</p>
						<div className="notice-end flex justify-center items-center">
							<i className="fa-light fa-phone mr-2 text-lg"></i>
							<p className="mr-2 text-lg">1 (100) 234 - 56789</p>
						</div>
					</div>
				</div>

				{/* Navbar */}
				<div className="navbar bg-transparent container mx-auto max-w-7xl text-base-200">
					<div className="navbar-start">
						<div className="dropdown">
							<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
								<li>
									<a>Item 1</a>
								</li>
								<li>
									<a>Parent</a>
									<ul className="p-2">
										<li>
											<a>Submenu 1</a>
										</li>
										<li>
											<a>Submenu 2</a>
										</li>
									</ul>
								</li>
								<li>
									<a>Item 3</a>
								</li>
							</ul>
						</div>
						<a className="text-3xl font-bold">LuxeLiving</a>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal px-1 text-lg">
							<li>
								<NavLink to="/" className={({ isActive }) => (isActive ? "underline underline-offset-8" : "")}>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/products"
									className={({ isActive }) => (isActive ? "underline underline-offset-8" : "")}>
									Products
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/categories"
									className={({ isActive }) => (isActive ? "underline underline-offset-8" : "")}>
									Categories
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/about"
									className={({ isActive }) => (isActive ? "underline underline-offset-8" : "")}>
									About Us
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/contact"
									className={({ isActive }) => (isActive ? "underline underline-offset-8" : "")}>
									Contact Us
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/blog"
									className={({ isActive }) => (isActive ? "underline underline-offset-8" : "")}>
									Blog
								</NavLink>
							</li>
						</ul>
					</div>
					<div className="navbar-end">
						<i className="fa-thin fa-magnifying-glass btn btn-sm btn-circle btn-ghost text-xl mx-1"></i>
						<i className="fa-thin fa-heart btn btn-sm btn-circle btn-ghost text-xl mx-1"></i>
						<i className="fa-thin fa-cart-shopping btn btn-sm btn-circle btn-ghost text-xl mx-1"></i>
						<i className="fa-thin fa-user btn btn-sm btn-circle btn-ghost text-xl mx-1"></i>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
