(this.webpackJsonpemopow=this.webpackJsonpemopow||[]).push([[0],{175:function(e,t,A){"use strict";(function(e){A.d(t,"a",(function(){return C})),A.d(t,"b",(function(){return l})),A.d(t,"c",(function(){return h}));var n=A(2),a=A.n(n),g=A(5),c=A(30),r=A(67),s=new c.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),i=new c.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),I=new c.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),C=function(){var e=Object(g.a)(a.a.mark((function e(t,A,n){var c,r,s,i,I,C=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=C.length>3&&void 0!==C[3]?C[3]:"recent",r=C.length>4&&void 0!==C[4]&&C[4],s=!1,i={slot:0,confirmations:0,err:null},I=0,e.next=7,new Promise(function(){var e=Object(g.a)(a.a.mark((function e(C,o){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),o({timeout:!0}))}),A);try{I=n.onSignature(t,(function(e,t){s=!0,i={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),o(i)):(console.log("Resolved via websocket",e),C(i))}),c)}catch(l){s=!0,console.error("WS error in setup",t,l)}case 2:if(s||!r){e.next=8;break}return Object(g.a)(a.a.mark((function e(){var A;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.getSignatureStatuses([t]);case 3:A=e.sent,i=A&&A.value[0],s||(i?i.err?(console.log("REST error for",t,i),s=!0,o(i.err)):i.confirmations?(console.log("REST confirmation for",t,i),s=!0,C(i)):console.log("REST no confirmations for",t,i):console.log("REST null result for",t,i)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,u(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,A){return e.apply(this,arguments)}}());case 7:return i=e.sent,n._signatureSubscriptions[I]&&n.removeSignatureListener(I),s=!0,console.log("Returning status",i),e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})));return function(t,A,n){return e.apply(this,arguments)}}(),o=function(t,A,n,a){var g=[{pubkey:A,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:c.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:r.b,isSigner:!1,isWritable:!1},{pubkey:c.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new c.d.TransactionInstruction({keys:g,programId:i,data:e.from([])})},l=function(){var e=Object(g.a)(a.a.mark((function e(t,A,n){var g,r,i,I,C,o,l,j,b;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g=new c.b(n,t,{preflightCommitment:"recent"}),e.next=3,c.a.fetchIdl(s,g);case 3:return r=e.sent,i=new c.a(r,s,g),I={id:A,connection:n,program:i},e.next=8,i.account.candyMachine.fetch(A);case 8:return C=e.sent,o=C.data.itemsAvailable.toNumber(),l=C.itemsRedeemed.toNumber(),j=o-l,b=C.data.goLiveDate.toNumber(),b=new Date(1e3*b),console.log({itemsAvailable:o,itemsRedeemed:l,itemsRemaining:j,goLiveDate:b}),e.abrupt("return",{candyMachine:I,itemsAvailable:o,itemsRedeemed:l,itemsRemaining:j,goLiveDate:b});case 16:case"end":return e.stop()}}),e)})));return function(t,A,n){return e.apply(this,arguments)}}(),j=function(){var t=Object(g.a)(a.a.mark((function t(A){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.PublicKey.findProgramAddress([e.from("metadata"),I.toBuffer(),A.toBuffer(),e.from("edition")],I);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(g.a)(a.a.mark((function t(A){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.PublicKey.findProgramAddress([e.from("metadata"),I.toBuffer(),A.toBuffer()],I);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var e=Object(g.a)(a.a.mark((function e(t,A){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.d.PublicKey.findProgramAddress([t.toBuffer(),r.b.toBuffer(),A.toBuffer()],i);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,A){return e.apply(this,arguments)}}(),h=function(){var e=Object(g.a)(a.a.mark((function e(t,A,n,g){var s,i,C,l,h,u,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.d.Keypair.generate(),e.next=3,d(n,s.publicKey);case 3:return i=e.sent,C=t.connection,l=t.program,e.next=7,b(s.publicKey);case 7:return h=e.sent,e.next=10,j(s.publicKey);case 10:return u=e.sent,e.next=13,C.getMinimumBalanceForRentExemption(r.a.span);case 13:return f=e.sent,e.next=16,l.rpc.mintNft({accounts:{config:A,candyMachine:t.id,payer:n,wallet:g,mint:s.publicKey,metadata:h,masterEdition:u,mintAuthority:n,updateAuthority:n,tokenMetadataProgram:I,tokenProgram:r.b,systemProgram:c.d.SystemProgram.programId,rent:c.d.SYSVAR_RENT_PUBKEY,clock:c.d.SYSVAR_CLOCK_PUBKEY},signers:[s],instructions:[c.d.SystemProgram.createAccount({fromPubkey:n,newAccountPubkey:s.publicKey,space:r.a.span,lamports:f,programId:r.b}),r.c.createInitMintInstruction(r.b,s.publicKey,0,n,n),o(i,n,n,s.publicKey),r.c.createMintToInstruction(r.b,s.publicKey,i,n,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,A,n,a){return e.apply(this,arguments)}}(),u=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,A(11).Buffer)},223:function(e,t,A){},345:function(e,t,A){},346:function(e,t){},348:function(e,t){},364:function(e,t){},365:function(e,t){},456:function(e,t){},458:function(e,t){},473:function(e,t){},481:function(e,t){},483:function(e,t){},510:function(e,t){},512:function(e,t){},518:function(e,t){},530:function(e,t){},533:function(e,t){},545:function(e,t){},546:function(e,t,A){"use strict";A.r(t);var n,a,g,c,r=A(0),s=A.n(r),i=A(28),I=A.n(i),C=(A(345),A(223),A(10)),o=A(2),l=A.n(o),j=A(5),b=A(14),d=A(133),h=A(134),u=A(587),f=A(586),x=A(7),m=A(55),p=A(171),O=A(175),v=(A(398),A(578)),w=A(579),y=A(584),P=A(583),N=A(580),R=A(581),D=A.p+"static/media/logo.3ced544f.jpg",K=A.p+"static/media/bg.3ced544f.jpg",B=A.p+"static/media/gif.5c5d1906.gif",S=A.p+"static/media/solana_logo.88dd9cd2.png",E=A.p+"static/media/pain.5bed75b9.jpg",L=A.p+"static/media/anger.cbfeb251.jpg",Q=A.p+"static/media/happy.102bbd84.jpg",M=A.p+"static/media/lust.176c8879.jpg",F=A.p+"static/media/sad.e4bb0ef7.jpg",k=A(3),Z=(Object(h.a)(p.a)(n||(n=Object(d.a)([""]))),h.a.span(a||(a=Object(d.a)([""]))),h.a.div(g||(g=Object(d.a)([""]))),Object(h.a)(v.a)(c||(c=Object(d.a)([""]))),function(e){var t=Object(r.useState)(),A=Object(b.a)(t,2),n=(A[0],A[1]),a=Object(r.useState)(!1),g=Object(b.a)(a,2),c=(g[0],g[1],Object(r.useState)(!1)),s=Object(b.a)(c,2),i=(s[0],s[1]),I=Object(r.useState)(!1),o=Object(b.a)(I,2),d=(o[0],o[1],Object(r.useState)(0)),h=Object(b.a)(d,2),p=(h[0],h[1]),v=Object(r.useState)(0),Z=Object(b.a)(v,2),H=(Z[0],Z[1]),W=Object(r.useState)(0),T=Object(b.a)(W,2),X=(T[0],T[1]),z=Object(r.useState)({open:!1,message:"",severity:void 0}),V=Object(b.a)(z,2),Y=V[0],U=V[1],G=Object(r.useState)(new Date(e.startDate)),J=Object(b.a)(G,2),q=(J[0],J[1]),_=Object(m.c)(),$=Object(r.useState)(),ee=Object(b.a)($,2),te=(ee[0],ee[1]),Ae=function(){Object(j.a)(l.a.mark((function t(){var A,n,a,g,c,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(_){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(O.b)(_,e.candyMachineId,e.connection);case 4:A=t.sent,n=A.candyMachine,a=A.goLiveDate,g=A.itemsAvailable,c=A.itemsRemaining,r=A.itemsRedeemed,p(g),X(c),H(r),i(0===c),q(a),te(n);case 16:case"end":return t.stop()}}),t)})))()};Object(r.useEffect)((function(){Object(j.a)(l.a.mark((function t(){var A;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!_){t.next=5;break}return t.next=3,e.connection.getBalance(_.publicKey);case 3:A=t.sent,n(A/x.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[_,e.connection]),Object(r.useEffect)(Ae,[_,e.candyMachineId,e.connection]);var ne={backgroundImage:"url("+K+")",backgroundAttachment:"fixed",backgroundPosition:"center",backgroundSize:"cover",minHeight:"100%",width:"100%"},ae={color:"white"},ge={fontSize:"20px",marginBottom:"30px",letterSpacing:"4px"};return document.title="Emopow",Object(k.jsxs)("main",{style:ne,children:[Object(k.jsxs)(w.a,{fluid:!0,id:"home",children:[Object(k.jsx)(y.a,{className:"pt-5",expand:"lg",children:Object(k.jsxs)(w.a,{children:[Object(k.jsx)(y.a.Brand,{style:ae,href:"#home",children:"Home"}),Object(k.jsx)(y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(k.jsx)(y.a.Collapse,{id:"basic-navbar-nav",children:Object(k.jsxs)(P.a,{className:"ms-auto",children:[Object(k.jsx)(P.a.Link,{style:ae,href:"#About",children:"About"}),Object(k.jsx)(P.a.Link,{style:ae,href:"#Emotions",children:"Emotions"}),Object(k.jsx)(P.a.Link,{style:ae,href:"#FAQ",children:"FAQ"}),Object(k.jsx)(P.a.Link,{style:ae,href:"#Team",children:"Team"}),Object(k.jsx)(P.a.Link,{style:ae,href:"#contact-us",children:"Contact Us"})]})})]})}),Object(k.jsxs)(w.a,{children:[Object(k.jsx)(N.a,{className:"mt-3",children:Object(k.jsx)(R.a,{className:"mt-3 d-flex justify-content-center text-center",children:Object(k.jsx)("img",{style:{borderRadius:"50%"},height:"150",alt:"logo",src:D})})}),Object(k.jsx)(N.a,{children:Object(k.jsx)(R.a,{className:"d-flex justify-content-center text-center",children:Object(k.jsx)("h1",{className:"white",children:"EMOPOW"})})}),Object(k.jsx)(N.a,{className:"mt-3",children:Object(k.jsx)(R.a,{className:"d-flex justify-content-center text-center",children:Object(k.jsx)("h2",{className:"white",children:"Emotions on solana"})})}),Object(k.jsx)(N.a,{className:"mt-3",children:Object(k.jsx)(R.a,{className:"d-flex justify-content-center text-center",children:Object(k.jsx)("h3",{className:"white",children:"Built on"})})}),Object(k.jsx)(N.a,{className:"mt-3",children:Object(k.jsx)(R.a,{className:"d-flex justify-content-center text-center",children:Object(k.jsx)("img",{height:"50",alt:"Solana",src:S})})}),Object(k.jsx)(N.a,{children:Object(k.jsx)(R.a,{className:"d-flex justify-content-center text-center",children:Object(k.jsxs)("div",{className:"tran-box",children:[Object(k.jsxs)("strong",{children:["Launch Date ",Object(k.jsx)("br",{}),Object(k.jsx)("br",{})]}),"Join Discord to know more"]})})}),Object(k.jsx)(N.a,{children:Object(k.jsx)(R.a,{className:"d-flex justify-content-center text-center"})})]})]}),Object(k.jsx)("div",{className:"tran-bg",id:"About",children:Object(k.jsx)(w.a,{children:Object(k.jsxs)(N.a,{className:"mt-3",children:[Object(k.jsx)(N.a,{className:"mt-5",children:Object(k.jsx)("h1",{className:"white justify-content-center text-center",children:"ABOUT"})}),Object(k.jsxs)(R.a,{className:"mt-5",lg:"8",children:[Object(k.jsx)(N.a,{className:"mt-2 white",style:ge,children:Object(k.jsx)("h4",{children:"Emopow makes it easy for anyone to show their emotions and feelings through arts and crafts, demonstrating their thoughts and feelings in a new and creative way."})}),Object(k.jsxs)(N.a,{className:"mt-5 white",style:ge,children:[Object(k.jsx)("strong",{children:"Express yourself: "}),"Making Arts is therapeutic. Emopow is a great way to express yourself and let it all out while having fun at the same time."]}),Object(k.jsxs)(N.a,{className:"mt-5 white",style:ge,children:[Object(k.jsx)("strong",{children:"And it's not just always humans: "}),"Don't think this is just for humans - Emopow is designed for any living thing emotions. You can show your pets as well!"]})]}),Object(k.jsx)(R.a,{lg:"4",className:"d-flex justify-content-center text-center",children:Object(k.jsx)("img",{style:{borderRadius:"50%",marginTop:"100px"},height:"400",width:"400",alt:"",src:B})})]})})}),Object(k.jsx)("div",{id:"Emotions",children:Object(k.jsxs)(w.a,{children:[Object(k.jsx)(N.a,{className:"mt-3 d-flex justify-content-center text-center",children:Object(k.jsx)(R.a,{className:"mt-5",children:Object(k.jsx)("h1",{className:"white",children:"CURRENT EMOTIONS ON EMOPOW"})})}),Object(k.jsxs)("div",{className:"jss674",children:[Object(k.jsxs)(N.a,{children:[Object(k.jsx)(R.a,{children:Object(k.jsxs)("div",{className:"mt-5 tran-box road-box .jss675 justify-content-center text-center",children:[Object(k.jsx)("h2",{className:"justify-content-center text-center",children:"Pain"}),Object(k.jsx)("p",{className:"tran-para",children:"Pain in not just a world, let's show what it is by the art"}),Object(k.jsx)("img",{style:{borderRadius:"50%",marginTop:"10px"},height:"200",width:"200",alt:"",src:E})]})}),Object(k.jsx)(R.a,{children:Object(k.jsxs)("div",{className:"mt-5 tran-box road-box .jss675 justify-content-center text-center",children:[Object(k.jsx)("h2",{className:"justify-content-center text-center",children:"Anger"}),Object(k.jsx)("p",{className:"tran-para",children:"Anger in not just a world, let's show what it is by the art"}),Object(k.jsx)("img",{style:{borderRadius:"50%",marginTop:"10px"},height:"200",width:"200",alt:"",src:L})]})}),Object(k.jsx)(R.a,{children:Object(k.jsxs)("div",{className:"mt-5 tran-box road-box .jss675 justify-content-center text-center",children:[Object(k.jsx)("h2",{className:"justify-content-center text-center",children:"Happy"}),Object(k.jsx)("p",{className:"tran-para",children:"Happy in not just a world, let's show what it is by the art"}),Object(k.jsx)("img",{style:{borderRadius:"50%",marginTop:"10px"},height:"200",width:"200",alt:"",src:Q})]})})]}),Object(k.jsxs)(N.a,{children:[Object(k.jsx)(R.a,{children:Object(k.jsxs)("div",{className:"mt-5 tran-box road-box .jss675 justify-content-center text-center",children:[Object(k.jsx)("h2",{className:"justify-content-center text-center",children:"Lust"}),Object(k.jsx)("p",{className:"tran-para",children:"Lust in not just a world, let's show what it is by the art"}),Object(k.jsx)("img",{style:{borderRadius:"50%",marginTop:"10px"},height:"200",width:"200",alt:"",src:M})]})}),Object(k.jsx)(R.a,{children:Object(k.jsxs)("div",{className:"mt-5 tran-box road-box .jss675 justify-content-center text-center",children:[Object(k.jsx)("h2",{className:"justify-content-center text-center",children:"Sad"}),Object(k.jsx)("p",{className:"tran-para",children:"Sadness in not just a world, let's show what it is by the art"}),Object(k.jsx)("img",{style:{borderRadius:"50%",marginTop:"10px"},height:"200",width:"200",alt:"",src:F})]})})]})]})]})}),Object(k.jsx)("div",{className:"tran-bg",id:"FAQ",children:Object(k.jsxs)(w.a,{children:[Object(k.jsx)(N.a,{className:"mt-3 d-flex justify-content-center text-center",children:Object(k.jsx)(R.a,{className:"mt-5",children:Object(k.jsx)("h1",{className:"white",children:"FREQUENTLY ASKED QUESTIONS"})})}),Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{className:"mt-5 tran-box road-box",children:[Object(k.jsxs)("p",{className:"tran-para",children:[Object(k.jsx)("strong",{children:"Q."})," What is the total supply ?"]}),Object(k.jsxs)("p",{className:"tran-para",children:[Object(k.jsx)("strong",{children:"A."})," First We will launch with a fixed supply to mint after that we will open it for the artist to show their emotions through arts."]})]}),Object(k.jsxs)("div",{className:"mt-5 tran-box road-box",children:[Object(k.jsxs)("p",{className:"tran-para",children:[Object(k.jsx)("strong",{children:"Q."})," What's the mint price ?"]}),Object(k.jsxs)("p",{className:"tran-para",children:[Object(k.jsx)("strong",{children:"A."})," Mint price is 2.7 Sol, because there are total 27 emotions in human."]})]}),Object(k.jsxs)("div",{className:"mt-5 tran-box road-box",children:[Object(k.jsxs)("p",{className:"tran-para",children:[Object(k.jsx)("strong",{children:"Q."})," Is there a limit to how many Emopow I can mint ?"]}),Object(k.jsxs)("p",{className:"tran-para",children:[Object(k.jsx)("strong",{children:"A."})," No, You can have as many emotions as you want."]})]}),Object(k.jsxs)("div",{className:"mt-5 tran-box road-box",children:[Object(k.jsxs)("p",{className:"tran-para",children:[Object(k.jsx)("strong",{children:"Q."})," Will there be a whitelist or a pre-sale ?"]}),Object(k.jsxs)("p",{className:"tran-para",children:[Object(k.jsx)("strong",{children:"A."})," No, but top 3 people with the most minting count will win a free emotion."]})]}),Object(k.jsxs)("div",{className:"mt-5 tran-box road-box",children:[Object(k.jsxs)("p",{className:"tran-para",children:[Object(k.jsx)("strong",{children:"Q."})," When will you launch ?"]}),Object(k.jsxs)("p",{className:"tran-para",children:[Object(k.jsx)("strong",{children:"A."})," Join our discord to know more about this."]})]})]})]})}),Object(k.jsx)("div",{children:Object(k.jsxs)(w.a,{children:[Object(k.jsx)(N.a,{className:"mt-3 d-flex justify-content-center text-center",children:Object(k.jsx)(R.a,{className:"mt-5",children:Object(k.jsx)("h1",{className:"white",children:"Team"})})}),Object(k.jsx)("div",{className:"jss674",children:Object(k.jsxs)(N.a,{children:[Object(k.jsx)(R.a,{children:Object(k.jsxs)("div",{className:"mt-5 tran-box road-box .jss675 justify-content-center text-center",children:[Object(k.jsx)("img",{style:{borderRadius:"50%",marginBottom:"50px"},height:"200",width:"200",alt:"",src:E}),Object(k.jsx)("h2",{className:"justify-content-center text-center",children:"Mr. Pain"}),Object(k.jsx)("p",{className:"tran-para",children:"The Co-founder"})]})}),Object(k.jsx)(R.a,{children:Object(k.jsxs)("div",{className:"mt-5 tran-box road-box .jss675 justify-content-center text-center",children:[Object(k.jsx)("img",{style:{borderRadius:"50%",marginBottom:"50px"},height:"200",width:"200",alt:"",src:Q}),Object(k.jsx)("h2",{className:"justify-content-center text-center",children:"Mr. Happy"}),Object(k.jsx)("p",{className:"tran-para",children:"The Artist"})]})}),Object(k.jsx)(R.a,{children:Object(k.jsxs)("div",{className:"mt-5 tran-box road-box .jss675 justify-content-center text-center",children:[Object(k.jsx)("img",{style:{borderRadius:"50%",marginBottom:"50px"},height:"200",width:"200",alt:"",src:L}),Object(k.jsx)("h2",{className:"justify-content-center text-center",children:"Mr Anger"}),Object(k.jsx)("p",{className:"tran-para",children:"The Marketing Head"})]})})]})})]})}),Object(k.jsx)("div",{className:"tran-bg pt-3 pb-5",id:"contact-us",children:Object(k.jsxs)(w.a,{children:[Object(k.jsx)(N.a,{className:"mt-5 d-flex justify-content-center text-center",children:Object(k.jsx)(R.a,{children:Object(k.jsx)("h1",{className:"white",children:"Follow the news about us"})})}),Object(k.jsxs)(N.a,{className:"mt-5 mb-5 d-flex justify-content-center text-center",children:[Object(k.jsx)(R.a,{children:Object(k.jsx)("a",{href:"https://discord.gg/4KD5KsqRxY",target:"_blank",rel:"noreferrer",children:Object(k.jsxs)("svg",{className:"",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[Object(k.jsx)("path",{d:"M464 66.52A50 50 0 00414.12 17L97.64 16A49.65 49.65 0 0048 65.52V392c0 27.3 22.28 48 49.64 48H368l-13-44 109 100zM324.65 329.81s-8.72-10.39-16-19.32C340.39 301.55 352.5 282 352.5 282a139 139 0 01-27.85 14.25 173.31 173.31 0 01-35.11 10.39 170.05 170.05 0 01-62.72-.24 184.45 184.45 0 01-35.59-10.4 141.46 141.46 0 01-17.68-8.21c-.73-.48-1.45-.72-2.18-1.21-.49-.24-.73-.48-1-.48-4.36-2.42-6.78-4.11-6.78-4.11s11.62 19.09 42.38 28.26c-7.27 9.18-16.23 19.81-16.23 19.81-53.51-1.69-73.85-36.47-73.85-36.47 0-77.06 34.87-139.62 34.87-139.62 34.87-25.85 67.8-25.12 67.8-25.12l2.42 2.9c-43.59 12.32-63.44 31.4-63.44 31.4s5.32-2.9 14.28-6.77c25.91-11.35 46.5-14.25 55-15.21a24 24 0 014.12-.49 205.62 205.62 0 0148.91-.48 201.62 201.62 0 0172.89 22.95s-19.13-18.15-60.3-30.45l3.39-3.86s33.17-.73 67.81 25.16c0 0 34.87 62.56 34.87 139.62 0-.28-20.35 34.5-73.86 36.19z"}),Object(k.jsx)("path",{d:"M212.05 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.8 0 24.7-11.83 24.7-26.57.25-14.76-10.9-26.57-24.7-26.57zM300.43 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.81 0 24.7-11.83 24.7-26.57S314 218 300.43 218z"})]})})}),Object(k.jsx)(R.a,{children:Object(k.jsx)("a",{href:"https://twitter.com/EmopowInfo",target:"_blank",rel:"noreferrer",children:Object(k.jsx)("svg",{className:"",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(k.jsx)("path",{d:"M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"})})})}),Object(k.jsx)(R.a,{children:Object(k.jsx)("a",{className:"socail",rel:"noopener noreferrer",target:"_blank",href:"https://t.me/+VvS8ZHY9hlJmZjVl",children:Object(k.jsx)("img",{className:"round",alt:"",src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QBqRXhpZgAASUkqAAgAAAADABIBAwABAAAAAQAAADEBAgARAAAAMgAAAGmHBAABAAAARAAAAAAAAABTaG90d2VsbCAwLjMwLjEwAAACAAKgCQABAAAAmQAAAAOgCQABAAAAmQAAAAAAAAD/4Qn0aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjE1MyIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjE1MyIgdGlmZjpJbWFnZVdpZHRoPSIxNTMiIHRpZmY6SW1hZ2VIZWlnaHQ9IjE1MyIgdGlmZjpPcmllbnRhdGlvbj0iMSIvPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/2wBDAAMCAgMCAgMDAwMEAwMEBQgF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",width:"65",height:"65"})})}),Object(k.jsx)(R.a,{children:Object(k.jsx)("a",{className:"socail",rel:"noopener noreferrer",target:"_blank",href:"https://t.me/+VvS8ZHY9hlJmZjVl",children:Object(k.jsx)("img",{className:"round",alt:"",src:"data:image/png;base64,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",width:"65",height:"65"})})})]}),Object(k.jsx)(N.a,{className:"mt-3 d-flex justify-content-center text-center",children:Object(k.jsx)(R.a,{children:Object(k.jsx)("h3",{className:"white",children:"Copyright 2021 by Emopow. All rights reserved."})})})]})}),Object(k.jsx)(u.a,{open:Y.open,autoHideDuration:6e3,onClose:function(){return U(Object(C.a)(Object(C.a)({},Y),{},{open:!1}))},children:Object(k.jsx)(f.a,{onClose:function(){return U(Object(C.a)(Object(C.a)({},Y),{},{open:!1}))},severity:Y.severity,children:Y.message})})]})}),H=A(30),W=A(115),T=A(333),X=A(582),z=new H.d.PublicKey("5qD3wQHxDphKt6i8mJc1Rq6tDJL1dJgPGBJjsGDZHnXd"),V=new H.d.PublicKey("GRS4LVeoZczr1kP54r92WiSeWnU2H2mE4yHHkiakxYfv"),Y=new H.d.PublicKey("8rG7amBEAGMfBi1np669MzMF7U9ejbNPWiBAA8vkDrM"),U="devnet",G=new H.d.Connection("https://explorer-api.devnet.solana.com/"),J=parseInt("1633939200",10),q=Object(T.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),_=function(){var e=Object(r.useMemo)((function(){return Object(x.clusterApiUrl)(U)}),[]),t=Object(r.useMemo)((function(){return[Object(W.a)(),Object(W.b)(),Object(W.c)(),Object(W.e)({network:U}),Object(W.d)({network:U})]}),[]);return Object(k.jsx)(X.a,{theme:q,children:Object(k.jsx)(m.a,{endpoint:e,children:Object(k.jsx)(m.b,{wallets:t,autoConnect:!0,children:Object(k.jsx)(p.b,{children:Object(k.jsx)(Z,{candyMachineId:Y,config:V,connection:G,startDate:J,treasury:z,txTimeout:3e4})})})})})},$=function(e){e&&e instanceof Function&&A.e(3).then(A.bind(null,588)).then((function(t){var A=t.getCLS,n=t.getFID,a=t.getFCP,g=t.getLCP,c=t.getTTFB;A(e),n(e),a(e),g(e),c(e)}))};I.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(_,{})}),document.getElementById("root")),$()}},[[546,1,2]]]);
//# sourceMappingURL=main.f5f3de2e.chunk.js.map