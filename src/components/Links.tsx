/* eslint-disable */
import { Link, useLocation } from "react-router-dom";
import { AiOutlineDash } from "react-icons/ai";
// chakra imports

export const SidebarLinks = (props: { routes: any }): JSX.Element => {
    // Chakra color mode
    let location = useLocation();

    const { routes } = props;

    // verifies if routeName is the one active (in browser input)
    const activeRoute = (routeName: string) => {
        return location.pathname.includes(routeName);
    };

    const createLinks = (routes: any) => {
        return routes.map((route: any, index: number) => {
            if (
                route.layout === "/dashboard" ||
                route.layout === "/auth" ||
                route.layout === "/rtl"
            ) {
                return (
                    <Link key={index} to={route.layout + "/" + route.path}>
                        <div className="relative mb-3 flex hover:cursor-pointer">
                            <li
                                className="my-[3px] flex cursor-pointer items-center px-8 text-md mb-3"
                                key={index}
                            >
                                <span
                                    className={`${
                                        activeRoute(route.path) === true
                                            ? "font-bold text-white"
                                            : "font-thin text-white"
                                    }`}
                                >
                                    {route.icon ? (
                                        route.icon
                                    ) : (
                                        <AiOutlineDash />
                                    )}{" "}
                                </span>
                                <p
                                    className={`leading-1 ml-4 flex ${
                                        activeRoute(route.path) === true
                                            ? "font-bold text-white"
                                            : "font-thin text-white"
                                    }`}
                                >
                                    {route.name}
                                </p>
                            </li>
                            {activeRoute(route.path) ? (
                                <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
                            ) : null}
                        </div>
                    </Link>
                );
            }
        });
    };
    // BRAND
    return <>{createLinks(routes)}</>;
};

export default SidebarLinks;
