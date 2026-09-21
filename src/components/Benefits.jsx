import {useState,useEffect} from 'react';
import {flushSync} from 'react-dom';
import {motion,MotionConfig,AnimatePresence,useReducedMotion} from 'framer-motion';
import {Target,ArrowUpRight,ArrowRight,Menu,X,MapPin,Clock,ShieldCheck,Users,MessageCircle,Check,Plus,Minus,MoveUpRight,Crosshair} from 'lucide-react';
import {siteData} from '../data/siteData';
import {whatsappUrl,bookingMessage,validateBooking} from '../utils/whatsapp';
import {Brand,WhatsApp,Reveal,Art,nav} from './Shared';
export default function Benefits(){return <Reveal id="kelebihan" className="benefits"><div className="wrap"><div className="section-heading"><div><div className="eyebrow">SASARAN KECIL, PERUBAHAN BERMAKNA</div><h2>Aim your target<span className="red-text">.</span></h2></div><p>Empat nilai untuk dibawa<br/>jauh melangkaui padang memanah.</p></div><div className="benefit-grid">{siteData.benefits.map((b,i)=><motion.article className="benefit" key={b.title} whileHover={{y:-5}}><div className={`target-icon t${i}`}><Target size={63} strokeWidth={1.5}/><motion.span initial={{x:-25,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true}} transition={{delay:i*.12}}><MoveUpRight size={35}/></motion.span></div><small>0{i+1}</small><h3>{b.title}</h3><p>{b.text}</p></motion.article>)}</div></div></Reveal>}
