import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"
import { Account } from 'appwrite'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
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
                <h2 className="heading-secondary mb-2">Welcome Back</h2>
                <p className="text-body">
                    Don&apos;t have an account?{' '}
                    <Link
                        to="/signup"
                        className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                        Sign up here
                    </Link>
                </p>
            </div>
            
            <div className="card-content">
                {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-700 text-sm">{error}</p>
                    </div>
                )}
                
                <form onSubmit={handleSubmit(login)}>
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
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,
                        })}
                    />
                    <Button
                        type="submit"
                        className="w-full mt-2"
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login