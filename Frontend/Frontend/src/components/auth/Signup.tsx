import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
const BASE_URL = import.meta.env.VITE_BASE_URL;

interface SignupFormData {
    name: string;
    email: string;
    password: string;
    role: string;
}

const Signup = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [signupError, setSignupError] = useState("");
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupFormData>();

    const onSubmit = async (data: SignupFormData) => {
        try {
            setIsLoading(true);
            setSignupError("");

            const response = await fetch(`${BASE_URL}/auth/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials:"include",
                body: JSON.stringify(data),
            });
            const result = await response.json()
             if(result.message){
                alert(result.message)
             }
            if (!response.ok) {
                throw new Error("Signup failed");
            }else{
                alert('user registered...!!')
            }

            navigate("/login");
        } catch (error) {
            setSignupError("Signup failed. Try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
                    {signupError && <div className="error-message">{signupError}</div>}

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                },
                            })}
                            className={errors.email ? "error" : ""}
                        />
                        {errors.email && (
                            <span className="error-text">{errors.email.message}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                            className={errors.password ? "error" : ""}
                        />
                        {errors.password && (
                            <span className="error-text">{errors.password.message}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <select id="role" {...register("role")}>
                            <option value="user">-- Select Role --</option>
                            <option value="admin">Admin</option>
                            <option value="executive">Executive</option>
                            <option value="user">User</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className={`signup-button ${isLoading ? "loading" : ""}`}
                        disabled={isLoading}
                    >
                        {isLoading ? "Signing up..." : "Sign up"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;