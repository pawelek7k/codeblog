export const ContactForm = () => {
  return (
    <section className="p-24 ">
      <h1 className="text-2xl md:text-4xl">How can I help you?</h1>
      <div className="flex flex-col items-center">
        <form action="" className="mt-10 w-[20rem] flex flex-col gap-2">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-background outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-background outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300"
            >
              Your Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className="resize-none mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-background outline-none"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              className="block text-sm font-medium text-gray-300 border-b border-accent"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
