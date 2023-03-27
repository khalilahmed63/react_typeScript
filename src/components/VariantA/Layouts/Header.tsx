import { Burger, Header, Image, Paper, Stack, Text, Transition, createStyles } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const HEADER_HEIGHT = 90;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    // backgroundColor: '#6B94B3',
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',
    // backgroundColor: 'white',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    position: 'sticky',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    color: 'white',
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

export default function NavigationHeader() {
  // const router = useRouter();
  const [opened, { toggle: settoggle }] = useDisclosure(false);
  const { classes } = useStyles();
  const [token, setToken] = useState<any | undefined>();

  // const { loginModal } = useStoreState((state: any) => state.global);
  // const { setLoginModal } = useStoreActions((actions: any) => actions.global);

  useEffect(() => {
    // checks if the user is authenticated
    const _token = localStorage.getItem('token');
    setToken(`${_token}`);
  }, []);

  return (
    <>
      {/* <LoginModal /> */}
      <div className="fixed top-0 z-[100] w-full">
        <Header height={HEADER_HEIGHT} className={`${classes.root}`}>
          <div className="flex justify-between items-center h-full mx-5 lg:mx-10">
            <div className="flex justify-start items-center">
              <Link to="/">
                <Image
                  alt="logo"
                  // height={100}
                  // width={100}
                  src="/variantA/assets/images/warrahop.svg"
                />
              </Link>
            </div>

            <div className="flex md:hidden justify-center items-center">
              {/* <div className="flex justify-start items-center mb-6 mr-4">
                <ColorSchemeToggle />
              </div> */}
              <Burger
                opened={opened}
                onClick={settoggle}
                className={`${classes.burger} `}
                size="sm"
              />
            </div>
            <div className="hidden md:flex justify-end items-center text-sm">
              {/* <div className="flex justify-start items-center mb-6 mr-4">
                <ColorSchemeToggle />
              </div> */}

              {token === '123' ? (
                <>
                  <div className="">
                    {/* <Image alt="logo" height={35} width={35} src="/favicon.ico" /> */}
                    <FaUserCircle className="text-whtie" size={35} />
                  </div>
                  <div className="ml-2">
                    <Text className="">John Deo</Text>
                    <div className="lg:flex">
                      <Text
                        className=" hover:text-red-500 hover:underline underline-offset-4 cursor-pointer"
                        onClick={() => {
                          // Remove an item from local storage
                          setToken(null);
                          localStorage.removeItem('token');
                          // router.push('/');
                        }}
                      >
                        logout
                      </Text>
                    </div>
                  </div>
                </>
              ) : (
                <div className="ml-2">
                  <Text
                    onClick={() => {
                      localStorage.setItem('token', '123');
                      setToken('123');
                    }}
                    className="cursor-pointer"
                  >
                    Login
                  </Text>
                </div>
              )}
            </div>
            <Transition transition="pop-top-right" duration={200} mounted={opened}>
              {(styles) => (
                <Paper className={`${classes.dropdown}`} style={styles}>
                  <Stack align="" className="" spacing="xl">
                    <div className="w-full px-5 py-10 ">
                      <Stack align="" spacing="xl">
                        {token === '123' ? (
                          <div className="flex justify-between">
                            <div className="flex items-center">
                              <div className="mr-2">
                                {/* <Image alt="logo" height={35} width={35} src="/favicon.ico" /> */}
                                <FaUserCircle className="text-whtie" size={35} />
                              </div>
                              <Text className="">John Deo</Text>
                            </div>
                            <Text
                              onClick={() => {
                                // Remove an item from local storage
                                setToken(null);
                                localStorage.removeItem('token');
                                // router.push('/');
                              }}
                              className="text-red-500 hover:text-gray-300 hover:underline underline-offset-4"
                            >
                              LogOut
                            </Text>
                          </div>
                        ) : (
                          <Text
                            onClick={() => {
                              localStorage.setItem('token', '123');
                              setToken('123');
                            }}
                            className=" hover:text-gray-300 hover:underline underline-offset-4"
                          >
                            Login
                          </Text>
                        )}
                        <Link to="/" >
                          <Text className=" hover:text-gray-300 hover:underline underline-offset-4">
                            Dashboard
                          </Text>
                        </Link>
                        <Link to="/devices" >
                          <Text className=" hover:text-gray-300 hover:underline underline-offset-4">
                            Devices
                          </Text>
                        </Link>
                        <Link to="/provision" >
                          <Text className=" hover:text-gray-300 hover:underline underline-offset-4">
                            Provision
                          </Text>
                        </Link>
                        <Link to="/projects" >
                          <Text className=" hover:text-gray-300 hover:underline underline-offset-4">
                            Projects
                          </Text>
                        </Link>
                      </Stack>
                    </div>
                  </Stack>
                </Paper>
              )}
            </Transition>
          </div>
        </Header>
      </div>
    </>
  );
}
