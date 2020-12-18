import React, {useEffect} from 'react'
import {NavLink} from "react-router-dom";
const Faq = (props)=>{
        useEffect(() => {
            document.title = props.title || "";
        })

        return(
            <div className="container faq">
                <section className="accordion">
                    <input type="checkbox" name="collapse" id="handle1"/>
                        <h2 className="handle">
                            <label htmlFor="handle1">What is Bunchofbrains?</label>
                        </h2>
                        <div className="content">
                            <p className={"m-3"}>
                                After you sign up, you will find numerous volunteers who match your
                                experience, and the type of issues you are dealing with for an audio
                                or video chat, so you can pick their minds about their successful
                                experience.
                                We have found that we are able to provide a successful match most of
                                the time.
                            </p>

                        </div>
                </section>

                <section className="accordion">
                    <input type="checkbox" name="collapse" id="handle2"/>
                    <h2 className="handle">
                        <label htmlFor="handle2">Who will be helping me?</label>
                    </h2>
                    <div className="content">
                        <p className={"m-3"}>
                            Bunchofbrains is the largest online mental health community platform
                            worldwide. We change the way people get help with facing life's challenges
                            by providing convenient, discreet and easy access to people who have
                            overcome their mental health issues. Bunchofbrains connects people who
                            still struggle with their psychological wellbeing to others who had
                            experimented the same issues and found a successful way to reestablish
                            their normal lives available anytime, anywhere, through a computer,
                            tablet or smartphone.
                        </p>

                    </div>
                </section>

                <section className="accordion">
                    <input type="checkbox" name="collapse" id="handle3"/>
                    <h2 className="handle">
                        <label htmlFor="handle3">Is Bunchofbrains right for me?</label>
                    </h2>
                    <div className="content">
                        <div className={'m-3'}>
                            <p>
                                Bunchofbrains may be right for you if you're looking to improve
                                the quality of your life. Whenever there is anything that interferes
                                with your happiness or prevents you from achieving your goals,
                                we may be able to help. We also have various volunteers who had
                                experienced a specific issues, such as stress, anxiety, relationships,
                                parenting, depression, addictions, eating, sleeping, trauma, anger,
                                family conflicts, LGBT matters, grief, religion, self-esteem and more.
                            </p>

                            <p>
                                Bunchofbrains IS NOT THE RIGHT SOLUTION for you if any
                                of the following is true :
                            </p>

                            <div className={'ml-5'}>

                                <ul>
                                    <li>
                                        You have thoughts of hurting yourself or others
                                    </li>
                                    <li>
                                        You are a minor or you are under the care of a legal guardian
                                    </li>
                                    <li>
                                        You are in an urgent crisis or an emergency situation
                                    </li>
                                    <li>
                                        You have been diagnosed with a severe mental illness, or if you have
                                        been advised to be in psychological supervision or psychiatric care
                                    </li>
                                    <li>
                                        You were required to undergo therapy or counseling either by a court
                                        order or by any other authority
                                    </li>
                                    <li>
                                        You do not have a device that can connect to the Internet or you
                                        do not have a reliable Internet connection
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>



                <section className="accordion">
                    <input type="checkbox" name="collapse" id="handle4"/>
                    <h2 className="handle">
                        <label htmlFor="handle4">Can bunchofbrains substitute for traditional face-to-face therapy?</label>
                    </h2>
                    <div className="content">
                        <p className={"m-3"}>
                            The volunteers who help through Bunchofbrains are people who had experience with a
                            specific mental health issue and found a way to overcome it or cope with it. However,
                            while the service may have benefits, it's not capable of substituting for traditional
                            face-to-face therapy in every case. Please note that your provider won't be able to
                            make any official diagnosis, to fulfill any court order or prescribe medication or
                            tells you to change your medication.
                            <span className="text-danger font-weight-bold">
                                Any advice you get from the volunteers must be discussed with
                                your doctor before taking any action.
                            </span>
                        </p>

                    </div>
                </section>


                <section className="accordion">
                    <input type="checkbox" name="collapse" id="handle5"/>
                    <h2 className="handle">
                        <label htmlFor="handle5">How will I communicate with the volunteer?</label>
                    </h2>
                    <div className="content">
                        <p className={"m-3"}>
                            You can exchange in three ways:
                            <div className={'ml-5'}>
                                <ul>
                                    <li>
                                        Exchanging messages
                                    </li>
                                    <li>
                                        Chatting live audio
                                    </li>
                                    <li>
                                        Video conferencing
                                    </li>
                                </ul>
                            </div>
                            You can use different ways at different times as you wish, based on your needs,
                            availability, and convenience.
                        </p>

                    </div>
                </section>


                <section className="accordion">
                    <input type="checkbox" name="collapse" id="handle6"/>
                    <h2 className="handle">
                        <label htmlFor="handle6">What is the role of Bunchofbrains.com?</label>
                    </h2>
                    <div className="content">
                        <div className={"m-3"}>
                            We are totally obsessed about securing your privacy and confidentiality.
                            We have built a state-of-the-art technology, operation, and infrastructure with
                            one thing in mind: protecting your privacy and safeguarding the information you provide.
                            Our privacy and confidentiality standards are by far more advanced than what is required
                            by law or regulations, so you can feel safe and comfortable.
                            <div className={'ml-5 '}>
                                <ul>
                                    <li>
                                        You don't need to identify yourself
                                    </li>
                                    <li>
                                        Everything you tell is protected by strict federal and state laws.
                                    </li>
                                    <li>
                                        We don't cooperate or work with any insurance companies or employers,
                                        so nothing needs to be shared, reported or filed with them.
                                    </li>
                                    <li>
                                        You can always click the "Shred" button next to each message that you've
                                        sent
                                        so it will no longer show in your account.
                                    </li>
                                    <li>
                                        All the messages between you and the volunteer are secured and encrypted
                                    </li>
                                    <li>
                                        Our browsing encryption system (SSL) follows modern best practices,
                                        providing
                                        world class online security and encryption.
                                    </li>
                                    <li>
                                        Our databases are encrypted and scrambled so they essentially become useless
                                        in the very unlikely event that they are being stolen or inappropriately
                                        used.
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="accordion">
                    <input type="checkbox" name="collapse" id="handle7"/>
                    <h2 className="handle">
                        <label htmlFor="handle7">How is my privacy protected?</label>
                    </h2>
                    <div className="content">
                        <div className={"m-3"}>
                            We are totally obsessed about securing your privacy and confidentiality.
                            We have built a state-of-the-art technology, operation, and infrastructure with
                            one thing in mind: protecting your privacy and safeguarding the information you provide.
                            Our privacy and confidentiality standards are by far more advanced than what is required
                            by law or regulations, so you can feel safe and comfortable.
                            <p>
                                The service is provided by independent volunteers who exchange directly with you.
                                These providers are not employees of Bunchofbrains and the site doesn't oversee them
                                professionally. Our mission is to build, maintain, and support a platform that lets
                                users and volunteers communicate effectively, and to facilitate this channel so they
                                can get the most out of their interaction.
                                <span className="text-danger font-weight-bold">
                                    Any advice you get from the volunteers must be discussed with
                                    your doctor before taking any action.
                                </span>
                            </p>
                        </div>

                    </div>
                </section>


                <section className="accordion">
                    <input type="checkbox" name="collapse" id="handle8"/>
                    <h2 className="handle">
                        <label htmlFor="handle8">How can I get started with Bunchofbrains?</label>
                    </h2>
                    <div className="content">
                        <div className={"m-3"}>
                            Click <NavLink to={"/sign-up"}>here</NavLink> to get started.
                        </div>
                    </div>
                </section>


                <section className="accordion">
                    <input type="checkbox" name="collapse" id="handle9"/>
                    <h2 className="handle">
                        <label htmlFor="handle9">I'm a volunteer. How can I provide help using Bunchofbrains?</label>
                    </h2>
                    <div className="content">
                        <div className={"m-3"}>
                            Please start the application process by clicking <NavLink to={"/log-in"}>here</NavLink>.
                        </div>
                    </div>
                </section>

            </div>
        )
}
export default Faq