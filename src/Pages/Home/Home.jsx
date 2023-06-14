import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { UserAuth } from "../../Context/AuthProvider/AuthPorvider";
import ContactUs from "../../components/ContactUs/ContactUs";
import Cta from "../../components/Cta/Cta";
import Faq from "../../components/Faq/Faq";
import Fetures from "../../components/Fetures";
import OurTeam from "../../components/OurTeam/OurTeam";
import Testimonial from "../../components/Testimonial/Testimonial";
import About from "./About";
import Appointment from "./Appointment";
import Banner from "./Banner";
import ServiceComp from "./ServiceComp";

const Home = () => {
  const { user } = useContext(UserAuth);
  console.log(user);
  return (
    <>
      <Helmet>
        <title>Welcom to Doc-Hours-Health</title>
      </Helmet>
      <Banner />
      <About />
      <Appointment />
      <ServiceComp />
      <Fetures />
      <Testimonial />
      <OurTeam />
      <Cta />
      <Faq />
      <ContactUs />
    </>
  );
};

export default Home;
