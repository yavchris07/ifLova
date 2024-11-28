import Home from '../pages/home'
import About from '../pages/about'
import Contact from '../pages/contact'
import Login from '../pages/login'
import Main from '../pages/main'
import AdminArticle from '../pages/admin-article'
import AdminUser from '../pages/admin-user'

export const list = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/articles',
        element: <Contact />
    },
    {
        path: '/article/:id',
        element: <Contact />
    },
    {
        path: '/admin/login',
        element: <Login />
    },
    {
        path: '/admin/main',
        element: <Main />
    },
    {
        path: '/admin/main/articles',
        element: <AdminArticle />
    },
    {
        path: '/admin/main/user',
        element: <AdminUser />
    }
]