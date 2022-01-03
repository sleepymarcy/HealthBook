import IRoute from "../interfaces/route";
import HomePage from "../pages/home";
import PetsPage from "../pages/pets";
import PetPage from "../pages/pet"
import NewPetPage from "../pages/new"
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
    }
]

const mainRoutes: IRoute[] = [
    {
        name: 'Home',
        path: '/',
        exact: true,
        component: HomePage,
        // auth: false
    }
]

const routes: IRoute[] = [...authRoutes, ...ownerRoutes, ...mainRoutes];

export default routes