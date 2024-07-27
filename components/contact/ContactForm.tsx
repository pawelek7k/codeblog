export const ContactForm = () => {
  return (
    <section className="p-24">
      <h1 className="text-2xl md:text-4xl">How can I help you?</h1>
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="message">Email</label>
          <textarea
            id="message"
            required
            rows="5"
            className="resize-none"
          ></textarea>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};
