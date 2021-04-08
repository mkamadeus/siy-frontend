import { title } from 'process';
import React from 'react';

interface Props {
    title?: string
}

interface ButtonProp {
    children?: React.ReactNode
}

function showLOInput(title : string) : undefined {
    var form = document.getElementById(title);
    if (form !== null) {
        form.hidden = false;
    }

    return;
}

function hideLOInput(title : string) : undefined {
    var form = document.getElementById(title);

    if (form !== null) {
        form.hidden = true;
    }
    
    return;
}

function showButton(id: string) : undefined {
    var btn = document.getElementById(id)
    if (btn !== null) {
        btn.hidden = false
    }
    
    return;
}

function hideButton(id: string) : undefined {
    var btn = document.getElementById(id)
    if (btn !== null) {
        btn.hidden = true
    }
    
    return;
}

const ButtonShowLO : React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProp> | Props = (
    title,
    props
) => {
    return (
        <button
            id={"show-"+title}
            type="button"
            className="container mb-3 items-center justify-center rounded-md bg-blue-500 text-white py-2 px-4 transform shadow-none hover:shadow-lg focus:ring focus:outline-none focus:bg-blue-600 transition duration-300"
            onClick={
                () => {
                    showLOInput(title)
                    showButton("hide-"+title)
                    hideButton("show-"+title)
                }
            }
            hidden={false}
        >
            Tambahkan {props.children}
        </button>
    )
}

const ButtonHideLO = ({title} : Props) => {
    return (
        <button
            id={"hide-"+title}
            type="button"
            className="container mb-3 items-center justify-center rounded-md bg-gray-400 text-white py-2 px-4 transform shadow-none hover:shadow-lg focus:ring focus:outline-none focus:bg-gray-500 transition duration-300"
            onClick={
                () => {
                    hideLOInput(title)
                    showButton("show-"+title)
                    hideButton("hide-"+title)
                }
            }
            hidden={true}
        >
            Tutup
        </button>
    )
}

const LOForm = ({title} : Props) => {
    return (
        <input
            id={'-' + title}
            className="container rounded-md bg-gray-200 my-1.5 mx-0"
            type="text"
            name={'-' + title}
            placeholder={title}
            pattern="^\d\.?\d{0,2}$"
        ></input>
    )
}

const LOInput = ({title} : Props) => {    
    return (
            <div>
                <ButtonShowLO title={title}>Bobot LO {title}</ButtonShowLO>
                <ButtonHideLO title={title}></ButtonHideLO>
                <div 
                    id={title}
                    className="container mb-3"
                    hidden={true}
                >
                    <p className="container text-center text-sm">Abaikan bagian yang tidak ingin diisi</p>
                    <LOForm title="LO-A"></LOForm>
                    <LOForm title="LO-B"></LOForm>
                    <LOForm title="LO-C"></LOForm>
                    <LOForm title="LO-D"></LOForm>
                    <LOForm title="LO-E"></LOForm>
                    <LOForm title="LO-F"></LOForm>
                    <LOForm title="LO-G"></LOForm>
                </div>
            </div>
    );
}

export default LOInput;