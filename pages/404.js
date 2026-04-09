import Link from "next/link";
import Seo from "../components/Seo";
import Navbar from "../components/navbar/Navbar";

const NotFound = () => {
  return (
    <>
      <Seo pageTitle="404" />
      <Navbar />
      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div className="container">
              <div className="tokyo_tm_error">
                <div className="tokyo_tm_error_inner">
                  <h1>404!</h1>
                  <h3>Page not found</h3>
                  <p>The page you were looking for could not be found.</p>
                  <Link href="/" className="ib-button">
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
