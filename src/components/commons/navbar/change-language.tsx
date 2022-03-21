import { useRouter } from 'next/router';
import React from 'react';

const languages = [
  { label: 'English', value: 'en' },
  { label: 'Tiếng Việt', value: 'vi' },
];

function ChangeLanguageBtn() {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  return <></>;
}

export default ChangeLanguageBtn;
