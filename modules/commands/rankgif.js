//lấy 1 ảnh gif để dô cache đặt tên dưới dạng banner.gif thì lúc dùng nó mới hiện nhé
module.exports.config = {
    name: "rankgif",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Siêu Đáng Yêu",
    description: "Lấy rank hiện tại của bạn trên hệ thống bot kèm khung theo level của bạn, remake rank_card from canvacord",
    commandCategory: "Nhóm",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "path": "",
        "jimp": "",
        "node-superfetch": "",
        "canvas": "",
        "gif-frames": "",
        "gifencoder": "",
    }
};
function _0x35d1(_0xa5e871,_0x89a3b6){const _0x54ca49=_0x54ca();return _0x35d1=function(_0x35d160,_0x2ce193){_0x35d160=_0x35d160-0xe9;let _0x5e1f89=_0x54ca49[_0x35d160];return _0x5e1f89;},_0x35d1(_0xa5e871,_0x89a3b6);}const _0x3ea45c=_0x35d1;(function(_0x5857db,_0x297142){const _0x3bc14f=_0x35d1,_0x2f71a6=_0x5857db();while(!![]){try{const _0x51586c=-parseInt(_0x3bc14f(0x124))/0x1*(parseInt(_0x3bc14f(0x106))/0x2)+-parseInt(_0x3bc14f(0x13b))/0x3+parseInt(_0x3bc14f(0x128))/0x4+-parseInt(_0x3bc14f(0x12e))/0x5*(parseInt(_0x3bc14f(0x10e))/0x6)+parseInt(_0x3bc14f(0x10c))/0x7+parseInt(_0x3bc14f(0x146))/0x8+-parseInt(_0x3bc14f(0x107))/0x9;if(_0x51586c===_0x297142)break;else _0x2f71a6['push'](_0x2f71a6['shift']());}catch(_0x4d5016){_0x2f71a6['push'](_0x2f71a6['shift']());}}}(_0x54ca,0xb9481));function getRandomColor(){const _0x5717ef=_0x35d1;var _0x37581b=_0x5717ef(0x159),_0x53d972='#';for(var _0x36e1a6=0x0;_0x36e1a6<0x6;_0x36e1a6++){_0x53d972+=_0x37581b[Math[_0x5717ef(0x13e)](Math[_0x5717ef(0xf0)]()*0x10)];}return _0x53d972;}module['exports'][_0x3ea45c(0xea)]=async _0x1ff217=>{const _0x3f126f=_0x3ea45c,_0x4706dc=global[_0x3f126f(0xfe)][_0x3f126f(0xe9)],_0x11bceb=global[_0x3f126f(0xfe)]['path'],_0x396b88=global[_0x3f126f(0xfe)][_0x3f126f(0x116)],_0x4ec91c=global[_0x3f126f(0xfe)][_0x3f126f(0x142)],_0x5ec173=global[_0x3f126f(0xfe)][_0x3f126f(0x10f)],_0x2e894e=global['nodemodule'][_0x3f126f(0x138)],_0x3776bc=_0x11bceb['resolve'](__dirname,_0x3f126f(0x14f)),_0x33b41a=Math['PI'],{id:_0x1fd4b3,name:_0x23b85e,rank:_0x3cc2c1,level:_0x109b92,expCurrent:_0x371f48,expNextLevel:_0x409b68}=_0x1ff217;_0x396b88[_0x3f126f(0x15b)](_0x3776bc+_0x3f126f(0x11f),{'family':_0x3f126f(0x147),'weight':_0x3f126f(0x105),'style':_0x3f126f(0x11c)}),_0x396b88['registerFont'](_0x3776bc+_0x3f126f(0x15e),{'family':'Manrope','weight':'bold','style':_0x3f126f(0x11c)});const _0x477de6=_0x11bceb['resolve'](__dirname,_0x3f126f(0x14f),'customrank');var _0x2b0811=_0x4706dc[_0x3f126f(0x131)](_0x477de6);let _0x398a2a=Math['floor'](Math['random']()*0x17)+0x1;var _0x5543b7=_0x3776bc+'/rankcard'+_0x398a2a+_0x3f126f(0xee);_0x2b0811=_0x2b0811['map'](_0x93aba9=>_0x93aba9[_0x3f126f(0x14c)](/\.png/g,''));for(singleLimit of _0x2b0811){var _0x23b3f3=![];const _0xabe3d3=singleLimit[_0x3f126f(0x125)](/-/g);var _0x511acc=parseInt(_0xabe3d3[0x0]),_0x200644=parseInt(_0xabe3d3[0x1]?_0xabe3d3[0x1]:_0x511acc);for(;_0x511acc<=_0x200644;_0x511acc++){if(_0x109b92==_0x511acc){_0x23b3f3=!![];break;}}if(_0x23b3f3==!![]){_0x5543b7=_0x477de6+('/'+singleLimit+_0x3f126f(0xee));break;}}let _0x2e8998=await _0x396b88[_0x3f126f(0xf1)](_0x5543b7);const _0x32089b=_0x3776bc+(_0x3f126f(0x117)+_0x1fd4b3+'.png');var _0x26f22f=_0x371f48*0x267/_0x409b68;if(_0x26f22f>0x267-18.5)_0x26f22f=0x267-18.5;let _0x1c7f34=await _0x4ec91c['get'](_0x3f126f(0x149)+_0x1fd4b3+_0x3f126f(0x141));_0x1c7f34=await this['circle'](_0x1c7f34[_0x3f126f(0x154)]);const _0x3164c3=_0x396b88['createCanvas'](0x3a6,0x11a),_0x2cea68=_0x3164c3[_0x3f126f(0x126)]('2d');_0x2cea68[_0x3f126f(0x120)](_0x2e8998,0x0,0x0,_0x3164c3[_0x3f126f(0x101)],_0x3164c3['height']),_0x2cea68[_0x3f126f(0x120)](await _0x396b88[_0x3f126f(0xf1)](_0x1c7f34),0x2d,0x32,0xb4,0xb4),_0x2cea68[_0x3f126f(0x112)]='bold\x2036px\x20Manrope',_0x2cea68[_0x3f126f(0x14e)]=getRandomColor(),_0x2cea68['textAlign']=_0x3f126f(0x13f),_0x2cea68['fillText'](_0x23b85e,0x10e,0xa4),_0x2cea68[_0x3f126f(0x112)]='36px\x20Manrope',_0x2cea68[_0x3f126f(0x14e)]=getRandomColor(),_0x2cea68[_0x3f126f(0x12d)]=_0x3f126f(0xf6),_0x2cea68[_0x3f126f(0x112)]='bold\x2032px\x20Manrope',_0x2cea68[_0x3f126f(0x14e)]=getRandomColor(),_0x2cea68[_0x3f126f(0x12d)]=_0x3f126f(0x109),_0x2cea68[_0x3f126f(0x12a)](_0x109b92,0x3a6-0x37,0x52),_0x2cea68[_0x3f126f(0x14e)]=getRandomColor(),_0x2cea68[_0x3f126f(0x12a)](_0x3f126f(0x11a),0x3a6-0x37-_0x2cea68[_0x3f126f(0xfa)](_0x109b92)[_0x3f126f(0x101)]-0xa,0x52),_0x2cea68[_0x3f126f(0x112)]=_0x3f126f(0x108),_0x2cea68['fillStyle']=getRandomColor(),_0x2cea68[_0x3f126f(0x12d)]=_0x3f126f(0x109),_0x2cea68[_0x3f126f(0x12a)](_0x3cc2c1,0x3a6-0x37-_0x2cea68[_0x3f126f(0xfa)](_0x109b92)[_0x3f126f(0x101)]-0x10-_0x2cea68[_0x3f126f(0xfa)](_0x3f126f(0x11a))['width']-0x19,0x52),_0x2cea68[_0x3f126f(0x14e)]=getRandomColor(),_0x2cea68[_0x3f126f(0x12a)]('#',0x3a6-0x37-_0x2cea68[_0x3f126f(0xfa)](_0x109b92)['width']-0x10-_0x2cea68[_0x3f126f(0xfa)]('Lv.')[_0x3f126f(0x101)]-0x10-_0x2cea68[_0x3f126f(0xfa)](_0x3cc2c1)[_0x3f126f(0x101)]-0x10,0x52),_0x2cea68[_0x3f126f(0x112)]=_0x3f126f(0xfd),_0x2cea68[_0x3f126f(0x14e)]=getRandomColor(),_0x2cea68[_0x3f126f(0x12d)]='start',_0x2cea68['fillText']('/\x20'+_0x409b68,0x2c6+_0x2cea68['measureText'](_0x371f48)[_0x3f126f(0x101)]+0xa,0xa4),_0x2cea68[_0x3f126f(0x14e)]=getRandomColor(),_0x2cea68[_0x3f126f(0x12a)](_0x371f48,0x2c6,0xa4),_0x2cea68[_0x3f126f(0x11e)](),_0x2cea68[_0x3f126f(0x14e)]=getRandomColor(),_0x2cea68['arc'](0x101+18.5,147.5+18.5+36.25,18.5,1.5*_0x33b41a,0.5*_0x33b41a,!![]),_0x2cea68[_0x3f126f(0x136)](),_0x2cea68['fillRect'](0x101+18.5,147.5+36.25,_0x26f22f,37.5),_0x2cea68[_0x3f126f(0x115)](0x101+18.5+_0x26f22f,147.5+18.5+36.25,18.75,1.5*_0x33b41a,0.5*_0x33b41a,![]),_0x2cea68[_0x3f126f(0x136)]();const _0x2a4a26=_0x3164c3['toBuffer']();return _0x4706dc[_0x3f126f(0xf3)](_0x32089b,_0x2a4a26),_0x32089b;},module[_0x3ea45c(0x155)]['makeRankCardGif']=async _0x6739b2=>{const _0x3e5e14=_0x3ea45c,_0x30a729=global[_0x3e5e14(0xfe)][_0x3e5e14(0xe9)],_0x31d695=global[_0x3e5e14(0xfe)][_0x3e5e14(0xff)],_0x3d6aad=global[_0x3e5e14(0xfe)][_0x3e5e14(0x116)],_0x5eb8f2=global['nodemodule'][_0x3e5e14(0x142)],_0xc80789=global['nodemodule']['gifencoder'],_0x5beab7=global[_0x3e5e14(0xfe)][_0x3e5e14(0x138)],_0x34229c=_0x31d695[_0x3e5e14(0x158)](__dirname,_0x3e5e14(0x14f)),_0x515aff=Math['PI'],{id:_0x871e6f,name:_0x163c47,rank:_0x3750d8,level:_0x2ba6c2,expCurrent:_0x35b2d7,expNextLevel:_0x1d2d53}=_0x6739b2;_0x3d6aad[_0x3e5e14(0x15b)](_0x34229c+_0x3e5e14(0x132),{'family':_0x3e5e14(0x147),'weight':_0x3e5e14(0x105),'style':'normal'}),_0x3d6aad['registerFont'](_0x34229c+_0x3e5e14(0x11f),{'family':_0x3e5e14(0x147),'weight':_0x3e5e14(0x111),'style':_0x3e5e14(0x11c)});const _0x11b23c=_0x31d695['resolve'](__dirname,_0x3e5e14(0x14f),_0x3e5e14(0x11d));var _0x45d9d1=_0x30a729[_0x3e5e14(0x131)](_0x11b23c);let _0x32e6b6=Math[_0x3e5e14(0x13e)](Math[_0x3e5e14(0xf0)]()*0x17)+0x1;var _0x237e22=_0x34229c+_0x3e5e14(0x15c);_0x45d9d1=_0x45d9d1['map'](_0x539e20=>_0x539e20[_0x3e5e14(0x14c)](/\.png/g,''));for(singleLimit of _0x45d9d1){var _0x42a52e=![];const _0x411506=singleLimit[_0x3e5e14(0x125)](/-/g);var _0x2f08d9=parseInt(_0x411506[0x0]),_0x2f1a6e=parseInt(_0x411506[0x1]?_0x411506[0x1]:_0x2f08d9);for(;_0x2f08d9<=_0x2f1a6e;_0x2f08d9++){if(_0x2ba6c2==_0x2f08d9){_0x42a52e=!![];break;}}if(_0x42a52e==!![]){_0x237e22=_0x11b23c+('/'+singleLimit+_0x3e5e14(0xee));break;}}let _0x3f17f3=await _0x5eb8f2[_0x3e5e14(0x145)](_0x3e5e14(0x149)+_0x871e6f+'/picture?width=512&height=512&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9');_0x3f17f3=await this[_0x3e5e14(0x129)](_0x3f17f3[_0x3e5e14(0x154)]);var _0xef9957=_0x35b2d7*0x267/_0x1d2d53;if(_0xef9957>0x267-18.5)_0xef9957=0x267-18.5;async function _0x49867d({url:_0x3842ab,path:_0x408834,width:_0x26b83c,height:_0x5d609a}){const _0x450cc1=_0x3e5e14,_0x34f35e=_0x26b83c,_0x309021=_0x5d609a,_0x28718e=new _0xc80789(_0x34f35e,_0x309021);_0x28718e['start'](),_0x28718e['setRepeat'](0x0),_0x28718e[_0x450cc1(0x14b)](0x64);const _0x4e9ad1=_0x3d6aad[_0x450cc1(0x134)](_0x34f35e,_0x309021),_0x1a1a6b=_0x4e9ad1[_0x450cc1(0x126)]('2d');return new Promise((_0x58bdf1,_0x30ba47)=>{const _0x33bfd4=_0x450cc1;_0x5beab7({'url':_0x3842ab,'frames':_0x33bfd4(0xf5),'outputType':_0x33bfd4(0x150),'cumulative':!![]},function(_0x522db5,_0x1bfaef){const _0xfc3944=_0x33bfd4;if(_0x522db5)throw _0x522db5;let _0x49a6d7=0x0;_0x1bfaef[_0xfc3944(0xf4)](async function(_0x11feec,_0x358fec){const _0x30cc54=_0xfc3944;let _0xeedff9=await _0x11feec[_0x30cc54(0xfc)]()['pipe'](_0x30a729[_0x30cc54(0x12f)](_0x34229c+'/image-'+_0x11feec[_0x30cc54(0x103)]+_0x30cc54(0xee)));_0xeedff9['on'](_0x30cc54(0x13d),async()=>{const _0x285280=_0x30cc54;this[_0x285280(0x15d)]=_0x49a6d7++;if(_0x49a6d7==_0x1bfaef[_0x285280(0x127)])for(let _0x497364=0x0;_0x497364<_0x49a6d7;_0x497364++){const _0x23dba9=await _0x3d6aad[_0x285280(0xf1)](_0x34229c+_0x285280(0x10d)+_0x497364+_0x285280(0xee));_0x1a1a6b[_0x285280(0x120)](_0x23dba9,0x0,0x0,_0x4e9ad1['width'],_0x4e9ad1[_0x285280(0x13c)]),_0x1a1a6b['drawImage'](await _0x3d6aad[_0x285280(0xf1)](_0x3f17f3),0x2d,0x32,0xb4,0xb4),_0x1a1a6b[_0x285280(0x112)]=_0x285280(0x140),_0x1a1a6b[_0x285280(0x14e)]=getRandomColor(),_0x1a1a6b[_0x285280(0x12d)]=_0x285280(0x13f),_0x1a1a6b['fillText'](_0x163c47,0x10e,0xa4),_0x1a1a6b[_0x285280(0x112)]=_0x285280(0x156),_0x1a1a6b[_0x285280(0x14e)]=getRandomColor(),_0x1a1a6b['textAlign']='center',_0x1a1a6b[_0x285280(0x112)]=_0x285280(0x108),_0x1a1a6b[_0x285280(0x14e)]=getRandomColor(),_0x1a1a6b[_0x285280(0x12d)]='end',_0x1a1a6b[_0x285280(0x12a)](_0x2ba6c2,0x3a6-0x37,0x52),_0x1a1a6b[_0x285280(0x14e)]=getRandomColor(),_0x1a1a6b[_0x285280(0x12a)]('Lv.',0x3a6-0x37-_0x1a1a6b['measureText'](_0x2ba6c2)[_0x285280(0x101)]-0xa,0x52),_0x1a1a6b[_0x285280(0x112)]=_0x285280(0x108),_0x1a1a6b['fillStyle']=getRandomColor(),_0x1a1a6b[_0x285280(0x12d)]=_0x285280(0x109),_0x1a1a6b['fillText'](_0x3750d8,0x3a6-0x37-_0x1a1a6b[_0x285280(0xfa)](_0x2ba6c2)[_0x285280(0x101)]-0x10-_0x1a1a6b[_0x285280(0xfa)](_0x285280(0x11a))[_0x285280(0x101)]-0x19,0x52),_0x1a1a6b[_0x285280(0x14e)]=getRandomColor(),_0x1a1a6b[_0x285280(0x12a)]('#',0x3a6-0x37-_0x1a1a6b[_0x285280(0xfa)](_0x2ba6c2)[_0x285280(0x101)]-0x10-_0x1a1a6b[_0x285280(0xfa)](_0x285280(0x11a))['width']-0x10-_0x1a1a6b[_0x285280(0xfa)](_0x3750d8)[_0x285280(0x101)]-0x10,0x52),_0x1a1a6b[_0x285280(0x112)]=_0x285280(0xfd),_0x1a1a6b[_0x285280(0x14e)]=getRandomColor(),_0x1a1a6b[_0x285280(0x12d)]=_0x285280(0x13f),_0x1a1a6b[_0x285280(0x12a)]('/\x20'+_0x1d2d53,0x2c6+_0x1a1a6b[_0x285280(0xfa)](_0x35b2d7)[_0x285280(0x101)]+0xa,0xa4),_0x1a1a6b[_0x285280(0x14e)]=getRandomColor(),_0x1a1a6b[_0x285280(0x12a)](_0x35b2d7,0x2c6,0xa4),_0x1a1a6b[_0x285280(0x11e)](),_0x1a1a6b[_0x285280(0x14e)]=getRandomColor(),_0x1a1a6b['arc'](0x101+18.5,147.5+18.5+36.25,18.5,1.5*_0x515aff,0.5*_0x515aff,!![]),_0x1a1a6b[_0x285280(0x136)](),_0x1a1a6b[_0x285280(0xef)](0x101+18.5,147.5+36.25,_0xef9957,37.5),_0x1a1a6b[_0x285280(0x115)](0x101+18.5+_0xef9957,147.5+18.5+36.25,18.75,1.5*_0x515aff,0.5*_0x515aff,![]),_0x1a1a6b[_0x285280(0x136)](),_0x28718e[_0x285280(0x137)](_0x1a1a6b);if(_0x497364===_0x1bfaef[_0x285280(0x127)]-0x1){let _0x423ce7=await _0x28718e[_0x285280(0x113)]()[_0x285280(0x15f)](_0x30a729[_0x285280(0x12f)](_0x408834));_0x28718e[_0x285280(0x13d)](),_0x423ce7['on'](_0x285280(0x13d),async()=>{const _0x1901ca=_0x285280;console[_0x1901ca(0xed)](_0x1901ca(0x148)),_0x58bdf1(_0x408834);});}}});});});});}return _0x49867d({'url':_0x237e22,'path':_0x34229c+('/rank_'+_0x871e6f+_0x3e5e14(0x14a)),'width':0x3a6,'height':0x11a});},module[_0x3ea45c(0x155)][_0x3ea45c(0x129)]=async _0x47cadd=>{const _0x2e584e=_0x3ea45c,_0x6a8085=global[_0x2e584e(0xfe)]['jimp'];return _0x47cadd=await _0x6a8085['read'](_0x47cadd),_0x47cadd[_0x2e584e(0x129)](),await _0x47cadd[_0x2e584e(0x130)](_0x2e584e(0x151));},module['exports'][_0x3ea45c(0xf2)]=_0x3522f4=>{const _0x3b69cb=_0x3ea45c;if(_0x3522f4<0x0)return 0x0;return Math[_0x3b69cb(0x13e)]((Math[_0x3b69cb(0xf7)](0x1+0x4*_0x3522f4/0x3)+0x1)/0x2);},module['exports']['levelToExp']=_0x3c3ed0=>{if(_0x3c3ed0<=0x0)return 0x0;return 0x3*_0x3c3ed0*(_0x3c3ed0-0x1);},module[_0x3ea45c(0x155)][_0x3ea45c(0x135)]=async(_0x4feed5,_0x5ca6a3)=>{const _0x97effa=_0x3ea45c;let _0x87801b=(await _0x5ca6a3[_0x97effa(0x102)](_0x4feed5))[_0x97effa(0x14d)];const _0x210a8a=this[_0x97effa(0xf2)](_0x87801b),_0xd50210=_0x87801b-this[_0x97effa(0x114)](_0x210a8a),_0x5d8daf=this[_0x97effa(0x114)](_0x210a8a+0x1)-this['levelToExp'](_0x210a8a);return{'level':_0x210a8a,'expCurrent':_0xd50210,'expNextLevel':_0x5d8daf};},module[_0x3ea45c(0x155)][_0x3ea45c(0x15a)]=async function(){const _0x964438=_0x3ea45c,{resolve:_0x12332c}=global[_0x964438(0xfe)][_0x964438(0xff)],{existsSync:_0x48cd21,mkdirSync:_0x2b49da}=global[_0x964438(0xfe)]['fs-extra'],{downloadFile:_0x5c7e40}=global['utils'],_0x58f5b5=_0x12332c(__dirname,'cache',_0x964438(0x11d));if(!_0x48cd21(_0x58f5b5))_0x2b49da(_0x58f5b5,{'recursive':!![]});if(!_0x48cd21(_0x12332c(__dirname,_0x964438(0x14f),'regular-font.ttf')))await _0x5c7e40(_0x964438(0x153),_0x12332c(__dirname,_0x964438(0x14f),'regular-font.ttf'));if(!_0x48cd21(_0x12332c(__dirname,_0x964438(0x14f),_0x964438(0x13a))))await _0x5c7e40(_0x964438(0x100),_0x12332c(__dirname,'cache','bold-font.ttf'));if(!_0x48cd21(_0x12332c(__dirname,_0x964438(0x14f),'rankcard.png')))await _0x5c7e40(_0x964438(0x152),_0x12332c(__dirname,_0x964438(0x14f),_0x964438(0xfb)));},module[_0x3ea45c(0x155)][_0x3ea45c(0x10a)]=async({event:_0xf53371,api:_0x72464c,args:_0x4e4870,Currencies:_0x3f241b,Users:_0x2e493a})=>{const _0x23a90e=_0x3ea45c,_0x4a07cd=global[_0x23a90e(0xfe)]['fs-extra'];let _0x34f536=await _0x3f241b[_0x23a90e(0x144)]([_0x23a90e(0x123),_0x23a90e(0x14d)]);const _0x528bfd=Object['keys'](_0xf53371[_0x23a90e(0xf9)]);_0x34f536[_0x23a90e(0x139)]((_0x53e664,_0xe82502)=>{const _0x2b8805=_0x23a90e;if(_0x53e664['exp']>_0xe82502[_0x2b8805(0x14d)])return-0x1;if(_0x53e664[_0x2b8805(0x14d)]<_0xe82502[_0x2b8805(0x14d)])return 0x1;});if(_0x4e4870['length']==0x0){const _0x2e12f0=_0x34f536[_0x23a90e(0x133)](_0x2dff52=>parseInt(_0x2dff52[_0x23a90e(0x123)])==parseInt(_0xf53371[_0x23a90e(0x12c)]))+0x1,_0xf83fdd=global[_0x23a90e(0x118)]['userName'][_0x23a90e(0x145)](_0xf53371[_0x23a90e(0x12c)])||await _0x2e493a[_0x23a90e(0x119)](_0xf53371[_0x23a90e(0x12c)]);if(_0x2e12f0==0x0)return _0x72464c['sendMessage']('Bạn\x20hiện\x20không\x20có\x20trong\x20cơ\x20sở\x20dữ\x20liệu\x20nên\x20không\x20thể\x20thấy\x20thứ\x20hạng\x20của\x20mình,\x20vui\x20lòng\x20thử\x20lại\x20sau\x205\x20giây.',_0xf53371[_0x23a90e(0x157)],_0xf53371[_0x23a90e(0x121)]);const _0x53a931=await this['getInfo'](_0xf53371[_0x23a90e(0x12c)],_0x3f241b),_0x2e571a=Date[_0x23a90e(0x143)]();let _0x1c132c=null;await this[_0x23a90e(0x122)]({'id':_0xf53371['senderID'],'name':_0xf83fdd,'rank':_0x2e12f0,..._0x53a931})[_0x23a90e(0xf8)](_0x53e4a4=>{const _0x43445c=_0x23a90e;_0x72464c[_0x43445c(0xeb)]({'body':'👀'+_0xf83fdd+_0x43445c(0x11b)+_0x2e12f0+'\x0a📝Tổng\x20số\x20tin\x20nhắn\x20là:\x20'+(Date[_0x43445c(0x143)]()-_0x2e571a)+'\x20✅','attachment':_0x4a07cd[_0x43445c(0x113)](_0x53e4a4,{'highWaterMark':0x80*0x400})},_0xf53371[_0x43445c(0x157)],()=>{const _0x5d7fee=_0x43445c;_0x4a07cd[_0x5d7fee(0xec)](_0x53e4a4),console[_0x5d7fee(0xed)](_0x5d7fee(0x10b));},_0xf53371[_0x43445c(0x121)]);});}if(_0x528bfd[_0x23a90e(0x127)]==0x1){const _0x5a89ac=_0x34f536[_0x23a90e(0x133)](_0x5ac8b6=>parseInt(_0x5ac8b6[_0x23a90e(0x123)])==parseInt(_0x528bfd[0x0]))+0x1,_0x512283=global[_0x23a90e(0x118)][_0x23a90e(0x104)][_0x23a90e(0x145)](_0x528bfd[0x0])||await _0x2e493a[_0x23a90e(0x119)](_0x528bfd[0x0]);if(_0x5a89ac==0x0)return _0x72464c['sendMessage'](_0x23a90e(0x12b),_0xf53371[_0x23a90e(0x157)],_0xf53371[_0x23a90e(0x121)]);let _0x36261d=await this[_0x23a90e(0x135)](_0x528bfd[0x0],_0x3f241b),_0x2e8117=await this[_0x23a90e(0xea)]({'id':_0x528bfd[0x0],'name':_0x512283,'rank':_0x5a89ac,..._0x36261d});return _0x72464c[_0x23a90e(0xeb)]({'body':'👀'+_0x512283+_0x23a90e(0x11b)+_0x5a89ac+_0x23a90e(0x110)+(Date[_0x23a90e(0x143)]()-timeStart)+'\x20✅','attachment':_0x4a07cd[_0x23a90e(0x113)](_0x2e8117)},_0xf53371[_0x23a90e(0x157)],()=>_0x4a07cd['unlinkSync'](_0x2e8117),_0xf53371[_0x23a90e(0x121)]);}if(_0x528bfd[_0x23a90e(0x127)]>0x1)for(const _0x2e771c of _0x528bfd){const _0x222c01=_0x34f536[_0x23a90e(0x133)](_0x3c9c6f=>parseInt(_0x3c9c6f['userID'])==parseInt(_0x2e771c))+0x1,_0x34c0b6=global[_0x23a90e(0x118)][_0x23a90e(0x104)][_0x23a90e(0x145)](_0x2e771c)||await _0x2e493a[_0x23a90e(0x119)](_0x2e771c);if(_0x222c01==0x0)return _0x72464c[_0x23a90e(0xeb)](_0x23a90e(0x12b),_0xf53371[_0x23a90e(0x157)],_0xf53371[_0x23a90e(0x121)]);let _0x50ad1e=await this[_0x23a90e(0x135)](_0x2e771c,_0x3f241b),_0x3fd043=await this[_0x23a90e(0xea)]({'id':_0x2e771c,'name':_0x34c0b6,'rank':_0x222c01,..._0x50ad1e});return _0x72464c[_0x23a90e(0xeb)]({'body':'👀'+_0x34c0b6+_0x23a90e(0x11b)+_0x222c01+_0x23a90e(0x110)+(Date[_0x23a90e(0x143)]()-timeStart)+'\x20✅','attachment':_0x4a07cd['createReadStream'](_0x3fd043)},_0xf53371[_0x23a90e(0x157)],()=>_0x4a07cd[_0x23a90e(0xec)](_0x3fd043),_0xf53371[_0x23a90e(0x121)]);}};function _0x54ca(){const _0x357e6d=['height','finish','floor','start','bold\x2036px\x20Manrope','/picture?width=512&height=512&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9','node-superfetch','now','getAll','get','6924040lIlCii','Manrope','Gif\x20Generated','https://graph.facebook.com/','.gif','setDelay','replace','exp','fillStyle','cache','png','image/png','https://raw.githubusercontent.com/catalizcs/storage-data/master/rank/rank_card/rankcard.png','https://raw.githubusercontent.com/catalizcs/storage-data/master/rank/fonts/regular-font.ttf','body','exports','36px\x20Manrope','threadID','resolve','0123456789ABCDEF','onLoad','registerFont','/banner.gif','count','/vnexotic.ttf','pipe','fs-extra','makeRankCard','sendMessage','unlinkSync','log','.png','fillRect','random','loadImage','expToLevel','writeFileSync','forEach','all','center','sqrt','then','mentions','measureText','rankcard.png','getImage','bold\x2026px\x20Manrope','nodemodule','path','https://raw.githubusercontent.com/catalizcs/storage-data/master/rank/fonts/bold-font.ttf','width','getData','frameIndex','userName','regular','780562AtNjQZ','1673892bgGyPn','bold\x2032px\x20Manrope','end','run','finally','6250881HccdcN','/image-','2820fGQCpp','gifencoder','\x0a📝Tổng\x20số\x20tin\x20nhắn\x20là:\x20','bold','font','createReadStream','levelToExp','arc','canvas','/rank_','data','getNameUser','Lv.','\x0a🏆Top\x20','normal','customrank','beginPath','/bold-font.ttf','drawImage','messageID','makeRankCardGif','userID','1DndzGo','split','getContext','length','5833356WjdUQk','circle','fillText','Bạn\x20hiện\x20không\x20có\x20trong\x20cơ\x20sở\x20dữ\x20liệu\x20nên\x20không\x20thể\x20thấy\x20thứ\x20hạng\x20của\x20mình,\x20vui\x20lòng\x20thử\x20lại\x20sau\x205\x20giây.','senderID','textAlign','9085RaFtDH','createWriteStream','getBufferAsync','readdirSync','/regular-font.ttf','findIndex','createCanvas','getInfo','fill','addFrame','gif-frames','sort','bold-font.ttf','3082965fsieFp'];_0x54ca=function(){return _0x357e6d;};return _0x54ca();}
