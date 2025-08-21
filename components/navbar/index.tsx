import Link from "next/link";
import { ReactNode } from "react";

type NavbarProps = {
    children?: ReactNode;
};

const NavItem = ({ children }: { children: ReactNode }) => {
    return (
        <li className="hover:scale-140 transition-all duration-300">
            {children}
        </li>
    );
};

const Navbar = ({ children }: NavbarProps) => {
    return (
        <div className=" ">
            <nav
                className="sticky top-0 left-0 right-0 z-50   p-10 bg-background  shadow-md
                    shadow-darkgreen-800/50
                   "
            >
                <ul
                    className="nav-links flex items-center justify-center gap-10 text-foreground 
                   
                "
                >
                    <NavItem>
                        <Link href="#about">O nama</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="#galeria">Galerija</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="#services">Usluge</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="#contact">Kontakt</Link>
                    </NavItem>
                </ul>
            </nav>
            <div className="">{children}</div>
        </div>
    );
};

export default Navbar;
