
const validateBlogData = (blogData) => {

	if (blogData.title === undefined || typeof(blogData.title) !== "string" || blogData.title.length > 40) {
		// title is required and it must be a string
		return {
			isValid: false,
			message: "title is required and it must be a string and must be less than 40 characters"
		}
	} 
	
	if (blogData.text === undefined || typeof(blogData.text) !== "string") {
		// text is required and it must be a string
		return {
			isValid: false,
			message: "Text is required and it must be a string "
		}
	}
	
	if (blogData.author === undefined || typeof(blogData.author) !== "string" || blogData.author.length > 40) {
		// author is required and it must be a string
		return {
			isValid: false,
			message: "Author is required and it must be a string and must be less than 40 characters"
		}
	} 
	
	return {
		isValid: true
	}
}

module.exports = {
	validateBlogData,
}