import {useState,useEffect} from 'react';
import {flushSync} from 'react-dom';
import {motion,MotionConfig,AnimatePresence,useReducedMotion} from 'framer-motion';
import {Target,ArrowUpRight,ArrowRight,Menu,X,MapPin,Clock,ShieldCheck,Users,MessageCircle,Check,Plus,Minus,MoveUpRight,Crosshair} from 'lucide-react';
import {siteData} from '../data/siteData';
import {whatsappUrl,bookingMessage,validateBooking} from '../utils/whatsapp';
import {Brand,WhatsApp,Reveal,Art,nav} from './Shared';
export default function FunSection(){const[hit,setHit]=useState(-1);return <Reveal className="fun"><div className="wrap fun-inner"><div><div className="eyebrow">SEDIA UNTUK SASARKAN?</div><h2>Siapa paling tepat?</h2><p>Setiap sasaran adalah peluang untuk belajar.</p><small>Sentuh sasaran. Jom cuba!</small><span className="sr-only" aria-live="polite">{hit>=0?'Tepat! Teruskan mencuba.':''}</span></div><div className="fun-targets">{[0,1,2].map(i=><motion.button key={i} aria-label={`Cuba sasaran ${i+1}`} className={hit===i?'hit':''} onClick={()=>setHit(i)} whileHover={{rotate:4,scale:1.06}} whileTap={{scale:.9}}><Target/><span className="hit-arrow"><MoveUpRight/></span><small>{hit===i?'Tepat!':'Jom cuba'}</small></motion.button>)}</div></div></Reveal>}
