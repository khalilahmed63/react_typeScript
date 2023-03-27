/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Loader, Breadcrumbs, Button, Title, Input, Table, Anchor } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { BiSearch } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import Main from '../Layouts/Main';
import SecuredRoute from '../Layouts/SecuredRoute';
import NewProjectModel from '../Layouts/Modals/NewProjectModel';

export default function ProjectsVariantA() {
  // const [products, setProducts] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);
  // const [totalItems, setTotalItems] = useState(0);

  // useEffect(() => {
  //   async function fetchProducts() {
  //     const response = await fetch(`/api/data?page=${currentPage}`);
  //     const data = await response.json();
  //     setProducts(data.items);
  //     setTotalPages(data.totalPages);
  //     setTotalItems(data.totalItems);
  //   }

  //   fetchProducts();
  // }, [currentPage]);

  const [query, setQuery] = useState<any>('');
  // const router = useRouter();
  // function searchArray(array: any[], Query: string) {
  //   const results = array.filter((item) => {
  //     for (const key in item) {
  //       if (item[key].toString().toLowerCase().includes(Query.toLowerCase())) {
  //         return true;
  //       }
  //     }
  //     return false;
  //   });
  //   return results;
  // }
  // const results = searchArray(products, `${query}`);
  // const [opened, { open, close }] = useDisclosure(false);

  // const items = [{ title: 'Projects', href: '/projects' }].map((item, index) => (
  //   <Anchor href={item.href} key={index}>
  //     {item.title}
  //   </Anchor>
  // ));

  return (
    <>
      {/* <SecuredRoute> */}
        {/* <Main> */}
          <section className="">
            {/* <NewProjectModel opened={opened} close={close} /> */}
            {/* {products?.length === 0 ? ( */}
              <div className="pt-20 flex justify-center items-center h-full w-full">
                <Loader size="lg" />
              </div>
            {/* ) : ( */}
              <div className="">
                <div className="pt-2 flex justify-between">
                  {/* <Breadcrumbs>{items}</Breadcrumbs> */}
                  {/* <Button className="bg-[#202E61]" onClick={open}>
                    New Project
                  </Button> */}
                </div>
                <div className="mt-4 flex justify-between items-end">
                  <div className="">
                    <Title className=" text-[#bd1f35]">Projects</Title>
                  </div>
                  <div className="">
                    <Input
                      icon={<BiSearch size={18} />}
                      placeholder="Search"
                      radius="xl"
                      value={query}
                      onChange={(e: any) => setQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="">
                  <Table verticalSpacing="xs" striped fontSize="sm" highlightOnHover>
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>WBS</th>
                        <th>department</th>
                        <th>Devices</th>
                        <th>Last updated</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {results.map((item) => (
                        <tr
                          key={item.wbs}
                          className="cursor-pointer"
                          onClick={() => {
                            localStorage.setItem('vendor', `${item.department}`);
                            // router.push(`/projects/${item.department}`);
                          }}
                        >
                          <td>{item.wbs}</td>
                          <td>{item.wbs}</td>
                          <td>{item.department}</td>
                          <td>{item.department}</td>
                          <td>{item.department}</td>
                        </tr>
                      ))} */}
                    </tbody>
                  </Table>
                  <div className="mt-4">
                    <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
                      <div className="flex flex-1 justify-between sm:hidden">
                        <a
                          href="#"
                          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                          Previous
                        </a>
                        <a
                          href="#"
                          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                          Next
                        </a>
                      </div>
                      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                        <div>
                          <p className="text-sm ">
                            Showing <span className="font-medium">1</span> to{' '}
                            <span className="font-medium">10</span> of{' '}
                            {/* <span className="font-medium">{totalItems}</span> results */}
                          </p>
                        </div>
                        <div>
                          <nav
                            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                            aria-label="Pagination"
                          >
                            <div
                              className="relative cursor-pointer inline-flex items-center rounded-l-md px-2 py-2  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                              // onClick={() => {
                              //   currentPage > 1 && setCurrentPage(currentPage - 1);
                              // }}
                            >
                              <span className="">Previous</span>
                              {/* <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" /> */}
                            </div>
                            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                            <a
                              href="#"
                              aria-current="page"
                              className="relative z-10 inline-flex items-center bg-[#202E61] px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              1
                            </a>
                            <a
                              href="#"
                              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                              2
                            </a>
                            <a
                              href="#"
                              className="relative hidden items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                            >
                              3
                            </a>
                            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                              ...
                            </span>
                            <a
                              href="#"
                              className="relative hidden items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                            >
                              8
                            </a>
                            <a
                              href="#"
                              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                              9
                            </a>
                            <a
                              href="#"
                              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                              10
                            </a>
                            <div
                              className="relative cursor-pointer inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                              // onClick={() => {
                              //   currentPage < totalPages && setCurrentPage(currentPage + 1);
                              // }}
                            >
                              <span className="">Next</span>
                              {/* <ChevronRightIcon className="h-5 w-5" aria-hidden="true" /> */}
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* )} */}
          </section>
        {/* </Main> */}
      {/* </SecuredRoute> */}
    </>
  );
}
