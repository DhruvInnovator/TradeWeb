"use client";

import { useState, FormEvent } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { FacebookIcon, InstagramIcon, Link, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon, TwitterIcon } from 'lucide-react';


export default function Component() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        toast({
          title: 'Message Sent',
        });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        toast({
          title: 'Failed to Send Message',
          description: 'Please try again later.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred. Please try again later.',
        variant: 'destructive',
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-7xl font-bold">Get in Touch</h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            Have a question or want to work together? We’d love to hear from you.
          </p>
        </div>
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              <div className="mt-2 space-y-2 text-muted-foreground">
                <p>
                  <MailIcon className="inline-block w-5 h-5 mr-2" />
                  <a href="mailto:rashitrading1611@gmail.com">rashitrading1611@gmail.com</a>
                </p>
                <br />
                <p>
                  <PhoneIcon className="inline-block w-5 h-5 mr-2" />
                  <a href="tel:+91 88008-66380">+91 88008-66380</a>
                </p>
                <br />
                <p>
                  <MapPinIcon className="inline-block w-5 h-5 mr-2" />
                  <a href="https://maps.app.goo.gl/yoDigA92JcHtjtu27" target="_blank">H.NO-96-97, GALI NO- 2, GANESH ENCLAVE, BUDH VIHAR, Ghaziabad, Ghaziabad, Uttar Pradesh, 201001</a>
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Social Media</h2>
              <div className="mt-2 flex items-center space-x-4">
                <Link href="https:twitter.com" className="text-muted-foreground hover:text-primary">
                  <TwitterIcon className="w-6 h-6" />
                </Link>
                <Link href="https:facebook.com" className="text-muted-foreground hover:text-primary">
                  <FacebookIcon className="w-6 h-6" />
                </Link>
                <Link href="https:instagram.com" className="text-muted-foreground hover:text-primary" >
                  <InstagramIcon className="w-6 h-6" />
                </Link>
                <Link href="https:linkedin.com" className="text-muted-foreground hover:text-primary" >
                  <LinkedinIcon className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-muted rounded-lg p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Textarea
                id="message"
                rows={5}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Submit'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// Icons (you can keep these as they are)
