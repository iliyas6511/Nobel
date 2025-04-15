import { useLocation, Link } from "react-router-dom";

import topCardBg from "../assets/Images/topcard-bg.jpg"

const Topcard = ({productName}) => {
  const location = useLocation();

  // Function to generate breadcrumb items from the current path
  const getBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter((x) => x); // Split path and remove empty segments
    const breadcrumbs = [
      { name: "Home", path: "/" }, // Static Home link
    ];

    // Dynamically add path segments
    pathnames.forEach((segment, index) => {
      const path = `/${pathnames.slice(0, index + 1).join("/")}`;
      breadcrumbs.push({
        name: segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase()), // Format: "tabletop-flour-mill" -> "Tabletop Flour Mill"
        path: path,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <>
      <section
        className="relative block bg-scroll bg-center bg-no-repeat bg-cover py-[180px] overflow-hidden z-[1] before:absolute before:inset-0 before:bg-[rgba(120,40,40,0.5)] before:content-[''] before:-z-10"
        style={{
          backgroundImage:`url(${topCardBg})`,
        }}
      >
        <div className="mx-auto px-[20px]">
          <div className="relative block text-center">
            <ul className="relative inline-block mb-[11px] pb-[12px] overflow-hidden before:absolute before:left-0 before:bottom-0 before:right-0 before:h-px before:bg-white before:content-['']">
              {breadcrumbs.map((crumb, index) => (
                <li
                  key={crumb.path}
                  className="relative inline-block text-white text-[16px] leading-[24px] font-medium uppercase tracking-[0.1em] no-underline"
                >
                  {index < breadcrumbs.length - 1 ? (
                    <>
                      <Link to={crumb.path}>{crumb.name}</Link>
                      {index < breadcrumbs.length - 1 && (
                        <span className="pl-[20px] pr-[20px] text-white"></span>
                      )}
                    </>
                  ) : (
                    <span>{crumb.name}</span> // Last item as plain text
                  )}
                </li>
              ))}
            </ul>
            <h2 className='text-white text-[50px] leading-[1em] tracking-[-0.04em] font-bold font-["Averia_Sans_Libre,cursive"] m-0'>
              {breadcrumbs[breadcrumbs.length - 1]?.name || ""}
            </h2>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Topcard;