import React, {useState} from 'react'
import authService from '../appwrite/auth'
import {Link ,useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Button, Input, Logo} from './index.js'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='min-h-screen flex items-center justify-center px-4 py-8'>
        <div className="card w-full max-w-md slide-up">
            <div className="card-header text-center">
                <div className="mb-4 flex justify-center">
                    <Logo width="60px" />
                </div>
                <h2 className="heading-secondary mb-2">Create Account</h2>
                <p className="text-body">
                    Already have an account?{' '}
                    <Link
                        to="/login"
                        className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                        Sign in here
                    </Link>
                </p>
            </div>
            
            <div className="card-content">
                {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-700 text-sm">{error}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit(create)}>
                    <Input
                        label="Full Name"
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: true,
                        })}
                    />
                    <Input
                        label="Email Address"
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Create a strong password"
                        {...register("password", {
                            required: true,
                        })}
                    />
                    <Button type="submit" className="w-full mt-2">
                        Create Account
                    </Button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup