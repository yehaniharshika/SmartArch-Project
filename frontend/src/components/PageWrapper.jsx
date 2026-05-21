import Navbar from "./NavBar";

export default function PageWrapper({
    children,
    showFooter = true,
    navTransparent = false,
    className = "",
}) {
    return (
        <div className="min-h-screen flex flex-col bg-arch-cream">
            <Navbar transparent={navTransparent} />
            <main className={`flex-1 pt-16 ${className}`}>
                <div className="page-enter">{children}</div>
            </main>
            {showFooter && (
                <footer className="bg-stone-900 text-arch-cream text-center py-4">
                    &copy; {new Date().getFullYear()} SmartArch. All rights reserved.
                </footer>
            )}
        </div>
    );
}