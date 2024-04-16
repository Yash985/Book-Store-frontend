import React from "react";

const Login = () => {
  const handleClick = async () => {
    // const res = await googleLogin();
    // console.log(res);
    window.open("http://localhost:3000/auth/google/callback", "_self");
  };
  return (
    <div className="absolute h-[400px] w-[400px] bg-[rgba(162,159,159,0.27)] transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex flex-col justify-center items-center rounded-2xl">
      <h2 className="text-4xl mb-8 uppercase font-semibold">SignUp/SignIn</h2>
      <div className="flex flex-col justify-center items-center">
        <button
          onClick={handleClick}
          className=" h-[50px] w-[300px] text-2xl font-medium m-2 p-2 rounded-md border border-1 border-black hover:border-2"
        >
          <i className="ri-google-fill mr-2"></i> Google
        </button>
        <button className=" h-[50px] w-[300px] text-2xl font-medium m-2 p-2 rounded-md border border-1 border-black hover:border-2">
          <i className="ri-github-fill mr-2"></i>Github
        </button>
      </div>
    </div>
  );
};

export default Login;
