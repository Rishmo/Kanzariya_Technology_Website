// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { Eye, EyeOff } from 'lucide-react';
// import { useAuthStore } from '../../store/authStore';
// import './Login.css';

// interface LoginFormData {
//   email: string;
//   password: string;
// }

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [loginError, setLoginError] = useState('');
//   const navigate = useNavigate();
//   const { setUser, setToken } = useAuthStore();

//   const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

//   const onSubmit = async (data: LoginFormData) => {
//     try {
//       setIsLoading(true);
//       setLoginError('');

//       const response = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error('Invalid credentials');
//       }

//       const { user, token } = await response.json();

//       setUser(user);
//       setToken(token);

//       // Redirect based on role
//       switch (user.role) {
//         case 'admin':
//           navigate('/dashboard/admin');
//           break;
//         case 'employee':
//           navigate('/dashboard/employee');
//           break;
//         case 'user':
//           navigate('/dashboard/user');
//           break;
//         case 'pending':
//           setLoginError('Your account is pending approval');
//           break;
//         default:
//           navigate('/dashboard/user');
//       }
//     } catch (error) {
//       setLoginError('Invalid email or password');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <div className="login-header">
//           <h2>Sign In</h2>
//           <p>Login to stay connected.</p>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)} className="login-form">
//           {loginError && <div className="error-message">{loginError}</div>}

//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               id="email"
//               type="email"
//               {...register('email', {
//                 required: 'Email is required',
//                 pattern: {
//                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                   message: 'Invalid email address'
//                 }
//               })}
//               className={errors.email ? 'error' : ''}
//             />
//             {errors.email && <span className="error-text">{errors.email.message}</span>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <div className="password-input">
//               <input
//                 id="password"
//                 type={showPassword ? 'text' : 'password'}
//                 {...register('password', {
//                   required: 'Password is required',
//                   minLength: {
//                     value: 6,
//                     message: 'Password must be at least 6 characters'
//                   }
//                 })}
//                 className={errors.password ? 'error' : ''}
//               />
//               <button
//                 type="button"
//                 className="password-toggle"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </button>
//             </div>
//             {errors.password && <span className="error-text">{errors.password.message}</span>}
//           </div>

//           <div className="form-options">
//             <label className="remember-me">
//               <input
//                 type="checkbox"
//                 checked={rememberMe}
//                 onChange={(e) => setRememberMe(e.target.checked)}
//               />
//               <span>Remember me</span>
//             </label>
//             <a href="#" className="forgot-password">Forgot password?</a>
//           </div>

//           <button
//             type="submit"
//             className={`login-button ${isLoading ? 'loading' : ''}`}
//             disabled={isLoading}
//           >
//             {isLoading ? 'Signing in...' : 'Sign in'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useAuthStore } from "../../store/authStore";
import "./Login.css";

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const { setUser, setToken } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      setLoginError("");
      const response = await fetch(
        `https://68219bb2259dad2655afc9b6.mockapi.io/api/v2/email?email=${encodeURIComponent(
          data.email
        )}`
      );
      const users = await response.json();
      const user = users[0];

      if (!user || user.password !== data.password) {
        throw new Error("Invalid email or password");
      }

      setUser(user);
      setToken("mock-token"); // optionally use JWT from real backend

      switch (user.role) {
        case "admin":
          navigate("/dashboard/admin");
          break;
        case "employee":
          navigate("/dashboard/employee");
          break;
        case "user":
          navigate("/dashboard/user");
          break;
        case "pending":
          setLoginError("Your account is pending approval");
          break;
        default:
          navigate("/");
      }
    } catch (error) {
      setLoginError("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h2>Sign In</h2>
          <p>Login to stay connected.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          {loginError && <div className="error-message">{loginError}</div>}

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
            <div className="password-input">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className={errors.password ? "error" : ""}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <span className="error-text">{errors.password.message}</span>
            )}
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Remember me</span>
            </label>
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className={`login-button ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
