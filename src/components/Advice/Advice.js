import React, {useEffect} from 'react'
import Div from "../chunks/Div";
const Advice = (props) => {
    useEffect(() => {
        document.title = props.title || "";
    })
        return (
            <Div className="container advice">
                <h2 className={'font-weight-bold'}>
                    Advice
                </h2>
                <div className={'mt-5'}>
                    <p>
                        The guidance part of bunchofbrains.com is here to furnish you with
                        precise fundamental data about mental health. Our goal is to guide
                        people who suffer from mental issues to get back to their normal
                        balanced life and also build a community who had triumphed over
                        various mental illnesses.
                    </p>
                </div>
                <h3 className={'mt-5'}>
                    What is mental illness?
                </h3>
                <div>
                    <p>
                        A mental illness is a set of disturbances in thoughts, emotions
                        and / or behavior that reflect a biological, psychological or
                        developmental disorder of mental functions. Mental illness necessarily
                        leads to distress for the individual and / or difficulty at work or
                        in social relationships.
                    </p>
                    <p>
                        Research indicates that mental illnesses are caused by the interplay
                        of biological, genetic, psychological and social factors that lead
                        to disturbances in the brain. Each individual's vulnerability is
                        different, but mental illness can occur in anyone if sufficient risk
                        factors are present.
                    </p>
                </div>

                <h3 className={'mt-5'}>
                    It's not
                </h3>

                <div>
                    <p>
                        A normal reaction to an unfortunate event, such as a romantic
                        break-up, the death of a loved one, or the loss of a job.
                    </p>
                    <p>
                        The normal reaction to a stressful situation, such as a promotion
                        at work or moving.
                    </p>
                    <p>
                        A moral weakness.
                    </p>
                    <p>
                        Deviating religious, political or sexual behavior such as religious
                        radicalization, support for a dissenting political party, or marginal
                        sexual preferences.
                    </p>
                    <p>
                        A conflict between the values of society and the behavior of an
                        individual such as fraud, theft or assault.
                    </p>
                    <p>
                        An excuse to commit an illegal act.
                    </p>
                </div>
                <h3 className={'mt-5'}>
                    Signs
                </h3>
                <div>
                    <div>
                        <p>
                            It is highly unlikely to tell if an individual is building up a
                            dysfunctional behavior without a doubt. Notwithstanding, here are
                            a few signs that may show that an individual showing some signs
                            of mental illness condition:
                        </p>

                    </div>
                    <ul className="ml-5 list-display list-checkmarks">
                        <li> isolating from individuals </li>
                        <li>Not taking an interest in exercises they used to appreciate</li>
                        <li>Sleeping excessively or insufficient </li>
                        <li>Overeating or under eating </li>
                        <li>Feeling miserable</li>
                        <li>Substance misuse (medications and liquor) </li>
                        <li>Confusion  </li>
                        <li>Trouble taking part in everyday exercises, for example, going to class or work  </li>
                        <li>Difficulty showering  </li>
                        <li>Delusions  </li>
                        <li>Hearing voices </li>
                    </ul>
                </div>

                <div className="m-5 text-danger font-weight-bolder h4">
                    In the event that you are considering hurting yourself,
                    consider 911 or visit the closest trauma center.
                </div>
                <div>
                    On the off chance that you are encountering any of these manifestations
                    above, and it's upsetting your capacity to work every day, counsel a
                    psychological doctor immediately. Dysfunctional behavior is exceptionally
                    treatable with treatment and (if important) medicine. In the event that
                    somebody you love is encountering these indications, you can connect and
                    get them help.
                </div>

                <h3 className={'mt-5'}>
                    Treatments?
                </h3>

                <div>
                    In general, there are three kinds of treatment for mental illness:
                    lifestyle modifications, psychotherapy, and medication. Some diseases
                    will respond better to one treatment modality than another. For example,
                    psychotic disorders generally require medication while personality
                    disorders respond more to psychotherapy, and anxiety disorders will
                    be best treated with a combination of lifestyle changes, psychotherapy,
                    and medication.
                </div>

                <h3 className={'mt-5'}>
                    What can I do?
                </h3>

                <div>
                    <p>Certain factors are protective and reduce the risk of developing mental
                        illness and the severity of symptoms:</p>
                    <ul className="ml-5 list-display list-checkmarks">
                        <li>
                            A balanced rhythm of life with time to work, to maintain friendships,
                            to rest and to sleep.
                        </li>
                        <li>Not taking an interest in exercises they used to appreciate</li>
                        <li>Regular exercise, at least three times a week</li>
                        <li>Moderation in the consumption of alcohol and caffeine</li>
                        <li>To speak with someone who had the same mental issue AND HAS OVERCOME
                            IT so you can learn from their successful experience
                        </li>
                    </ul>
                </div>
            </Div>
        )
}

export default Advice