import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <form className="max-w-md">
        <Input type="text" placeholder="Name" className="mb-4" />
        <Input type="email" placeholder="Email" className="mb-4" />
        <textarea
          className="w-full p-2 mb-4 border rounded"
          placeholder="Message"
          rows={4}
        ></textarea>
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  );
}
