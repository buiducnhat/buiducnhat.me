import { useRouter } from 'next/router';

import vi from '@/configs/i18n/lang/vi';
import en from '@/configs/i18n/lang/en';

function useTrans() {
  const { locale } = useRouter();

  const trans = locale === 'vi' ? vi : en;

  return trans;
}

export default useTrans;
