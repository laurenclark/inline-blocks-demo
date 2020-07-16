import React from 'react'
// 1. Import `useForm` and `usePlugin`
import { useForm, usePlugin, useCMS } from 'tinacms'
// 5. Import `InlineForm`
// 9. Import `InlineBlocks`
import { InlineForm, InlineBlocks } from 'react-tinacms-inline'
import { Hero } from './components/Hero'
import data from './data/data.json'

export default function Home() {
    const cms = useCMS()

    // 2. Create a config object
    const formConfig = {
        id: './data/data.json',
        initialValues: data,
        onSubmit() {
            cms.alerts.success('Saved!')
        }
    }

    // 3. Create and register the form. (Getting pageData, and form from useForm - can name them however but must be in order)
    const [pageData, form] = useForm(formConfig)
    usePlugin(form)

    // 4. Use the return data now connected with a TinaCMS form
    return (
        // 6. Wrap `InlineForm` around `Hero`, pass the form
        <div className="home">
            <InlineForm form={form}>
                <Hero {...pageData} />
                {/* 10. Import `InlineBlocks` */}
                <InlineBlocks name="blocks" blocks={HOME_BLOCKS} />
            </InlineForm>
        </div>
    )
}

/* 11. Define BLOCKS constant (config) */
const HOME_BLOCKS = {
    /** We will define blocks here later */
}
