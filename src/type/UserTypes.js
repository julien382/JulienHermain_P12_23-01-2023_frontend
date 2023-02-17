class UserTypes {
	firstName
	lastName
	age

	constructor({firstName, lastName, age}) {
		console.log(firstName);
		this.firstName = firstName
		this.lastName = lastName
		this.age = age
	}
}

export default UserTypes