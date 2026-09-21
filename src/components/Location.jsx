import {useState,useEffect} from 'react';
import {flushSync} from 'react-dom';
import {motion,MotionConfig,AnimatePresence,useReducedMotion} from 'framer-motion';
import {Target,ArrowUpRight,ArrowRight,Menu,X,MapPin,Clock,ShieldCheck,Users,MessageCircle,Check,Plus,Minus,MoveUpRight,Crosshair} from 'lucide-react';
import {siteData} from '../data/siteData';
import {whatsappUrl,bookingMessage,validateBooking} from '../utils/whatsapp';
import {Brand,WhatsApp,Reveal,Art,nav} from './Shared';
export default function Location(){return <Reveal className="location wrap" id="lokasi"><div className="location-board"><MapPin size={50}/><span>DESTINASI PENGEMBARAAN</span><h3>Masjid<br/>Setia Alam</h3><div className="map-note">Tempat pertemuan tepat akan dikongsi melalui WhatsApp.</div></div><div><div className="eyebrow red-text">DEKAT DI HATI, DEKAT DI SETIA ALAM</div><h2>Jumpa kami<br/>di sini!</h2><p><MapPin size={18}/> {siteData.location}</p><p>Jom luangkan masa untuk kemahiran baru. Bawa semangat, kami sediakan peralatan.</p><a className="button outline" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteData.location)}`} target="_blank" rel="noopener noreferrer">Cari di Google Maps<ArrowUpRight size={18}/></a><small className="location-disclaimer">Semak lokasi pertemuan dengan pasukan kami sebelum hadir.</small></div></Reveal>}
