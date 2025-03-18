/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from 'next/link';

import { ArrowUturnLeftIcon } from '@heroicons/react/20/solid';

export default function StudioNavbar(props: any) {
  return (
    <div>
        <div>
            <Link href="/">
            GO To the Website
            </Link>
        </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}
