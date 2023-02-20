class ActivityTypes {

	/**
   * Crée une instance de la classe "ActivityTypes".
   * 
   * @param {Object} data - Les données pour initialiser l'instance.
   * @param {string} data.userId - L'ID de l'utilisateur.
   * @param {Array} data.sessions - Les sessions d'activité de l'utilisateur.
   */

	constructor(data) {
		this.id = data.userId;
		this.sessions = data.sessions;
	}
}

export default ActivityTypes