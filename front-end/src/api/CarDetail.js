// this will fetch the vehicle for the first time
export const fetchVehicle = async (id) => {
    let res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/vehicles/getVehiclesById/${id}`, {
        credentials: 'include'
    })

    let result = await res.json()
    return result.data
}

// this will upadte the vehicle rating
export const updateVehicleRating = async ({ id, starValue }) => {
    let res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/vehicles/addRating/${id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            rating: starValue
        })
    })

    let result = await res.json()
    console.log(result)
}

// this api will add the vehicle comment 
export const addVehicleComment = async (id, comment) => {
    let res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/vehicles/addComment`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            vehicleId: id,
            comment
        })
    })

    let result = await res.json()
    console.log(result)
}