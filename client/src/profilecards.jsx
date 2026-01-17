const activeStatus = {
    Active: "bg-green-600 text-white py-0.5 rounded-md",
    Inactive: "bg-red-600 text-white py-0.5 rounded-md",
    Away: "bg-yellow-600 text-white py-0.5 rounded-md"
}

function ProfileCards({avatar, name, role, isActive}){
    return(
        <div className="bg-gray-300 w-60 h-max p-3 max-sm:mx-auto max-sm:block rounded-3xl my-4">
            <img className="w-60 h-60 mx-auto block rounded-2xl" src={avatar}/>
        <div className="mt-4 text-left">
            <h1 className="text-3xl">{name}</h1>
            <h1 className="my-2">{role}</h1>
            <p className={`${activeStatus[isActive]} text-xl text-center`}>{isActive}</p>
        </div>
        </div>
    )
}
export default ProfileCards