
// Note: If we have a function, we want to return similar values for all possible return cases.
const validateUserData = (userData) => {

	if (userData.email === undefined || typeof(userData.email) !== "string") {
		// email is required and it must be a string
		return {
			isValid: false,
			message: "Email is required and it must be a string"
		}
	} 
	
	if (userData.firstName === undefined || typeof(userData.firstName) !== "string") {
		// firstName is required and it must be a string
		return {
			isValid: false,
			message: "First name is required and it must be a string"
		}
	}
	
	if (userData.lastName === undefined || typeof(userData.lastName) !== "string") {
		// lastName is required and it must be a string
		return {
			isValid: false,
			message: "Last name is required and it must be a string"
		}
	} 

	if (userData.age !== undefined && typeof(userData.age) !== "number") {
		// age is NOT required, so first we check to see if it even exists before checking to see if the type is anything except 'number'
		return {
			isValid: false,
			message: "Age must be a number"
		}
	} 

	// Since all array's in JS are objects behind the scenes, typeof(array) will return 'object'. So in order to verify that the variable is actually an array, we have to do the Array.isArray() check.
	if (userData.favoriteFoods === undefined || !Array.isArray(userData.favoriteFoods) || userData.favoriteFoods.length === 0) {
		return {
			isValid: false,
			message: "favorite foods must be an array and must have length"
		}
	} 

	let isArrayStrings = true;

	userData.favoriteFoods.forEach((favoriteFood)=>{
		if (typeof(favoriteFood) !== 'string') {
			isArrayStrings = false;
		}
	})

	if (isArrayStrings === false) {
		return {
			isValid: false,
			message: "favorite foods must be an array of strings"
		}
	}

	return {
		isValid: true
	}
}

module.exports = {
	// These two lines are equivalent because the variable name and the key for the object are the same name. Typically, we write the short-hand version.
	// validateUserData: validateUserData
	validateUserData,
}