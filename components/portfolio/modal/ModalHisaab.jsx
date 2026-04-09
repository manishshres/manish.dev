import Social from "../../Social";

const ModalHisaab = () => {
  return (
    <div className="box_inner">
      <div className="description_wrap scrollable">
        <div className="image">
          <div
            className="main"
            style={{
              backgroundImage: "url(/img/portfolio/1.png)",
            }}
          ></div>
        </div>
        {/* END IMAGE */}
        <div className="portfolio_main_title">
          <h3>Hisaab</h3>
          <span>Web App</span>
        </div>
        {/* END portfolio_main_title */}
        <div className="main_details">
          <div className="textbox">
            <p>
              Hisaab is a lightweight expense-splitting web app — think
              Splitwise or Split Kitty — built to make settling shared costs
              among friends, roommates, or travel groups effortless. Add
              expenses, assign who paid and who owes, and let Hisaab calculate
              the simplest way to settle up with the fewest transactions.
            </p>
            <p>
              Whether it&apos;s a group trip, shared rent, or a night out,
              Hisaab keeps everyone on the same page without the awkward
              spreadsheets or mental math.
            </p>
          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">Category</span>
                <span>Web App</span>
              </li>
              <li>
                <span className="first">Type</span>
                <span>Expense Splitting</span>
              </li>
              <li>
                <span className="first">Live</span>
                <span>
                  <a
                    href="https://hisaab.manish.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    hisaab.manish.dev
                  </a>
                </span>
              </li>
              <li>
                <span className="first">Share</span>
                <Social />
                {/* END SOCIAL SHARE */}
              </li>
            </ul>
          </div>
        </div>
        {/* main_details */}
      </div>
    </div>
  );
};

export default ModalHisaab;
