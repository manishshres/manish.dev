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

  // for modal details method
  function toggleModalOne() {
    setIsOpenModalOne(!isOpenModalOne);
  }
  function toggleModalTwo() {
    setIsOpenModalTwo(!isOpenModalTwo);
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
                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="https://placehold.co/500x500/DDDDDD/000/?text=Coming+Soon+!"
                        thumbnail="https://placehold.co/500x500/DDDDDD/000/?text=Coming+Soon+!"
                        width={500}
                        height={550}
                      >
                        {({ ref, open }) => (
                          <Image
                            width={300}
                            height={300}
                            srl_gallery_image="true"
                            src="https://placehold.co/500x500/DDDDDD/000/?text=Coming+Soon+!"
                            alt="Childhood"
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

                {/* END SHOT */}
              </ul>
              {/* END PORTFOLIO LIST */}
            </TabPanel>
            {/* END PHOTOGRAHY */}
          </div>
          {/* END LIST WRAPPER */}
        </Tabs>
      </Gallery>
    </>
  );
};

export default Portfolio;
