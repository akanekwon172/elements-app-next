import Link from 'next/link';

import CustomNavigation from '@/components/Common/CustomNavigation';

export default function Header() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b p-4 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-[calc(1400px-32px)] items-center justify-between gap-2">
        <Link href="/">Elements App</Link>
        <CustomNavigation />
      </div>
    </div>
  );
}
