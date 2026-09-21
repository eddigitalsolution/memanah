import {useState,useEffect} from 'react';
import {flushSync} from 'react-dom';
import {motion,MotionConfig,AnimatePresence,useReducedMotion} from 'framer-motion';
import {Target,ArrowUpRight,ArrowRight,Menu,X,MapPin,Clock,ShieldCheck,Users,MessageCircle,Check,Plus,Minus,MoveUpRight,Crosshair} from 'lucide-react';
import {siteData} from '../data/siteData';
import {whatsappUrl,bookingMessage,validateBooking} from '../utils/whatsapp';
import {Brand,WhatsApp,Reveal,Art,nav} from './Shared';
export default function FinalCTA(){return <Reveal className="final-cta wrap"><div><div className="eyebrow">SATU LANGKAH KECIL, SATU PENGEMBARAAN BARU</div><h2>Sasar impian anda.</h2><p>Mulakan pengalaman memanah bersama Panah Ria.</p><div className="hero-actions"><WhatsApp>Daftar melalui WhatsApp</WhatsApp><a className="text-link" href="#kelas">Lihat kelas<ArrowRight size={18}/></a></div></div><Art/></Reveal>}
