import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";

const Schizophrenia = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })

    return(
        <div className={'mx-md-4 article_container'}>
            <GoBackButton/>
            <article className={'container article'}>
                <div className={'container'}>
                    <header>
                        <h1>Schizophrenia</h1>
                    </header>
                    <div className={'container mx-md-4 img-placeholder'}/>
                    <div className={'container row'}>
                        <div className={'mt-3 col-12'}>
                            <section>
                                <p>
                                    Psychotic disorders significantly affect the functioning of the brain by
                                    altering thoughts, beliefs or perceptions. For example, a person with a
                                    psychotic disorder may hear voices or have the impression that other people
                                    are manipulating their thoughts. She can hardly tell the difference between
                                    what she sees and what is real. It is said that the person affected during
                                    times of crisis loses contact with reality.
                                </p>

                                <p>
                                    People with a psychotic disorder find it very difficult to
                                    function on a daily basis.
                                </p>
                                <p>
                                    Psychotic disorders affect both young people and adults,
                                    regardless of ethnicity, social or economic status, and education.
                                    Psychotic disorders usually start in adolescence or early adulthood.
                                </p>

                            </section>

                            <section>
                                <h3 className={'section-header mt-4'}>The main forms of psychotic disorders</h3>
                                <p>
                                    <u>Schizophrenia:</u> Schizophrenia causes loss of contact with 
                                    reality by affecting thoughts, emotions, feelings and behaviors.
                                    The affected person has difficulty functioning in their daily activities.
                                </p>
                                <p>
                                    <u>Schizoaffective disorder:</u> People with schizoaffective disorder have both
                                    symptoms of schizophrenia and symptoms associated with mood disorders
                                    (depression and bipolar disorder).
                                </p>
                                <p>
                                    <u>Delusional disorder:</u> Delusional disorder primarily affects thoughts
                                    and ideas. For example, the affected person may:
                                </p>
                                <div className={'container'}>
                                    <ul className={'ml-4'}>
                                        <li>Have difficulty concentrating or following a conversation;</li>
                                        <li>Believing that a star has fallen in love with her;</li>
                                        <li>
                                            Feeling like you are smelling badly, or feeling like you are
                                            being chased or contaminated;
                                        </li>
                                    </ul>
                                </div>
                                <p>
                                    <u>Brief Psychotic Episode:</u> Symptoms for a brief psychotic episode are the same
                                    as those for schizophrenia. However, they appear suddenly and are often
                                    triggered by significant stress: death, violence, illness, natural disaster.
                                    The brief psychotic episode lasts no more than a month. The person
                                    then returns to normal functioning, often without relapsing.

                                </p>
                                <p>
                                    <u>Psychotic disorder secondary to substance use:</u> In this disorder,
                                    the loss of contact with reality is caused by the use of substances
                                    such as alcohol, drugs or medication. The affected person may have signs
                                    and symptoms such as delusions and hallucinations.
                                </p>

                            </section>





                            <section>
                                <h3 className={'section-header mt-4'}>Signs and symptoms</h3>
                                <p>
                                    Those around you may notice some signs of the onset of a
                                    psychotic disorder in the person affected:
                                </p>
                                <div className={'container'}>
                                    <ul className={'ml-4'}>
                                        <li>His sleep and appetite are disturbed;</li>
                                        <li>She neglects her personal hygiene and appearance;</li>
                                        <li>She lacks energy and motivation;</li>
                                        <li>
                                            Their mood is changeable: for example, the person may be unusually
                                            overexcited and then become depressed within a few minutes;
                                        </li>
                                        <li>
                                            She has difficulty concentrating or maintaining her attention
                                            for long periods of time;
                                        </li>
                                        <li>
                                            His usual activities, his work, his studies or his friends no
                                            longer interest him as before;
                                        </li>
                                        <li>
                                            Their emotions change: for example, the person appears indifferent
                                            to those around them, detached or cut off from the world;
                                        </li>
                                        <li>
                                            She has delusional ideas, that is, strange or false ideas, concerns
                                            or bizarre beliefs. For example, she may feel that her thoughts are
                                            being controlled by an outside force;
                                        </li>
                                        <li>
                                            Her thoughts are confused and incoherent: for example, she has difficulty
                                            following a conversation and her words are illogical or vague;
                                        </li>
                                        <li>
                                            She has unusual behaviors: for example, she bursts out laughing or
                                            gets angry for no reason, refuses to eat for fear that her food
                                            is contaminated;
                                        </li>
                                        <li>
                                            She isolates herself: for example, she stays in her room all day;
                                        </li>
                                        <li>
                                            She begins to use alcohol or drugs when she has never
                                            used them, or she uses more than usual.
                                        </li>
                                        <li>
                                            Symptoms can vary from person to person and change over time;
                                        </li>
                                    </ul>
                                </div>
                            </section>


                            <section>
                                <p className={'bold-intro'}>During a psychotic episode, the person may: </p>
                                <div className={'container'}>
                                    <ul className={'ml-4'}>

                                        <li>Have hallucinations;</li>
                                        <li>Hear a voice or voices that no one else hears;</li>
                                        <li>Seeing things that no one else sees;</li>
                                        <li>Smell smells that no one else can smell;</li>
                                        <li>
                                            Have unusual physical sensations, for example, having the impression
                                            that an invisible person is touching her;
                                        </li>
                                        <li>Have delusional ideas, for example:</li>
                                        <ul className={'ml-4'}>
                                            <li>
                                                Feeling like you can control the thinking of others or
                                                that other people control your thoughts;
                                            </li>
                                            <li>
                                                Feeling like you are being watched, followed or
                                                persecuted;
                                            </li>
                                            <li>
                                                Feeling like you are different from others or that you
                                                have changed;
                                            </li>
                                            <li>
                                                Delusions can make the person anxious. For example, she
                                                may experience permanent insecurity ;
                                            </li>
                                        </ul>

                                    </ul>
                                </div>
                                <p>
                                    When a psychotic disorder starts, many people pay little attention to the symptoms
                                    and think they will go away on their own. By doing so, they delay
                                    the time when they could receive and benefit from help and treatment.
                                </p>
                            </section>

                            <section>
                                <h3 className={'section-header mt-4'}>When to consult</h3>
                                <p>
                                    Do not wait until you are no longer able to do your usual activities to consult.
                                    A healthcare professional can assess whether you have a psychotic disorder and
                                    determine what type of disorder it is. They can also tell you if you have another
                                    health problem that has similar symptoms instead. To properly assess you,
                                    your doctor may need to check up on your physical condition or order lab tests.
                                    He will suggest a treatment plan tailored to your needs.
                                </p>
                                <p>
                                    See the Help and Resources section for the resources available to you.

                                </p>
                            </section>

                            <section>
                                <h3 className={'section-header mt-4'}>Treatments</h3>
                                <p>
                                    Psychotic disorders are treatable illnesses. There are recognized treatments that
                                    allow people to regain control over their life and daily activities.

                                </p>
                                <p>
                                    According to recent studies, the sooner a psychotic disorder is detected and
                                    treated after symptoms appear, the more likely it is to recover quickly.
                                    The person can thus:
                                </p>
                                <ul className={'ml-4'}>
                                    <li>Maintain a healthy and fulfilling life;</li>
                                    <li>Maintain and improve ties with the members of his entourage;</li>
                                    <li>Experience fewer relapses of psychotic episodes;</li>
                                    <li>
                                        Reduce the risk of aggressive or suicidal behavior, or behavior that could
                                        endanger one's life or that of others;
                                    </li>
                                    <li>
                                        Promote good conservation of memory and concentration;
                                    </li>

                                </ul>
                                <p>
                                    In the majority of cases, psychotic disorders are effectively treated by a
                                    combination of one or more treatments and rehabilitation activities:
                                </p>
                                <ul className={'ml-4'}>
                                    <li>Psychotherapy,</li>
                                    <li>Participation in group therapy, <u>start here</u></li>
                                    <li>Taking medication.</li>
                                    <li>Psychotherapy sessions</li>
                                </ul>
                                <p>
                                    Experts generally recommend cognitive behavioral therapy to treat psychotic
                                    disorders. This psychotherapy aims to modify the thoughts and behaviors of
                                    the person to replace them with thoughts and reactions appropriate to reality.
                                </p>
                            </section>

                            <section>
                                <h3 className={'section-header mt-4'}>Medicines for psychotic disorders</h3>
                                <p>
                                    Different drugs can be used to treat symptoms and prevent further
                                    psychotic episodes. These drugs are called “neuroleptics” or “antipsychotics”.
                                </p>
                                <p className={'bold-intro'}>

                                </p>
                                <p className={"bold-intro"}>
                                    Action of antidepressants and anxiolytics
                                </p>
                                <p>
                                    Neuroleptics or antipsychotics are drugs designed to restore the balance
                                    of chemistry in the brain.
                                </p>
                                <p>They thus rebalanced:</p>
                                <div className={'container'}>
                                    <ul className={'ml-4'}>
                                        <li>The emotions;</li>
                                        <li>Thoughts;</li>
                                        <li>The perceptions;</li>
                                        <li>Memory;</li>
                                        <li>Concentration;</li>

                                    </ul>
                                </div>
                                <p>
                                    These drugs also help reduce anxiety, make the person fit for therapy
                                    and reduce the risk of having another psychotic episode.
                                </p>
                            </section>

                            <section>
                                <h3 className={'section-header mt-4'}>Recommendations for taking medication</h3>
                                <p>
                                    If your doctor prescribes medication for you, it is important that
                                    you take it carefully as directed.
                                </p>
                                <p>
                                    Even if you feel better, you should continue the treatment as prescribed
                                    to prevent your symptoms from coming back.
                                </p>
                                <p>
                                    If you have any unwanted side effects from the medications, see your pharmacist
                                    or doctor as soon as possible to discuss them. If necessary,
                                    your doctor may adjust your medication or recommend another medication.
                                </p>

                            </section>

                            <section>
                                <h3 className={'section-header mt-4'}>People at risk</h3>
                                <p>
                                    Psychotic disorders affect men a little more than women. They usually
                                    appear between 15 and 35 years old.
                                </p>
                                <p>
                                    Psychotic disorders most often appear in adolescence because of the
                                    changes that occur during this time that affect:
                                </p>
                                <div className={'container'}>
                                    <ul className={'ml-4'}>
                                        <li>Personal and gender identity;</li>
                                        <li>Being detached from one's family;</li>
                                        <li>Intellectual maturity;</li>
                                        <li>Starting a career or pursuing higher education;</li>
                                        <li>The search for personal and financial autonomy;</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h3 className={'section-header mt-4'}>People at risk</h3>
                                <p>
                                    Consequences on family members
                                </p>
                                <p>
                                    When someone experiences a psychotic episode, those around them can be deeply
                                    affected. They may feel unsettled and helpless. They need help understanding
                                    the psychotic disorder the person has and how to communicate better with them.
                                    They can for example:
                                </p>
                                <div className={'container'}>
                                    <ul className={'ml-4'}>
                                        <li>
                                            Learn to use effective communication techniques and coping strategies;
                                            <u>start here</u>;
                                        </li>
                                        <li>Participate in supportive interventions;</li>
                                    </ul>
                                </div>
                                <p>
                                    Join our community for more information. Our volunteers are here to share
                                    and comforts you whether if you suffer from this illness or one of your
                                    loved ones <u>start here</u>.
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

export default Schizophrenia