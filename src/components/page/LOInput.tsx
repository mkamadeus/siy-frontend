import React from 'react';

interface ICommonProp {
    title: string
    className?: string
}

interface IButtonProp {
    hidden?: boolean
    type: string
}

interface IChildrenProp {
    children?: React.ReactNode
}

interface IFormProp {
    section?: string
    min?: string
    max?: string
    step?: string
}

type Button = ICommonProp & IButtonProp & IChildrenProp
type Form = ICommonProp & IFormProp
type Input = ICommonProp & IChildrenProp & IFormProp

function showElmt(id : string) : undefined {
    const elmt = document.getElementById(id)
    if (elmt) elmt.hidden = false;

    return;
}

function hideElmt(id : string) : undefined {
    const elmt = document.getElementById(id)
    if (elmt) elmt.hidden = true;
    
    return;
}

const ButtonLO : React.ForwardRefRenderFunction<HTMLButtonElement, Button> = (
    props
) => {
    return (
        <button
            id={props.type + '-' + props.title}
            type="button"
            className={props.className}
            hidden={props.hidden}
            onClick={
                () => {
                    if (props.type == 'show') {
                        showElmt(props.title)
                        showElmt('hide-' + props.title)
                        hideElmt('show-' + props.title)
                    }
                    else {
                        hideElmt(props.title)
                        showElmt('show-' + props.title)
                        hideElmt('hide-' + props.title)
                    }
                }
            }
        >
            {props.children}
        </button>
    )
}

const FormLO : React.ForwardRefRenderFunction<HTMLInputElement ,Form> = (
    props
) => {
    return (
        <input
            id={props.section + '-' + props.title}
            className="container p-3 rounded-md border-b bg-gray-200 mb-3"
            name={props.section + '-' + props.title}
            type="number"
            min={props.min}
            max={props.max}
            step={props.step}
            placeholder={props.title}
        ></input>
    )
}

const InputLO : React.ForwardRefRenderFunction<HTMLDivElement, Input> = (
    props,
    ref
) => {
    const LOList = ['LO-A', 'LO-B', 'LO-C', 'LO-D', 'LO-E', 'LO-F', 'LO-G'];

    return (
        <div className="container mb-3">
            <div className="flex mb-3 bg-gray-200 border-b rounded-md justify-between items-center">
                <div>
                    <input
                        className="m-3"
                        type="checkbox"
                        name={props.title + 'Checked'}
                    ></input>
                </div>
                <ButtonLO 
                    title={props.title}
                    className="container items-center justify-center rounded-l-none rounded-r-md bg-blue-500 text-white py-3 px-4 transform shadow-none hover:shadow-lg focus:ring focus:outline-none focus:bg-blue-600 transition duration-300"
                    hidden={false}
                    type="show"
                >
                    Buka {props.children}
                </ButtonLO>

                <ButtonLO 
                    title={props.title}
                    className="container items-center justify-center rounded-l-none rounded-r-md bg-gray-400 text-white py-3 px-4 transform shadow-none hover:shadow-lg focus:ring focus:outline-none focus:bg-gray-500 transition duration-300"
                    hidden={true}
                    type="hide"
                >
                    Tutup {props.children}
                </ButtonLO>
            </div>

            <div
                id={props.title} 
                className="container mb-3"
                hidden={true}
            >
                <p className="container text-center text-sm mb-3">Abaikan bagian yang tidak ingin diisi</p>
                {LOList.map((lo) => {
                    return (
                        <FormLO
                            key={lo}
                            title={lo}
                            section={props.title}
                            min={props.min}
                            max={props.max}
                            step={props.step}
                        ></FormLO>
                    )
                })}
            </div>
        </div>
    )
}

export default InputLO;
