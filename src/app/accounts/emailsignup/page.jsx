"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PageSignUp() {
  const [signUpData, setSignUpData] = useState({
    emailOrPhone: "",
    fullName: "",
    username: "",
    password: "",
  });
  const [passwordWatch, setPasswordWatch] = useState("password");
  return (
    <div className="max-w-[345px] w-full pb-10 -ml-3 mt-4 font-sans">
      <div className="pt-3 px-10 border border-zinc-300 rounded-sm text-center ">
        <div className="pt-8 pb-2">
          <h2 className="text-4xl font-bold">Instagram</h2>
          <h5 className="pt-5 font-semibold text-zinc-500">
            Regístrate para ver fotos y videos de tus amigos.
          </h5>
        </div>
        <form className="flex flex-col space-y-2 pt-3 pb-8">
          <div>
            <button
              className=" flex justify-center bg-celeste-1 hover:bg-celeste-2 text-celeste-3 rounded-lg py-1.5 text-sm font-semibold w-full"
              href="#"
            >
              <div className="relative bg-celeste-3 text-celeste-1 font-semibold w-4 h-4 mr-2">
                <span className="absolute text-lg -top-1">f</span>
              </div>
              Iniciar sesión con Facebook
            </button>
          </div>
          <div className="relative w-full py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-white text-gray-500">O</span>
            </div>
          </div>
          <div>
            <label
              className={`relative flex ${
                signUpData.emailOrPhone ? "" : "items-center"
              } border-zinc-300`}
            >
              <span
                className={`absolute ${
                  signUpData.emailOrPhone ? "text-2xs top-1" : "text-xs"
                } text-zinc-500 ml-3`}
              >
                Numero de celular o correo electrónico
              </span>
              <input
                className={`border ${
                  signUpData.emailOrPhone ? "pb-1 pt-4" : "py-2.5"
                } px-3 rounded-sm w-full text-xs outline-none`}
                name="emailOrPhone"
                type="text"
                onChange={(event) =>
                  setSignUpData({
                    ...signUpData,
                    emailOrPhone: event.target.value,
                  })
                }
              />
            </label>
          </div>
          <div>
            <label
              className={`relative flex ${
                signUpData.fullName ? "" : "items-center"
              } border-zinc-300`}
            >
              <span
                className={`absolute ${
                  signUpData.fullName ? "text-2xs top-1" : "text-xs"
                } text-zinc-500 ml-3`}
              >
                Nombre completo
              </span>
              <input
                className={`border ${
                  signUpData.fullName ? "pb-1 pt-4" : "py-2.5"
                } px-3 rounded-sm w-full text-xs outline-none`}
                name="fullName"
                type="text"
                onChange={(event) =>
                  setSignUpData({ ...signUpData, fullName: event.target.value })
                }
              />
            </label>
          </div>
          <div>
            <label
              className={`relative flex ${
                signUpData.username ? "" : "items-center"
              } border-zinc-300`}
            >
              <span
                className={`absolute ${
                  signUpData.username ? "text-2xs top-1" : "text-xs"
                } text-zinc-500 ml-3`}
              >
                Nombre de usuario
              </span>
              <input
                className={`border ${
                  signUpData.username ? "pb-1 pt-4" : "py-2.5"
                } px-3 rounded-sm w-full text-xs outline-none`}
                name="username"
                type="text"
                onChange={(event) =>
                  setSignUpData({ ...signUpData, username: event.target.value })
                }
              />
            </label>
          </div>
          <div>
            <label
              className={`relative flex ${
                signUpData.password ? "" : "items-center"
              } border border-zinc-300 rounded-sm`}
            >
              <span
                className={`absolute ${
                  signUpData.password
                    ? "text-2xs top-1 5s ease-in-out"
                    : "text-xs"
                } text-zinc-500 ml-3`}
              >
                Contraseña
              </span>
              <input
                className={` ${
                  signUpData.password ? "pb-1 pt-4" : "py-2.5"
                } px-3 w-full text-xs outline-none`}
                name="password"
                type={passwordWatch}
                onChange={(event) =>
                  setSignUpData({ ...signUpData, password: event.target.value })
                }
              />
              {signUpData.password ? (
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
          <div className="flex flex-col space-y-4 py-2 text-xs px-2 text-zinc-500">
            <span className="">
              Es posible que las personas que usan nuestro servicio hayan subido
              tu información de contacto a Instagram.{" "}
              <a
                className="text-color-facebook"
                href="https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fhelp%2Finstagram%2F261704639352628&e=AT1ttBqhgbI2n0r85EePU4_NDWKEQemWL8kQ7r4F_YJCHCeRrqn5BkQxm8Xoc0FTZIzxjTCKEahI_Hodhn6OX9qSoHrYlrHvA_TbkEAjsDQZQSfZJq9JJFCXsgXCY-srdRtEsw-9TYhl4v5Uouz20A"
                target="_blank"
                rel="noopener noreferrer"
              >
                Más información
              </a>
            </span>
            <span>
              Al registrarte, aceptas nuestras{" "}
              <a
                className="text-color-facebook"
                href="https://help.instagram.com/581066165581870/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Condiciones
              </a>
              , la{" "}
              <a
                className="text-color-facebook"
                href="https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fprivacy%2Fpolicy&e=AT1ttBqhgbI2n0r85EePU4_NDWKEQemWL8kQ7r4F_YJCHCeRrqn5BkQxm8Xoc0FTZIzxjTCKEahI_Hodhn6OX9qSoHrYlrHvA_TbkEAjsDQZQSfZJq9JJFCXsgXCY-srdRtEsw-9TYhl4v5Uouz20A"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de privacidad
              </a>{" "}
              y la{" "}
              <a
                className="text-color-facebook"
                href="https://www.instagram.com/legal/cookies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de cookies
              </a>
              .
            </span>
          </div>
          <button className="bg-celeste-1 hover:bg-celeste-2 text-celeste-3 rounded-lg py-1.5 text-sm font-semibold">
            Regístrate
          </button>
        </form>
      </div>
      <div className="w-full text-center py-6 border border-zinc-300 mt-2 text-sm">
        <span className="mr-1">¿Ya tienes una cuenta?</span>
        <Link className="text-celeste-2 font-semibold" href="/">
          Inicia Sesión
        </Link>
      </div>
      <div className="flex flex-col space-x-4">
        <span className="pb-4 pt-2 text-center text-sm">Descarga la app.</span>
        <div className="flex flex-row justify-center">
          <a href="/">
            <Image
              alt="Disponible en Google Play"
              className="h-10 w-auto"
              height={100}
              src="/0BpxdgM3WUr.png"
              width={300}
            />
          </a>
          <a href="/">
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
