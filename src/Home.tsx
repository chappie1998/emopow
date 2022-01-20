import { useEffect, useState } from "react";

import styled from "styled-components";
import Countdown from "react-countdown";
import {CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "./candy-machine";


import Slider from "./slider.js";


// for the webpage 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Row, Col, Button, Form} from 'react-bootstrap';
import logo from './images/logo.jpg';
import bgImg from './images/bg.jpg'
import gif from './images/gif.gif'
import sol from './images/solana_logo.png'
import pain from './images/pain.jpg'
import anger from './images/anger.jpg'
import happy from './images/happy.jpg'
import sad from './images/sad.jpg'


const ConnectButton = styled(WalletDialogButton)``;

const CounterText = styled.span``; // add your styles here

const MintContainer = styled.div``; // add your styles here

const MintButton = styled(Button)``; // add your styles here

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const Home = (props: HomeProps) => {
  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  const [itemsAvailable, setItemsAvailable] = useState(0);
  const [itemsRedeemed, setItemsRedeemed] = useState(0);
  const [itemsRemaining, setItemsRemaining] = useState(0);

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const [startDate, setStartDate] = useState(new Date(props.startDate));

  const wallet = useAnchorWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const refreshCandyMachineState = () => {
    (async () => {
      if (!wallet) return;

      const {
        candyMachine,
        goLiveDate,
        itemsAvailable,
        itemsRemaining,
        itemsRedeemed,
      } = await getCandyMachineState(
        wallet as anchor.Wallet,
        props.candyMachineId,
        props.connection
      );

      setItemsAvailable(itemsAvailable);
      setItemsRemaining(itemsRemaining);
      setItemsRedeemed(itemsRedeemed);

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  };

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
      refreshCandyMachineState();
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  useEffect(refreshCandyMachineState, [
    wallet,
    props.candyMachineId,
    props.connection,
  ]);

  const styles = {
    backgroundImage: 'url('+bgImg+')',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: '100%',
    width: '100%',
  };
  
  const navitem = {
    color: 'white',
  }
  const para = {
    fontSize: '20px',
    marginBottom: '30px',
    letterSpacing: '4px',
  }

  // Webpage title
  document.title = 'Emopow'
  
  return (
    <main style={styles} className="App">
      {/* <div className="contact-div">
        <div className="contact">
          dicord
        </div>
      </div> */}


      <Container fluid id="home">
      <Navbar className="pt-5" expand="lg">
        <Container>
          <Navbar.Brand style={navitem} href="#home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link style={navitem} target="_blank" rel="noreferrer" href="https://twitter.com/EmopowNFT"><svg viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.2777 23C7.96696 23 5.81298 22.3045 4 21.1046C5.53928 21.2077 8.25576 20.9608 9.94541 19.2931C7.40363 19.1724 6.25733 17.1552 6.10781 16.2931C6.32378 16.3793 7.35379 16.4828 7.93524 16.2414C5.01136 15.4828 4.56281 12.8276 4.66248 12.0172C5.21071 12.4138 6.14104 12.5517 6.50652 12.5172C3.78199 10.5 4.76216 7.46552 5.24394 6.81034C7.19916 9.61336 10.1294 11.1876 13.7546 11.2752C13.6862 10.965 13.6501 10.6421 13.6501 10.3103C13.6501 7.92981 15.5096 6 17.8034 6C19.0018 6 20.0817 6.52682 20.8398 7.36949C21.6406 7.1753 22.8459 6.7207 23.4352 6.32759C23.1382 7.43103 22.2135 8.35154 21.6542 8.69271C21.6589 8.70432 21.6497 8.68105 21.6542 8.69271C22.1455 8.61581 23.4748 8.35145 24 7.98276C23.7403 8.60266 22.76 9.63337 21.9555 10.2104C22.1052 17.0412 17.0546 23 10.2777 23Z"></path></svg></Nav.Link>
              <Nav.Link style={navitem} target="_blank" rel="noreferrer" href="https://www.instagram.com/emopownft/"><svg viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21 8.5C21 9.32843 20.3284 10 19.5 10C18.6716 10 18 9.32843 18 8.5C18 7.67157 18.6716 7 19.5 7C20.3284 7 21 7.67157 21 8.5Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14 19C16.7614 19 19 16.7614 19 14C19 11.2386 16.7614 9 14 9C11.2386 9 9 11.2386 9 14C9 16.7614 11.2386 19 14 19ZM14 17C15.6569 17 17 15.6569 17 14C17 12.3431 15.6569 11 14 11C12.3431 11 11 12.3431 11 14C11 15.6569 12.3431 17 14 17Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4 13.6C4 10.2397 4 8.55953 4.65396 7.27606C5.2292 6.14708 6.14708 5.2292 7.27606 4.65396C8.55953 4 10.2397 4 13.6 4H14.4C17.7603 4 19.4405 4 20.7239 4.65396C21.8529 5.2292 22.7708 6.14708 23.346 7.27606C24 8.55953 24 10.2397 24 13.6V14.4C24 17.7603 24 19.4405 23.346 20.7239C22.7708 21.8529 21.8529 22.7708 20.7239 23.346C19.4405 24 17.7603 24 14.4 24H13.6C10.2397 24 8.55953 24 7.27606 23.346C6.14708 22.7708 5.2292 21.8529 4.65396 20.7239C4 19.4405 4 17.7603 4 14.4V13.6ZM13.6 6H14.4C16.1132 6 17.2777 6.00156 18.1779 6.0751C19.0548 6.14674 19.5032 6.27659 19.816 6.43597C20.5686 6.81947 21.1805 7.43139 21.564 8.18404C21.7234 8.49684 21.8533 8.94524 21.9249 9.82208C21.9984 10.7223 22 11.8868 22 13.6V14.4C22 16.1132 21.9984 17.2777 21.9249 18.1779C21.8533 19.0548 21.7234 19.5032 21.564 19.816C21.1805 20.5686 20.5686 21.1805 19.816 21.564C19.5032 21.7234 19.0548 21.8533 18.1779 21.9249C17.2777 21.9984 16.1132 22 14.4 22H13.6C11.8868 22 10.7223 21.9984 9.82208 21.9249C8.94524 21.8533 8.49684 21.7234 8.18404 21.564C7.43139 21.1805 6.81947 20.5686 6.43597 19.816C6.27659 19.5032 6.14674 19.0548 6.0751 18.1779C6.00156 17.2777 6 16.1132 6 14.4V13.6C6 11.8868 6.00156 10.7223 6.0751 9.82208C6.14674 8.94524 6.27659 8.49684 6.43597 8.18404C6.81947 7.43139 7.43139 6.81947 8.18404 6.43597C8.49684 6.27659 8.94524 6.14674 9.82208 6.0751C10.7223 6.00156 11.8868 6 13.6 6Z"></path></svg></Nav.Link>
              <Nav.Link style={navitem} target="_blank" rel="noreferrer" href="https://discord.gg/BCx7m35G"><svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M38.1863 13.7599C35.5913 11.5656 32.4773 10.4685 29.1902 10.2856L28.6712 10.8342C31.6123 11.5656 34.2073 13.0285 36.6293 15.0399C33.6883 13.3942 30.4013 12.2971 26.9412 11.9314C25.9032 11.7485 25.0382 11.7485 24.0002 11.7485C22.9622 11.7485 22.0972 11.7485 21.0592 11.9314C17.5992 12.2971 14.3121 13.3942 11.3711 15.0399C13.7931 13.0285 16.3882 11.5656 19.3292 10.8342L18.8102 10.2856C15.5231 10.4685 12.4091 11.5656 9.8141 13.7599C6.87308 19.6114 5.31607 26.1942 5.14307 32.9599C7.73809 35.8856 11.3711 37.7142 15.1771 37.7142C15.1771 37.7142 16.3882 36.2514 17.2532 34.9714C15.0041 34.4228 12.9281 33.1428 11.5441 31.1314C12.7551 31.8628 13.9661 32.5942 15.1771 33.1428C16.7342 33.8742 18.2912 34.2399 19.8482 34.6056C21.2322 34.7885 22.6162 34.9714 24.0002 34.9714C25.3842 34.9714 26.7682 34.7885 28.1522 34.6056C29.7093 34.2399 31.2663 33.8742 32.8233 33.1428C34.0343 32.5942 35.2453 31.8628 36.4563 31.1314C35.0723 33.1428 32.9963 34.4228 30.7473 34.9714C31.6123 36.2514 32.8233 37.7142 32.8233 37.7142C36.6293 37.7142 40.2623 35.8856 42.8573 32.9599C42.6843 26.1942 41.1273 19.6114 38.1863 13.7599ZM18.2912 29.6685C16.5612 29.6685 15.0041 28.0228 15.0041 26.0114C15.0041 23.9999 16.5612 22.3542 18.2912 22.3542C20.0212 22.3542 21.5782 23.9999 21.5782 26.0114C21.5782 28.0228 20.0212 29.6685 18.2912 29.6685ZM29.7093 29.6685C27.9792 29.6685 26.4222 28.0228 26.4222 26.0114C26.4222 23.9999 27.9792 22.3542 29.7093 22.3542C31.4393 22.3542 32.9963 23.9999 32.9963 26.0114C32.9963 28.0228 31.4393 29.6685 29.7093 29.6685Z"></path></svg></Nav.Link>
              <Nav.Link style={navitem} href="#About">About</Nav.Link>
              <Nav.Link style={navitem} href="#Emotions">Emotions</Nav.Link>
              <Nav.Link style={navitem} href="#FAQ">FAQ</Nav.Link>
              <Nav.Link style={navitem} href="#Roadmap">Roadmap</Nav.Link>
              <Nav.Link style={navitem} href="#Team">Team</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
      <Row className="mt-3">
          <Col className="mt-3 d-flex justify-content-center text-center">
            <img style={{borderRadius: "50%"}}
              height="200"
              width="200"
              alt="logo"
              src={gif}>
            </img>
          </Col>
        </Row>
        <Row>
          <Col className="  mt-3 d-flex justify-content-center text-center">
            <h1 className="white">EMOPOW</h1>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="d-flex justify-content-center text-center">
            <h2 className="white">Emotions on solana</h2>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="d-flex justify-content-center text-center">
            <h3 className="white">
              Built on
            </h3>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="d-flex justify-content-center text-center">
            <img
              height="50"
              alt="Solana"
              src={sol}>
            </img>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center text-center">
            <div className="tran-box">
              {/* <strong>Launch Date <br></br><br></br></strong> */}
              Join Discord to know more
              <br></br><br></br>
              <strong>
              <a href="https://discord.gg/BCx7m35G" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M38.1863 13.7599C35.5913 11.5656 32.4773 10.4685 29.1902 10.2856L28.6712 10.8342C31.6123 11.5656 34.2073 13.0285 36.6293 15.0399C33.6883 13.3942 30.4013 12.2971 26.9412 11.9314C25.9032 11.7485 25.0382 11.7485 24.0002 11.7485C22.9622 11.7485 22.0972 11.7485 21.0592 11.9314C17.5992 12.2971 14.3121 13.3942 11.3711 15.0399C13.7931 13.0285 16.3882 11.5656 19.3292 10.8342L18.8102 10.2856C15.5231 10.4685 12.4091 11.5656 9.8141 13.7599C6.87308 19.6114 5.31607 26.1942 5.14307 32.9599C7.73809 35.8856 11.3711 37.7142 15.1771 37.7142C15.1771 37.7142 16.3882 36.2514 17.2532 34.9714C15.0041 34.4228 12.9281 33.1428 11.5441 31.1314C12.7551 31.8628 13.9661 32.5942 15.1771 33.1428C16.7342 33.8742 18.2912 34.2399 19.8482 34.6056C21.2322 34.7885 22.6162 34.9714 24.0002 34.9714C25.3842 34.9714 26.7682 34.7885 28.1522 34.6056C29.7093 34.2399 31.2663 33.8742 32.8233 33.1428C34.0343 32.5942 35.2453 31.8628 36.4563 31.1314C35.0723 33.1428 32.9963 34.4228 30.7473 34.9714C31.6123 36.2514 32.8233 37.7142 32.8233 37.7142C36.6293 37.7142 40.2623 35.8856 42.8573 32.9599C42.6843 26.1942 41.1273 19.6114 38.1863 13.7599ZM18.2912 29.6685C16.5612 29.6685 15.0041 28.0228 15.0041 26.0114C15.0041 23.9999 16.5612 22.3542 18.2912 22.3542C20.0212 22.3542 21.5782 23.9999 21.5782 26.0114C21.5782 28.0228 20.0212 29.6685 18.2912 29.6685ZM29.7093 29.6685C27.9792 29.6685 26.4222 28.0228 26.4222 26.0114C26.4222 23.9999 27.9792 22.3542 29.7093 22.3542C31.4393 22.3542 32.9963 23.9999 32.9963 26.0114C32.9963 28.0228 31.4393 29.6685 29.7093 29.6685Z"></path></svg>
              </a>
              </strong>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center text-center">
            {/* <div className="tran-box">
              <MintContainer>
                {!wallet ? (
                  <ConnectButton>Connect Wallet</ConnectButton>
                ) : (
                  <MintButton
                    disabled={isSoldOut || isMinting || !isActive || true}
                    onClick={onMint}
                    variant="warning"
                  >
                    {isSoldOut ? (
                      "SOLD OUT"
                    ) : isActive ? (
                      isMinting ? (
                        <CircularProgress />
                      ) : (
                        "Coming Soon"
                      )
                    ) : (
                      <Countdown
                        date={startDate}
                        onMount={({ completed }) => completed && setIsActive(true)}
                        onComplete={() => setIsActive(true)}
                        renderer={renderCounter}
                      />
                    )}
                  </MintButton>
                )}
              </MintContainer>
            </div> */}
          </Col>
        </Row>
        
      </Container>
      </Container>

      <div className="tran-bg" id="About">
        <Container>
        <Row className="mt-3">
            <Row className="mt-5">
              <h1 className="white justify-content-center text-center">ABOUT</h1> 
            </Row>
          <Col className="mt-5" lg="8">
            <Row className="mt-2 white" style={para}>
              <h4>
                Emopow makes it easy for anyone to show their emotions and feelings through arts and crafts, demonstrating their thoughts and feelings in a new and creative way.
              </h4> 
            </Row>
            <Row className="mt-5 white" style={para}>
              <strong>Express yourself: </strong>
              Making Arts is therapeutic. Emopow is a great way to express yourself and let it all out while having fun at the same time.
            </Row>
            <Row className="mt-5 white" style={para}>
            <strong>And it's not just always humans: </strong>
              Don't think this is just for humans - Emopow is designed for any living thing emotions. You can show your pets as well!
            </Row>
            {/* <Row className="mt-4 white" style={para}>
              <strong>WARNING: </strong> The rarer they are, the harder they are to tame, so be careful!
            </Row> */}
          </Col>
          <Col lg="4" className="d-flex justify-content-center text-center">
            <img style={{borderRadius: "50%", marginTop:"100px"}}
              height="400"
              width="400"
              alt=""
              src={gif}>
            </img>
          </Col>
        </Row>
        </Container>
      </div>


      <div id="Emotions">
        <Container className="mb-5">
          <Row className="mt-3 d-flex justify-content-center text-center">
            <Col className="mt-5">
              <h1 className="white">27 EMOTIONS ON EMOPOW</h1>
            </Col>
          </Row>

          <div className="jss674 justify-content-center text-center">
          <Slider />
          </div>
        </Container>
      </div>
      

      <div className="tran-bg" id="FAQ">
        <Container>
          <Row className="mt-3 d-flex justify-content-center text-center">
            <Col className="mt-5">
              <h1 className="white">FREQUENTLY ASKED QUESTIONS</h1>
            </Col>
          </Row>

          <div>
            <div className="mt-5 tran-box road-box">
              <p className="tran-para">
                <strong>Q.</strong> What is EMOPOW ?
              </p>
              <p className="tran-para">
                <strong>A.</strong> EMOPOW is NFT collection of 27 emotions of human on SOLANA blockchain.
              </p>
            </div>
            <div className="mt-5 tran-box road-box">
              <p className="tran-para">
                <strong>Q.</strong> What is the total supply ?
              </p>
              <p className="tran-para">
                <strong>A.</strong> There will be 270 unique varient of each emotion. Total supply will be 7290 emotions.
              </p>
            </div>
            <div className="mt-5 tran-box road-box">
              <p className="tran-para">
                <strong>Q.</strong> When will you launch ?
              </p>
              <p className="tran-para">
                <strong>A.</strong> Join our discord to know more about this.
              </p>
            </div>
            <div className="mt-5 tran-box road-box">
              <p className="tran-para">
                <strong>Q.</strong> What's the mint price ?
              </p>
              <p className="tran-para">
                <strong>A.</strong> Public mint price is 1.27 Sol, Private Mint price is 1 Sol.
              </p>
            </div>
            <div className="mt-5 tran-box road-box">
              <p className="tran-para">
                <strong>Q.</strong> Is there a limit to how many Emopow I can mint ?
              </p>
              <p className="tran-para">
                <strong>A.</strong> Yes, You can mint 27 emotions.
              </p>
            </div>
            <div className="mt-5 tran-box road-box">
              <p className="tran-para">
                <strong>Q.</strong> Will there be a whitelist or a pre-sale ?
              </p>
              <p className="tran-para">
                <strong>A.</strong> Yes, There will be a private sale.
              </p>
            </div>
            {/* <div className="mt-5 tran-box road-box">
              <p className="tran-para">
                <strong>Q.</strong> Why Solana and not Ethereum? 
              </p>
              <p className="tran-para">
                <strong>A.</strong> We are very bullish on Solana which, with 50.000 transactions per second is by far the fastest blockchain network (compared to ETH's 15-45TPS). Gas wars on Ethereum have gone through the roof lately which we want to save our users from. 
              </p>
            </div>
            <div className="mt-5 tran-box road-box">
              <p className="tran-para">
                <strong>Q.</strong> ’m buying my first NFT. How do I do this?
              </p>
              <p className="tran-para">
                <strong>A.</strong>  Our NFTs will be minted (registered on the blockchain) on the Solana blockchain. For this all you need is Solana coins, a compatible wallet and our website. Our minting process will support the following wallets: Phantom-, Sollet-, Solflare 
              </p>
            </div> */}
          </div>
        </Container>
      </div>


      <div id="Team">
        <Container>
          <Row className="mt-3 d-flex justify-content-center text-center">
            <Col className="mt-5">
              <h1 className="white">TEAM</h1>
            </Col>
          </Row>

          <div className="jss674">
            <Row>
              <Col>
                <div className="mt-5 tran-box road-box .jss675 justify-content-center text-center">
                  <img style={{borderRadius: "50%", marginBottom: "50px"}}
                    height="200"
                    width="200"
                    alt=""
                    src={pain}>
                  </img>
                  <h2 className="justify-content-center text-center">Mr. Pain</h2>
                  <p className="tran-para">
                    The Co-founder
                  </p>
                </div>
              </Col>
              <Col>
                <div className="mt-5 tran-box road-box .jss675 justify-content-center text-center">
                  <img style={{borderRadius: "50%", marginBottom: "50px"}}
                    height="200"
                    width="200"
                    alt=""
                    src={happy}>
                  </img>
                  <h2 className="justify-content-center text-center">Mr. Happy</h2>
                  <p className="tran-para">
                    The Artist
                  </p>
                </div>
              </Col>
              <Col>
                <div className="mt-5 tran-box road-box .jss675 justify-content-center text-center">
                  <img style={{borderRadius: "50%", marginBottom: "50px"}}
                    height="200"
                    width="200"
                    alt=""
                    src={anger}>
                  </img>
                  <h2 className="justify-content-center text-center">Mr Anger</h2>
                  <p className="tran-para">
                    The Marketing Head
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>


      <div className="tran-bg" id="Roadmap">
        <Container>
          <Row className="mt-3 d-flex justify-content-center text-center">
            <Col className="mt-5">
              <h1 className="white">ROADMAP</h1>
            </Col>
          </Row>

          <div>
            <div className="mt-5 tran-box road-box">
              <p className="tran-para">
                <strong>0% EXPRESS THE EMOTIONS</strong>
              </p>
              <p className="tran-para">
                <strong>-</strong> You can now register and apply for the VIP exclusive private. Be one of the first to get your hands on a Emopow.
              </p>
              <p className="tran-para">
                <strong>-</strong> Run promotions and marketing.
              </p>
            </div>
            <div className="mt-5 tran-box road-box">
              <p className="tran-para">
                <strong>25% FIRST LOOK OF EMOPOW</strong>
              </p>
              <p className="tran-para">
                <strong>-</strong> A VIP exclusive private sale for whitelisted.
              </p>
              <p className="tran-para">
                <strong>-</strong> A lot of contest and giveaway.
              </p>
            </div>
            <div className="mt-5 tran-box road-box">
              <p className="tran-para">
                <strong>50% GET YOUR EMOPOW</strong>
              </p>
              <p className="tran-para">
                <strong>-</strong> A public sale for emopow.
              </p>
              <p className="tran-para">
                <strong>-</strong> A lot of contest and giveaway.
              </p>

            </div>
            <div className="mt-5 tran-box road-box">
              <p className="tran-para">
                <strong>75% LOVE YOUR EMOPOW</strong>
              </p>
              <p className="tran-para">
                <strong>-</strong> Will do a secondary listing on market place.
              </p>
              <p className="tran-para">
                <strong>-</strong> Airdrop the Sol token to community.
              </p>
            </div>
            <div className="mt-5 tran-box road-box">
              <p className="tran-para">
                <strong>100% HOLD YOUR EMOPOW</strong>
              </p>
              <p className="tran-para">
                <strong>-</strong> Time to 10x from the mint price.
              </p>
              <p className="tran-para">
                <strong>-</strong> More brand collaborations are coming. 
              </p>
              <p className="tran-para">
                <strong>-</strong> Launch of 27 3D Emotions. Only minter will get access to this drop.
              </p>
              <p className="tran-para">
                <strong>-</strong> Airdrop the Sol token to community.
              </p>
            </div>
          </div>
        </Container>
      </div>


      {/* <div className="tran-bg" id="">
        <Container>
          <Row className="mt-5 d-flex justify-content-center text-center">
            <Col className="mt-5">
              <h1 className="white">What will happen once mint is done ?</h1>
            </Col>
          </Row>

          <div className="jss674">
            <div className="mt-5 tran-box road-box .jss675">
              <p className="tran-para">
                Rewards for rarest attributes mint, list will be on twitter, 1.33 sol reward/attribute
              </p>
            </div>
            <div className="mt-5 tran-box road-box">
              <p className="tran-para">
              Listing on marketplaces
              </p>
            </div>
            <div className="mt-5 tran-box road-box">
              <p className="tran-para">
                KoKongz HUNT : 432 sol for the winner !
              </p>
            </div>
            <div className="mt-5 tran-box road-box">
              <p className="tran-para">
                KoKongz lottery : 10 lucky holders will win 1200$ each
              </p>
            </div>
            <div className="mt-5 tran-box road-box">
              <p className="tran-para">
              Something that was never done before will happen after the KoKongz HUNT! We'll reward our community by a really innovative way ( 1month after mint is complete)
              </p>
            </div>
            <div className="mt-5 tran-box road-box">
              <p className="tran-para">
              Each week : 50% of royaltie fees to a random holder
              </p>
            </div>
          </div>
        </Container>
      </div> */}

      {/* <div id="attributes">
        <Container>
          <Row className="mt-3 d-flex justify-content-center text-center">
              <Col className="mt-5">
                <h1 className="white">Attributes</h1>
              </Col>
            </Row>

          <Row className="mt-3">
            <Col md={5} className="tran-box road-box">
              <h1 className="white">Eyes</h1>
                <div><span className="dot"></span> Stars 7%</div>
                <div><span className="dot"></span>Sad 7%</div>
                <div><span className="dot"></span> Hypnotized 5.5%</div>
                <div><span className="dot"></span> Zombie 0.5%</div>
                <div><span className="dot"></span> 3D Glasses 5%</div>
                <div><span className="dot"></span> Sleepy 6.5%</div>
                <div><span className="dot"></span> Sunglasses 7%</div>
                <div><span className="dot"></span> Heart 4.5%</div>
                <div><span className="dot"></span> Laser 4.5%</div>
                <div><span className="dot"></span> Eyepatch 3%</div>
                <div><span className="dot"></span> Holographic Glasses 1.5%</div>
                <div><span className="dot"></span> VR visualizer 3%</div>
                <div><span className="dot"></span> Casual glasses 18%</div>
                <div><span className="dot"></span> Crosses In Eyes 4%</div>
                <div><span className="dot"></span> Monocle 3%</div>
                <div><span className="dot"></span> Normal Eyes 20%</div>
            </Col>
            <Col md={{ span: 5, offset: 1 }} className="tran-box road-box">
              <h1 className="white">Upper Clothes</h1>
                <div><span className="dot"></span>Casual Coat 7%</div>
                <div><span className="dot"></span>Sad 7%</div>
                <div><span className="dot"></span> Casual t shirt 7%</div>
                <div><span className="dot"></span> Hawaiian shirt 7%</div>
                <div><span className="dot"></span> Leather jacket 7%</div>
                <div><span className="dot"></span> Lumberjack shirt 7%</div>
                <div><span className="dot"></span> Sweatshirt 6%</div>
                <div><span className="dot"></span> Work vest 5%</div>
                <div><span className="dot"></span> Smoking 2%</div>
                <div><span className="dot"></span> Judoka kimono 4%</div>
                <div><span className="dot"></span> Casual dress 7%</div>
                <div><span className="dot"></span> Lifejacket 7%</div>
                <div><span className="dot"></span> Doctor's shirt 5%</div>
                <div><span className="dot"></span> Red dress with white points on it 5%</div>
                <div><span className="dot"></span> Captain hook's clothes 3%</div>
                <div><span className="dot"></span> Space suit 1%</div>
                <div><span className="dot"></span> Baseball shirt 2%</div>
                <div><span className="dot"></span> Super-hero shirt 2%</div>
                <div><span className="dot"></span> Army tee 6%</div>
                <div><span className="dot"></span> Dirty t-shirt 6%</div>
                <div><span className="dot"></span> Prisoner t-shirt 4%</div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={5} className="tran-box road-box">
              <h1 className="white">Hat</h1>
                <div><span className="dot"></span> Cowboy hat 7%</div>
                <div><span className="dot"></span> Army hat 7%</div>
                <div><span className="dot"></span> Beanie 7%</div>
                <div><span className="dot"></span> French beret 7%</div>
                <div><span className="dot"></span> Fisherman's hat 7%</div>
                <div><span className="dot"></span> Crown 1%</div>
                <div><span className="dot"></span> Sea captain's hat 6%</div>
                <div><span className="dot"></span> Bike's hat 5%</div>
                <div><span className="dot"></span> Black Bandana 7%</div>
                <div><span className="dot"></span> White bandana 7%</div>
                <div><span className="dot"></span> Straw hat 4%</div>
                <div><span className="dot"></span> Policeman hat 5%</div>
                <div><span className="dot"></span> Ninja's headband 5%</div>
                <div><span className="dot"></span> Space helmet 2%</div>
                <div><span className="dot"></span> Long blonde hair 4%</div>
                <div><span className="dot"></span> Mcdonald's hat 3%</div>
                <div><span className="dot"></span> Cooking hat 6%</div>
                <div><span className="dot"></span> Devil corn 3%</div>
                <div><span className="dot"></span> Angel oracle 3%</div>
            </Col>
            <Col md={{ span: 5, offset: 1 }} className="tran-box road-box">
              <h1 className="white">Fur</h1>
                <div><span className="dot"></span> Black 10%</div>
                <div><span className="dot"></span> Blue 10%</div>
                <div><span className="dot"></span> Turquoise 10%</div>
                <div><span className="dot"></span> Cream 10%</div>
                <div><span className="dot"></span> Brown 10%</div>
                <div><span className="dot"></span> Pink 10%</div>
                <div><span className="dot"></span> Solid gold 2%</div>
                <div><span className="dot"></span> Red 10%</div>
                <div><span className="dot"></span> Zombie 3.5%</div>
                <div><span className="dot"></span> Grey 10%</div>
                <div><span className="dot"></span> RoBot 4.5%</div>
                <div><span className="dot"></span> Yellow 10%</div>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={5} className="tran-box road-box">
              <h1 className="white">Mouth</h1>
                <div><span className="dot"></span> Diamond teeth 5%</div>
                <div><span className="dot"></span> Mulitcouloured teeth 5%</div>
                <div><span className="dot"></span> White teeth 55%</div>
                <div><span className="dot"></span> Dirty teeth 25%</div>
                <div><span className="dot"></span> Beard 10%</div>
            </Col>
            <Col md={{ span: 5, offset: 1 }} className="tran-box road-box">
              <h1 className="white">Hands</h1>
                <div><span className="dot"></span> Boxing gloves 17%</div>
                <div><span className="dot"></span> Iron fist 14%</div>
                <div><span className="dot"></span> Cyborg fist 4%</div>
                <div><span className="dot"></span> Normal fist 65%</div>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={5} className="tran-box road-box">
              <h1 className="white">Feets</h1>
                <div><span className="dot"></span> Casual black shoes 11%</div>
                <div><span className="dot"></span> Casual white shoes 11%</div>
                <div><span className="dot"></span> High shoes black 10%</div>
                <div><span className="dot"></span> Robots feet 3%</div>
                <div><span className="dot"></span> Regular 65%</div>
            </Col>
            <Col md={{ span: 5, offset: 1 }} className="tran-box road-box">
              <h1 className="white">Chains</h1>
                <div><span className="dot"></span> Gold 12.5%</div>
                <div><span className="dot"></span> Chain with eth logo 12.5%</div>
                <div><span className="dot"></span> Chain with btc logo 12.5%</div>
                <div><span className="dot"></span> Shiny jewels chain 12.5%</div>
                <div><span className="dot"></span> No chain 50%</div>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={5} className="tran-box road-box">
              <h1 className="white">Backgrounds</h1>
                <div><span className="dot"></span> Forest 5%</div>
                <div><span className="dot"></span> Beach (with sun) 5%</div>
                <div><span className="dot"></span> Night (with moon) 5%</div>
                <div><span className="dot"></span> Money (us dollars packs) 5%</div>
                <div><span className="dot"></span> Eclipse 5%</div>
                <div><span className="dot"></span> Grey 10%</div>
                <div><span className="dot"></span> Blue 10%</div>
                <div><span className="dot"></span> Orange 10%</div>
                <div><span className="dot"></span> Yellow 10%</div>
                <div><span className="dot"></span> Pastel Green 5%</div>
                <div><span className="dot"></span> Pink 5%</div>
                <div><span className="dot"></span> Grass green 10%</div>
                <div><span className="dot"></span> Red 10%</div>
                <div><span className="dot"></span> Black 5%</div>
            </Col>
            <Col md={{ span: 5, offset: 1 }} className="tran-box road-box">
              <h1 className="white">Head</h1>
                <div><span className="dot"></span> Black 9%</div>
                <div><span className="dot"></span> Blue 9%</div>
                <div><span className="dot"></span> Brown 9%</div>
                <div><span className="dot"></span> Cream 9%</div>
                <div><span className="dot"></span> Gold 1%</div>
                <div><span className="dot"></span> Grey 9%</div>
                <div><span className="dot"></span> Pink 9%</div>
                <div><span className="dot"></span> Red 9%</div>
                <div><span className="dot"></span> Robot 9%</div>
                <div><span className="dot"></span> Turquoise 9%</div>
                <div><span className="dot"></span> Yellow 9%</div>
                <div><span className="dot"></span> Zombie 9%</div>
            </Col>
          </Row>

          <Row className="mt-3 d-flex justify-content-center">
            <Col md={5} className="tran-box road-box">
              <div style={{marginLeft:"0"}}>
                <h1 className="white">Lower Clothes</h1>
                  <div><span className="dot"></span> Blue jeans 12%</div>
                  <div><span className="dot"></span> Floral short 12%</div>
                  <div><span className="dot"></span> Black short 12%</div>
                  <div><span className="dot"></span> White short 12%</div>
                  <div><span className="dot"></span> Orange short 12%</div>
                  <div><span className="dot"></span> Army short 4%</div>
                  <div><span className="dot"></span> With thongs 12%</div>
                  <div><span className="dot"></span> Black thongs 12%</div>
                  <div><span className="dot"></span> Floral thongs 12%</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}

      <div id="contact-us">
          <Row className="mt-2 pt-4 d-flex justify-content-center text-center">
            <Col>
              <h6 className="white">
              Copyright 2021 by Emopow. All rights reserved.
              </h6>
            </Col>
          </Row>
      </div>

      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
    </main>





    // <main>
      // {wallet && <p>Total Available: {itemsAvailable}</p>}

      // {wallet && <p>Redeemed: {itemsRedeemed}</p>}

      // {wallet && <p>Remaining: {itemsRemaining}</p>}

    //   <MintContainer>
    //     {!wallet ? (
    //       <ConnectButton>Connect Wallet</ConnectButton>
    //     ) : (
    //       <MintButton
    //         disabled={isSoldOut || isMinting || !isActive}
    //         onClick={onMint}
    //         variant="contained"
    //       >
    //         {isSoldOut ? (
    //           "SOLD OUT"
    //         ) : isActive ? (
    //           isMinting ? (
    //             <CircularProgress />
    //           ) : (
    //             "MINT"
    //           )
    //         ) : (
    //           <Countdown
    //             date={startDate}
    //             onMount={({ completed }) => completed && setIsActive(true)}
    //             onComplete={() => setIsActive(true)}
    //             renderer={renderCounter}
    //           />
    //         )}
    //       </MintButton>
    //     )}
    //   </MintContainer>

    //   <Snackbar
    //     open={alertState.open}
    //     autoHideDuration={6000}
    //     onClose={() => setAlertState({ ...alertState, open: false })}
    //   >
    //     <Alert
    //       onClose={() => setAlertState({ ...alertState, open: false })}
    //       severity={alertState.severity}
    //     >
    //       {alertState.message}
    //     </Alert>
    //   </Snackbar>
    // </main>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <CounterText>
      {hours + (days || 0) * 24} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  );
};

export default Home;
