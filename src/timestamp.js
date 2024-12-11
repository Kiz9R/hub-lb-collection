const timestamp = ()=>{
    const now = new Date();
		const formattedDate = now.getFullYear() + '-' +
					String(now.getMonth() + 1).padStart(2, '0') + '-' +
					String(now.getDate()).padStart(2, '0') + ' ' +
					String(now.getHours()).padStart(2, '0') + ':' +
					String(now.getMinutes()).padStart(2, '0') + ':' +
					String(now.getSeconds()).padStart(2, '0') + '.' +
					String(now.getMilliseconds()).padStart(3, '0');

		const timezoneOffset = -now.getTimezoneOffset();
		const offsetSign = timezoneOffset >= 0 ? '+' : '-';
		const offsetHours = String(Math.floor(Math.abs(timezoneOffset) / 60)).padStart(2, '0');
		const offsetMinutes = String(Math.abs(timezoneOffset) % 60).padStart(2, '0');
		const formattedTimezoneOffset = `${offsetSign}${offsetHours}:${offsetMinutes}`;

		const updatedAt = `${formattedDate}${formattedTimezoneOffset}`;

		return updatedAt;
}

module.exports = timestamp;