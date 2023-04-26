import styles from './Navbar.module.css'
import { navLinks } from '../../data/links'
import Link from 'next/link'
import Logo from '../Logo/Logo'
import { motion } from 'framer-motion'
import { navVariants } from '../../utils/motion'
import Image from 'next/image'
import { MdMenu, MdClose } from 'react-icons/md'
import { GoSignIn, GoSignOut } from 'react-icons/go'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import { toast } from 'react-toastify'

const Navbar = () => {
  const router = useRouter()
  const isMenuOpen = useTypedSelector((state) => state.modals.isMenuOpen)
  const { openSideMenu, closeSideMenu } = useActions()
  const { data: session, status } = useSession()

  const onSignOut: React.MouseEventHandler<HTMLButtonElement> = () => {
    const user = session?.user?.name
    toast.success(`Goodbye ${user}`)
    signOut({ redirect: true, callbackUrl: '/' })
  }

  return (
    <motion.header variants={navVariants} initial="hidden" whileInView="show" className={styles.header_container}>
      <div className={`${styles.navbar_gradient} gradient-01 `} />
      <nav className={styles.nav_center}>
        <div className={styles.image_container}>
          {!isMenuOpen && (
            <>
              <Link href="/">
                <Image src="/images/wolfpad.png" alt="wolfpad" width={80} height={80} className={styles.logo} />
              </Link>
              <Logo />
            </>
          )}
        </div>

        {isMenuOpen ? (
          <MdClose className={styles.nav_menu} onClick={() => closeSideMenu()} />
        ) : (
          <MdMenu className={styles.nav_menu} onClick={() => openSideMenu()} />
        )}

        {session && status === 'authenticated' && (
          <ul className={styles.nav_links}>
            {navLinks.map((link) => (
              <li
                className={link.url === router.pathname ? `${styles.active} ${styles.link_btn}` : `${styles.link_btn}`}
                key={link.id}
              >
                <Link href={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        )}

        {!isMenuOpen &&
          (!session ? (
            <Link href="/signin">
              <button className={styles.nav_btn}>
                <GoSignIn className={styles.icon} />
                Sign In
              </button>
            </Link>
          ) : (
            <button className={styles.nav_btn} onClick={onSignOut}>
              <GoSignOut className={styles.icon} />
              Sign Out
            </button>
          ))}
      </nav>
    </motion.header>
  )
}

export default Navbar
