(this.webpackJsonpemopow=this.webpackJsonpemopow||[]).push([[0],{175:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return p}));var c=n(2),s=n.n(c),a=n(5),r=n(30),i=n(67),o=new r.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),l=new r.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),j=new r.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),d=function(){var e=Object(a.a)(s.a.mark((function e(t,n,c){var r,i,o,l,j,d=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=d.length>3&&void 0!==d[3]?d[3]:"recent",i=d.length>4&&void 0!==d[4]&&d[4],o=!1,l={slot:0,confirmations:0,err:null},j=0,e.next=7,new Promise(function(){var e=Object(a.a)(s.a.mark((function e(d,b){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),b({timeout:!0}))}),n);try{j=c.onSignature(t,(function(e,t){o=!0,l={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),b(l)):(console.log("Resolved via websocket",e),d(l))}),r)}catch(u){o=!0,console.error("WS error in setup",t,u)}case 2:if(o||!i){e.next=8;break}return Object(a.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.getSignatureStatuses([t]);case 3:n=e.sent,l=n&&n.value[0],o||(l?l.err?(console.log("REST error for",t,l),o=!0,b(l.err)):l.confirmations?(console.log("REST confirmation for",t,l),o=!0,d(l)):console.log("REST no confirmations for",t,l):console.log("REST null result for",t,l)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,O(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return l=e.sent,c._signatureSubscriptions[j]&&c.removeSignatureListener(j),o=!0,console.log("Returning status",l),e.abrupt("return",l);case 12:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),b=function(t,n,c,s){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:s,isSigner:!1,isWritable:!1},{pubkey:r.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:i.b,isSigner:!1,isWritable:!1},{pubkey:r.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new r.d.TransactionInstruction({keys:a,programId:l,data:e.from([])})},u=function(){var e=Object(a.a)(s.a.mark((function e(t,n,c){var a,i,l,j,d,b,u,h,x;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new r.b(c,t,{preflightCommitment:"recent"}),e.next=3,r.a.fetchIdl(o,a);case 3:return i=e.sent,l=new r.a(i,o,a),j={id:n,connection:c,program:l},e.next=8,l.account.candyMachine.fetch(n);case 8:return d=e.sent,b=d.data.itemsAvailable.toNumber(),u=d.itemsRedeemed.toNumber(),h=b-u,x=d.data.goLiveDate.toNumber(),x=new Date(1e3*x),console.log({itemsAvailable:b,itemsRedeemed:u,itemsRemaining:h,goLiveDate:x}),e.abrupt("return",{candyMachine:j,itemsAvailable:b,itemsRedeemed:u,itemsRemaining:h,goLiveDate:x});case 16:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),h=function(){var t=Object(a.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.d.PublicKey.findProgramAddress([e.from("metadata"),j.toBuffer(),n.toBuffer(),e.from("edition")],j);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(a.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.d.PublicKey.findProgramAddress([e.from("metadata"),j.toBuffer(),n.toBuffer()],j);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.d.PublicKey.findProgramAddress([t.toBuffer(),i.b.toBuffer(),n.toBuffer()],l);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(a.a)(s.a.mark((function e(t,n,c,a){var o,l,d,u,p,O,f;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.d.Keypair.generate(),e.next=3,m(c,o.publicKey);case 3:return l=e.sent,d=t.connection,u=t.program,e.next=7,x(o.publicKey);case 7:return p=e.sent,e.next=10,h(o.publicKey);case 10:return O=e.sent,e.next=13,d.getMinimumBalanceForRentExemption(i.a.span);case 13:return f=e.sent,e.next=16,u.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:c,wallet:a,mint:o.publicKey,metadata:p,masterEdition:O,mintAuthority:c,updateAuthority:c,tokenMetadataProgram:j,tokenProgram:i.b,systemProgram:r.d.SystemProgram.programId,rent:r.d.SYSVAR_RENT_PUBKEY,clock:r.d.SYSVAR_CLOCK_PUBKEY},signers:[o],instructions:[r.d.SystemProgram.createAccount({fromPubkey:c,newAccountPubkey:o.publicKey,space:i.a.span,lamports:f,programId:i.b}),i.c.createInitMintInstruction(i.b,o.publicKey,0,c,c),b(l,c,c,o.publicKey),i.c.createMintToInstruction(i.b,o.publicKey,l,c,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,c,s){return e.apply(this,arguments)}}(),O=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(11).Buffer)},223:function(e,t,n){},345:function(e,t,n){},346:function(e,t){},348:function(e,t){},364:function(e,t){},365:function(e,t){},456:function(e,t){},458:function(e,t){},473:function(e,t){},481:function(e,t){},483:function(e,t){},510:function(e,t){},512:function(e,t){},518:function(e,t){},530:function(e,t){},533:function(e,t){},545:function(e,t){},546:function(e,t,n){"use strict";n.r(t);var c,s,a,r,i=n(0),o=n.n(i),l=n(28),j=n.n(l),d=(n(345),n(223),n(10)),b=n(2),u=n.n(b),h=n(5),x=n(14),m=n(133),p=n(134),O=n(587),f=n(586),g=n(7),y=n(55),w=n(171),N=n(175),v=(n(398),n(578)),k=n(579),S=n(584),A=n(583),R=n(580),P=n(581),E=n.p+"static/media/logo.3ced544f.jpg",T=n.p+"static/media/bg.3ced544f.jpg",M=n.p+"static/media/gif.5c5d1906.gif",B=n.p+"static/media/solana_logo.88dd9cd2.png",K=n.p+"static/media/pain.5bed75b9.jpg",L=n.p+"static/media/anger.cbfeb251.jpg",I=n.p+"static/media/happy.102bbd84.jpg",W=n.p+"static/media/lust.176c8879.jpg",D=n.p+"static/media/sad.e4bb0ef7.jpg",C=n(3),H=(Object(p.a)(w.a)(c||(c=Object(m.a)([""]))),p.a.span(s||(s=Object(m.a)([""]))),p.a.div(a||(a=Object(m.a)([""]))),Object(p.a)(v.a)(r||(r=Object(m.a)([""]))),function(e){var t=Object(i.useState)(),n=Object(x.a)(t,2),c=(n[0],n[1]),s=Object(i.useState)(!1),a=Object(x.a)(s,2),r=(a[0],a[1],Object(i.useState)(!1)),o=Object(x.a)(r,2),l=(o[0],o[1]),j=Object(i.useState)(!1),b=Object(x.a)(j,2),m=(b[0],b[1],Object(i.useState)(0)),p=Object(x.a)(m,2),w=(p[0],p[1]),v=Object(i.useState)(0),H=Object(x.a)(v,2),F=(H[0],H[1]),z=Object(i.useState)(0),Q=Object(x.a)(z,2),U=(Q[0],Q[1]),_=Object(i.useState)({open:!1,message:"",severity:void 0}),Y=Object(x.a)(_,2),J=Y[0],G=Y[1],q=Object(i.useState)(new Date(e.startDate)),V=Object(x.a)(q,2),Z=(V[0],V[1]),X=Object(y.c)(),$=Object(i.useState)(),ee=Object(x.a)($,2),te=(ee[0],ee[1]),ne=function(){Object(h.a)(u.a.mark((function t(){var n,c,s,a,r,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(X){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(N.b)(X,e.candyMachineId,e.connection);case 4:n=t.sent,c=n.candyMachine,s=n.goLiveDate,a=n.itemsAvailable,r=n.itemsRemaining,i=n.itemsRedeemed,w(a),U(r),F(i),l(0===r),Z(s),te(c);case 16:case"end":return t.stop()}}),t)})))()};Object(i.useEffect)((function(){Object(h.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!X){t.next=5;break}return t.next=3,e.connection.getBalance(X.publicKey);case 3:n=t.sent,c(n/g.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[X,e.connection]),Object(i.useEffect)(ne,[X,e.candyMachineId,e.connection]);var ce={backgroundImage:"url("+T+")",backgroundAttachment:"fixed",backgroundPosition:"center",backgroundSize:"cover",minHeight:"100%",width:"100%"},se={color:"white"},ae={fontSize:"20px",marginBottom:"30px",letterSpacing:"4px"};return document.title="Emopow",Object(C.jsxs)("main",{style:ce,children:[Object(C.jsxs)(k.a,{fluid:!0,id:"home",children:[Object(C.jsx)(S.a,{className:"pt-5",expand:"lg",children:Object(C.jsxs)(k.a,{children:[Object(C.jsx)(S.a.Brand,{style:se,href:"#home",children:"Home"}),Object(C.jsx)(S.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(C.jsx)(S.a.Collapse,{id:"basic-navbar-nav",children:Object(C.jsxs)(A.a,{className:"ms-auto",children:[Object(C.jsx)(A.a.Link,{style:se,href:"#About",children:"About"}),Object(C.jsx)(A.a.Link,{style:se,href:"#Emotions",children:"Emotions"}),Object(C.jsx)(A.a.Link,{style:se,href:"#FAQ",children:"FAQ"}),Object(C.jsx)(A.a.Link,{style:se,href:"#Team",children:"Team"}),Object(C.jsx)(A.a.Link,{style:se,href:"#contact-us",children:"Contact Us"})]})})]})}),Object(C.jsxs)(k.a,{children:[Object(C.jsx)(R.a,{className:"mt-3",children:Object(C.jsx)(P.a,{className:"mt-3 d-flex justify-content-center text-center",children:Object(C.jsx)("img",{style:{borderRadius:"50%"},height:"150",alt:"logo",src:E})})}),Object(C.jsx)(R.a,{children:Object(C.jsx)(P.a,{className:"d-flex justify-content-center text-center",children:Object(C.jsx)("h1",{className:"white",children:"EMOPOW"})})}),Object(C.jsx)(R.a,{className:"mt-3",children:Object(C.jsx)(P.a,{className:"d-flex justify-content-center text-center",children:Object(C.jsx)("h2",{className:"white",children:"Emotions on solana"})})}),Object(C.jsx)(R.a,{className:"mt-3",children:Object(C.jsx)(P.a,{className:"d-flex justify-content-center text-center",children:Object(C.jsx)("h3",{className:"white",children:"Built on"})})}),Object(C.jsx)(R.a,{className:"mt-3",children:Object(C.jsx)(P.a,{className:"d-flex justify-content-center text-center",children:Object(C.jsx)("img",{height:"50",alt:"Solana",src:B})})}),Object(C.jsx)(R.a,{children:Object(C.jsx)(P.a,{className:"d-flex justify-content-center text-center",children:Object(C.jsxs)("div",{className:"tran-box",children:[Object(C.jsxs)("strong",{children:["Launch Date ",Object(C.jsx)("br",{}),Object(C.jsx)("br",{})]}),"Join Discord to know more"]})})}),Object(C.jsx)(R.a,{children:Object(C.jsx)(P.a,{className:"d-flex justify-content-center text-center"})})]})]}),Object(C.jsx)("div",{className:"tran-bg",id:"About",children:Object(C.jsx)(k.a,{children:Object(C.jsxs)(R.a,{className:"mt-3",children:[Object(C.jsx)(R.a,{className:"mt-5",children:Object(C.jsx)("h1",{className:"white justify-content-center text-center",children:"ABOUT"})}),Object(C.jsxs)(P.a,{className:"mt-5",lg:"8",children:[Object(C.jsx)(R.a,{className:"mt-2 white",style:ae,children:Object(C.jsx)("h4",{children:"Emopow makes it easy for anyone to show their emotions and feelings through arts and crafts, demonstrating their thoughts and feelings in a new and creative way."})}),Object(C.jsxs)(R.a,{className:"mt-5 white",style:ae,children:[Object(C.jsx)("strong",{children:"Express yourself: "}),"Making Arts is therapeutic. Emopow is a great way to express yourself and let it all out while having fun at the same time."]}),Object(C.jsxs)(R.a,{className:"mt-5 white",style:ae,children:[Object(C.jsx)("strong",{children:"And it's not just always humans: "}),"Don't think this is just for humans - Emopow is designed for any living thing emotions. You can show your pets as well!"]})]}),Object(C.jsx)(P.a,{lg:"4",className:"d-flex justify-content-center text-center",children:Object(C.jsx)("img",{style:{borderRadius:"50%",marginTop:"100px"},height:"400",width:"400",alt:"",src:M})})]})})}),Object(C.jsx)("div",{id:"Emotions",children:Object(C.jsxs)(k.a,{children:[Object(C.jsx)(R.a,{className:"mt-3 d-flex justify-content-center text-center",children:Object(C.jsx)(P.a,{className:"mt-5",children:Object(C.jsx)("h1",{className:"white",children:"CURRENT EMOTIONS ON EMOPOW"})})}),Object(C.jsxs)("div",{className:"jss674",children:[Object(C.jsxs)(R.a,{children:[Object(C.jsx)(P.a,{children:Object(C.jsxs)("div",{className:"mt-5 tran-box road-box .jss675 justify-content-center text-center",children:[Object(C.jsx)("h2",{className:"justify-content-center text-center",children:"Pain"}),Object(C.jsx)("p",{className:"tran-para",children:"Pain in not just a world, let's show what it is by the art"}),Object(C.jsx)("img",{style:{borderRadius:"50%",marginTop:"10px"},height:"200",width:"200",alt:"",src:K})]})}),Object(C.jsx)(P.a,{children:Object(C.jsxs)("div",{className:"mt-5 tran-box road-box .jss675 justify-content-center text-center",children:[Object(C.jsx)("h2",{className:"justify-content-center text-center",children:"Anger"}),Object(C.jsx)("p",{className:"tran-para",children:"Anger in not just a world, let's show what it is by the art"}),Object(C.jsx)("img",{style:{borderRadius:"50%",marginTop:"10px"},height:"200",width:"200",alt:"",src:L})]})}),Object(C.jsx)(P.a,{children:Object(C.jsxs)("div",{className:"mt-5 tran-box road-box .jss675 justify-content-center text-center",children:[Object(C.jsx)("h2",{className:"justify-content-center text-center",children:"Happy"}),Object(C.jsx)("p",{className:"tran-para",children:"Happy in not just a world, let's show what it is by the art"}),Object(C.jsx)("img",{style:{borderRadius:"50%",marginTop:"10px"},height:"200",width:"200",alt:"",src:I})]})})]}),Object(C.jsxs)(R.a,{children:[Object(C.jsx)(P.a,{children:Object(C.jsxs)("div",{className:"mt-5 tran-box road-box .jss675 justify-content-center text-center",children:[Object(C.jsx)("h2",{className:"justify-content-center text-center",children:"Lust"}),Object(C.jsx)("p",{className:"tran-para",children:"Lust in not just a world, let's show what it is by the art"}),Object(C.jsx)("img",{style:{borderRadius:"50%",marginTop:"10px"},height:"200",width:"200",alt:"",src:W})]})}),Object(C.jsx)(P.a,{children:Object(C.jsxs)("div",{className:"mt-5 tran-box road-box .jss675 justify-content-center text-center",children:[Object(C.jsx)("h2",{className:"justify-content-center text-center",children:"Sad"}),Object(C.jsx)("p",{className:"tran-para",children:"Sadness in not just a world, let's show what it is by the art"}),Object(C.jsx)("img",{style:{borderRadius:"50%",marginTop:"10px"},height:"200",width:"200",alt:"",src:D})]})})]})]})]})}),Object(C.jsx)("div",{className:"tran-bg",id:"FAQ",children:Object(C.jsxs)(k.a,{children:[Object(C.jsx)(R.a,{className:"mt-3 d-flex justify-content-center text-center",children:Object(C.jsx)(P.a,{className:"mt-5",children:Object(C.jsx)("h1",{className:"white",children:"FREQUENTLY ASKED QUESTIONS"})})}),Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{className:"mt-5 tran-box road-box",children:[Object(C.jsxs)("p",{className:"tran-para",children:[Object(C.jsx)("strong",{children:"Q."})," What is the total supply ?"]}),Object(C.jsxs)("p",{className:"tran-para",children:[Object(C.jsx)("strong",{children:"A."})," First We will launch with a fixed supply to mint after that we will open it for the artist to show their emotions through arts."]})]}),Object(C.jsxs)("div",{className:"mt-5 tran-box road-box",children:[Object(C.jsxs)("p",{className:"tran-para",children:[Object(C.jsx)("strong",{children:"Q."})," What's the mint price ?"]}),Object(C.jsxs)("p",{className:"tran-para",children:[Object(C.jsx)("strong",{children:"A."})," Mint price is 2.7 Sol, because there are total 27 emotions in human."]})]}),Object(C.jsxs)("div",{className:"mt-5 tran-box road-box",children:[Object(C.jsxs)("p",{className:"tran-para",children:[Object(C.jsx)("strong",{children:"Q."})," Is there a limit to how many Emopow I can mint ?"]}),Object(C.jsxs)("p",{className:"tran-para",children:[Object(C.jsx)("strong",{children:"A."})," No, You can have as many emotions as you want."]})]}),Object(C.jsxs)("div",{className:"mt-5 tran-box road-box",children:[Object(C.jsxs)("p",{className:"tran-para",children:[Object(C.jsx)("strong",{children:"Q."})," Will there be a whitelist or a pre-sale ?"]}),Object(C.jsxs)("p",{className:"tran-para",children:[Object(C.jsx)("strong",{children:"A."})," No, but top 3 people with the most minting count will win a free emotion."]})]}),Object(C.jsxs)("div",{className:"mt-5 tran-box road-box",children:[Object(C.jsxs)("p",{className:"tran-para",children:[Object(C.jsx)("strong",{children:"Q."})," When will you launch ?"]}),Object(C.jsxs)("p",{className:"tran-para",children:[Object(C.jsx)("strong",{children:"A."})," Join our discord to know more about this."]})]})]})]})}),Object(C.jsx)("div",{children:Object(C.jsxs)(k.a,{children:[Object(C.jsx)(R.a,{className:"mt-3 d-flex justify-content-center text-center",children:Object(C.jsx)(P.a,{className:"mt-5",children:Object(C.jsx)("h1",{className:"white",children:"Team"})})}),Object(C.jsx)("div",{className:"jss674",children:Object(C.jsxs)(R.a,{children:[Object(C.jsx)(P.a,{children:Object(C.jsxs)("div",{className:"mt-5 tran-box road-box .jss675 justify-content-center text-center",children:[Object(C.jsx)("img",{style:{borderRadius:"50%",marginBottom:"50px"},height:"200",width:"200",alt:"",src:K}),Object(C.jsx)("h2",{className:"justify-content-center text-center",children:"Mr. Pain"}),Object(C.jsx)("p",{className:"tran-para",children:"The Co-founder"})]})}),Object(C.jsx)(P.a,{children:Object(C.jsxs)("div",{className:"mt-5 tran-box road-box .jss675 justify-content-center text-center",children:[Object(C.jsx)("img",{style:{borderRadius:"50%",marginBottom:"50px"},height:"200",width:"200",alt:"",src:I}),Object(C.jsx)("h2",{className:"justify-content-center text-center",children:"Mr. Happy"}),Object(C.jsx)("p",{className:"tran-para",children:"The Artist"})]})}),Object(C.jsx)(P.a,{children:Object(C.jsxs)("div",{className:"mt-5 tran-box road-box .jss675 justify-content-center text-center",children:[Object(C.jsx)("img",{style:{borderRadius:"50%",marginBottom:"50px"},height:"200",width:"200",alt:"",src:L}),Object(C.jsx)("h2",{className:"justify-content-center text-center",children:"Mr Anger"}),Object(C.jsx)("p",{className:"tran-para",children:"The Marketing Head"})]})})]})})]})}),Object(C.jsx)("div",{className:"tran-bg pt-3 pb-5",id:"contact-us",children:Object(C.jsxs)(k.a,{children:[Object(C.jsx)(R.a,{className:"mt-5 d-flex justify-content-center text-center",children:Object(C.jsx)(P.a,{children:Object(C.jsx)("h1",{className:"white",children:"Follow the news about us"})})}),Object(C.jsxs)(R.a,{className:"mt-5 mb-5 d-flex justify-content-center text-center",children:[Object(C.jsx)(P.a,{children:Object(C.jsx)("a",{href:"https://discord.gg/mFSaHEjx",target:"_blank",rel:"noreferrer",children:Object(C.jsxs)("svg",{className:"",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[Object(C.jsx)("path",{d:"M464 66.52A50 50 0 00414.12 17L97.64 16A49.65 49.65 0 0048 65.52V392c0 27.3 22.28 48 49.64 48H368l-13-44 109 100zM324.65 329.81s-8.72-10.39-16-19.32C340.39 301.55 352.5 282 352.5 282a139 139 0 01-27.85 14.25 173.31 173.31 0 01-35.11 10.39 170.05 170.05 0 01-62.72-.24 184.45 184.45 0 01-35.59-10.4 141.46 141.46 0 01-17.68-8.21c-.73-.48-1.45-.72-2.18-1.21-.49-.24-.73-.48-1-.48-4.36-2.42-6.78-4.11-6.78-4.11s11.62 19.09 42.38 28.26c-7.27 9.18-16.23 19.81-16.23 19.81-53.51-1.69-73.85-36.47-73.85-36.47 0-77.06 34.87-139.62 34.87-139.62 34.87-25.85 67.8-25.12 67.8-25.12l2.42 2.9c-43.59 12.32-63.44 31.4-63.44 31.4s5.32-2.9 14.28-6.77c25.91-11.35 46.5-14.25 55-15.21a24 24 0 014.12-.49 205.62 205.62 0 0148.91-.48 201.62 201.62 0 0172.89 22.95s-19.13-18.15-60.3-30.45l3.39-3.86s33.17-.73 67.81 25.16c0 0 34.87 62.56 34.87 139.62 0-.28-20.35 34.5-73.86 36.19z"}),Object(C.jsx)("path",{d:"M212.05 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.8 0 24.7-11.83 24.7-26.57.25-14.76-10.9-26.57-24.7-26.57zM300.43 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.81 0 24.7-11.83 24.7-26.57S314 218 300.43 218z"})]})})}),Object(C.jsx)(P.a,{children:Object(C.jsx)("a",{href:"https://twitter.com/KokongzNFTs",target:"_blank",rel:"noreferrer",children:Object(C.jsx)("svg",{className:"",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(C.jsx)("path",{d:"M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"})})})})]}),Object(C.jsx)(R.a,{className:"mt-3 d-flex justify-content-center text-center",children:Object(C.jsx)(P.a,{children:Object(C.jsx)("h3",{className:"white",children:"Copyright 2021 by Emopow. All rights reserved."})})})]})}),Object(C.jsx)(O.a,{open:J.open,autoHideDuration:6e3,onClose:function(){return G(Object(d.a)(Object(d.a)({},J),{},{open:!1}))},children:Object(C.jsx)(f.a,{onClose:function(){return G(Object(d.a)(Object(d.a)({},J),{},{open:!1}))},severity:J.severity,children:J.message})})]})}),F=n(30),z=n(115),Q=n(333),U=n(582),_=new F.d.PublicKey("5qD3wQHxDphKt6i8mJc1Rq6tDJL1dJgPGBJjsGDZHnXd"),Y=new F.d.PublicKey("GRS4LVeoZczr1kP54r92WiSeWnU2H2mE4yHHkiakxYfv"),J=new F.d.PublicKey("8rG7amBEAGMfBi1np669MzMF7U9ejbNPWiBAA8vkDrM"),G="devnet",q=new F.d.Connection("https://explorer-api.devnet.solana.com/"),V=parseInt("1633939200",10),Z=Object(Q.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),X=function(){var e=Object(i.useMemo)((function(){return Object(g.clusterApiUrl)(G)}),[]),t=Object(i.useMemo)((function(){return[Object(z.a)(),Object(z.b)(),Object(z.c)(),Object(z.e)({network:G}),Object(z.d)({network:G})]}),[]);return Object(C.jsx)(U.a,{theme:Z,children:Object(C.jsx)(y.a,{endpoint:e,children:Object(C.jsx)(y.b,{wallets:t,autoConnect:!0,children:Object(C.jsx)(w.b,{children:Object(C.jsx)(H,{candyMachineId:J,config:Y,connection:q,startDate:V,treasury:_,txTimeout:3e4})})})})})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,588)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};j.a.render(Object(C.jsx)(o.a.StrictMode,{children:Object(C.jsx)(X,{})}),document.getElementById("root")),$()}},[[546,1,2]]]);
//# sourceMappingURL=main.09a186d2.chunk.js.map