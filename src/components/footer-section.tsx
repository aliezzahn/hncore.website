import { Button } from '@/components/ui/button';
import FooterSlider from '@/components/footer-slider';
import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/use-media-query';
import * as React from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

import { ScrollArea } from './ui/scroll-area';

export default function FooterSection() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 border-t border-border/10 py-2 md:py-0 z-50 backdrop-blur-xl bg-background/70">
      <FooterSlider />
      <div className="container flex flex-col items-center justify-between gap-2 sm:gap-4 md:h-14 lg:h-16 md:flex-row px-4 sm:px-6">
        <p className="text-center text-sm leading-loose text-foreground/60 md:text-left">
          © {new Date().getFullYear()}{' '}
          <a href="https://digibrandco.com/" target="_blank" rel="noreferrer">
            DigiBrand Co.
          </a>{' '}
          All rights reserved.
        </p>
        <div className="flex items-center space-x-1">
          <PrivacyPolicyDrawerDialog />
          <TermSheetDrawerDialog />
        </div>
      </div>
    </footer>
  );
}

function TermSheetDrawerDialog() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="text-foreground/80 hover:text-foreground"
          >
            Term
          </Button>
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>TERM SHEET</DialogTitle>
            <DialogDescription>Make changes to your life</DialogDescription>
          </DialogHeader>
          <TermSheet />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="text-foreground/80 hover:text-foreground"
        >
          Term
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>TERM SHEET</DrawerTitle>
          <DrawerDescription>Make changes to your life </DrawerDescription>
        </DrawerHeader>
        <TermSheet />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function TermSheet() {
  return (
    <section className="px-4">
      <ScrollArea className="h-72">
        <div className="mt-6">
          <h3 className="text-lg font-semibold">1. PARTIES</h3>
          <p>
            <strong>Founder 1:</strong> Alireza Hassannejad (aliezzahn) -
            aliezzahn@gmail.com
          </p>
          <p>
            <strong>Founder 2:</strong> Morteza Hassannejad (morihn) -
            morteza.hassannezhad@gmail.com
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">2. PURPOSE</h3>
          <p>
            This website serves as the official platform for our family,
            showcasing our projects, achievements, and digital innovations.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">3. KEY TERMS</h3>
          <ul className="list-disc list-inside">
            <li>
              <strong>Website Ownership:</strong> Fully owned and managed by the
              Founders.
            </li>
            <li>
              <strong>Content Rights:</strong> All content, including text,
              images, and code, is the intellectual property of the Founders
              unless stated otherwise.
            </li>
            <li>
              <strong>User Contributions:</strong> Any user-generated content
              must adhere to the website's guidelines and may be moderated or
              removed at the discretion of the Founders.
            </li>
            <li>
              <strong>Privacy & Data Protection:</strong> The website follows
              best practices to protect user data and privacy.
            </li>
            <li>
              <strong>Monetization & Sponsorships:</strong> Any revenue
              generated from ads, sponsorships, or partnerships will be managed
              by the Founders.
            </li>
            <li>
              <strong>Modifications & Updates:</strong> The Founders reserve the
              right to modify, update, or discontinue any part of the website.
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">4. DISPUTE RESOLUTION</h3>
          <p>
            Any disputes regarding the website will be resolved amicably between
            the Founders or, if necessary, through mediation.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">5. GOVERNING LAW</h3>
          <p>
            This agreement is governed by the laws of [Applicable Jurisdiction].
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">6. MISCELLANEOUS</h3>
          <ul className="list-disc list-inside">
            <li>
              <strong>Amendments:</strong> Any modifications must be agreed to
              in writing by both Founders.
            </li>
            <li>
              <strong>Assignment:</strong> Rights under this term sheet may not
              be assigned without mutual consent.
            </li>
          </ul>
        </div>

        <div className="mt-6 border-t pt-4">
          <h3 className="text-lg font-semibold">SIGNATURES</h3>
          <div className="mt-4">
            <p>
              <strong>Founder 1:</strong> Alireza Hassannejad (aliezzahn)
            </p>
            <p>Signature: __________________</p>
            <p>Date: ______________________</p>
          </div>
          <div className="mt-4">
            <p>
              <strong>Founder 2:</strong> Morteza Hassannejad (morihn)
            </p>
            <p>Signature: __________________</p>
            <p>Date: ______________________</p>
          </div>
        </div>
      </ScrollArea>
    </section>
  );
}

function PrivacyPolicyDrawerDialog() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            size="sm"
            className="text-foreground/80 hover:text-foreground"
          >
            Privacy
          </Button>
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>PRIVACY POLICY</DialogTitle>
            <DialogDescription>Make changes to your life</DialogDescription>
          </DialogHeader>
          <PrivacyPolicy />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="secondary"
          size="sm"
          className="text-foreground/80 hover:text-foreground"
        >
          Privacy
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>PRIVACY POLICY</DrawerTitle>
          <DrawerDescription>Make changes to your life </DrawerDescription>
        </DrawerHeader>
        <PrivacyPolicy />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function PrivacyPolicy() {
  return (
    <section className="px-4">
      <ScrollArea className="h-72">
        <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-600">Effective Date: [MM/DD/YYYY]</p>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">1. Introduction</h3>
          <p>
            We are committed to protecting your privacy. This Privacy Policy
            outlines how we collect, use, and protect your information when you
            use our website.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">2. Information We Collect</h3>
          <ul className="list-disc list-inside">
            <li>
              Personal Information: Name, email, and other contact details when
              voluntarily provided.
            </li>
            <li>
              Usage Data: Information about how you interact with our website.
            </li>
            <li>
              Cookies & Tracking Technologies: Used to improve user experience.
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">
            3. How We Use Your Information
          </h3>
          <ul className="list-disc list-inside">
            <li>To provide and improve our services.</li>
            <li>To communicate updates and respond to inquiries.</li>
            <li>For security and fraud prevention.</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">4. Data Sharing & Security</h3>
          <p>
            We do not sell or share your personal information with third parties
            except as required by law. We implement security measures to protect
            your data.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">5. Your Rights & Choices</h3>
          <ul className="list-disc list-inside">
            <li>You may request access to or deletion of your data.</li>
            <li>You can opt out of cookies and tracking technologies.</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">6. Updates to This Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page.
          </p>
        </div>
      </ScrollArea>
    </section>
  );
}
