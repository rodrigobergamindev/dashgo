import Link, {LinkProps} from "next/link"
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from 'react'

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    shouldMatchExacthref?: boolean;
}

export default function ActiveLink({children, shouldMatchExacthref = false, ...rest}: ActiveLinkProps) {

    const {asPath} = useRouter()

    let isActive = false;

    if(shouldMatchExacthref && (asPath === rest.href || asPath === rest.as)) {
        isActive = true;
    }

    if(!shouldMatchExacthref && (asPath.startsWith(String(rest.href)) ||  asPath.startsWith(String(rest.as)))) {
        isActive = true;
    }

    return (
        <Link {...rest}>
            {cloneElement(children, {color: isActive ? 'pink.400': 'gray.50' } )}
        </Link>
    )
}