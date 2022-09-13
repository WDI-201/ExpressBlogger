
const validateUserData = (userData) => {
	console.log(userData)
	console.log(typeof(userData.email))


	if (userData.email === undefined || typeof(userData.email) !== "string") {
		// email is required and it must be a string
		return {
			isValid: false
		}
	} else if (userData.firstName === undefined || typeof(userData.firstName) !== "string") {
		// firstName is required and it must be a string
		return {
			isValid: false
		}
	} else if (userData.lastName === undefined || typeof(userData.lastName) !== "string") {
		// lastName is required and it must be a string
		return {
			isValid: false
		}
	} else if (userData.age !== undefined && typeof(userData.age) !== "number") {
		// age is NOT required, so first we check to see if it even exists before checking to see if the type is anything except 'number'
		return {
			isValid: false
		}
	} else if (userData.favoriteFoods !== undefined && Array.isArray(userData.favoriteFoods)) {
		// Array.isArray() will check to see if the variable is an array
		let isArrayValid = true;

		userData.favoriteFoods.forEach((food)=>{
			if (typeof(food) !== 'string') {
				isArrayValid = false
			}
		})

		if (isArrayValid === false) {
			return {
				isValid: false
			}
		}
		
	} else {
		return {
			isValid: true
		}
	}
}

module.exports = {
	// These two lines are equivalent because the variable name and the key for the object are the same name. Typically, we write the short-hand version.
	// validateUserData: validateUserData
	validateUserData,
}