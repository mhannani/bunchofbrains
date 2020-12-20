import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";

const Loneliness = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div className={'mx-md-4 article_container'}>
            <GoBackButton/>
            <article className={'container article'}>
                <div className={'container'}>
                    <header>
                        <h1>Loneliness</h1>
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

                            <section>
                                <h3 className={'section-header mt-4'}>Parents with special needs child</h3>
                                <p>
                                    Mental health affects the way we think, feel and behave; that’s why taking care
                                    of your mental health is just as important as your physical health. As a parent,
                                    you play a crucial role in your child's mental health:
                                </p>
                                <div className={'container'}>
                                    <ul className={'ml-4'}>
                                        <li>
                                            You can promote good mental health by what you do and say,
                                            and by the family environment you create.;
                                        </li>
                                        <li>
                                            You can also learn to recognize the early signs of mental health
                                            problems and know where to go for help;
                                        </li>
                                    </ul>
                                </div>
                            </section>


                            <section>
                                <h3 className={'section-header mt-4'}>
                                    How can I ensure the healthy development of my child's mental health?
                                </h3>
                                <p className={'bold-intro'}>Help your child build healthy, strong relationships:</p>
                                <p>
                                    Children and teens need strong bonds with family and friends. Spend some time
                                    together at the dinner table every night.
                                </p>
                                <p>
                                    Someone who is important to your child and whose presence is constant on a daily
                                    basis can play a key role in helping them develop resilience. This person, often
                                    a parent or other family member, is someone your child spends a lot of time with
                                    and knows he can turn to when needed.
                                </p>
                                <p>
                                    Show your child how to deal with any problems that arise.
                                </p>
                                <p>
                                    Help your child or teen develop good self-esteem so that they feel
                                    good about themselves:
                                </p>
                                <div className={'container'}>
                                    <ul className={'ml-4'}>
                                        <li>Show a lot of love and acceptance;</li>
                                        <li>
                                            Praise him for his good moves. Underline both the efforts invested
                                            and the results obtained;
                                        </li>
                                        <li>Ask him questions about his activities and interests;</li>
                                        <li>Help him set realistic goals;</li>
                                        <li>Listen to them, and respect their feelings;</li>
                                    </ul>
                                </div>
                                <p>
                                    It is normal for children and adolescents to be sad or angry. Encourage them to
                                    talk about their feelings.
                                </p>
                                <p>
                                    Keep these conversations going by asking questions and listening to your child.
                                    Mealtime can be a good time to talk.
                                </p>
                                <p>
                                    Help your child find someone else to talk to if they are not comfortable with you.
                                </p>
                                <p>
                                    Create a reassuring and positive family environment:
                                </p>
                                <p>
                                    Monitor your child’s media use, both content and time spent. This includes
                                    television, movies, the Internet, and electronic games (whether they are portable
                                    or require a computer or television). Be aware of who they might be interacting
                                    with in chat rooms and online games.
                                </p>
                                <p>
                                    Be careful when discussing serious family matters such as finances, marital
                                    problems, or illness in your child's presence. Children can tend to worry easily.
                                </p>
                                <p>
                                    Set aside time for physical activity, play, and family activities.
                                </p>
                                <p>
                                    Set an example in taking care of your own sanity - talk about your emotions. Make time for the activities you enjoy.
                                </p>
                                <p>
                                    In difficult situations, help your child or teen to deal with their problems:
                                </p>
                                <ul className={'ml-4'}>
                                    <li>
                                        Teach him how to relax when he's not feeling well: by taking deep breaths,
                                        doing something relaxing (like a quiet activity that he likes), spending
                                        some time alone, or going for a walk.
                                    </li>
                                    <li>
                                        Discuss possible solutions or ideas that could improve the situation,
                                        and plan their implementation. Avoid taking care of everything.
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h3 className={'section-header mt-4'}>
                                    Are mental health problems common among children and adolescents?
                                </h3>
                                <p>
                                    In Canada, one in five children or adolescents (20%) has a diagnosable mental
                                    disorder. These include Attention Deficit Hyperactivity Disorder (ADHD), anxiety,
                                    depression, substance abuse, eating disorders and learning disabilities. .
                                    Many other children have milder, but still significant,
                                    emotional and behavioral problems.
                                </p>
                                <p>
                                    Mental health disorders can affect young people of all ages and races,
                                    regardless of gender, socioeconomic background and culture. However, certain
                                    situations can increase the risks, including:
                                </p>
                                <div className={'container'}>
                                    <ul className={'ml-4'}>
                                        <li>
                                            A family history of mental illness;
                                        </li>
                                        <li>
                                            The difficult economic situation of new immigrants or refugees;
                                        </li>
                                        <li>
                                            Poorer overall health, isolated community life and limited educational
                                            and employment opportunities for indigenous children and adolescents;
                                        </li>
                                        <li>
                                            Family rejection and bullying of LGBTQ children and youth;
                                        </li>
                                        <li>
                                            Big changes, such as moving to a new city or school, parental
                                            separation or divorce, serious illness or the death of a
                                            relative or close friend;
                                        </li>
                                        <li>
                                            Experiencing or witnessing trauma, such as violence;
                                        </li>
                                        <li>
                                            The consumption of psychoactive substances;
                                        </li>
                                    </ul>
                                    <p>
                                        Unfortunately, too often, help comes too late. A mental disorder can
                                        prevent a child or teen from doing well in school, making friends,
                                        or becoming independent from their parents. Children and adolescents
                                        with a mental disorder may find it difficult to get through
                                        certain stages of their development.
                                    </p>
                                    <p>
                                        The good news is that mental health problems can be treated.
                                        There are many approaches to helping a child or teenager with an
                                        emotional or mental problem, but getting help early is crucial.
                                        Early intervention can prevent a problem from getting worse and
                                        lessen its impact on your child's development.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h3 className={'section-header mt-4'}>
                                    How do you know if a child or adolescent has a mental health problem?
                                </h3>
                                <p>
                                    Each person is different. If you think your child might be suffering from such
                                    a problem, try to look for a change in the way they think or act, or in their
                                    emotional state. Mental health problems can also have physical repercussions.
                                    Finally, ask yourself how your child is doing at home, at school, and with friends.
                                </p>

                                <div className={'container'}>
                                    <ul className={'ml-4'}>

                                        <li>Changes in thinking</li>
                                        <li>
                                            Said negative things about him,
                                            or blamed himself for things beyond his control
                                        </li>
                                        <li>Has difficulty concentrating</li>
                                        <li>Maintains negative thoughts</li>
                                        <li>See his school results change</li>
                                        <li>Affective changes</li>
                                        <li>Reacts disproportionately to the situation</li>
                                        <li>Seems very unhappy, worried, guilty, angry, fearful, irritable or sad</li>
                                        <li>Feels helpless, hopeless, alone or rejected</li>
                                        <li>Behavior changes</li>
                                        <li>Often seeks to be alone</li>
                                        <li>Cries easily</li>
                                        <li>Lacks interest in or avoids sports, games or activities altogether</li>
                                        <li>
                                            Reacts disproportionately, suddenly gets angry or bursts into tears
                                            over minor incidents
                                        </li>
                                        <li>Is calmer than usual, less energetic</li>
                                        <li>Has difficulty relaxing or sleeping</li>
                                        <li>Spend a lot of time daydreaming</li>
                                        <li>Regresses to immature habits</li>
                                        <li>Has difficulty getting along with friends</li>

                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h3 className={'section-header mt-4'}>
                                    Physical changes
                                </h3>

                                <div className={'container'}>
                                    <ul className={'ml-4'}>

                                        <li>Complains of headache, stomach ache, neck pain, or general pain</li>
                                        <li>Lack of energy or is perpetually tired</li>
                                        <li>Has eating or sleeping problems</li>
                                        <li>
                                            Has an overload of energy or a nervous tic like biting your nails,
                                            playing in your hair or sucking your thumb</li>
                                    </ul>
                                </div>
                                <p>
                                    <u>Remember:</u> Having one or more of these changes in your child or teen
                                    does not necessarily mean they have a mental health problem.

                                </p>
                                <p>
                                    Keep these conversations going by asking questions and listening to your child.
                                    Mealtime can be a good time to talk.
                                </p>
                                <p>
                                    Help your child find someone else to talk to if they are not comfortable with you.
                                </p>
                                <p>
                                    Create a reassuring and positive family environment:
                                </p>
                                <p>
                                    Monitor your child’s media use, both content and time spent. This includes
                                    television, movies, the Internet, and electronic games (whether they are portable
                                    or require a computer or television). Be aware of who they might be interacting
                                    with in chat rooms and online games.
                                </p>
                                <p>
                                    Be careful when discussing serious family matters such as finances, marital
                                    problems, or illness in your child's presence. Children can tend to worry easily.
                                </p>
                                <p>
                                    Set aside time for physical activity, play, and family activities.
                                </p>
                                <p>
                                    Set an example in taking care of your own sanity - talk about your emotions. Make time for the activities you enjoy.
                                </p>
                                <p>
                                    In difficult situations, help your child or teen to deal with their problems:
                                </p>
                                <ul className={'ml-4'}>
                                    <li>
                                        Teach him how to relax when he's not feeling well: by taking deep breaths,
                                        doing something relaxing (like a quiet activity that he likes), spending
                                        some time alone, or going for a walk.
                                    </li>
                                    <li>
                                        Discuss possible solutions or ideas that could improve the situation,
                                        and plan their implementation. Avoid taking care of everything.
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h3 className={'section-header mt-4'}>
                                    Where to find help?
                                </h3>
                                <p>
                                    There is more than one way to help your child achieve good mental health.
                                    For example, you could share your concerns with your doctor. Talk to your pediatrician:

                                </p>

                                <div className={'container'}>
                                    <ul className={'ml-4'}>

                                        <li>
                                            If the behaviors described above persist, or if they prevent your
                                            child from functioning normally;
                                        </li>
                                        <li>
                                            If you are worried about your child's mental and emotional health;
                                        </li>
                                        <li>
                                            At each check-up of your child about their behavioral development
                                            and emotional health.
                                        </li>
                                        <li>I
                                            f your child or teen talks about suicide or thinks about harming themselves,
                                            call your doctor or a mental health helpline right away.
                                        </li>
                                    </ul>
                                </div>
                                <p>
                                    Also with our community we help connect parents who are concerned about their 
                                    child mental health to other parents who have experienced the same issue to
                                    share their experience.
                                </p>
                                <p>
                                    Find out our volunteers that are happy and open for discussion <u>start here</u>.
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

export default Loneliness