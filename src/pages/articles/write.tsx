import { useState } from 'react';
import { InferGetStaticPropsType, NextPage } from 'next';
import dynamic from 'next/dynamic';
import MarkdownIt from 'markdown-it';
import { setDoc, addDoc, doc, collection } from 'firebase/firestore';
import 'react-markdown-editor-lite/lib/index.css';

import Layout from '@/templates/layout';
import useTrans from '@/hooks/useTrans';
import { firestore } from '@/configs/firebase.config';
import { slugify } from '@/helpers/slugify';
import PageHeading from '@/components/commons/page-heading';
import Button from '@/components/commons/button';

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
});

const mdParser = new MarkdownIt();

const ArticleWritePage: NextPage<InferGetStaticPropsType<any>> = () => {
  const i18n = useTrans();

  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onClickSaveButton = async () => {
    setIsLoading(true);

    const article: any = {
      title,
      description,
      content,
      published: true,
      tags: tags.split(',').map((tag) => tag.trim()),
      category,
      thumbnailUrl,
      createdAt: new Date(),
    };

    const docRef = await addDoc(collection(firestore, 'articles'), article);
    article.slug = slugify(article.title);
    article.slug += `-${docRef.id}`;

    await setDoc(doc(firestore, 'articles', docRef.id), article);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Layout title={i18n.article.title} description={i18n.article.description}>
      <PageHeading>{i18n.articleWriting.heading}</PageHeading>

      <div className="mb-8" />

      <div className="flex space-x-3">
        <input
          type="text"
          placeholder={i18n.articleWriting.title}
          className={
            'basis-1/3 form-input mb-3 bg-transparent text-base sm:text-lg ' +
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
          placeholder={i18n.articleWriting.description}
          className={
            'basis-2/3 form-input mb-3 bg-transparent text-base sm:text-lg ' +
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
      </div>

      <div className="flex space-x-3">
        <input
          type="text"
          placeholder={i18n.articleWriting.category}
          className={
            'basis-1/3 form-input mb-3 bg-transparent text-base sm:text-lg ' +
            'text-dracula-purple-600 dark:text-dracula-purple ' +
            'focus:ring-0 ' +
            'border-dracula-purple/50 ' +
            'rounded-xl border-2 ' +
            'focus:border-dracula-purple-600 dark:focus:border-dracula-purple ' +
            'sm:focus:border-dracula-purple-600 sm:dark:focus:border-dracula-purple'
          }
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="text"
          placeholder={i18n.articleWriting.tags}
          className={
            'basis-2/3 form-input mb-3 bg-transparent text-base sm:text-lg ' +
            'text-dracula-purple-600 dark:text-dracula-purple ' +
            'focus:ring-0 ' +
            'border-dracula-purple/50 ' +
            'rounded-xl border-2 ' +
            'focus:border-dracula-purple-600 dark:focus:border-dracula-purple ' +
            'sm:focus:border-dracula-purple-600 sm:dark:focus:border-dracula-purple'
          }
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>

      <div className="flex">
        <input
          type="text"
          placeholder={i18n.articleWriting.thumbnailUrl}
          className={
            'grow form-input mb-3 bg-transparent text-base sm:text-lg ' +
            'text-dracula-purple-600 dark:text-dracula-purple ' +
            'focus:ring-0 ' +
            'border-dracula-purple/50 ' +
            'rounded-xl border-2 ' +
            'focus:border-dracula-purple-600 dark:focus:border-dracula-purple ' +
            'sm:focus:border-dracula-purple-600 sm:dark:focus:border-dracula-purple'
          }
          value={thumbnailUrl}
          onChange={(e) => setThumbnailUrl(e.target.value)}
        />
      </div>

      <MdEditor
        style={{ height: '500px' }}
        renderHTML={(text) => mdParser.render(text)}
        value={content}
        onChange={(content) => setContent(content.text)}
      />

      <div className="mt-5 flex justify-end">
        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
        <Button isLoading={isLoading} onClick={onClickSaveButton}>
          {isLoading ? i18n.articleWriting.saving : i18n.articleWriting.save}
        </Button>
      </div>
    </Layout>
  );
};

export default ArticleWritePage;
