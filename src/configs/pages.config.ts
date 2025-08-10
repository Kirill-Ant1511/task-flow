export class Pages {
	static HOME = '/'
	static BASE = '/dashboard'
	static MESSAGES = Pages.BASE + '/messages'
	static PROJECTS = Pages.BASE + '/projects'
	static TASKS = Pages.BASE + '/tasks'
	static SCHEDULE = Pages.BASE + '/schedule'
	static ACTIVITY = Pages.BASE + '/activity'
	static TEAM = Pages.BASE + '/my-team'
	static AUTH_BASE = '/auth'
	static SIGNIN = Pages.AUTH_BASE + '/signin'
	static SIGNUP = Pages.AUTH_BASE + '/signup'
	static TASKS_EDIT(id: string) {
		return Pages.TASKS + `/${id}`
	}
	static PROJECTS_EDIT(id: string) {
		return Pages.PROJECTS + `/${id}/edit`
	}
}
