import {useState,useEffect} from 'react';
import {flushSync} from 'react-dom';
import {motion,MotionConfig,AnimatePresence,useReducedMotion} from 'framer-motion';
import {Target,ArrowUpRight,ArrowRight,Menu,X,MapPin,Clock,ShieldCheck,Users,MessageCircle,Check,Plus,Minus,MoveUpRight,Crosshair} from 'lucide-react';
import {siteData} from '../data/siteData';
import {whatsappUrl,bookingMessage,validateBooking} from '../utils/whatsapp';
import {Brand,WhatsApp,Reveal,Art,nav} from './Shared';
export default function AdventureIntro(){return <Reveal className="intro wrap"><div className="intro-picture"><Art/><span className="picture-note">Tarik nafas. Fokus. Lepaskan! ✦</span></div><div><div className="eyebrow red-text">LEBIH DARIPADA SUKAN</div><h2>Memanah bukan<br/>sekadar <span className="underline">memanah.</span></h2><p>Di sebalik setiap anak panah, ada keberanian untuk mencuba. Aktiviti yang menyeronokkan sambil membina fokus, disiplin dan keyakinan diri.</p><p>Asah kemahiran. Bina keyakinan.<br/>Dekatkan diri dengan sunnah.</p><a className="text-link" href="#kelebihan">Kenali pengembaraan kami<ArrowRight size={19}/></a></div></Reveal>}
