import { Link } from "react-router-dom";


export const Navigation = () => {
  return (
   <header>
     <nav className="bg-white shadow-sm">
      <div className="max-w-full mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-4 items-center">
            <Link to="/" className="text-gray-700 text-sm hover:text-gray-900 px-12 py-12 h-10 border-1 inline-block">Welcome</Link>
            <Link to="/dynamic-form" className="text-gray-700 hover:text-gray-900">Dynamic Form</Link>
          </div>
        </div>
      </div>
    </nav>
   </header>
  );
};


