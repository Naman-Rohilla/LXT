import React, { useEffect, useRef, useState } from "react";
import StatisticCard from "../cards/statisticCard";
import Movie from "../movie/movie";
import ProductCard from "../cards/productCard";
import ProfileCard from "../cards/profileCard";
import ActionCard from "../cards/actionCard";
import LxtButton from "../buttons/lxtButton";
import statisticData from "../../jsons/statisticData";
import "./home.scss";
import { stadiumData } from "../../jsons/productData";
import "../../styles/announcementView.scss";
import { useSwipeable } from "react-swipeable";

const footerObject = {
  heading: "Beginner",
  colorHeading: "Quad Skating",
  color: "red",
  description: "Master the essentials of Quad Skating",
};

const ProductView = () => {
  const refs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const scrollAmount = 30;
      refs.forEach(
        (ref) =>
          ref.current && (ref.current.scrollTop += e.deltaY * scrollAmount)
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.addEventListener("wheel", handleWheel);
          } else {
            window.removeEventListener("wheel", handleWheel);
          }
        });
      },
      { root: null, threshold: 0.7 }
    );

    refs.forEach((ref) => ref.current && observer.observe(ref.current));

    return () => {
      window.removeEventListener("wheel", handleWheel);
      refs.forEach((ref) => ref.current && observer.unobserve(ref.current));
    };
  }, [refs]);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="product-card-view">
      <div className="text-view">
        <span className="text-container">
          Transform <strong>Skater</strong>
        </span>
        <span className="text-container">
          with Advanced <strong>Coaching</strong>
        </span>
        <span className="text-container">
          and<strong>Equipment</strong>
        </span>
        <span className="text-description">
          Effectively highlights the focus on enhancing a skater's abilities
          through top-tier coaching and the latest gear
        </span>
        {!isMobile && (
          <div className="text-lxt-button">
            <LxtButton text="BOOK A CLASS" color="red" />
          </div>
        )}
      </div>
      {isMobile ? (
        <div className="gallery-view">
          <div className={`container-view-1`}>
            <div className="horizontal-layer">
              {[...Array(6)].map((_, i) => (
                <ProductCard
                  key={i}
                  footerObject={footerObject}
                  backgroundVideo="skate.gif"
                  hoverImage="rollarskates.png"
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="gallery-view">
          {refs.map((ref, index) => (
            <div
              className={`container-view-${index + 1}`}
              ref={ref}
              key={index}
            >
              <div className="vertical-layer">
                {[...Array(2)].map((_, i) => (
                  <ProductCard
                    key={i}
                    footerObject={footerObject}
                    backgroundVideo="skate.gif"
                    hoverImage="rollarskates.png"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {isMobile && (
        <div className="text-lxt-button">
          <LxtButton text="BOOK A CLASS" color="red" />
        </div>
      )}
    </div>
  );
};

const IphoneView = () => {
  return (
    <div className="iphone-view">
      <div className="iphone">
        <img height={700} width={350} src="iphone.png" alt="iPhone" />
        <video
          height={650}
          width={300}
          src="iphone.mp4"
          autoPlay
          loop
          muted
          style={{ objectFit: "cover" }}
        />
        <div className="iphone-button">
          <LxtButton text={"BOOK A TICKET"} color="red" />
        </div>
      </div>
    </div>
  );
};

const WatchShopView = () => {
  return (
    <div className="watch-shop-view">
      <div className="img-left">
        <video
          height={715}
          width={"100%"}
          src="watchshop/watch6.mp4"
          autoPlay
          loop
          muted
          style={{ objectFit: "cover" }}
        />
        <img src="watchshop/live.png" />
      </div>
      <div className="img-center">
        <img width={"100%"} height={220} src="watchshop/watch2.png" />
        <span className="text-shop">Shop Live</span>
        <img width={"60%"} src="watchshop/watch5.png" />
        <span
          style={{
            fontSize: "1rem",
          }}
        >
          <LxtButton text={"Watch & Shop"} color={"red"} />
        </span>
        <img width={"100%"} height={150} src="watchshop/watch1.png" />
      </div>
      <div className="img-right">
        <img height={715} width={"100%"} src="watchshop/watch4.png" />
        <img />
      </div>
    </div>
  );
};

const StadiumView = () => {
  return (
    <>
      <div className="stadium-view">
        <div className="stadium-background">
          <img
            style={{
              height: "100vh",
              width: "100vw",
            }}
            src="stadium.png"
          />
          <div className="stadium-background-color"></div>
        </div>
        <div className="stadium-slider-view">
          <div className="stadium-slider-container">
            <div className="stadium-heading">
              RR <strong>LXT RINK</strong>
            </div>
            <div className="stadium-card">
              {stadiumData?.map((sd, index) => (
                <ActionCard key={index} heading={sd.heading} list={sd.list} />
              ))}
            </div>
            <span className="stadium-button">
              <LxtButton
                text={"READ MORE"}
                color="transparent"
                borderColor="white"
              />
            </span>
          </div>
          <WatchShopView />
        </div>
        <IphoneView />
      </div>
    </>
  );
};

const AnouncementView = () => {
  return (
    <div className="announcement-view">
      <div className="announcement-heading">
        <span>Announcement</span>
        <span>Get Ready to Roll—Exciting Skating Event Ahead</span>
        <div className="announcement-card-container">
          {stadiumData?.map((sd, index) => (
            <ActionCard
              key={index}
              heading={sd.heading}
              list={sd.list}
              defaultExpanded={false}
            ></ActionCard>
          ))}
        </div>
        <LxtButton
          text={"KNOW MORE"}
          color={"transparent"}
          borderColor="white"
        />
      </div>
      <div>
        <img width={"105%"} src="race.png" />
      </div>
    </div>
  );
};

export default function Home() {
  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    preventDefaultTouchmoveEvent: true,
  });

  const handleSwipe = (direction) => {
    console.log(`Swiped ${direction}`);
  };

  return (
    <>
      <Movie />
      <div className="stats-card-view">
        <StatisticCard cardData={statisticData} />
      </div>
      <div className="prod-card-view">
        <ProductView />
        <div className="about-card-view">
          <div className="about-card-container">
            <ProfileCard />
          </div>
          <StadiumView />
        </div>
      </div>
      <AnouncementView />
    </>
  );
}
