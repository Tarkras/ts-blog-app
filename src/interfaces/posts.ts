import { DateTime } from 'luxon'

export interface Post {
  id: string
  title: string
  created: any // To check the correct type
}

export interface TimelinePost extends Omit<Post, 'created'> {
  created: DateTime // Gives error due to no being able to use as type. Could be used either way.
}

// Hardcoded data to test.
export const today: Post = {
  id: '1',
  title: 'Today',
  created: DateTime.now().toISO()
}

export const thisWeek: Post = {
  id: '2',
  title: 'This week',
  created: DateTime.now().minus({ days: 5}).toISO()
}

export const thisMonth: Post = {
  id: '3',
  title: 'This month',
  created: DateTime.now().minus({ weeks: 3}).toISO()
}