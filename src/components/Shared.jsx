import {useState,useEffect} from 'react';
import {flushSync} from 'react-dom';
import {motion,MotionConfig,AnimatePresence,useReducedMotion} from 'framer-motion';
import {Target,ArrowUpRight,ArrowRight,Menu,X,MapPin,Clock,ShieldCheck,Users,MessageCircle,Check,Plus,Minus,MoveUpRight,Crosshair} from 'lucide-react';
import {siteData} from '../data/siteData';
import {whatsappUrl,bookingMessage,validateBooking} from '../utils/whatsapp';

export const nav=[['Utama','home'],['Kelas','kelas'],['Kelebihan','kelebihan'],['Lokasi','lokasi'],['FAQ','faq']];
export function Brand(){return <a className="brand" href="#home" aria-label="Panah Ria, halaman utama"><Target size={39}/><span>PANAH<span className="red-text">RIA</span><small>MEMANAH TRADISIONAL</small></span></a>}
export function WhatsApp({children='WhatsApp kami',className=''}){return <a className={`button whatsapp ${className}`} href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle size={19}/>{children}<ArrowUpRight size={17}/></a>}
export function Reveal({children,className='',id}){return <motion.section id={id} className={className} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.08}} transition={{duration:.45}}>{children}</motion.section>}
export function Art({className='',lazy=true}){return <img className={`archer-art ${className}`} src="/images/archery-adventure.webp" alt="Pemanah junior, remaja dan jurulatih di padang memanah yang ceria" loading={lazy?'lazy':'eager'} fetchPriority={lazy?'auto':'high'} decoding="async" width="1536" height="1024"/>}
