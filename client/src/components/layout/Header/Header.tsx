import { Link, NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-6">
          <div className="w-8">
            <img
              src="../../../../logo.svg"
              alt="Logo"
              className="w-full h-auto"
            />
          </div>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/home"
                className="text-lg font-semibold hover:text-yellow-500 transition-colors"
              >
                Главная
              </Link>
            </li>
            <li>
              <NavLink
                to="/freegame"
                className={({ isActive }) =>
                  `text-lg font-semibold ${
                    isActive ? "text-yellow-500" : "text-white"
                  } hover:text-yellow-500 transition-colors`
                }
              >
                Бесплатные игры
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
