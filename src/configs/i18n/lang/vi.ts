import { CAREER_DATA, EDUCATION_DATA } from '@/data/about';
import { SKILLS_DATA } from '@/data/skills';

const vi = {
  navbar: {
    home: 'Trang chủ',
    article: 'Bài viết',
    project: 'Dự án',
    skills: 'Kỹ năng',
    about: 'Giới thiệu',
    language: 'Ngôn ngữ',
  },
  home: {
    title: 'Trang chủ',
    description:
      'Trang cá nhân của Bùi Đức Nhật, chia sẻ kiến thức, kinh nghiệm và dự án mở',
    hello: 'Hello, mình là Nhật 👋',
    intro1: 'Mình là một đang và yêu thích lập trình đến từ Việt Nam 🇻🇳🇻🇳🇻🇳.',
    intro2:
      'Đây là trang web cá nhân của mình, nơi mình viết về những gì mình đang làm cũng như chia sẻ kinh nghiệm của bản thân trong quá trình học và làm việc',
    popularArticles: 'Bài viết phổ biến',
    moreArticles: 'Xem thêm',
  },
  article: {
    title: 'Bài viết',
    description: 'Bài viết của Bùi Đức Nhật, lập trình, dev, tutorials, ...',
    heading: 'Bài viết của tôi',
  },
  skill: {
    title: 'Kỹ năng',
    heading: 'Kỹ năng',
    description: 'Kỹ năng và kiến thức',
    skillData: SKILLS_DATA.vi,
  },
  about: {
    title: 'Về tác giả',
    heading: 'Về tác giả',
    description:
      'Giới thiệu về Bùi Đức Nhật, thông tin liên hệ, nghề nghiệp, học vấn,...',
    career: 'Công việc',
    education: 'Học vấn',
    careerData: CAREER_DATA.vi,
    educationData: EDUCATION_DATA.vi,
  },
};

export default vi;
