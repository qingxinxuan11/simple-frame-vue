const Home = resolve => require(['@/pages/home/home'], resolve)
const List = resolve => require(['@/pages/List/List'], resolve)
const User = resolve => require(['@/pages/User/User'], resolve)

let homeRouter = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/list',
    name: 'List',
    component: List,
    meta: {
      requiredAuth: true
    }
  }
]

export default homeRouter
