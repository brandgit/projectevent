import React from 'react'
import { Link } from "react-router-dom";
import Copyright from '../../components/Copyright';
import Logo from '../Logo';

export default function Footer() {

    const t = ">  ";
  return (
   <div className='flex items-center flex-col w-full'>
        <div className='flex items-center flex-col w-[95%] bg-[black]'>
        <div className='w-[100%] mt-[50px]'>
            <Logo/>
            
        <div className='flex justify-between w-full'> 
            <div className='ressourcesFooterContainer'>
                <div className='blockNavigation block-1'>
                    <h3>
                        <p>A propos de nous</p>
                    </h3>
                    <Link className="navLinkFooter" to="/advice">
                        <p>{t}Qui sommes nous ?</p>
                    </Link>
                    <Link className="navLinkFooter" to="/coaching">
                    <p>{t}FAQ - Service client</p>
                    </Link>
                    {/* <NavLink className="navLinkFooter" to="/training">
                        <p>Fondateurs</p>
                    </NavLink> */}
                </div>
                <div className='blockNavigation block-2'>
                    <h3>
                        <p>Aide</p>
                    </h3>
                    <Link className="navLinkFooter" to="/advice">
                    <p>{t}Mentions légales</p>
                    </Link>
                    <Link className="navLinkFooter" to="/coaching">
                    <p>{t}Plitique de confidentialité</p>
                    </Link>
                    <Link className="navLinkFooter" to="/coaching">
                    <p>{t}Conditions générales de vente</p>
                    </Link>
                </div>
                <div className='blockNavigation block-3'>
                    <h3>
                        <p>Nous contacter</p>
                    </h3>
                    <Link className="navLinkFooter" to="/advice">
                        <p>{t}3 rue Jea-Moulin, 75014 Paris</p>
                    </Link>
                    <Link className="navLinkFooter" to="/coaching">
                        <p>{t}balg.contact@gmail.com</p>
                    </Link>
                    <Link className="navLinkFooter" to="/training">
                        <p>{t}+33(0)1 83 26 98 02</p>
                    </Link>
                    <Link className="navLinkFooter socilasMedias" to="/training">
                        <div>
                            {/* <img src={instagram} alt="" />
                            <img src={linkedin} alt="" /> */}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <Copyright/>
        </div>
    </div>
    </div>  
  )
}
