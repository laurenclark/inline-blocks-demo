import React from 'react'
// 7. Import `InlineTextarea`
import { InlineTextarea } from 'react-tinacms-inline'
import '../styles/hero.css'

export function Hero() {
    return (
        <div className="hero">
            <div className="wrapper wrapper--narrow">
                {/* 8. Replace `data` with Inline Fields */}
                <h1>
                    <InlineTextarea name="headline" />
                </h1>
                <p>
                    <InlineTextarea name="subtext" />
                </p>
            </div>
        </div>
    )
}
