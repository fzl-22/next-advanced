"use client";
import axios from "axios";
import { useState } from "react";
export default function Page() {
  const [form, setForm] = useState({ email: "", password: "" });
  const handleSubmit = (f) => {
    f.preventDefault();
    axios
      .post("http://localhost:3000/api/auth/login", form, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("res", res);
        document.location = "/posts";
      })
      .catch((err) => {
        console.log("err", err.response);
      });
  };
  return (
    <>
      <h2 className="font-bold text-3xl my-6">Login</h2>
      <div className="p-6 border-2 max-w-2xl">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Username"
              value={form.email}
              onChange={(e) => {
                setForm((f) => {
                  return {
                    ...f,
                    email: e.target.value,
                  };
                });
              }}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => {
                setForm((f) => {
                  return {
                    ...f,
                    password: e.target.value,
                  };
                });
              }}
            />
          </div>

          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign In{" "}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
