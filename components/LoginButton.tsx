'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

export default function LoginButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="flex flex-col items-center">
        <p className="mb-4">Signed in as {session.user?.email}</p>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    )
  }
  return (
    <div className="space-y-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => signIn("google")}
      >
        Sign in with Google
      </button>
      <button
        className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
        onClick={() => signIn('github')}
      >
        Sign in with GitHub
      </button>
    </div>
  )
}

