import { DateTime } from 'luxon'

export interface Post {
  id: string
  title: string
  created: any // To check the correct type
}

export interface TimelinePost extends Omit<Post, 'created'> {
  created: DateTime // Gives error due to no being able to use as type. Could be used either way.
}
