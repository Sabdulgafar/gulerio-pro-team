const activeStatus = {
    Active: "text-green-600",
    Inactive: "text-red-600",
    Away: "text-yellow-600"
}

function ProfileCards({name, role, isActive}){
    return(
        <div className="p-3 border-2 rounded-xl m-3 h-60 w-50">
            <div className="w-16 h-16 mx-auto block rounded-2xl bg-gray-300"></div>
            <h1 className="text-2xl">{name}</h1>
            <h1>{role}</h1>
            <p className={`${activeStatus[isActive]}`}>{isActive}</p>
        </div>
    )
}
export default ProfileCards