export default [{
        path: '/',
        view: 'Home'
    },
    {
        path: '/login',
        view: 'Login'
    },
    {
        path: '/:pathMatch(.*)*', //will match everything and put it under `$route.params.pathMatch`
        view: 'NotFound'
    }
]