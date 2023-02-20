class UserTypes {

	/**
   * Create an instance of the "UserTypes" class.
   * 
   * @param {Object} data - The data to initialize the instance.
   * @param {string} data.id - User ID.
   * @param {Object} data.userInfos - Les informations de l'utilisateur.
   * @param {string} data.userInfos.firstName - The user's first name.
   * @param {string} data.userInfos.lastName - The user's last name.
   * @param {number} data.userInfos.age - The age of the user.
   * @param {number} data.todayScore - The user's total score.
   * @param {number} data.score - The user's total score.
   * @param {Object} data.keyData - The user's key data.
   * @param {number} data.keyData.calorieCount - The user's calorie count.
   * @param {number} data.keyData.proteinCount - The user's protein count.
   * @param {number} data.keyData.carbohydrateCount - The user's carb count.
   * @param {number} data.keyData.lipidCount - The user's lipid count.
   */

	constructor(data) {
		this.id = data.id;
		this.firstName = data.userInfos.firstName;
		this.lastName = data.userInfos.lastName;
		this.age = data.userInfos.age;
		this.todayScore = data.todayScore || data.score;
		this.calorie = data.keyData.calorieCount;
		this.proteine = data.keyData.proteinCount;
		this.glucide = data.keyData.carbohydrateCount;
		this.lipide = data.keyData.lipidCount;
	}
}

export default UserTypes