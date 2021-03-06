import IRoute from "../interfaces/route";
import StartPage from "../pages/start";
import HomePage from "../pages/home";
import PetsPage from "../pages/pets";
import PetPage from "../pages/pet"
import NewPetPage from "../pages/new"
import CalendarPage from "../pages/calendar"
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup"


const authRoutes: IRoute[] = [
    {
        name: 'Login',
        path: '/login',
        exact: true,
        component: LoginPage,
        // auth: false
    },
    {
        name: 'Sign Up',
        path: '/register',
        exact: true,
        component: SignupPage,
        // auth: false
    }
];

const ownerRoutes: IRoute[] = [
    {
        name: 'Pets',
        path: '/pets',
        exact: true,
        component: PetsPage,
        // auth: true
    },
    {
        name: 'Add',
        path: '/newpet',
        exact: true,
        component: NewPetPage,
        // auth: false
    },
    {
        name: 'Pet',
        path: '/pets/:petname',
        exact: true,
        component: PetPage,
        // auth: false
    },
    {
        name: 'Calendar',
        path: '/calendar',
        exact: true,
        component: CalendarPage,
        // auth: false
    }
]

const mainRoutes: IRoute[] = [
    {
        name: 'Home',
        path: '/home',
        exact: true,
        component: HomePage,
        // auth: false
    },
    {
        name: 'Start',
        path: '/',
        exact: true,
        component: StartPage,
        // auth: false
    }
]

const routes: IRoute[] = [...authRoutes, ...ownerRoutes, ...mainRoutes];

export default routes