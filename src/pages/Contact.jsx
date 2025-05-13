import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className='min-h-screen bg-[#0b0f19] flex items-center justify-center px-4 py-20'>
      <div className='w-full max-w-xl'>
        <ContactForm />
      </div>
    </div>
  );
}
