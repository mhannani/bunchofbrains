import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";

const SelfEsteem = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div className={'mx-md-4 article_container'}>
            <GoBackButton/>
            <article className={'container article'}>
                <div className={'container'}>
                    <header>
                        <h1>Self-esteem</h1>
                    </header>
                    <div className={'container mx-md-4 img-placeholder'}/>
                    <div className={'container row'}>
                        <div className={'mt-3 col-12'}>
                            <section>
                                <p>
                                    Self-esteem is a psychological concept that refers to the overall positive or
                                    negative judgment that a person has of themselves.
                                </p>

                                <p>
                                    Your self-esteem will depend on many parameters. The environment, education,
                                    personality, physical and intellectual abilities, etc ... are all variables
                                    that will influence the judgment we make of ourselves. Self-esteem is built
                                    during childhood and will evolve over the course of life with experiences
                                    of success and failure.
                                </p>
                                <p>
                                    Low self-esteem can lead to discomfort and difficulties in relationships with
                                    other people. It will also be a risk factor for the development of psychological
                                    disorders. People who have low self-esteem never feel good enough, never measure up,
                                    and suffer terribly.
                                </p>
                                <p>
                                    On the contrary, a very high self-esteem can lead the person to have behaviors and
                                    attitudes often badly perceived by others who will often see in him a haughty
                                    person and a little too sure of himself. A very high self-esteem can lead the
                                    person to behave at risk, thinking they are immune from everything.
                                </p>
                                <p>
                                    Finally, a "good" self-esteem corresponds to a satisfactory self-esteem,
                                    neither too low nor too high, which promotes relationship development and
                                    personal well-being.
                                </p>
                                <p>
                                    For some time now, researchers and the media have taken a keen interest in
                                    self-esteem, and numerous health initiatives are being organized to develop
                                    "good self-esteem". This approach would allow children and people to flourish
                                    in many areas and would prevent them from developing disorders such as depression
                                    and certain anxiety disorders.
                                </p>
                                <p>
                                    Start talking to our volunteers who are willing to share their experiences
                                    with self-esteem issues.
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

export default SelfEsteem