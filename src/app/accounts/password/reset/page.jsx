"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PageResetPassword() {
  const [resetPasswordData, setResetPasswordData] = useState({});
  return (
    <div className="max-w-[388px] w-full border border-zinc-300 rounded-sm font-sans">
      <div className=" pt-3 px-10">
        <div className="flex flex-col items-center space-y-3 justify-center text-center ">
          <svg
            id="Capa_1"
            data-name="Capa 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 119.86 119.86"
            className="h-[96px] w-[96px]"
          >
            <path
              d="M59.9,0A59.93,59.93,0,1,1,0,59.71,60.12,60.12,0,0,1,59.9,0Zm-.25,116.87c31.22.23,57-25.29,57.22-56.66S91.58,3.22,60.21,3,3.22,28.28,3,59.65,28.28,116.64,59.65,116.87Z"
              transform="translate(0 0)"
            />
            <path
              d="M78.61,51.7c8,2.92,8.7,4,8.71,12.25,0,6.5.07,13,0,19.5-.1,6.1-2.79,8.79-8.94,8.84q-18.49.12-37,0c-6.07,0-8.71-2.8-8.8-9s0-12.66,0-19c0-8.72.48-9.44,8.71-12.69,0-3-.13-6.13,0-9.27.51-10.67,8.3-18.44,18.47-18.53,10.38-.09,18.36,7.76,18.84,18.67C78.73,45.62,78.61,48.76,78.61,51.7ZM59.78,55.45c-6,0-12,0-18,0-4,0-6.33,1.7-6.34,5.9,0,7.49,0,15,0,22.46,0,3.64,2,5.55,5.62,5.56q18.72.06,37.43,0c3.87,0,5.83-2,5.84-5.87,0-7.32,0-14.64,0-22,0-4.12-2.07-6.1-6.16-6.1Q69,55.48,59.78,55.45Zm-.14-2.91h5c12.3,0,12.74-.53,10.56-12.87A15.41,15.41,0,0,0,59.73,26.81a15.21,15.21,0,0,0-15,12.77c-.49,3.1-.36,6.29-.57,9.44-.17,2.54.92,3.61,3.49,3.54C51.66,52.45,55.65,52.53,59.64,52.54Z"
              transform="translate(0 0)"
            />
          </svg>
          <span>¿Tienes problemas para iniciar sesión?</span>
          <span className="text-sm text-zinc-500">
            Ingresa tu correo electrónico, teléfono o nombre de usuario y te
            enviaremos un enlace para que recuperes el acceso a tu cuenta.
          </span>
        </div>
        <form className="flex flex-col pt-4 space-y-4">
          <div>
            <label
              className={`relative flex ${
                resetPasswordData.cppEmailOrUsername ? "" : "items-center"
              } border border-zinc-300 rounded-sm`}
            >
              <span
                className={`absolute ${
                  resetPasswordData.cppEmailOrUsername
                    ? "text-2xs top-1 5s ease-in-out"
                    : "text-xs"
                } text-zinc-500 ml-3`}
              >
                Correo electrónico, teléfono o usuario
              </span>
              <input
                className={` ${
                  resetPasswordData.cppEmailOrUsername ? "pb-1 pt-4" : "py-2.5"
                } px-3 w-full text-xs outline-none`}
                name="cppEmailOrUsername"
                type="text"
                onChange={(event) =>
                  setResetPasswordData({
                    ...resetPasswordData,
                    cppEmailOrUsername: event.target.value,
                  })
                }
              />
            </label>
          </div>
          <button
            disabled={!resetPasswordData.cppEmailOrUsername ? true : false}
            className="w-full bg-celeste-1 hover:bg-celeste-2 disabled:bg-celeste-3 disabled:text-white text-celeste-3 rounded-lg py-1.5 text-sm font-semibold"
          >
            Iniciar sesión
          </button>
        </form>
        <a
          className="flex justify-center text-color-facebook text-2xs py-4"
          href="https://help.instagram.com/374546259294234"
          target="_blank"
          rel="noopener noreferrer"
        >
          ¿No puedes restablecer la contraseña?
        </a>
        <div className="relative w-full">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-2 bg-white text-gray-500">O</span>
          </div>
        </div>
        <div className="pt-5 text-center pb-20 font-semibold">
          <Link href="/accounts/emailsignup">Crear cuenta nueva</Link>
        </div>
      </div>

      <Link
        className="flex justify-center py-4 w-full border-t-2 font-semibold"
        href="/"
      >
        Volver al inicio de sesión
      </Link>
    </div>
  );
}
