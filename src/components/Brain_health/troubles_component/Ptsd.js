import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";

const Ptsd = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    
    return(
        <div className={'mx-md-4 article_container'}>
            <GoBackButton/>
            <article className={'container article'}>
                <div className={'container'}>
                    <header>
                        <h1>Post-traumatic stress disorder</h1>
                    </header>
                    <div className={'container mx-md-4 img-placeholder'}/>
                    <div className={'container row'}>
                        <div className={'mt-3 col-12'}>
                            <section>
                                <p>
                                    Everyone has experienced a dangerous situation for their safety or that of a
                                    loved one, such as narrowly avoiding a car accident. In such a situation,
                                    a person may experience a high level of anxiety, characterized by a feeling
                                    of intense fear. This fear is accompanied by a strong physical reaction due
                                    to the secretion of adrenaline, the hormone that enables the body to react
                                    quickly to danger. Fear and the physical reaction that accompanies it are
                                    part of a natural defense mechanism designed to ensure survival.
                                    These reactions are therefore normal and usually go away a
                                    few hours after the event.
                                </p>

                                <p>
                                    However, in people with post-traumatic stress disorder, these reactions do not
                                    go away completely. The person continues to relive them with the same intensity
                                    as the first time, in the form of dreams or flashbacks. Flashbacks are mental
                                    images that bring the traumatic situation back to the person. The person may
                                    also relive these reactions when exposed to a situation similar to the one
                                    that caused the trauma.
                                </p>
                                <p>
                                    The affected person can then try to avoid situations or conditions that remind
                                    them of the trauma. The need to avoid any threatening situation can have serious
                                    consequences on personal, family and social activities.
                                </p>

                            </section>

                            <section>
                                <h3 className={'section-header mt-4'}>Symptoms</h3>
                                <p>
                                    Symptoms of post-traumatic stress disorder usually start within the
                                    first 3 months after a trauma. However, sometimes it can take several
                                    months or even years for symptoms to appear.

                                </p>
                                <p className={'bold-intro'}>
                                    The characteristic signs of post-traumatic stress disorder are:
                                </p>
                                <p>

                                </p>
                                <div className={'container'}>
                                    <ul className={'ml-4'}>
                                        <li>
                                            A feeling of intense fear, horror and helplessness accompanied by one
                                            or more of the following symptoms:
                                            <ul className={'ml-4'}>
                                                <li>Heart palpitations (heart beating abnormally fast);</li>
                                                <li>Rapid breathing;</li>
                                                <li>Tremors;</li>
                                                <li>Chills;</li>
                                                <li>Excessive sweating;</li>
                                                <li>Flashbacks;</li>
                                            </ul>
                                        </li>

                                        <li>
                                            Thoughts that force themselves into the mind and run out of control.
                                            Because of these thoughts, the affected person experiences distress,
                                            which manifests as anxiety and depression;
                                        </li>
                                        <li>
                                            Difficulty feeling certain emotions, for example
                                            tenderness and sexual desire;
                                        </li>
                                        <li>
                                            Difficulty concentrating;
                                        </li>
                                        <li>
                                            Difficulty getting to sleep;
                                        </li>
                                        <li>
                                            A need to be on constant alert, ready to respond.
                                        </li>
                                    </ul>
                                </div>
                            </section>


                            <section>
                                <h3 className={'section-header mt-4'}>When to consult</h3>
                                <p>
                                    Sleep disturbances are often the first reason people with post-traumatic stress
                                    disorder seek medical help.
                                </p>
                                <p>
                                    Do not wait until you are no longer able to do your usual activities to consult.
                                    If you have symptoms, you can consult certain organizations and associations
                                    working in the field of anxiety disorders. These offer information,
                                    help and support.
                                </p>
                                <p>
                                    However, see your family doctor or other healthcare professional if
                                    you experience any of the following:
                                </p>
                                <div className={'container'}>
                                    <ul className={'ml-4'}>
                                        <li>You live in distress;</li>
                                        <li>
                                            You are constantly on alert, and this situation has been
                                            going on for several weeks;
                                        </li>
                                        <li>
                                            You relive the traumatic situation in your
                                            dreams or as a flashback;
                                        </li>
                                        <li>
                                            You avoid situations that might remind you of your trauma;
                                        </li>
                                        <li>
                                            A health care professional will be able to assess whether it is
                                            post-traumatic stress disorder or another health problem. He will suggest
                                            a treatment plan tailored to your needs.
                                        </li>
                                    </ul>
                                </div>
                                <p className={'bold-intro'}>
                                    See the Help and Resources section for the resources available to you.
                                </p>
                            </section>

                            <section>
                                <h3 className={'section-header mt-4'}>Treatments</h3>
                                <p>
                                    Post-traumatic stress disorder is a treatable illness. There are recognized
                                    treatments to treat it. Treatments allow people with the disease to regain
                                    control over their lives and daily activities. The earlier the sufferer consults,
                                    the better their chances of recovery.

                                </p>
                                <p>
                                    In the majority of cases, post-traumatic stress disorder is effectively
                                    treated with psychotherapy, medication, or a combination of these 2 treatments.
                                </p>
                            </section>

                            <section>
                                <h3 className={'section-header mt-4'}>Psychotherapy sessions</h3>
                                <p>
                                    Experts in post-traumatic stress disorder generally recommend one of the
                                    following 3 therapies:
                                </p>
                                <div className={'container'}>
                                    <ul className={'ml-4'}>
                                        <li>
                                            Cognitive behavioral therapy, which aims to modify the person's
                                            problematic thoughts and behaviors and replace them with thoughts
                                            and reactions appropriate to reality. It helps to understand the
                                            origin of the problem and to find solutions;
                                        </li>
                                        <li>Hypnosis;</li>
                                        <li>
                                            The EMDR technique (Eye Movement Desensitization and Reprocessing).
                                            This technique combines the movements of the person's eyes with mental
                                            images that remind them of the traumatic experience. It aims to decrease
                                            the person's sensitivity to traumatic images and memories.
                                        </li>
                                    </ul>
                                </div>

                            </section>

                            <section>
                                <h3 className={'section-header mt-4'}>Medicines</h3>
                                <p>
                                    Different drugs can be used to treat post-traumatic stress disorder,
                                    including antidepressants and anti-anxiety drugs.
                                </p>
                                <p>
                                    Join our community for more information. Our volunteers are here to share
                                    and help you through this <u>start here</u>.
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

export default Ptsd