import {useState,useEffect} from 'react';
import {flushSync} from 'react-dom';
import {motion,MotionConfig,AnimatePresence,useReducedMotion} from 'framer-motion';
import {Target,ArrowUpRight,ArrowRight,Menu,X,MapPin,Clock,ShieldCheck,Users,MessageCircle,Check,Plus,Minus,MoveUpRight,Crosshair} from 'lucide-react';
import {siteData} from './data/siteData';
import {whatsappUrl,bookingMessage,validateBooking} from './utils/whatsapp';
export default function App(){const[category,setCategory]=useState('');const reduced=useReducedMotion();function choose(value){setCategory(value);document.getElementById('daftar').scrollIntoView({behavior:reduced?'instant':'smooth'});setTimeout(()=>document.getElementById('name')?.focus({preventScroll:true}),reduced?0:450)}return <MotionConfig reducedMotion="user"><a className="skip-link" href="#main">Langkau ke kandungan</a><Navbar/><main id="main"><Hero/><AdventureIntro/><Benefits/><HowItWorks/><AgeGroups onSelect={choose}/><LevelJourney/><FunSection/><Location/><BookingForm category={category} setCategory={setCategory}/><FAQ/><FinalCTA/></main><Footer/><WhatsApp className="floating-wa">WhatsApp</WhatsApp></MotionConfig>}
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AdventureIntro from './components/AdventureIntro';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import AgeGroups from './components/AgeGroups';
import LevelJourney from './components/LevelJourney';
import FunSection from './components/FunSection';
import Location from './components/Location';
import BookingForm from './components/BookingForm';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import {WhatsApp} from './components/Shared';

