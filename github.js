class GitHub {
	constructor() {
		this.client_id = '496da900c58201cb930b';
		this.client_secret = 'ec1d7f885cebb9e951f8bfc1b046d3e11aade88b';
		this.repos_count = 5;
		this.repos_sort = 'created_at: asc';
	}

	async getUser(user) {
		const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
		const repoResponse = await fetch (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


		const profile = await profileResponse.json();
		const repos = await repoResponse.json();
		console.log(repos);
		return {
			// profile: profile  in ES6 u can do just below
			profile,
			repos,


		}
	}
}