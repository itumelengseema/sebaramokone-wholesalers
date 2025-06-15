"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const PartnerCTA = () => {
  return (
    <section className="bg-muted/40 py-16 px-6">
      <div className="max-w-screen-xl mx-auto space-y-20">
        {/* For Producers */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Partner With Us
            </h3>
            <h4 className="mt-2 text-lg font-semibold text-muted-foreground">
              For Farmers, Fishermen & Local Producers
            </h4>
            <p className="mt-4 text-base text-muted-foreground">
              <strong>Grow with Us – Let’s Bring Africa’s Best to the World</strong>
              <br /><br />
              We believe in the power of small-scale producers to change the food system.
              If you’re growing or catching high-quality food, we want to work with you.
              Nyami Nyami helps local vendors access broader markets, fair pricing, and consistent support.
            </p>
            <ul className="mt-4 list-disc list-inside text-muted-foreground">
              <li>Get connected to high-demand buyers</li>
              <li>Showcase your products through our platform</li>
              <li>Receive support on logistics, packaging, and payments</li>
            </ul>
            <div className="mt-6">
              <Button asChild className="rounded-full">
                <Link href="/vendor-signup">Join as a Vendor</Link>
              </Button>
            </div>
          </div>

          {/* Optionally add an image or icon here */}
     <div className="relative w-full h-80 rounded-xl overflow-hidden hidden lg:block">
  <Image
    src="public\images\Creative team-pana.svg"
    alt="Partner illustration"
    fill
    className="object-contain"
  />
</div>


        {/* For Buyers */}
        <div className="grid lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">
              Work With Us
            </h3>
            <h4 className="mt-2 text-lg font-semibold text-muted-foreground">
              For Restaurants, Retailers & Bulk Buyers
            </h4>
            <p className="mt-4 text-base text-muted-foreground">
              <strong>Source Smarter – Partner with Africa’s Rising Seafood Network</strong>
              <br /><br />
              Nyami Nyami gives you direct access to traceable, sustainable, and premium-quality seafood and fresh produce.
              Whether you're a restaurant group, retailer, or wholesale distributor – we’re here to simplify your sourcing process.
            </p>
            <ul className="mt-4 list-disc list-inside text-muted-foreground">
              <li>Reliable, consistent supply</li>
              <li>Competitive B2B pricing</li>
              <li>Custom ordering options</li>
            </ul>
            <div className="mt-6">
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/contact">Work With Us</Link>
              </Button>
            </div>
          </div>

          {/* Optional visual */}
          <div className="w-full h-80 bg-muted rounded-xl hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;
