import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground">
          Get in touch with our team - we love to hear from you
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Company Information Card */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6">Nyami Nyami</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 mt-1 text-primary" />
              <div>
                <h3 className="font-medium">Our Location</h3>
                <p className="text-muted-foreground">
                  123 Food Street<br />
                  Culinary District<br />
                  San Francisco, CA 94103
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-5 w-5 mt-1 text-primary" />
              <div>
                <h3 className="font-medium">Call Us</h3>
                <p className="text-muted-foreground">
                  Main: (123) 456-7890<br />
                  Support: (123) 456-7891
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="h-5 w-5 mt-1 text-primary" />
              <div>
                <h3 className="font-medium">Email Us</h3>
                <p className="text-muted-foreground">
                  info@nyaminyami.com<br />
                  support@nyaminyami.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="h-5 w-5 mt-1 text-primary" />
              <div>
                <h3 className="font-medium">Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9AM - 5PM<br />
                  Saturday: 10AM - 3PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Map/Additional Info Card */}
        <Card className="p-8 flex flex-col">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6">Find Us</h2>
            {/* Placeholder for map - replace with actual embed */}
            <div className="bg-muted rounded-lg aspect-video mb-6 flex items-center justify-center">
              <p className="text-muted-foreground">[Map Embed Here]</p>
            </div>
            
            <div className="flex items-start gap-4">
              <Globe className="h-5 w-5 mt-1 text-primary" />
              <div>
                <h3 className="font-medium">Connect Online</h3>
                <div className="flex gap-4 mt-2">
                  <Button variant="outline" size="sm">
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm">
                    Instagram
                  </Button>
                  <Button variant="outline" size="sm">
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t">
            <h3 className="font-medium mb-3">Need immediate help?</h3>
            <Button className="w-full">Chat with Support</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}