import styles from './Register.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useActions } from '../../hooks/useActions'
import { toast } from 'react-toastify'
import { User } from '../../state/user'
import RegisterForm from '../RegisterForm/RegisterForm'
import RegisterContent from '../RegisterContent/RegisterContent'

export interface FormInputs {
  name: string
  email: string
  password: string
  checked: boolean
}

const Register = () => {
  const { registerNewUser } = useActions()
  const router = useRouter()
  const [formInputs, setFormInputs] = useState<FormInputs>({
    name: '',
    email: '',
    password: '',
    checked: true,
  })

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    const { name, email, password, checked } = formInputs

    // optional handling validation on client side
    if (!name || name.trim() === '' || !email || !email.includes('@') || email.trim() === '' || !password) {
      // add later notification for the client
      toast.error('Please Fill Out All Fields', {
        autoClose: 2000,
      })

      return
    }

    if (password.trim().length < 8) {
      toast.error('Password need to be at least 8 characters long', {
        autoClose: 2000,
      })
      return
    }

    if (checked) {
      toast.success(`Thank ${name} for signing up to our newsletter`, {
        autoClose: 2000,
      })
    }
    const newUser: User = { name, email, password, checked }

    try {
      registerNewUser(newUser)
      toast.success('User registered succesfully', {
        autoClose: 2000,
      })
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message, {
          autoClose: 2000,
        })
        console.log(error)
      }
    }

    // reseting inputs and redirect user to singin page
    setFormInputs({ name: '', email: '', password: '', checked: false })

    router.push('/signin')
  }
  return (
    <section className={styles.register}>
      <RegisterForm onSubmitHandler={onSubmitHandler} formInputs={formInputs} setFormInputs={setFormInputs} />
      <RegisterContent />
    </section>
  )
}
export default Register
