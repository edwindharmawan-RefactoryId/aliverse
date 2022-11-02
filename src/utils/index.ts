export const randomBg = () => {
	return Math.floor(Math.random()*16777215).toString(16)
};
export const randomString = () => {
	return (Math.random() + 1).toString(36).substring(10)
};