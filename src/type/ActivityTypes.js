class ActivityTypes {

	constructor(data) {
		this.id = data.userId;
		this.sessions = data.sessions;
		this.day = data.sessions.day;
		this.kilogram = data.sessions.kilogram;
		this.calories = data.sessions.calories;
		console.log(data.sessions.calories);
	}
}

export default ActivityTypes