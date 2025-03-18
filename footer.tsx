'use client';

import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-[#f3f2ef] py-10">
      <div className="container">
        <div className="flex items-center mb-6">
          <img
            src="https://ext.same-assets.com/3805509445/3467533.svg+xml"
            alt="LinkedIn"
            className="h-6 w-auto"
          />
          <span className="ml-2 text-gray-500 text-sm">Shashank's Clone</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
          <div>
            <h3 className="font-medium text-sm mb-2">General</h3>
            <ul className="space-y-2">
              <FooterLink text="Sign Up" href="/signup" />
              <FooterLink text="Help Center" href="/help" />
              <FooterLink text="About" href="/about" />
              <FooterLink text="Press" href="/press" />
              <FooterLink text="Blog" href="/blog" />
              <FooterLink text="Careers" href="/careers" />
              <FooterLink text="Developers" href="/developers" />
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-2">Browse LinkedIn</h3>
            <ul className="space-y-2">
              <FooterLink text="Learning" href="/learning" />
              <FooterLink text="Jobs" href="/jobs" />
              <FooterLink text="Salary" href="/salary" />
              <FooterLink text="Mobile" href="/mobile" />
              <FooterLink text="Services" href="/services" />
              <FooterLink text="Products" href="/products" />
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-2">Business Solutions</h3>
            <ul className="space-y-2">
              <FooterLink text="Talent" href="/talent" />
              <FooterLink text="Marketing" href="/marketing" />
              <FooterLink text="Sales" href="/sales" />
              <FooterLink text="Learning" href="/learning" />
              <FooterLink text="Advertising" href="/advertising" />
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-2">Directories</h3>
            <ul className="space-y-2">
              <FooterLink text="Members" href="/directory/members" />
              <FooterLink text="Jobs" href="/directory/jobs" />
              <FooterLink text="Companies" href="/directory/companies" />
              <FooterLink text="Featured" href="/directory/featured" />
              <FooterLink text="Learning" href="/directory/learning" />
              <FooterLink text="Posts" href="/directory/posts" />
              <FooterLink text="Articles" href="/directory/articles" />
            </ul>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="text-xs text-gray-500 flex flex-wrap gap-4">
          <Link href="/" className="flex items-center gap-1">
            <img
              src="https://ext.same-assets.com/3805509445/3467533.svg+xml"
              alt="LinkedIn"
              className="h-4 w-auto"
            />
            <span>© 2025 | Shashank's LinkedIn Clone</span>
          </Link>
          <FooterLink text="User Agreement" href="/legal/user-agreement" small />
          <FooterLink text="Privacy Policy" href="/legal/privacy-policy" small />
          <FooterLink text="Community Guidelines" href="/legal/community-guidelines" small />
          <FooterLink text="Cookie Policy" href="/legal/cookie-policy" small />
          <FooterLink text="Copyright Policy" href="/legal/copyright-policy" small />
          <FooterLink text="Brand Policy" href="/legal/brand-policy" small />
          <FooterLink text="Guest Controls" href="/legal/guest-controls" small />
          <FooterLink text="Language" href="/language" small />
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  text: string;
  href: string;
  small?: boolean;
}

function FooterLink({ text, href, small = false }: FooterLinkProps) {
  return (
    <li className={small ? 'inline' : ''}>
      <Link
        href={href}
        className={`text-gray-600 hover:text-[#0a66c2] hover:underline ${small ? 'text-xs' : 'text-sm'}`}
      >
        {text}
      </Link>
    </li>
  );
}
