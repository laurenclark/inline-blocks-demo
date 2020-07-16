import React from 'react'
import { useForm, usePlugin, useCMS } from 'tinacms'
import { Hero } from './components/Hero'
import data from './data/data.json'

export default function Home() {
    const cms = useCMS()

    const myFormConfig = {
        id: '.data/data.json',
        initialValues: data,
        onSubmit() {
            cms.alerts.success('Saved!')
        }
    }
    return (
        <div className="home">
            <Hero {...data} />
        </div>
    )
}
