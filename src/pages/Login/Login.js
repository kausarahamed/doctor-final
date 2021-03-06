// import React from "react";
// import { useSignInWithGoogle } from "react-firebase-hooks/auth";
// import auth from "../../firebase.init";
// import { useForm } from "react-hook-form";

// const Login = () => {
//   const [signInWithGoogle, user] = useSignInWithGoogle(auth);
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm();
//   const onSubmit = (data) => console.log(data);

//   if (user) {
//     console.log(user);
//   }

//   return (
//     <div className="justify-center items-center flex h-screen">
//       <div class="card w-96 bg-base-100 shadow-xl">
//         <div class="card-body">
//           <h2 class="font-bold text-2xl ">Login</h2>

//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div class="form-control w-full max-w-xs">
//               <label class="label">
//                 <span class="label-text">Email</span>
//               </label>
//               <input
//                 {...register("email", {
//                   required: {
//                     value: true,
//                     message: "Email is required",
//                   },
//                   pattern: {
//                     value: /[A-Za-z]{3}/,
//                     message: "Provide a valid email",
//                   },
//                 })}
//                 type="email"
//                 placeholder="Enter your email"
//                 class="input input-bordered w-full max-w-xs"
//               />
//               <label class="label">
//                 <span class="label-text-alt">Alt label</span>
//               </label>
//             </div>
//             <input />
//             {errors.firstName?.type === "required" && "First name is required"}

//             <input {...register("lastName", { required: true })} />
//             {errors.lastName && "Last name is required"}

//             <input
//               className="btn w-full max-w-xs text-white"
//               type="submit"
//               value={"Login"}
//             />
//           </form>

//           <div class="divider">OR</div>
//           <button onClick={() => signInWithGoogle()} class="btn btn-outline">
//             continue with google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import Loading from "../Shared/Loading";
import { useNavigate, useLocation } from "react-router-dom";
import Loading from "../Shared/Loading";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError, user] =
    useSignInWithGoogle(auth);
  if (user) {
    console.log(user);
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, users, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (users || gUser) {
      navigate(from, { replace: true });
    }
  }, [users, gUser, from, navigate]);

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (error || gError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            {signInError}
            <input
              className="btn w-full max-w-xs text-white"
              type="submit"
              value="Login"
            />
          </form>
          <p>
            <small>
              New to Doctors Portal{" "}
              <Link className="text-primary" to="/signup">
                Create New Account
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
