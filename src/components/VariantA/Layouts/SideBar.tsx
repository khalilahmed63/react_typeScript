import React from "react";
import { Link } from "react-router-dom";

export default function SideBar(props : any) {
  // const router = useRouter();

  return (
    <div className="">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <aside
        id="default-sidebar"
        className="fixed top-20 left-0 z-40 hidden md:block w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-[0.0625rem] border-[#2C2E33]"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-10 overflow-y-auto">
          <ul className="space-y-2">
            <li>
              <Link to="/">
                <p
                  className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-100 hover:text-gray-900 text-gray-900 bg-gray-100"
                // className={`flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-100 hover:text-gray-900 ${
                //   router.pathname.endsWith("/") && "text-gray-900 bg-gray-100"
                // }`}
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-500 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                  <span className="ml-3">Dashboard</span>
                </p>
              </Link>
            </li>

            <li>
              <Link to="/projects">
                <p
                  className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-100 hover:text-gray-900 text-gray-900 bg-gray-100"
                // className={`flex items-center p-2 text-base font-normal  hover:text-gray-900 rounded-lg  hover:bg-gray-100 ${
                //   router.pathname.endsWith("/devices") &&
                //   "text-gray-900 bg-gray-100"
                // }`}
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Projects</span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full ">
                    3
                  </span>
                </p>
              </Link>
            </li>
            <li>
              <Link to="/device-group">
                <p
                  className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-100 hover:text-gray-900 text-gray-900 bg-gray-100"
                // className={`flex items-center p-2 text-base font-normal  hover:text-gray-900 rounded-lg  hover:bg-gray-100 ${
                //   router.pathname.endsWith("/devices") &&
                //   "text-gray-900 bg-gray-100"
                // }`}
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Device Group</span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full ">
                    3
                  </span>
                </p>
              </Link>
            </li>
            <li>
              <Link to="/vendors">
                <p
                  className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-100 hover:text-gray-900 text-gray-900 bg-gray-100"
                // className={`flex items-center p-2 text-base font-normal  hover:text-gray-900 rounded-lg  hover:bg-gray-100 ${
                //   router.pathname.endsWith("/devices") &&
                //   "text-gray-900 bg-gray-100"
                // }`}
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Vendors</span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full ">
                    3
                  </span>
                </p>
              </Link>
            </li>
            <li>
              <Link to="/devices">
                <p
                  className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-100 hover:text-gray-900 text-gray-900 bg-gray-100"
                // className={`flex items-center p-2 text-base font-normal  hover:text-gray-900 rounded-lg  hover:bg-gray-100 ${
                //   router.pathname.endsWith("/devices") &&
                //   "text-gray-900 bg-gray-100"
                // }`}
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Devices</span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full ">
                    3
                  </span>
                </p>
              </Link>
            </li>
            <li>
              <Link to="/provision">
                <p
                  className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-100 hover:text-gray-900 text-gray-900 bg-gray-100"
                // className={`flex items-center p-2 text-base font-normal rounded-lg hover:text-black hover:bg-gray-100 ${
                //   router.pathname.endsWith("/provision") &&
                //   "text-gray-900 bg-gray-100"
                // }`}
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Provision
                  </span>
                </p>
              </Link>
            </li>
            <li>
              <Link to="/reports">
                <p
                  className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-100 hover:text-gray-900 text-gray-900 bg-gray-100"
                // className={`flex items-center p-2 text-base font-normal rounded-lg hover:text-black hover:bg-gray-100 ${
                //   router.pathname.endsWith("/projects") &&
                //   "text-gray-900 bg-gray-100"
                // }`}
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Reports
                  </span>
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">{props.children}</div>
    </div>
  );
}
