import {Login} from "../login/Login";
import {Warehouses} from "../warehouses/Warehouses";
import {Home} from "../home/Home";
import {Account} from "../account/Account";
import {Cards} from "../cards/Cards";
import {Contacts} from "../contacts/Contacts";
import {Chat} from "../chat/Chat";



type RoutesType = {
    path: string
    component: React.ReactNode
}

export const publicRoutes:RoutesType[] = [
    {
        path: "*",
        component: Login,
    },
    {
        path: "/login",
        component: Login,
    },
]

export const privateRoutes:RoutesType[] = [
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/service",
        component: Home,
    },
    {
        path: "/clients",
        component: Home,
    },
    {
        path: "/contact",
        component: Home,
    },
]

export const mainRoutes:RoutesType[] = [
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/warehouses",
        component: Warehouses,
    },
    {
        path: "/accounts",
        component: Account,
    },
    {
        path: "/cards",
        component: Cards,
    },
    {
        path: "/contacts",
        component: Contacts,
    },
    {
        path: "/chat",
        component: Chat,
    },
]
