class Performance {

	/**
   * Crée une instance de la classe "Performance".
   * 
   * @param {Object} data - Les données pour initialiser l'instance.
   * @param {Array} data.data - Les données de performance.
   * @param {Object} data.kind - Le type de performance.
   */

	constructor(data) {
		this.data = data.data;
    	this.kind = data.kind;
	}
}

export default Performance