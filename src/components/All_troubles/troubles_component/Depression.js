// import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";
import {useEffect} from "react";
// import $ from "jquery";

const Depression = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    //
    // useEffect(()=>{
    //     $.fn.followTo = function ( pos ) {
    //         // var window = this;
    //         let $this = this,
    //         $window = $(window);
    //
    //         $(window).scroll(function(e){
    //             if ($window.scrollTop() < pos) {
    //                 $this.css({
    //                     position: 'absolute',
    //                     top: pos
    //                 });
    //             } else {
    //                 $this.css({
    //                     position: 'fixed',
    //                     top: 100
    //                 });
    //             }
    //         });
    //     };
    //
    //     // $('#f').followTo(500);
    //
    // })
    //
    //

    return(
            <div className={'mx-md-4 article_container'}>
                <GoBackButton/>
                <article className={'container article'}>
                    <div className={'container'}>
                        <header>
                            <h1>Depression</h1>
                        </header>
                        <div className={'container mx-md-4 img-placeholder'}/>
                        <div className={'container row'}>
                            <div className={'mt-3 col-12'}>
                                <section>
                                    We can all experience emotions like anger, sadness, or joy.
                                    Usually we feel that we are in control of our emotions and we are
                                    able to deal with them on a daily basis.
                                    A person with depression feels negative emotions more intensely and for
                                    longer than most people.
                                    She has a harder time controlling her emotions and may feel that her life is
                                    one of constant pain. The affected person thus has difficulty in fulfilling
                                    his professional, family and social obligations.
                                </section>

                                <section>
                                    <h3 className={'section-header mt-4'}>Different forms of depression</h3>
                                    <p className={'bold-intro'}>Depression manifests itself in different forms:</p>
                                    <p>
                                        <strong>Major depression: </strong>
                                        the presence of symptoms of depression for at
                                        least 2 weeks that significantly affect a person's general functioning.
                                    </p>
                                    <p>
                                        <strong>Seasonal depression: </strong>
                                        the presence of symptoms of depression
                                        that always come back at the same time each year. In many people,
                                        these symptoms usually appear on the onset of winter.
                                    </p>
                                    <p>
                                        <strong>Postpartum depression: </strong>
                                        the presence of symptoms of depression in a woman, usually within 6 months of
                                        giving
                                        birth.
                                    </p>
                                </section>

                                <section>
                                    <h3 className={'section-header mt-4'}>Physical symptoms</h3>
                                    <p className={'bold-intro'}>The most common physical symptoms of depression are:</p>
                                    <div className={'container'}>
                                        <ul className={'ml-4'}>
                                            <li>tired;</li>
                                            <li>lack of energy or great restlessness;</li>
                                            <li>sleep problems: the person sleeps too much or not enough;</li>
                                            <li>decreased or increased appetite, which may cause weight loss or gain;
                                            </li>
                                            <li>decrease or loss of sexual interest;</li>
                                            <li>Onset of complaints such as headache, back pain or stomach pain;</li>

                                        </ul>
                                    </div>
                                </section>

                                <section>
                                    <h3 className={'section-header mt-4'}>Psychological symptoms</h3>
                                    <p className={'bold-intro'}>The most common psychological symptoms in people with
                                        depression are:</p>
                                    <div className={'container'}>
                                        <ul className={'ml-4'}>
                                            <li>Great sadness. For example, the person cries often;</li>
                                            <li>A very significant loss of interest in professional, social and family
                                                activities;
                                            </li>
                                            <li>A feeling of guilt or failure;</li>
                                            <li>Decreased self-esteem;</li>
                                            <li>Decrease or loss of sexual interest;</li>
                                            <li>Difficulty concentrating on a task;</li>
                                            <li>Suicidal thoughts;</li>
                                        </ul>
                                    </div>
                                </section>

                                <section>
                                    <h3 className={'section-header mt-4'}>When to consult</h3>
                                    <p>
                                        Do not wait until you are no longer able to do your usual activities to consult.
                                        If you have symptoms, you can consult certain organizations and associations in
                                        the
                                        field of mental health. These offer information, help and support. See the Help
                                        and Resources section for the resources available to you.
                                    </p>
                                    <p className={'bold-intro'}>See your family doctor or other healthcare professional
                                        if:</p>
                                    <div className={'container'}>
                                        <ul className={'ml-4'}>
                                            <li>You feel distressed;</li>
                                            <li>Your symptoms are preventing you from functioning normally;</li>
                                            <li>You have difficulty assuming your social, work or family
                                                responsibilities;
                                            </li>
                                        </ul>

                                    </div>
                                    <p>
                                        A healthcare professional will be able to assess whether you are depressed or
                                        have any other medical condition that has similar symptoms. To properly assess
                                        you, your doctor may need to check up on your physical condition or order lab
                                        tests.
                                        He will suggest a treatment plan tailored to your needs.
                                    </p>
                                    <p>
                                        If you are thinking about suicide and fear for your safety or the safety of
                                        those around you, check out the Preventing Suicide page. There you will find
                                        more information on the help and resources available.
                                    </p>
                                </section>

                                <section>
                                    <h3 className={'section-header mt-4'}>Treatments</h3>
                                    <p>
                                        Depression is an illness that can be treated with recognized treatments.
                                        These allow people with the disease to regain control over their life and
                                        daily activities. The earlier the sufferer consults, the better their
                                        chances of recovery.
                                    </p>
                                    <p>
                                        In the majority of cases, depression is treated effectively with psychotherapy,
                                        antidepressant drugs or a combination of these 2 treatments.
                                    </p>
                                </section>

                                <section>
                                    <h3 className={'section-header mt-4'}>Medicines for depression</h3>
                                    <p>
                                        Antidepressants are drugs that restore the chemical balance in the brain.
                                        They reduce the intensity of physical symptoms and act on:
                                    </p>
                                    <ul className={'ml-4'}>
                                        <li>The emotions;</li>
                                        <li>Memory;</li>
                                        <li>Concentration.</li>
                                    </ul>
                                </section>

                                <section>
                                    <h3 className={'section-header mt-4'}>Recommendations for taking medication</h3>
                                    <p>
                                        If your doctor prescribes medication for you, it is important
                                        that you take it carefully as directed.

                                    </p>
                                    <p>
                                        You will also need to be patient before you get results. It may take some time,
                                        sometimes up to 4 to 8 weeks, for the medication to work its maximum effect.


                                    </p>
                                    <p>
                                        Even if you feel better, you should continue to take your medicine as prescribed
                                        to prevent your symptoms from coming back.
                                    </p>
                                    <p>
                                        If you have any unwanted side effects from medication, see your pharmacist
                                        or doctor as soon as possible to discuss them. If necessary, your doctor may
                                        adjust your medication or recommend another medication.
                                    </p>
                                </section>


                                <section>
                                    <h3 className={'section-header mt-4'}>Prejudices</h3>
                                    <p>
                                        People with depression are sometimes victims of their own prejudices and those
                                        that exist in society. These prejudices discourage people with the disease from
                                        seeking help or continuing their treatment. To learn more about stigma,
                                        its consequences, and how you can fight it, <u>find our volunteers</u> that are
                                        willing
                                        to share what they’ve learned and have someone who understands your situation
                                        to talk to

                                    </p>
                                </section>

                                <section>
                                    <h3 className={'section-header mt-4'}>Notice</h3>
                                    <p>
                                        The information contained on the site does not in any way replace the advice
                                        of a professional health resource. If you have any questions regarding your
                                        condition, consult a professional resource.

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

export default Depression