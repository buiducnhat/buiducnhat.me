import Link from 'next/link';
import { useState, useEffect } from 'react';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export interface IHeadingTOC {
  id: string;
  title: string;
  children?: IHeadingTOC[];
}

const makeNestedHeadings = (headingElements: Element[]) => {
  const nestedHeadings: IHeadingTOC[] = [];

  headingElements.forEach((heading) => {
    let { innerHTML: title, id } = heading;

    if (heading.nodeName === 'H2') {
      nestedHeadings.push({ id, title, children: [] });
    } else if (heading.nodeName === 'H3' && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].children?.push({
        id,
        title,
      });
    }
  });

  return nestedHeadings;
};

const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState<IHeadingTOC[]>([]);

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll('h2, h3')
    ).filter((heading) => heading.id);
    setNestedHeadings(makeNestedHeadings(headingElements));
  }, []);

  return { nestedHeadings };
};

const HeadingLink = ({
  title,
  id,
  isActive,
}: {
  title: string;
  id: string;
  isActive: boolean;
}) => {
  return (
    <Link href={`#${id}`} passHref scroll={true}>
      <a
        className={
          'text-lg text-dracula-purple ' +
          `${isActive ? 'font-bold text-dracula-pink' : ''} ` +
          'hover:text-dracula-pink'
        }
      >
        {title}
      </a>
    </Link>
  );
};

export default function Toc() {
  const { nestedHeadings } = useHeadingsData();

  const [activeId, setActiveId] = useState<string>(nestedHeadings[0]?.id);

  useIntersectionObserver(setActiveId);

  return (
    <div
      className={
        'rounded-xl w-full p-5 sticky top-28 ' +
        'bg-dracula-purple-50 dark:bg-dracula-darker-700 ' +
        'shadow-lg ' +
        'marker:text-dracula-dark-500'
      }
    >
      <ul className="list-disc list-inside">
        {nestedHeadings.map((h2Heading) => (
          <li className="list-item" key={h2Heading.id}>
            <HeadingLink
              title={h2Heading.title}
              id={h2Heading.id}
              isActive={activeId === h2Heading.id}
            />
            <ol className="ml-6 list-disc list-inside">
              {h2Heading.children?.map((h3Heading) => (
                <li key={h3Heading.id}>
                  <HeadingLink
                    title={h3Heading.title}
                    id={h3Heading.id}
                    isActive={activeId === h3Heading.id}
                  />
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
    </div>
  );
}
