import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";

const Lowliness = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div className={'mx-md-4 article_container'}>
            <GoBackButton/>
            <article className={'container article'}>
                <div className={'container'}>
                    <header>
                        <h1>An Overview of Loneliness</h1>
                        <h2>What do Loneliness do?</h2>
                    </header>
                    <div className={'container mx-md-4 img-placeholder'}/>
                    <div className={'container row'}>
                        <div className={'mt-3 col-12'}>
                            <section>
                                <p>
                                    Difficult to define, loneliness remains above all associated with old age,
                                    dependence, disability, unemployment, insecurity, illness, dependency and celibacy.
                                </p>

                                <p>
                                    A satisfying relationship life is one of the main factors in our personal
                                    development. Many studies have shown that being surrounded, being able to
                                    discuss and share has a positive impact on both our mental health and our
                                    physical health.
                                </p>
                                <p>
                                    In our hyper connected world, loneliness should have lost ground as the means of
                                    communication diversified and perfected. Unfortunately, this is not the case.
                                    Twenty million Americans over the age of 18 suffer from loneliness, or 12% of
                                    the population. A phenomenon which is growing (+ 1 million compared to 2010)
                                    and which for the first time affects 18-29 year olds, until then spared.
                                </p>
                                <p>
                                    The American Gretchen Rubin, a specialist in happiness and the author of several
                                    books on the subject, considers loneliness to be one of the main obstacles
                                    to happiness. She even qualifies the fight against this contemporary
                                    scourge as a “major challenge”.
                                </p>
                                <p>
                                    For Anne-Laure Martin, psychologist and psychotherapist, “loneliness is not
                                    inevitable, even if it depends in part on material and environmental conditions,
                                    it is also a matter of positioning and behavior. “To adopt the right state of mind,
                                    it is both necessary to be aware of your needs and needs and to initiate change
                                    in small steps on a daily basis.
                                </p>
                                <p>
                                    One of the pitfalls of being isolated and feeling lonely is neglecting the
                                    little bonds of everyday life. We must keep in mind that a relational and social
                                    life is woven from a thousand and one different grandsons. Volunteer yourself to
                                    feed every day the exchanges that your day offers you: with your colleagues,
                                    the traders you frequent, and your neighbors.
                                </p>
                                <p>
                                    Eat lunch with coworkers more often if you don't. Join an activity group
                                    (walking, reading, and meditation), a neighborhood association
                                    (parents of students, culture ...). You can also try to find old
                                    friends or friends from high school or college online, or even family members.
                                </p>
                                <p>
                                    You can also use our website to find other people who suffers
                                    from loneliness and socialize
                                </p>
                                <p>
                                    <u>
                                        Start here
                                    </u>
                                </p>
                            </section>


                        </div>
                    </div>
                </div>
            </article>
            <div className="mx-md-auto"/>
        </div>
    )
}

export default Lowliness