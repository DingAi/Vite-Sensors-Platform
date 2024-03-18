import{_ as B,a as I}from"./CO2HistoryChart-2HFgbbQP.js";import{_ as q,m as z,r as D,s as n,w as s,e as _,o as t,b as o,a as e,d as f,v as M,c as a,x as S,F as C,g as i,t as w,p as N,h as F}from"./index-CfSXQxzQ.js";const c=v=>(N("data-v-ae1b0495"),v=v(),F(),v),U={class:"base-div items"},j={class:"item"},A={class:"item"},L={class:"item"},R={class:"item"},T={class:"base-div items"},$={class:"item"},G={class:"item"},H={class:"base-div items"},J={class:"item"},K={class:"item"},P=c(()=>e("p",null,"采样时间设置",-1)),Q={class:"base-div"},W={class:"switch-group-container"},X={class:"switch_group re-text"},Y={class:"station-name text-center p-2"},Z={class:"switchs"},ee={class:"switch text-center"},te=c(()=>e("p",null,"风扇",-1)),se={key:0,class:"badge rounded-pill open-color-auto"},oe={key:1,class:"badge rounded-pill close-color-auto"},le={class:"switch text-center"},ae=c(()=>e("p",null,"盖子",-1)),ie={key:0,class:"badge rounded-pill open-color-auto"},ne={key:1,class:"badge rounded-pill close-color-auto"},ce={class:"switch text-center"},de=c(()=>e("p",null,"电磁阀",-1)),_e={key:0,class:"badge rounded-pill open-color-auto"},re={key:1,class:"badge rounded-pill close-color-auto"},pe={class:"switch text-center"},ue=c(()=>e("p",null,"Other",-1)),he={key:0,class:"badge rounded-pill open-color-auto"},me={key:1,class:"badge rounded-pill close-color-auto"},ve={class:"switch_group re-text"},ye={class:"station-name text-center p-2"},fe={class:"switchs text-center"},we={class:"switch"},xe=c(()=>e("p",null,"风扇",-1)),ke={class:"switch"},ge=c(()=>e("p",null,"盖子",-1)),be={class:"switch"},Se=c(()=>e("p",null,"电磁阀",-1)),Ce={class:"switch"},Ve=c(()=>e("p",null,"Other",-1)),Oe={__name:"MasterStation-3",setup(v){function V(){let p=[];for(let r=0;r<10;r++){let y=[];for(let u=0;u<4;u++){let h=Math.random()<.5;y.push(h)}p.push(y)}return p}let k=z(V()),m=D(!0);return(p,r)=>{const y=_("el-switch"),u=_("el-statistic"),h=_("el-row"),O=_("el-countdown"),E=_("el-time-select"),g=_("el-col"),b=_("el-text"),d=_("el-button");return t(),n(h,{class:"full"},{default:s(()=>[o(g,{span:18,xs:24,class:"data-div"},{default:s(()=>[o(h,{class:"equipment-page-h-20 p-2",id:"master-div-1"},{default:s(()=>[e("div",U,[e("div",j,[o(y,{modelValue:f(m),"onUpdate:modelValue":r[0]||(r[0]=l=>M(m)?m.value=l:m=l),class:"ml-2","inline-prompt":"",size:"large",style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#3ef3e7"},"active-text":"自动模式","inactive-text":"手动模式"},null,8,["modelValue"])]),e("div",A,[o(u,{title:"正在运行的子站",value:268500})]),e("div",L,[o(u,{title:"运行步骤",value:268500})]),e("div",R,[o(u,{title:"气泵状态",value:268500})])])]),_:1}),o(h,{class:"equipment-page-h-60 p-2",id:"master-div-2 "},{default:s(()=>[e("div",T,[e("div",$,[o(B)]),e("div",G,[o(I)])])]),_:1}),o(h,{class:"equipment-page-h-20 p-2",id:"master-div-3"},{default:s(()=>[e("div",H,[e("div",J,[o(O,{title:"总运行时间",value:p.value},null,8,["value"])]),e("div",K,[e("div",null,[P,o(E,{modelValue:p.value,"onUpdate:modelValue":r[1]||(r[1]=l=>p.value=l),style:{width:"240px"},start:"00:00",step:"00:10",end:"10:00",placeholder:"Select time"},null,8,["modelValue"])])])])]),_:1})]),_:1}),o(g,{span:6,xs:24,class:"p-2",id:"switch"},{default:s(()=>[e("div",Q,[e("div",W,[f(m)?(t(!0),a(C,{key:0},S(f(k),(l,x)=>(t(),a("div",X,[e("div",Y,[o(b,{class:"mx-1 text-primary",type:"primary",size:"large"},{default:s(()=>[i(w("Slave Station : ")+w(x+1),1)]),_:2},1024)]),e("div",Z,[e("div",ee,[te,l[0]?(t(),a("span",se,"Opening")):(t(),a("span",oe,"Closed"))]),e("div",le,[ae,l[1]?(t(),a("span",ie,"Opening")):(t(),a("span",ne,"Closed"))]),e("div",ce,[de,l[2]?(t(),a("span",_e,"Opening")):(t(),a("span",re,"Closed"))]),e("div",pe,[ue,l[3]?(t(),a("span",he,"Opening")):(t(),a("span",me,"Closed"))])])]))),256)):(t(!0),a(C,{key:1},S(f(k),(l,x)=>(t(),a("div",ve,[e("div",ye,[o(b,{class:"mx-1 text-primary",type:"primary",size:"large"},{default:s(()=>[i(w("Slave Station : ")+w(x+1),1)]),_:2},1024)]),e("div",fe,[e("div",we,[xe,l[0]?(t(),n(d,{key:0,type:"default",round:""},{default:s(()=>[i(" Close ")]),_:1})):(t(),n(d,{key:1,type:"primary",round:""},{default:s(()=>[i(" Enter ")]),_:1}))]),e("div",ke,[ge,l[1]?(t(),n(d,{key:0,type:"default",round:""},{default:s(()=>[i(" Close ")]),_:1})):(t(),n(d,{key:1,type:"primary",round:""},{default:s(()=>[i(" Enter ")]),_:1}))]),e("div",be,[Se,l[2]?(t(),n(d,{key:0,type:"default",round:""},{default:s(()=>[i(" Close ")]),_:1})):(t(),n(d,{key:1,type:"primary",round:""},{default:s(()=>[i(" Enter ")]),_:1}))]),e("div",Ce,[Ve,l[4]?(t(),n(d,{key:0,type:"default",round:""},{default:s(()=>[i(" Close ")]),_:1})):(t(),n(d,{key:1,type:"primary",round:""},{default:s(()=>[i(" Enter ")]),_:1}))])])]))),256))])])]),_:1})]),_:1})}}},Ie=q(Oe,[["__scopeId","data-v-ae1b0495"]]);export{Ie as default};
