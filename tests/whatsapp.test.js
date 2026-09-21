import test from 'node:test';
import assert from 'node:assert/strict';
import {validateBooking,bookingMessage,whatsappUrl} from '../src/utils/whatsapp.js';
const valid={name:'Aina & Adam',age:'10',guardian:'Penjaga Ujian',phone:'0123456789',category:'junior',session:'Sesi 1',quantity:'1'};
test('valid junior and teen registration',()=>{assert.deepEqual(validateBooking(valid),{});assert.deepEqual(validateBooking({...valid,age:'15',category:'teen'}),{});});
test('reject blank required fields, invalid phone, mismatched ages and invalid quantity',()=>{for(const [key,value] of [['name',' '],['guardian',''],['phone','abc'],['age','4'],['age','13'],['age','10.5'],['category','other'],['session','Friday'],['quantity','0'],['quantity','1.5']])assert.ok(Object.keys(validateBooking({...valid,[key]:value})).length,key);});
test('WhatsApp recipient and special characters survive encoding',()=>{const message=bookingMessage(valid),url=new URL(whatsappUrl(message));assert.equal(url.hostname,'wa.me');assert.equal(url.pathname,'/601124071993');assert.equal(url.searchParams.get('text'),message);assert.match(message,/Aina & Adam/);assert.match(message,/Kanak-kanak 5–12 tahun/);assert.equal([...url.searchParams].length,1);});
