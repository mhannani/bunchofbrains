import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";

const Ocd = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div className={'mx-md-4 article_container'}>
            <GoBackButton/>
            <article className={'container article'}>
                <div className={'container'}>
                    <header>
                        <h1>An Overview of Obsessive Compulsive Disorder (OCD)</h1>
                        <h2>What do Obsessive Compulsive Disorder do?</h2>
                    </header>
                    <div className={'container mx-md-4 img-placeholder'}/>
                    <div className={'container row'}>
                        <div className={'mt-3 col-12'}>
                            <section>
                                <p>
                                    Everyone has already been significantly preoccupied with a thought.
                                    Usually thought disappears and life goes on. It can also happen that
                                    everyone instinctively repeats certain actions, for example checking
                                    that a door is properly locked after removing the key from the lock.
                                    These situations are normal.
                                </p>

                                <p>
                                    However, these situations take on exaggerated importance for people with
                                    obsessive-compulsive disorder. The affected person feels overwhelmed by
                                    uncontrolled and repetitive thoughts, which cross their mind despite their
                                    desire or will. The person is unable to stop having these thoughts,
                                    although most often they know they are meaningless. These thoughts then
                                    become obsessions. For example, the person may be afraid that they have
                                    forgotten to turn off the stove when they know they have turned it off.
                                    She may also be afraid of catching illnesses from touching everyday objects,
                                    such as doorknobs.
                                </p>
                                <p>
                                    Subsequently, the affected person may also have compulsions. She then feels
                                    compelled to repeat certain actions to get the obsession out of her mind or
                                    to reduce her anxiety. For example, she may wash her hands repeatedly,
                                    sometimes to the point of injuring herself, to avoid infecting herself
                                    or catching illnesses. She may also repeat formulas, count objects,
                                    or ask others to do so, in order to decrease the chances of a negative experience.
                                </p>
                                <p>
                                    The person may experience a lot of psychological distress because of
                                    their obsessions and compulsions. They waste a lot of her time every
                                    day and complicate her routine and daily activities. The person finds
                                    it difficult to deal with their work, social and family responsibilities.
                                </p>
                                <p>
                                    The person who experiences these situations recognizes that their thoughts
                                    or behaviors are illogical, exaggerated or bizarre, but they are unable
                                    to control themselves.
                                </p>

                            </section>

                            <section>
                                <h3 className={'section-header mt-4'}>Symptoms</h3>
                                <p>In most cases, obsessive-compulsive disorder develops gradually.</p>

                                <p>
                                    The person with obsessive-compulsive disorder may have only obsessions,
                                    only compulsions, or a combination of both.
                                </p>
                                <p>
                                    Obsessions and compulsions become more frequent or more intense over time.
                                </p>
                            </section>

                            <section>
                                <h3 className={'section-header mt-4'}>Examples of obsessions</h3>
                                <p className={'bold-intro'}>Among the widespread obsessions is intense fear:</p>
                                <div className={'container'}>
                                    <ul className={'ml-4'}>
                                        <li>To become contaminated by contact with any object or substance;</li>
                                        <li>Losing control or getting angry;</li>
                                        <li>
                                            Forgetting something important, such as turning off the stove
                                            or locking the door to the house;
                                        </li>
                                        <li>Forgetting or losing an item, such as a credit card;</li>
                                        <li>
                                            Another known obsession is having sexual thoughts that
                                            completely occupy the mind;
                                        </li>

                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h3 className={'section-header mt-4'}>Examples of compulsions</h3>
                                <p>
                                    Some of the most common compulsions are:
                                </p>
                                <p className={'bold-intro'}>Here are the most common symptoms:</p>
                                <div className={'container'}>
                                    <ul className={'ml-4'}>
                                        <li>
                                            Washing your hands repeatedly, sometimes even to the point of
                                            injuring yourself;
                                        </li>
                                        <li>Take several showers each day;</li>
                                        <li>Do housework non-stop;</li>
                                        <li>Constantly make sure that you have turned off electrical appliances;</li>
                                        <li>
                                            Check several times that the doors are locked
                                            before going out or going to bed;
                                        </li>
                                        <li>
                                            Devote considerable time to perfecting the organization and storage
                                            of cabinet contents;
                                        </li>
                                        <li>
                                            Forcing yourself to follow the same route to work every day,
                                            and cross the street in exactly the same place;
                                        </li>
                                        <li>The person can spend several hours a day with their compulsions.</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h3 className={'section-header mt-4'}>When to consult</h3>
                                <p>
                                    Do not wait until you are no longer able to do your usual activities to consult. 
                                    If you have symptoms of obsessive-compulsive disorder, you can contact certain 
                                    organizations and associations related to the field of anxiety disorders.
                                    You can also get information, <u>help and support here</u>.

                                </p>
                                <p>
                                    However, see your family doctor or other healthcare professional
                                    if you experience any of the following:

                                </p>
                                <div className={'container'}>
                                    <ul className={'ml-4'}>
                                        <li>
                                            Repetitive thoughts occupy your mind and cause you distress and anxiety;
                                        </li>
                                        <li>
                                            You feel compelled to repeat gestures or actions without being
                                            able to control yourself;
                                        </li>
                                        <li>
                                            You have difficulty carrying out your activities and meeting your family,
                                            work and social responsibilities;
                                        </li>

                                    </ul>
                                </div>
                                <p>
                                    A healthcare professional can assess whether you have obsessive-compulsive
                                    disorder or another condition that has similar symptoms. To properly assess you,
                                    your doctor may need to check up on your physical condition or order lab tests.
                                    He will suggest a treatment plan tailored to your needs.
                                </p>
                                <p>
                                    Join our community for more information. You can also speak to our volunteers
                                    who had faced the same issue
                                </p>
                                <p>
                                    <u>start here </u>
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

export default Ocd
