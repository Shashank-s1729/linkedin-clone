'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container py-2 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-3 flex items-center">
            <img
              src="https://ext.same-assets.com/3805509445/3467533.svg+xml"
              alt="LinkedIn"
              className="h-8 w-auto"
            />
            <span className="text-sm text-gray-500 ml-2 hidden sm:inline-block">
              Shashank's Clone
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <NavItem href="/explore" icon="https://ext.same-assets.com/595860354/373785654.svg+xml" label="Articles" />
            <NavItem href="/people" icon="https://ext.same-assets.com/595860354/373785654.svg+xml" label="People" />
            <NavItem href="/learning" icon="https://ext.same-assets.com/595860354/373785654.svg+xml" label="Learning" />
            <NavItem href="/jobs" icon="https://ext.same-assets.com/595860354/373785654.svg+xml" label="Jobs" />
            <NavItem href="/games" icon="https://ext.same-assets.com/595860354/373785654.svg+xml" label="Games" />
          </nav>
        </div>

        <div className="flex items-center space-x-2">
          <Link href="/signup" className="hidden sm:block">
            <Button variant="outline" className="rounded-full border-[1px] border-gray-500 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 hover:border-gray-700">
              Join now
            </Button>
          </Link>
          <Link href="/signin">
            <Button variant="outline" className="rounded-full border-[1px] border-[#0a66c2] font-medium text-[#0a66c2] hover:bg-[#d0e8ff] hover:border-[#0a66c2] hover:text-[#0a66c2]">
              Sign in
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

interface NavItemProps {
  href: string;
  icon: string;
  label: string;
}

function NavItem({ href, icon, label }: NavItemProps) {
  return (
    <Link href={href} className="flex flex-col items-center text-gray-500 hover:text-black">
      <img src={icon} alt="" className="h-5 w-5 mb-1" />
      <span className="text-xs">{label}</span>
    </Link>
  );
}
