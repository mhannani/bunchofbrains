import React from "react";
import ButtonSlideEffect from "./ButtonsEffects/ButtonSlideEffect";
import ButtonCircleEffect from "./ButtonsEffects/ButtonCircleEffect"
import ButtonUnderlineEffect from "./ButtonsEffects/ButtonUnderlineEffect";
import ButtonTranslateEffect from "./ButtonsEffects/ButtonTranslateEffect";
import ButtonSpinEffect from "./ButtonsEffects/ButtonSpinEffect";
import ButtonTranslateReversedEffect from "./ButtonsEffects/ButtonTranslateReversedEffect"

const AllTroubles = ()=>{

    return(

        <div className={'container all_troubles'}>
            <div className={'row text-center'}>
                <ButtonSlideEffect text='Depression' href="https://bunchofbrains.com/"/>
                <ButtonSlideEffect text='Anxiety' href="https://bunchofbrains.com/"/>
                <ButtonSlideEffect text='Panic disorder' href="https://bunchofbrains.com/"/>
                <ButtonSlideEffect text='Self esteem' href="https://bunchofbrains.com/"/>
            </div>

            <div className={'row text-center'}>
                <ButtonCircleEffect text='Addiction' href="https://bunchofbrains.com/"/>
                <ButtonCircleEffect text='Parenting' href="https://bunchofbrains.com/"/>
                <ButtonCircleEffect text='Brain health' href="https://bunchofbrains.com/"/>
                <ButtonCircleEffect text='Cognitive development' href="https://bunchofbrains.com/"/>
            </div>

            <div className={'row text-center'}>
                <ButtonUnderlineEffect text='Emotional abuse' href="https://bunchofbrains.com/"/>
                <ButtonUnderlineEffect text='Goal setting' href="https://bunchofbrains.com/"/>
            </div>

            <div className={'row text-center'}>
                <ButtonTranslateEffect text='Lowliness' href="https://bunchofbrains.com/"/>
                <ButtonTranslateEffect text='Marital issues' href="https://bunchofbrains.com/"/>
                <ButtonTranslateEffect text='Motivation' href="https://bunchofbrains.com/"/>
            </div>

            <div className={'row text-center'}>
                <ButtonSpinEffect href={'https://bunchofbrains.com/'} text={'OCD'}
                                  tooltip={true} dataTip={"Obsessive Compulsive Disorder"}/>
                <ButtonSpinEffect href={'https://bunchofbrains.com/'} text={'Phobias'}/>
                <ButtonSpinEffect href={'https://bunchofbrains.com/'} text={'PTSD'}
                                  tooltip={true} dataTip={"Post Traumatic Stress Disorder"}/>
                <ButtonSpinEffect href={'https://bunchofbrains.com/'} text={'Relationship issues'}/>
            </div>

            <div className={'row text-center'}>
                <ButtonTranslateReversedEffect text='Schizophrenia' href="https://bunchofbrains.com/"/>
                <ButtonTranslateReversedEffect text='sexuality' href="https://bunchofbrains.com/"/>
                <ButtonTranslateReversedEffect text='Bullying' href="https://bunchofbrains.com/"/>
                <ButtonTranslateReversedEffect text='spirituality' href="https://bunchofbrains.com/"/>
            </div>
        </div>
    )
}


export default AllTroubles;