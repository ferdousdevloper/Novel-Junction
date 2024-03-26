/* eslint-disable react/no-unescaped-entities */

import aboutBg from "../assets/Images/about-bg.jpg"

const AboutUs = () => {
  return (
    <div className="lg:relative  text-center">
      <div>
        <img
          src={aboutBg}
          className="w-full lg:max-h-[calc(100vh-70px)] opacity-50 h-100vh"
          alt=""
        />
      </div>
      <div className="lg:absolute top-[20%] bottom-[50%]top-0 left-[10%] lg:container  lg:mx-auto mx-8 ">
        <div className="mt-5  ">
          <h1 className="text-black font-playfair font-bold text-6xl">
            ABOUT US
          </h1>
        </div>
      </div>
      <div className="text-left flex flex-col justify-center items-center text-black mt-12 lg:container  lg:mx-auto mx-8">
        <p className=" text-black font-semibold text-xl mb-6">
          Welcome to <span className="text-[#23BE0A]">Novel Junction</span>,
          where our passion for literature drives us to create a vibrant
          community for book lovers worldwide. Here at{" "}
          <span className="text-[#23BE0A]">Novel Junction</span>, we believe in
          the transformative power of stories, and our mission is to connect
          readers with the books and authors that inspire, entertain, and
          challenge them.
        </p>
        <p className=" text-black font-semibold text-xl mb-6">
          Established in 2024,{" "}
          <span className="text-[#23BE0A]">Novel Junction</span> has quickly
          become a hub for bibliophiles seeking to explore the vast landscape of
          literature. Our team consists of avid readers, writers, and tech
          enthusiasts dedicated to curating a diverse and enriching literary
          experience for our users.
        </p>
        <p className=" text-black font-semibold text-xl mb-6">
          At <span className="text-[#23BE0A]">Novel Junction</span>, we
          understand that every reader is unique, and that's why we offer a wide
          range of features and services to cater to different tastes and
          preferences. Whether you're a seasoned bookworm looking for your next
          literary adventure or a newcomer eager to discover the joys of
          reading, we have something for everyone.
        </p>
        <p className=" text-black font-semibold text-xl mb-6">
          Our website boasts a comprehensive collection of books spanning
          various genres, from timeless classics to contemporary bestsellers and
          hidden gems waiting to be unearthed. With our intuitive browsing
          interface, you can easily explore different genres, authors, and
          themes to find the perfect read for any mood or occasion.
        </p>
        <p className=" text-black font-semibold text-xl mb-6">
          But <span className="text-[#23BE0A]">Novel Junction</span> is more
          than just a virtual bookstore. We're also a thriving community where
          book lovers can come together to share their passion for reading,
          engage in lively discussions, and connect with fellow enthusiasts from
          around the globe. Whether you're looking for book recommendations,
          participating in online book clubs, or joining thought-provoking
          conversations about literature, you'll find a welcoming home here at{" "}
          <span className="text-[#23BE0A]">Novel Junction</span>.
        </p>
        <p className=" text-black font-semibold text-xl mb-6">
          In addition to our extensive library and vibrant community,{" "}
          <span className="text-[#23BE0A]">Novel Junction</span> also offers a
          range of exclusive content and features designed to enhance your
          reading experience. From author interviews and book reviews to writing
          tips and literary events, we're committed to providing you with
          valuable insights and resources to deepen your appreciation for the
          written word.
        </p>
        <p className=" text-black font-semibold text-xl mb-6">
          As we continue to grow and evolve, our commitment to promoting
          literacy, fostering creativity, and celebrating the power of
          storytelling remains unwavering. Thank you for joining us on this
          literary journey, and we look forward to sharing many more chapters
          together at <span className="text-[#23BE0A]">Novel Junction</span>.
        </p>
        <p className=" text-black font-semibold text-xl mb-6">Happy reading!</p>
        <p className=" text-primary font-semibold text-xl mb-6">
          Mohammad Ferdous Hossain
        </p>
        <p className="  font-semibold text-xl mb-6">
          <span className="text-[#23BE0A]">Novel Junction</span>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
