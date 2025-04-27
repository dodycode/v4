import menus from "~/collections/menu.json";
import { ThemeToggle } from "./theme-toggle";
import { HeaderContainer } from "./header-container";

export const Header: React.FC = () => {
  return (
    <>
      {/*  This is an invisible div with relative position so that it takes up the height of the menu (because menu is absolute/fixed)  */}
      <div className="pointer-events-none relative h-20 w-full opacity-0" />
      <HeaderContainer>
        <div className="3xl:max-w-6xl 3xl:px-0 mx-auto flex h-full max-w-5xl items-center justify-between border-r-0 border-b border-l-0 border-transparent pr-4 pl-6 select-none lg:rounded-b-xl lg:border-r lg:border-l">
          <a
            href="/"
            className="group relative z-30 flex h-5 items-center space-x-1.5 text-base font-semibold text-black dark:text-white"
          >
            <span className="-translate-y-0.5"> dodycode</span>
          </a>
          <div
            id="mobileMenuBackground"
            className="fixed inset-0 z-20 hidden h-screen w-screen bg-white/90 duration-300 ease-out dark:bg-neutral-950/90"
          ></div>
          <nav className="relative z-30 flex w-full flex-row-reverse justify-start text-sm text-neutral-500 sm:flex-row sm:justify-end dark:text-neutral-400">
            <div
              id="openMenu"
              className="ml-4 flex h-6 w-6 cursor-pointer flex-col items-end justify-center sm:hidden"
            >
              <svg
                className="h-8 w-8 dark:text-neutral-200"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 8h16M4 16h16"></path>
              </svg>
            </div>
            <div
              id="closeMenu"
              className="ml-4 hidden h-6 w-6 -translate-x-1 cursor-pointer flex-col items-end justify-center sm:hidden"
            >
              <svg
                className="h-6 w-6 text-neutral-600 dark:text-neutral-200"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <div
              id="menu"
              className="dm:mx-0 fixed top-[75px] left-0 z-40 hidden h-auto w-full flex-col items-end justify-start pt-7 pb-4 text-sm duration-300 ease-out sm:relative sm:top-0 sm:flex sm:h-auto sm:w-auto sm:flex-row sm:py-0 sm:pt-0 sm:pr-0 sm:text-sm"
            >
              <div className="absolute inset-0 top-0 right-0 block h-full w-full px-3 sm:hidden">
                <div className="relative h-full w-full rounded-xl border border-dashed border-neutral-300 bg-white backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-950"></div>
              </div>
              {menus.map((menu) => {
                return (
                  <a
                    key={menu.url}
                    href={menu.url}
                    className="relative flex w-full items-center justify-center px-3 py-2 text-center font-medium tracking-wide duration-200 ease-out hover:text-neutral-900 sm:mb-0 sm:py-0 md:w-auto dark:hover:text-white"
                  >
                    {menu.name}
                  </a>
                );
              })}
            </div>

            <ThemeToggle />
          </nav>
        </div>
      </HeaderContainer>
    </>
  );
};
