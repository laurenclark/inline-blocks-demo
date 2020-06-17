import React from 'react';
import { useForm } from 'tinacms';
import { Images, images_template } from './components/Images';
import { Paragraph, paragraph_template } from './components/Paragraph';
import { FeaturesList, features_list_template } from './components/Features';

// 1. Import `InlineBlocks`
import { InlineForm, InlineBlocks } from 'react-tinacms-inline';
import { Hero, hero_template } from './components/Hero';
import data from './data/data.json';

export default function Home() {
  // 2. Update initial values with 'blocks' data
  const formConfig = {
    id: './data/data.json',
    initialValues: {
      blocks: data.blocks,
    },
    onSubmit() {},
  };

  const [, form] = useForm(formConfig);

  return (
    <div className="home">
      <InlineForm form={form} initialStatus="active">
        {/* 3. Replace `Hero` with `InlineBlocks`*/}
        <InlineBlocks name="blocks" blocks={HOME_BLOCKS} />
      </InlineForm>
    </div>
  );
}

// 4. Define the blocks for `InlineBlocks`
const HOME_BLOCKS = {
  hero: {
    Component: Hero,
    template: hero_template,
  },
  images: {
    Component: Images,
    template: images_template,
  },
  paragraph: {
    Component: Paragraph,
    template: paragraph_template,
  },
  features: {
    Component: FeaturesList,
    template: features_list_template,
  },
};
