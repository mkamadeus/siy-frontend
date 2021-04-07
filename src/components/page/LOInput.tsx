import React from 'react';

interface Props {
    title: string,
    section?: string
}

function showLOInput(title : string) : undefined {
    var form = document.getElementById(title);
    if (form !== null) {
        form.hidden = false;
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

const ButtonShowLO = ({title} : Props) => {
    return (
        <button
            id={"show-"+title}
            type="button"
            className="container mb-3 mx-2 items-center justify-center rounded-md bg-blue-500 text-white py-2 px-4 transform shadow-none hover:shadow-lg focus:ring focus:outline-none focus:bg-blue-600 transition duration-300"
            onClick={
                () => {
                    showLOInput(title)
                    showButton("hide-"+title)
                    hideButton("show-"+title)
                }
            }
            hidden={false}
        >
            Tambahkan Bobot LO {title}
        </button>
    )
}

function hideLOInput(title : string) : undefined {
    var form = document.getElementById(title);

    if (form !== null) {
        form.hidden = true;
    }
    
    return;
}

const ButtonHideLO = ({title} : Props) => {
    return (
        <button
            id={"hide-"+title}
            type="button"
            className="container mb-3 mx-2 items-center justify-center rounded-md bg-gray-400 text-white py-2 px-4 transform shadow-none hover:shadow-lg focus:ring focus:outline-none focus:bg-gray-500 transition duration-300"
            onClick={
                () => {
                    hideLOInput(title)
                    showButton("show-"+title)
                    hideButton("hide-"+title)
                }
            }
            hidden={true}
        >
            Tutup Bobot LO {title}
        </button>
    )
}

const LOForm = ({title, section} : Props) => {
    return (
        <input
            id={section+ '-' +title}
            className="container rounded-md bg-gray-200 my-1.5 mx-0"
            type="text"
            placeholder={title}
            pattern="^\d\.\d{0,2}$"
        ></input>
    )
}

const LOInput = ({title} : Props) => {    
    return (
            <div>
                <ButtonShowLO title={title}></ButtonShowLO>
                <ButtonHideLO title={title}></ButtonHideLO>
                <div 
                    id={title}
                    className="container mb-3 mx-2"
                    hidden={true}
                >
                    <p className="container text-center text-sm">Abaikan bagian yang tidak ingin diisi</p>
                    <LOForm title="LO-A" section={title}></LOForm>
                    <LOForm title="LO-B" section={title}></LOForm>
                    <LOForm title="LO-C" section={title}></LOForm>
                    <LOForm title="LO-D" section={title}></LOForm>
                    <LOForm title="LO-E" section={title}></LOForm>
                    <LOForm title="LO-F" section={title}></LOForm>
                    <LOForm title="LO-G" section={title}></LOForm>
                </div>
            </div>
    );
}

export default LOInput;