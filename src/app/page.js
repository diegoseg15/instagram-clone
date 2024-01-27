import HomePage from "./ui/home/home";
import LoginPage from "./ui/loginPage/login";

export default function Home() {
  const login = true;
  return <div className="">{login ? <HomePage /> : <LoginPage />}</div>;
}
