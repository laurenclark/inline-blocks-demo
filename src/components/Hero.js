import React from 'react'
// 7. Import `InlineTextarea`
// 11. Import `BlocksControls`
import { InlineTextarea, BlocksControls } from 'react-tinacms-inline'
import '../styles/hero.css'

export function Hero() {
    return (
        <div className="hero">
            <div className="wrapper wrapper--narrow">
                {/* 8. Replace `data` with Inline Fields */}
                <h1>
                    <InlineTextarea name="headline" focusRing={false} />
                </h1>
                <p>
                    <InlineTextarea name="subtext" focusRing={false} />
                </p>
            </div>
        </div>
    )
}

// 12. Define the block component Object with Hero

export const heroBlock = {
    // 💡Here we're wrapping Hero in Block Controls to provide a UI for reordering, deleting,
    // and adding new blocks. Notice the index being passed as props to BlockControls — this
    //helps to keep track of the block order.
    Component: ({ index }) => (
        <BlocksControls
            index={index}
            focusRing={{ offset: { x: -10, y: -18 }, borderRadius: 0 }}
            insetControls
        >
            <Hero />
        </BlocksControls>
    ),
    // 13. Make a Template
    template: {
        label: 'Hero',
        defaultItem: {
            headline: 'Suspended in a Sunbeam',
            subtext: 'Dispassionate extraterrestrial observer'
        },
        fields: []
    }
}
