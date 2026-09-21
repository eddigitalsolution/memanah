import { WHATSAPP_NUMBER, siteData } from '../data/siteData.js';
export const whatsappUrl = (message='Assalamualaikum Panah Ria. Saya ingin tahu tentang kelas memanah.') => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
export function validateBooking(data){
 const errors={};
 for(const key of ['name','guardian','phone','category','session']) if(!String(data[key]??'').trim()) errors[key]='Sila lengkapkan ruangan ini.';
 const group=siteData.ageGroups.find(g=>g.id===data.category);
 if(!group) errors.category='Sila pilih kategori.';
 if(!Number.isInteger(Number(data.age))||Number(data.age)<5||Number(data.age)>17) errors.age='Umur peserta mestilah 5–17 tahun.';
 else if(group&&(Number(data.age)<group.min||Number(data.age)>group.max)) errors.age=`Umur kategori ini mestilah ${group.range} tahun.`;
 if(!/^\+?[\d\s()-]{9,18}$/.test(data.phone||'') || (data.phone||'').replace(/\D/g,'').length<9) errors.phone='Sila masukkan nombor telefon yang sah.';
 if(!siteData.sessions.includes(data.session)) errors.session='Sila pilih sesi.';
 if(!Number.isInteger(Number(data.quantity))||Number(data.quantity)<1) errors.quantity='Masukkan sekurang-kurangnya 1 peserta.';
 return errors;
}
export function bookingMessage(data){return `Assalamualaikum Panah Ria.\n\nSaya berminat untuk mendaftar kelas memanah.\n\nNama peserta: ${data.name.trim()}\nUmur: ${data.age}\nNama penjaga: ${data.guardian.trim()}\nNo. WhatsApp: ${data.phone.trim()}\nKategori: ${siteData.ageGroups.find(g=>g.id===data.category)?.label||data.category}\nPilihan sesi: ${data.session}\nJumlah peserta: ${data.quantity}\n\nMohon maklumat lanjut untuk pendaftaran.\n\nTerima kasih.`;}
