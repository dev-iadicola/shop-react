import React, { useEffect, useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import logo from '../../favicon.png'
import { links, SocialBar } from '../utilitis/link'
import ChangeTheme from './ChangeTheme'

const NavBar = () => {
    const [show, setShow] = useState(true);

    const linkContainerRef = useRef(null);
    const linkListRef = useRef(null);

    // questo use effect permette di incrementare (solo da smartphone) la lunghezza del 
    // menu navbar impostando la lunghezza precisamente 'ul.nav-links' in modo automatico
    // ritorna quindi la luughezza seondo gli elementi inseriti 

    // return string (pixel)

    //Per verificare l'efficienza della funzione vai su 'src/link.js' e decommenta la parte di id:5 e id:6


    useEffect(() => {
        //console.log(linkListRef)

        if (show && linkListRef.current) {
            const linkHeight = linkListRef.current.getBoundingClientRect().height;
            if (linkContainerRef.current) {
                linkContainerRef.current.style.height = `${linkHeight}px`;
               // console.log(linkHeight)
            }
        } else if (linkContainerRef.current) {
            linkContainerRef.current.style.height = '0px';
        }
    }, [show])




    return (
        <nav className="nav navbar navbar-expand-xl w-100 ">
            <header className="nav-header container-xl ">
                <div className="nav-brand navbar-brand d-flex align-items-center  flex-wrap text-center">
                    <div className='nav-img-div'>
                        <img src={logo} alt="logo" className="nav-logo" />
                    </div>
                    <h2 className=" nav nav-title ">Tech CraftCode</h2>
                    <button
                        className=" nav-toggler navbar-toggler nav-btn-icon"
                        type="button"
                        onClick={() => setShow(!show)}
                    >
                        <FaBars className="nav-icon  " />
                    </button>
                </div>


            </header>

            <div className='mx-auto w-100'>
                <div
                    className={`collapse navbar-collapse d-flex  ${show ? "show" : ""} me-auto`}
                    ref={linkContainerRef}
                >


                    {show && (
                        <ul className="nav-links navbar-nav d-flex  text-center " ref={linkListRef}>
                            {links.map((el) => (
                                <li className="" key={el.id}>
                                    <a
                                        className="nav-link-navbar "
                                        href={el.url}
                                        target={el.target}
                                        rel="noreferrer"
                                        alt={el.text}
                                    >
                                        {el.text}
                                        {el.icon}
                                       {el.number}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>


            </div>

            <ChangeTheme />

        </nav>

    )
}

export default NavBar