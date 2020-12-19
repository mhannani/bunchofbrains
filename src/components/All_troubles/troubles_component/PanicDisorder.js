import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";

const PanicDisorder = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div className={'mx-md-4 article_container'}>
            <GoBackButton/>
            <article className={'container article'}>
                <div className={'container'}>
                    <header>
                        <h1>An Overview of Panic disorder</h1>
                        <h2>What do Panic disorder do?</h2>
                    </header>
                    <div className={'container mx-md-4 img-placeholder'}/>
                    <div className={'container row'}>
                        <div className={'mt-3 col-12'}>
                            <section>
                                <p>
                                    Sometimes feeling anxious is quite normal. However, a person can have panic
                                    disorder if they experience panic attacks repeatedly and unpredictably.
                                    People experiencing a panic attack experience a sense of dread for several
                                    minutes accompanied by intense physical symptoms.
                                </p>

                                <p>
                                    The frequency and intensity of panic attacks can pervade the life of the person
                                    having them. This makes it difficult for her to function and act normally at work,
                                    in society or in other areas of daily life. She is constantly afraid of experiencing
                                    another episode of panic.

                                </p>
                            </section>

                            <section>
                                <h3 className={'section-header mt-4'}>Panic disorder with agoraphobia</h3>
                                <p>
                                    Agoraphobia sometimes accompanies panic disorder. The person with agoraphobia
                                    fears public places, often because they are afraid that they will not be able
                                    to get out easily or that they will have a fit. For example, a person who has
                                    agoraphobia may not be able to go grocery shopping or go to a concert.
                                </p>
                                <p>When agoraphobia occurs, its symptoms usually appear within a year of
                                    the onset of panic attacks.
                                </p>
                            </section>



                            <section>
                                <h3 className={'section-header mt-4'}>Symptoms</h3>
                                <p>
                                    A panic attack is characterized by the sudden, unpredictable onset of one or more
                                    of the following symptoms:
                                </p>
                                <div className={'container'}>
                                    <ul className={'ml-4'}>
                                        <li>Phobia;</li>
                                        <li>Social anxiety;</li>
                                        <li>Generalized anxiety;</li>
                                        <li>Panic disorder and agoraphobia;</li>
                                        <li>Heart palpitations or rapid heartbeat;</li>
                                        <li>Excessive sweating;</li>
                                        <li>Tremors or muscle twitches sometimes generalized to the whole body;</li>
                                        <li>Numbness or tingling;</li>
                                        <li>Dizziness, vertigo, or feeling like you are about to pass out;</li>
                                        <li>Hot flashes or, conversely, chills;</li>
                                        <li>Nausea or abdominal discomfort;</li>
                                        <li>Feeling of tightness, as if the chest is compressed by a weight;</li>
                                        <li>Feeling of suffocation or choking, shortness of breath;</li>
                                        <li>Feeling unreal, out of control, going crazy;</li>
                                        <li>Afraid of dying;</li>


                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h3 className={'section-header mt-4'}>When to consult</h3>
                                <p>
                                    Do not wait until you are no longer able to do your usual activities to consult.
                                    If you have symptoms, you can consult certain organizations and associations
                                    working in the field of anxiety disorders. These offer information,
                                    help and support.

                                </p>
                                <p>
                                    However, see your family doctor or other healthcare professional if you experience
                                    any of the following:

                                </p>
                                <div className={'container'}>
                                    <ul className={'ml-4'}>
                                        <li>Your panic attacks are causing you distress;</li>
                                        <li>
                                            You have difficulty with your daily activities and with your social,
                                            professional or family responsibilities;
                                        </li>
                                        <li>
                                            You isolate yourself or limit your daily activities because
                                            you are afraid of having panic attacks;
                                        </li>

                                    </ul>
                                </div>
                                <p>
                                    A healthcare professional will be able to assess whether you have panic disorder,
                                    with or without agoraphobia, or another condition that has similar symptoms.
                                    To properly assess you, your doctor may need to check up on your physical condition
                                    or order lab tests. He will suggest a treatment plan tailored to your needs.
                                </p>
                                <p>
                                    See the Help and Resources section for the resources available to you.
                                </p>
                            </section>

                            <section>
                                <h3 className={'section-header mt-4'}>Treatments</h3>
                                <p>
                                    Panic disorder is a treatable illness. There are recognized treatments to treat
                                    this disorder. Treatments allow people with this disorder to regain control over
                                    their lives and daily activities. The earlier a person sees, the better
                                    their chances of recovery.

                                </p>
                                <p>
                                    In the majority of cases, panic disorder is treated effectively with self-care,
                                    group psychological education, physical activity, intervention, psychotherapy,
                                    medication, or a combination of some of these treatments.
                                </p>
                                <p>
                                    Treating panic disorder also decreases agoraphobia. It often goes away on its
                                    own as the panic attacks subside. In rare cases, a person being treated who no
                                    longer has panic attacks may continue to have agoraphobia.
                                </p>
                            </section>

                            <section>
                                <h3 className={'section-header mt-4'}>Protection and prevention</h3>
                                <p>
                                    If you have symptoms of panic disorder, you can take action today.
                                    Tips for maintaining good mental health will help you change some lifestyle
                                    habits. These changes will help you eliminate factors that are making or
                                    sustaining your condition.
                                </p>
                                <p>
                                    Start talking to our volunteers with the same issue <u>start here</u>
                                </p>
                                <p>
                                    How to act during a panic attack ?
                                </p>
                                <div className={'container'}>
                                    <ul className={'ml-4'}>
                                        <li>
                                            If a seizure does occur, the best thing to do is to stay put and
                                            breathe slowly until the seizure stops;
                                        </li>
                                        <li>
                                            Avoiding public places does not prevent panic attacks. On the contrary,
                                            it can intensify your seizures and cause you to isolate yourself.
                                            Remember that even the most bothersome and intense panic attacks
                                            last only a few minutes and never kill anyone.
                                        </li>
                                    </ul>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </article>
            <div className="mx-md-auto"/>
        </div>
    )
}

export default PanicDisorder