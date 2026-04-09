import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import dynamic from "next/dynamic";
import Image from "next/image";
import ModalOne from "./modal/ModalOne";
import ModalTwo from "./modal/ModalTwo";
import ModalHisaab from "./modal/ModalHisaab";

Modal.setAppElement("#__next");

const ReactTooltip = dynamic(() => import("react-tooltip"), {
  ssr: false,
});

// Modal.setAppElement("#__next");

const Portfolio = () => {
  // for popup video for youtube
  const [isOpenYoutube, setOpenYoutube] = useState(false);

  // popup video for vimeo
  const [isOpenVimeo, setOpenVimeo] = useState(false);

  // for modal details
  const [isOpenModalOne, setIsOpenModalOne] = useState(false);
  const [isOpenModalTwo, setIsOpenModalTwo] = useState(false);
  const [isOpenModalHisaab, setIsOpenModalHisaab] = useState(false);

  // for modal details method
  function toggleModalOne() {
    setIsOpenModalOne(!isOpenModalOne);
  }
  function toggleModalTwo() {
    setIsOpenModalTwo(!isOpenModalTwo);
  }
  function toggleModalHisaab() {
    setIsOpenModalHisaab(!isOpenModalHisaab);
  }

  return (
    <>
      <Gallery>
        <Tabs>
          {/* START FILTER TABLIST */}
          <TabList>
            <Tab>All</Tab>
            {/* <Tab>Videos</Tab>
            <Tab>Photography</Tab>
            <Tab>Details</Tab> */}
          </TabList>
          {/* END FILTER TABLIST */}

          <div className="list_wrapper">
            {/* START PHOTOGRAHY */}
            <TabPanel>
              <ul
                className="portfolio_list"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                {/* START HISAAB — first */}
                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Image
                        width={300}
                        height={300}
                        src="/img/portfolio/1.png"
                        alt="Hisaab"
                        data-tip
                        data-for="hisaab"
                        role="button"
                        onClick={toggleModalHisaab}
                        className="portfolio-bw"
                      />
                      <ReactTooltip
                        id="hisaab"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>Hisaab</h5>
                          <span>Expense Splitting App</span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END HISAAB */}

                {/* Coming soon — last */}
                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/1.jpg"
                        thumbnail="/img/portfolio/1.jpg"
                        width={500}
                        height={550}
                      >
                        {({ ref, open }) => (
                          <Image
                            width={300}
                            height={300}
                            srl_gallery_image="true"
                            src="/img/portfolio/1.jpg"
                            alt="Coming soon"
                            data-tip
                            data-for="shot"
                            role="button"
                            ref={ref}
                            onClick={open}
                          />
                        )}
                      </Item>
                      <ReactTooltip
                        id="shot"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>Cool Project</h5>
                          <span>coming soon!</span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END COMING SOON */}

              </ul>
              {/* END PORTFOLIO LIST */}
            </TabPanel>
            {/* END PHOTOGRAHY */}
          </div>
          {/* END LIST WRAPPER */}
        </Tabs>
      </Gallery>

      {/* START HISAAB MODAL */}
      <Modal
        isOpen={isOpenModalHisaab}
        onRequestClose={toggleModalHisaab}
        contentLabel="Hisaab"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalHisaab}>
            <img src="/img/svg/cancel.svg" alt="close" />
          </button>
          {/* END CLOSE MODAL */}
          <ModalHisaab />
        </div>
      </Modal>
      {/* END HISAAB MODAL */}
    </>
  );
};

export default Portfolio;
