class SessionsTypes {

	/**
   * Create an instance of the "SessionsTypes" class.
   * 
   * @param {Object} data - The data to initialize the instance.
   * @param {string} data.userId - User ID.
   * @param {Array} data.sessions - User sessions.
   */

	constructor(data) {
		this.id = data.userId;
		this.sessions = data.sessions;
	}
}

export default SessionsTypes