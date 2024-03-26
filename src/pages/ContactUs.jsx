/* eslint-disable react/no-unescaped-entities */
const ContactUs = () => {
  return (
    <div className="my-28 lg:container  lg:mx-auto mx-8">
      <div className="grid  grid-cols-1 gap-8 px-8 lg:py-32 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Let's talk!
            </h2>
            <div className="dark:text-gray-600">
              Contact Us and get more information!!
            </div>
          </div>
          <div className=" rounded-2xl">
            <img
              src="../../public/contact.jpg"
              alt=""
              className="h-52 md:h-96 w-full p-3 rounded-[30px]"
            />
          </div>
        </div>
        <form noValidate="" className="space-y-6">
          <div>
            <label className="text-sm">Full name</label>
            <input
              type="text"
              placeholder=""
              className="w-full p-3 rounded dark:bg-gray-100 border"
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded dark:bg-gray-100 border"
            />
          </div>
          <div>
            <label className="text-sm">Message</label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded dark:bg-gray-100 border"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
