import { useState } from 'react';
import { InferGetStaticPropsType, NextPage } from 'next';
import dynamic from 'next/dynamic';
import MarkdownIt from 'markdown-it';
import { setDoc, addDoc, doc, collection } from 'firebase/firestore';
import 'react-markdown-editor-lite/lib/index.css';

import Layout from '@/templates/layout';
import useTrans from '@/hooks/useTrans';
import ButtonGradient from '@/components/commons/button/button-grad';
import { firestore } from '@/configs/firebase.config';
import { slugify } from '@/helpers/slugify';

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
});

const mdParser = new MarkdownIt();

const ArticleWritePage: NextPage<InferGetStaticPropsType<any>> = () => {
  const i18n = useTrans();

  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onSave = async () => {
    const article: any = {
      title,
      description,
      content,
      published: true,
      tags: [],
      createdAt: new Date(),
    };

    const docRef = await addDoc(collection(firestore, 'articles'), article);
    article.slug = slugify(article.title);
    article.slug += `-${docRef.id}`;

    await setDoc(doc(firestore, 'articles', docRef.id), article);
  };

  return (
    <Layout title={i18n.article.title} description={i18n.article.description}>
      <input
        type="text"
        placeholder="Title"
        className={
          'form-input mb-3 bg-transparent text-base sm:text-lg ' +
          'text-dracula-purple-600 dark:text-dracula-purple ' +
          'focus:ring-0 ' +
          'border-dracula-purple/50 ' +
          'rounded-xl border-2 ' +
          'focus:border-dracula-purple-600 dark:focus:border-dracula-purple ' +
          'sm:focus:border-dracula-purple-600 sm:dark:focus:border-dracula-purple'
        }
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Description"
        className={
          'form-input mb-3 bg-transparent text-base sm:text-lg ' +
          'text-dracula-purple-600 dark:text-dracula-purple ' +
          'focus:ring-0 ' +
          'border-dracula-purple/50 ' +
          'rounded-xl border-2 ' +
          'focus:border-dracula-purple-600 dark:focus:border-dracula-purple ' +
          'sm:focus:border-dracula-purple-600 sm:dark:focus:border-dracula-purple'
        }
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <MdEditor
        style={{ height: '500px' }}
        renderHTML={(text) => mdParser.render(text)}
        value={content}
        onChange={(content) => setContent(content.text)}
      />

      <ButtonGradient onClick={onSave}>Save</ButtonGradient>
    </Layout>
  );
};

export default ArticleWritePage;
