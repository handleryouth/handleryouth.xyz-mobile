import { ComponentType } from 'react'

import { About, Home, Project, Resume } from '../screens'

export interface RouteProps {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ComponentType<any>
  icon: string
}

export const routesDirectory: RouteProps[] = [
  {
    name: 'Home',
    component: Home,
    icon: 'home',
  },
  {
    name: 'Project',
    component: Project,
    icon: 'book-multiple',
  },
  {
    name: 'Resume',
    component: Resume,
    icon: 'file-document',
  },
  {
    name: 'About',
    component: About,
    icon: 'account-supervisor-circle',
  },
]
