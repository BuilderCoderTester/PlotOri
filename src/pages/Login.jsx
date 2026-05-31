import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        localStorage.setItem(
            'student-user',
            JSON.stringify({ email })
        )

        navigate('/student-zone')
    }

    return (
        <div className='min-h-screen flex items-center justify-center px-6'>
            <div className='w-full max-w-md bg-white shadow-2xl rounded-3xl p-8'>
                <h1 className='text-4xl font-bold text-center mb-3'>
                    Student Login
                </h1>

                <p className='text-center text-gray-500 mb-8'>
                    Access PlotOri Student Dashboard
                </p>

                <form onSubmit={handleSubmit} className='space-y-5'>
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full border rounded-xl px-4 py-3'
                        required
                    />

                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full border rounded-xl px-4 py-3'
                        required
                    />

                    <button
                        type='submit'
                        className='w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold'
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}