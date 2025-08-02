import { differenceInCalendarDays, format } from 'date-fns'

export function daysLeft(dueDate: Date): number {
	const today = new Date()
	const daysLeft = differenceInCalendarDays(dueDate, today)
	return daysLeft
}

export function formatDate(date: Date): string {
	return format(date, 'MM/dd/yyyy')
}
