// i intend to use this constant to create the nav link using .map() method
const navLinks = [
    {name: "Projects", href: "#"},
    {name: "Portfolio", href: "#"},
    {name: "Vision", href: "#"},
    {name: "Contact", href: "#"}
];

function NavBar(){
    return(
        <div className="my-1 flex flex-3 justify-evenly bg-gray-200 p-3 rounded-sm">
            <div>
                {/* this section is for the brand name and logo */}
                <span className="mx-2 rounded-md bg-blue-300 px-2.5 py-1.5 text-xl">G</span><span>Gulerio</span>
            </div>
            <div>
                {/* I used the map method to parse the navlinks into the link elements */}
                <ul className="mt-1 flex list-none justify-center text-blue-600 decoration-0">
                    {navLinks.map((Links)=>(
                        <a
                        key={Links.name}
                        href={Links.href}
                        className="mx-1"
                        >{Links.name}</a>
                    ))}
                </ul>
            </div>
            <div>
                <button className="-mt-1 rounded-md bg-blue-300 px-2.5 py-1.5">Connect</button>
            </div>
        </div>
    )

}

export default NavBar;