import { stringLength } from '@firebase/util'
import Head from 'next/head'
import Image from 'next/image'
import { Interface } from 'node:readline/promises'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import useAuth from '../hooks/useAuth'

function Login() {
  interface Inputs {
    email: string
    password: string
  }
  const [login, setLogin] = useState(false)
  const { signIn, signUp } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password)
    } else {
      await signUp(email, password)
    }
  }

  interface ImageLoaderProp {
    src: string
  }
  const myLoader = ({ src }: ImageLoaderProp): string => {
    return `${src}?q=${75}`
  }
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title> NETFLIX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        loader={myLoader}
        className="-z-10 !hidden opacity-60 sm:!inline"
        src="https://rb.gy/p2hphi"
        alt="Logo"
        fill
      />
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              className={`input ${
                errors.email && 'border-b-2 border-orange-500'
              }`}
              placeholder="Email"
              {...register('email', { required: true })}
            />

            {errors.email && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              className={`input ${
                errors.password && 'border-b-2 border-orange-500'
              }`}
              placeholder="Password"
              {...register('password', { required: true })}
            />

            {errors.password && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>
          <button
            type="submit"
            className="w-full rounded bg-[#e50914]"
            onClick={() => setLogin(true)}
          >
            Sign in
          </button>
          <div className="text-[gray]">
            New to Netflix?{' '}
            <button
              type="submit"
              className="text-white hover:underline"
              onClick={() => setLogin(false)}
            >
              Sign up now
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
