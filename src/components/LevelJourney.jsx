import {useState,useEffect} from 'react';
import {flushSync} from 'react-dom';
import {motion,MotionConfig,AnimatePresence,useReducedMotion} from 'framer-motion';
import {Target,ArrowUpRight,ArrowRight,Menu,X,MapPin,Clock,ShieldCheck,Users,MessageCircle,Check,Plus,Minus,MoveUpRight,Crosshair} from 'lucide-react';
import {siteData} from '../data/siteData';
import {whatsappUrl,bookingMessage,validateBooking} from '../utils/whatsapp';
import {Brand,WhatsApp,Reveal,Art,nav} from './Shared';
export default function LevelJourney(){return <Reveal className="level wrap"><div><div className="eyebrow">APA YANG KITA PELAJARI?</div><h2>Selangkah lebih yakin.</h2><p>Kenali peralatan, latih posisi, kawal tumpuan dan praktikkan teknik.</p></div><div className="level-track">{['Kenali','Fokus','Sasar','Kuasai'].map((x,i)=><div key={x}><span>{i<3?'★':'☆'}</span><small>LEVEL 0{i+1}</small><strong>{x}</strong></div>)}<p>Gambaran perjalanan belajar, bukan tahap rasmi kelas.</p></div></Reveal>}
