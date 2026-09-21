import {useState,useEffect} from 'react';
import {flushSync} from 'react-dom';
import {motion,MotionConfig,AnimatePresence,useReducedMotion} from 'framer-motion';
import {Target,ArrowUpRight,ArrowRight,Menu,X,MapPin,Clock,ShieldCheck,Users,MessageCircle,Check,Plus,Minus,MoveUpRight,Crosshair} from 'lucide-react';
import {siteData} from '../data/siteData';
import {whatsappUrl,bookingMessage,validateBooking} from '../utils/whatsapp';
import {Brand,WhatsApp,Reveal,Art,nav} from './Shared';
export default function HowItWorks(){return <Reveal className="how wrap"><div className="center-heading"><div className="eyebrow">SATU ANAK PANAH PADA SATU MASA</div><h2>Macam mana kelas berjalan?</h2><p>Dari kenal busur hingga berani menyasar. Kami mulakan dengan asas.</p></div><div className="steps">{[['Kenal busur','Kenali asas peralatan dan keselamatan.',Crosshair],['Belajar teknik','Belajar posisi dan asas memanah.',ShieldCheck],['Latihan','Praktikkan teknik bersama jurulatih.',Users],['Sasaran','Tingkatkan fokus dan keyakinan.',Target]].map(([title,text,Icon],i)=><div className="step" key={title}><div className="step-circle"><Icon size={31}/><small>0{i+1}</small></div><h3>{title}</h3><p>{text}</p></div>)}</div></Reveal>}
