import HomePage from "./ui/home/home";
import LoginPage from "./ui/loginPage/login";

export default function Home() {
  const login = false;
  return (
    <div className="sm:pt-0 pt-12">{login ? <HomePage /> : <LoginPage />}</div>
  );
}
