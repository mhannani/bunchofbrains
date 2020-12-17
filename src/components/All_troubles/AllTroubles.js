import React from "react";
import ReactTooltip from 'react-tooltip';

const AllTroubles = ()=>{

    return(

        <div className={'container all_troubles'}>
            <div className={'row text-center'}>
                <div className={'col-3'}>
                    <div className="button" id="button-2">
                        <div id="slide"/>
                        <a href="https://bunchofbrains.com/">Depression</a>
                    </div>
                </div>
                <div className={'col-3'}>
                    <div className="button" id="button-2">
                        <div id="slide"/>
                        <a href="https://bunchofbrains.com/">Anxiety</a>
                    </div>
                </div>
                <div className={'col-3'}>
                    <div className="button" id="button-2">
                        <div id="slide"/>
                        <a href="https://bunchofbrains.com/">Panic disorder</a>
                    </div>
                </div>
                <div className={'col-3'}>
                    <div className="button" id="button-2">
                        <div id="slide"/>
                        <a href="https://bunchofbrains.com/">Self esteem</a>
                    </div>
                </div>
            </div>


            <div className={'row text-center'}>
                <div className={'col-3'}>
                    <div className="button" id="button-3">
                        <div id="circle"/>
                        <a href="https://bunchofbrains.com/">Addiction</a>
                    </div>
                </div>
                <div className={'col-3'}>
                    <div className="button" id="button-3">
                        <div id="circle"/>
                        <a href="https://bunchofbrains.com/">Parenting</a>
                    </div>
                </div>
                <div className={'col-3'}>
                    <div className="button" id="button-3">
                        <div id="circle"/>
                        <a href="https://bunchofbrains.com/">Brain health</a>
                    </div>
                </div>
                <div className={'col-3'}>
                    <div className="button" id="button-3">
                        <div id="circle"/>
                        <a href="https://bunchofbrains.com/">Cognitive development</a>
                    </div>
                </div>
            </div>



            <div className={'row text-center'}>
                <div className={'col-3'}>
                    <div className="button" id="button-4">
                        <div id="underline"/>
                        <a href="https://bunchofbrains.com/">Emotional abuse</a>
                    </div>
                </div>
                <div className={'col-3'}>
                    <div className="button" id="button-4">
                        <div id="underline"/>
                        <a href="https://bunchofbrains.com/">Goal setting</a>
                    </div>
                </div>

            </div>


            <div className={'row text-center'}>
                <div className={'col-3'}>
                    <div className="button" id="button-5">
                        <div id="translate"/>
                        <a href="https://bunchofbrains.com/">Lowliness</a>
                    </div>
                </div>
                <div className={'col-3'}>
                    <div className="button" id="button-5">
                        <div id="translate"/>
                        <a href="https://bunchofbrains.com/">Marital issues</a>
                    </div>
                </div>
                <div className={'col-3'}>
                    <div className="button" id="button-5">
                        <div id="translate"/>
                        <a href="https://bunchofbrains.com/">Motivation</a>
                    </div>
                </div>

            </div>



            <div className={'row text-center'}>
                <div className={'col-3'}>
                    <div  data-tip="Obsessive Compulsive Disorder"  className="button" id="button-6">
                        <div id="spin"/>
                        <a href="https://bunchofbrains.com/">OCD</a>
                        <ReactTooltip className={'tooltip'} textColor={'black'} effect={'solid'} type={'success'} />
                    </div>
                </div>
                <div className={'col-3'}>
                    <div className="button" id="button-6">
                        <div id="spin"/>
                        <a href="https://bunchofbrains.com/">Phobias</a>
                    </div>
                </div>
                <div className={'col-3'}>
                    <div data-tip="Post Traumatic Stress Disorder" className="button" id="button-6">
                        <div id="spin"/>
                        <a href="https://bunchofbrains.com/">PTSD</a>
                        <ReactTooltip className={'tooltip'} textColor={'black'} effect={'solid'} type={'success'} />
                    </div>
                </div>
                <div className={'col-3'}>
                    <div className="button" id="button-6">
                        <div id="spin"/>
                        <a href="https://bunchofbrains.com/">Relationship issues</a>
                    </div>
                </div>

            </div>




            <div className={'row text-center'}>
                <div className={'col-3'}>
                    <div className="button" id="button-7">
                        <div id="translate_reversed"/>
                        <a href="https://bunchofbrains.com/">Schizophrenia</a>
                    </div>
                </div>
                <div className={'col-3'}>
                    <div className="button" id="button-7">
                        <div id="translate_reversed"/>
                        <a href="https://bunchofbrains.com/">sexuality</a>
                    </div>
                </div>
                <div className={'col-3'}>
                    <div className="button" id="button-7">
                        <div id="translate_reversed"/>
                        <a href="https://bunchofbrains.com/">Bullying</a>
                    </div>
                </div>
                <div className={'col-3'}>
                    <div className="button" id="button-7">
                        <div id="translate_reversed"/>
                        <a href="https://bunchofbrains.com/">spirituality</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default AllTroubles;