import Notiflix from "notiflix";
import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const messageHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      Notiflix.Notify.success("Your message was successfully sent!");

      setFormData({
        email: "",
        name: "",
        message: "",
      });
      setError(null);
    } catch (error) {
      setError("Failed to send message. Please try again.");
      Notiflix.Notify.failure(
        "Failed to send your message. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-24">
      <h1 className="text-2xl md:text-4xl">How can I help you?</h1>
      <div className="flex flex-col items-center">
        <form
          className="mt-10 w-[20rem] flex flex-col gap-2"
          onSubmit={messageHandler}
        >
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
              name="email"
              value={formData.email}
              required
              onChange={handleChange}
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
              name="name"
              value={formData.name}
              required
              onChange={handleChange}
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
              name="message"
              required
              rows={5}
              onChange={handleChange}
              value={formData.message}
              className="resize-none mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-background outline-none"
            ></textarea>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex justify-center">
            <button
              className="block text-sm font-medium text-gray-300 border-b border-accent"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
