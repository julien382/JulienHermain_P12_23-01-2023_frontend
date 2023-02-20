class PerformanceTypes {

	/**
   * Create an instance of the "PerformanceTypes" class.
   * 
   * @param {Object} data - The data to initialize the instance.
   * @param {Array} data.data - Performance data.
   * @param {Object} data.kind - The type of performance.
   */

	constructor(data) {
		this.data = data.data;
    	this.kind = data.kind;
	}
}

export default PerformanceTypes