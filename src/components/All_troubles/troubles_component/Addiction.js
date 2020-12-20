import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";
const Addiction = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div className={'mx-md-4 article_container'}>
            <GoBackButton/>
            <article className={'container article'}>
                <div className={'container'}>
                    <header>
                        <h1>An Overview of Addiction</h1>
                        <h2>What do Addiction do?</h2>
                    </header>
                    <div className={'container mx-md-4 img-placeholder'}/>
                    <div className={'container row'}>
                        <div className={'mt-3 col-12'}>
                            <section>
                                <p>
                                    From a scientific and medical point of view, addictions are brain pathologies
                                    defined by an addiction to a substance or an activity,
                                    with deleterious consequences.
                                </p>

                                <p>
                                    Addictions concern tobacco (nicotine), alcohol, cannabis,
                                    opiates (heroin, morphine), cocaine, amphetamines and synthetic derivatives.
                                    Among non-substance addictions, only pathological gambling (gambling and gambling)
                                    is clinically recognized as a behavioral addiction in international
                                    diagnostic classifications (DSM 5).
                                </p>
                                <p>
                                    The North American Institute of Drugs, the National Institute
                                    of Drug Abuse (NIDA) defines it as follows:
                                </p>
                                <p>
                                    Addiction is a chronic, relapsing brain condition characterized by compulsive
                                    drug seeking and use, despite knowledge of its harmful consequences.
                                </p>
                                <p>
                                    Start talking to our volunteers who are willing to share their
                                    stories about addiction

                                </p>
                                <p>
                                    <u>Start here</u>
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

export default Addiction