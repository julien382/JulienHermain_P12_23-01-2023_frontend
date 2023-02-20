class UserTypes {

	/**
   * Crée une instance de la classe "UserTypes".
   * 
   * @param {Object} data - Les données pour initialiser l'instance.
   * @param {string} data.id - L'ID de l'utilisateur.
   * @param {Object} data.userInfos - Les informations de l'utilisateur.
   * @param {string} data.userInfos.firstName - Le prénom de l'utilisateur.
   * @param {string} data.userInfos.lastName - Le nom de famille de l'utilisateur.
   * @param {number} data.userInfos.age - L'âge de l'utilisateur.
   * @param {number} data.todayScore - Le score total de l'utilisateur.
   * @param {number} data.score - Le score total de l'utilisateur.
   * @param {Object} data.keyData - Les données clés de l'utilisateur.
   * @param {number} data.keyData.calorieCount - Le nombre de calories de l'utilisateur.
   * @param {number} data.keyData.proteinCount - Le nombre de protéines de l'utilisateur.
   * @param {number} data.keyData.carbohydrateCount - Le nombre de glucides de l'utilisateur.
   * @param {number} data.keyData.lipidCount - Le nombre de lipides de l'utilisateur.
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