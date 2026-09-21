import {useState,useEffect} from 'react';
import {flushSync} from 'react-dom';
import {motion,MotionConfig,AnimatePresence,useReducedMotion} from 'framer-motion';
import {Target,ArrowUpRight,ArrowRight,Menu,X,MapPin,Clock,ShieldCheck,Users,MessageCircle,Check,Plus,Minus,MoveUpRight,Crosshair} from 'lucide-react';
import {siteData} from '../data/siteData';
import {whatsappUrl,bookingMessage,validateBooking} from '../utils/whatsapp';
import {Brand,WhatsApp,Reveal,Art,nav} from './Shared';
export default function Footer(){return <footer className="wrap"><div className="footer-main"><div><Brand/><p>Memanah tradisional, gaya hidup, jati diri.</p></div><div className="footer-links">{nav.map(([name,id])=><a key={id} href={`#${id}`}>{name}</a>)}</div><div className="partner"><strong>NEOUR CENTRE</strong><small>TRAIN · FOCUS · ACHIEVE</small></div></div><div className="footer-bottom"><span>© 2026 Panah Ria. All rights reserved.</span><span>{siteData.location} · <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">{siteData.whatsappNumber.replace(/^60/,'0')}</a></span></div></footer>}
