import Link from "next/link";
import Image from "next/image";
import React, { Suspense, useState } from "react";
import Loading from "../loading";

export default function LoginForm() {
  const [loginData, setLoginData] = useState({ user: "", password: "" });
  const [passwordWatch, setPasswordWatch] = useState("password");
  return (
    <div className="max-w-[345px] w-full pb-10 -ml-3 font-sans">
      <div className="pt-3 px-10 border border-zinc-300 rounded-sm">
        <div className="pt-8 pb-10">
          <h1 className="text-center text-4xl font-bold">Instagram</h1>
        </div>
        <form className="flex flex-col space-y-2 pt-3 pb-4">
          <div>
            <label
              className={`relative flex ${
                loginData.user ? "" : "items-center"
              } border-zinc-300`}
            >
              <span
                className={`absolute ${
                  loginData.user ? "text-2xs top-1" : "text-xs"
                } text-zinc-500 ml-3`}
              >
                Telefono, usuario, correo electrónico
              </span>
              <input
                className={`border ${
                  loginData.user ? "pb-1 pt-4" : "py-2.5"
                } px-3 rounded-sm w-full text-xs outline-none`}
                name="username"
                type="text"
                onChange={(event) =>
                  setLoginData({ ...loginData, user: event.target.value })
                }
              />
            </label>
          </div>
          <div>
            <label
              className={`relative flex ${
                loginData.password ? "" : "items-center"
              } border border-zinc-300 rounded-sm`}
            >
              <span
                className={`absolute ${
                  loginData.password
                    ? "text-2xs top-1 5s ease-in-out"
                    : "text-xs"
                } text-zinc-500 ml-3`}
              >
                Contraseña
              </span>
              <input
                className={` ${
                  loginData.password ? "pb-1 pt-4" : "py-2.5"
                } px-3 w-full text-xs outline-none`}
                name="password"
                type={passwordWatch}
                onChange={(event) =>
                  setLoginData({ ...loginData, password: event.target.value })
                }
              />
              {loginData.password ? (
                <button
                  className="text-sm font-semibold px-3 hover:text-zinc-400"
                  onClick={(event) => {
                    event.preventDefault();
                    setPasswordWatch(
                      passwordWatch === "text" ? "password" : "text"
                    );
                  }}
                >
                  {passwordWatch === "password" ? "Mostrar" : "Ocultar"}
                </button>
              ) : (
                <></>
              )}
            </label>
          </div>
          <button className="bg-celeste-1 hover:bg-celeste-2 text-celeste-3 rounded-lg py-1.5 text-sm font-semibold">
            Iniciar sesión
          </button>
        </form>
        <div className="relative w-full">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-2 bg-white text-gray-500">O</span>
          </div>
        </div>
        <div className="flex flex-col space-y-5 my-6 w-full text-sm">
          <a
            className="flex flex-row justify-center space-x-5 w-full bg-transparent text-color-facebook text-sm"
            href="#"
          >
            <div className="relative bg-color-facebook text-white font-semibold w-4 h-4 mr-2">
              <span className="absolute text-lg ml-1.5 -top-1">f</span>
            </div>
            Iniciar sesión con Facebook
          </a>
          <Link
            className="text-center text-xs text-color-facebook"
            href="/accounts/password/reset/"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </div>
      <div className="w-full text-center py-6 border border-zinc-300 mt-2 text-sm">
        <span className="mr-1">¿No tienes una cuenta?</span>
        <Link
          className="text-celeste-2 font-semibold"
          href="/accounts/emailsignup"
        >
          Regístrate
        </Link>
      </div>
      <div className="flex flex-col space-x-4">
        <span className="py-4 text-center text-sm">Descarga la app.</span>
        <div className="flex flex-row justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D689F155E-5045-4749-86D2-5E4D4D92288D%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge&pli=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt="Disponible en Google Play"
              className="h-10 w-auto"
              height={100}
              src="/0BpxdgM3WUr.png"
              width={300}
            />
          </a>
          <a
            href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=-1920%2C-210%2C1920%2C1020"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt="Consíguelo de Microsoft"
              className="h-10 w-auto ml-4"
              height={100}
              src="/LjIQEL8csb0.png"
              width={300}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
