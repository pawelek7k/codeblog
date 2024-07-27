import { ContactForm } from "@/components/contact/ContactForm";
import Head from "next/head";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>CodeBlog - Contact Me!</title>
        <meta name="description" content="Send me your message!" />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
