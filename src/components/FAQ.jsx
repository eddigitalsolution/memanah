import {useState,useEffect} from 'react';
import {flushSync} from 'react-dom';
import {motion,MotionConfig,AnimatePresence,useReducedMotion} from 'framer-motion';
import {Target,ArrowUpRight,ArrowRight,Menu,X,MapPin,Clock,ShieldCheck,Users,MessageCircle,Check,Plus,Minus,MoveUpRight,Crosshair} from 'lucide-react';
import {siteData} from '../data/siteData';
import {whatsappUrl,bookingMessage,validateBooking} from '../utils/whatsapp';
import {Brand,WhatsApp,Reveal,Art,nav} from './Shared';
export default function FAQ(){const[active,setActive]=useState(null);return <Reveal id="faq" className="faq wrap"><div><div className="eyebrow red-text">ADA SOALAN?</div><h2>Jom, kami<br/>bantu jawab.</h2><p>Masih ingin tahu lebih lanjut?<br/>Kami sedia membantu.</p><WhatsApp>Tanya kami</WhatsApp></div><div className="faq-list">{siteData.faq.map(([q,a],i)=>{const expanded=active===i;return <div className="faq-item" key={q}><h3><button type="button" id={`question-${i}`} onClick={()=>setActive(expanded?null:i)} aria-expanded={expanded} aria-controls={`answer-${i}`}>{q}{expanded?<Minus size={19}/>:<Plus size={19}/>}</button></h3><motion.div id={`answer-${i}`} role="region" aria-labelledby={`question-${i}`} aria-hidden={!expanded} inert={!expanded} initial={false} animate={{height:expanded?'auto':0,opacity:expanded?1:0}} transition={{duration:.2}}><p>{a}</p></motion.div></div>})}</div></Reveal>}
