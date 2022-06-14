import Link from 'next/link';
import React from 'react';

interface LinksProps {
  ulClassName: string;
  liClassName: string;
}
const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
export const Links = (props: LinksProps) => {
  const { ulClassName, liClassName } = props;
  return (
    <div>
      {links && (
        <ul className={ulClassName}>
          {links.map((link) => (
            <Link key={link} href='#'>
              <li className={liClassName}>{link}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
