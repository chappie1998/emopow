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
import lust from './images/lust.jpg'
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
    <main style={styles}>
      <Container fluid id="home">
      <Navbar className="pt-5" expand="lg">
        <Container>
          <Navbar.Brand style={navitem} href="#home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link style={navitem} href="#About">About</Nav.Link>
              <Nav.Link style={navitem} href="#Emotions">Emotions</Nav.Link>
              <Nav.Link style={navitem} href="#FAQ">FAQ</Nav.Link>
              <Nav.Link style={navitem} href="#Team">Team</Nav.Link>
              <Nav.Link style={navitem} href="#contact-us">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
      <Row className="mt-3">
          <Col className="mt-3 d-flex justify-content-center text-center">
            <img style={{borderRadius: "50%"}}
              height="150"
              alt="logo"
              src={logo}>
            </img>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center text-center">
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
              <strong>Launch Date <br></br><br></br></strong>
              Join Discord to know more
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
        <Container>
          <Row className="mt-3 d-flex justify-content-center text-center">
            <Col className="mt-5">
              <h1 className="white">CURRENT EMOTIONS ON EMOPOW</h1>
            </Col>
          </Row>

          <div className="jss674">
            <Row>
              <Col>
                <div className="mt-5 tran-box road-box .jss675 justify-content-center text-center">
                  <h2 className="justify-content-center text-center">Pain</h2>
                  <p className="tran-para">
                    Pain in not just a world, let's show what it is by the art
                  </p>
                  <img style={{borderRadius: "50%", marginTop:"10px"}}
                    height="200"
                    width="200"
                    alt=""
                    src={pain}>
                  </img>
                </div>
              </Col>
              <Col>
                <div className="mt-5 tran-box road-box .jss675 justify-content-center text-center">
                  <h2 className="justify-content-center text-center">Anger</h2>
                  <p className="tran-para">
                    Anger in not just a world, let's show what it is by the art
                  </p>
                  <img style={{borderRadius: "50%", marginTop:"10px"}}
                    height="200"
                    width="200"
                    alt=""
                    src={anger}>
                  </img>
                </div>
              </Col>
              <Col>
                <div className="mt-5 tran-box road-box .jss675 justify-content-center text-center">
                  <h2 className="justify-content-center text-center">Happy</h2>
                  <p className="tran-para">
                    Happy in not just a world, let's show what it is by the art
                  </p>
                  <img style={{borderRadius: "50%", marginTop:"10px"}}
                    height="200"
                    width="200"
                    alt=""
                    src={happy}>
                  </img>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="mt-5 tran-box road-box .jss675 justify-content-center text-center">
                  <h2 className="justify-content-center text-center">Lust</h2>
                  <p className="tran-para">
                    Lust in not just a world, let's show what it is by the art
                  </p>
                  <img style={{borderRadius: "50%", marginTop:"10px"}}
                    height="200"
                    width="200"
                    alt=""
                    src={lust}>
                  </img>
                </div>
              </Col>
              <Col>
                <div className="mt-5 tran-box road-box .jss675 justify-content-center text-center">
                  <h2 className="justify-content-center text-center">Sad</h2>
                  <p className="tran-para">
                    Sadness in not just a world, let's show what it is by the art
                  </p>
                  <img style={{borderRadius: "50%", marginTop:"10px"}}
                    height="200"
                    width="200"
                    alt=""
                    src={sad}>
                  </img>
                </div>
              </Col>
              {/* <Col>
                <div className="mt-5 tran-box road-box .jss675 justify-content-center text-center">
                  <h2 className="justify-content-center text-center">Happy</h2>
                  <p className="tran-para">
                    Happy in not just a world, let's show what it is by the art
                  </p>
                  <img style={{borderRadius: "50%", marginTop:"10px"}}
                    height="200"
                    width="200"
                    alt=""
                    src={gif}>
                  </img>
                </div>
              </Col> */}
            </Row>
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
                <strong>Q.</strong> What is the total supply ?
              </p>
              <p className="tran-para">
                <strong>A.</strong> First We will launch with a fixed supply to mint after that we will open it for the artist to show their emotions through arts.
              </p>
            </div>
            <div className="mt-5 tran-box road-box">
              <p className="tran-para">
                <strong>Q.</strong> What's the mint price ?
              </p>
              <p className="tran-para">
                <strong>A.</strong> Mint price is 2.7 Sol, because there are total 27 emotions in human.
              </p>
            </div>
            <div className="mt-5 tran-box road-box">
              <p className="tran-para">
                <strong>Q.</strong> Is there a limit to how many Emopow I can mint ?
              </p>
              <p className="tran-para">
                <strong>A.</strong> No, You can have as many emotions as you want.
              </p>
            </div>
            <div className="mt-5 tran-box road-box">
              <p className="tran-para">
                <strong>Q.</strong> Will there be a whitelist or a pre-sale ?
              </p>
              <p className="tran-para">
                <strong>A.</strong> No, but top 3 people with the most minting count will win a free emotion.
              </p>
            </div>
            {/* <div className="mt-5 tran-box road-box">
              <p className="tran-para">
                <strong>Q.</strong> What about secondary sale royalties ?
              </p>
              <p className="tran-para">
                <strong>A.</strong> Second sale royalties will be 3% and 50% of them will be given to a lucky holder each week.
              </p>
            </div> */}
            <div className="mt-5 tran-box road-box">
              <p className="tran-para">
                <strong>Q.</strong> When will you launch ?
              </p>
              <p className="tran-para">
                <strong>A.</strong> Join our discord to know more about this.
              </p>
            </div>
          </div>
        </Container>
      </div>


      <div>
        <Container>
          <Row className="mt-3 d-flex justify-content-center text-center">
            <Col className="mt-5">
              <h1 className="white">Team</h1>
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

      <div className="tran-bg pt-3 pb-5" id="contact-us">
        <Container>
          <Row className="mt-5 d-flex justify-content-center text-center">
            <Col>
              <h1 className="white">
                Follow the news about us
              </h1>
            </Col>
          </Row>
          <Row className="mt-5 mb-5 d-flex justify-content-center text-center">
            <Col>
            <a href="https://discord.gg/mFSaHEjx" target="_blank" rel="noreferrer">
            <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 66.52A50 50 0 00414.12 17L97.64 16A49.65 49.65 0 0048 65.52V392c0 27.3 22.28 48 49.64 48H368l-13-44 109 100zM324.65 329.81s-8.72-10.39-16-19.32C340.39 301.55 352.5 282 352.5 282a139 139 0 01-27.85 14.25 173.31 173.31 0 01-35.11 10.39 170.05 170.05 0 01-62.72-.24 184.45 184.45 0 01-35.59-10.4 141.46 141.46 0 01-17.68-8.21c-.73-.48-1.45-.72-2.18-1.21-.49-.24-.73-.48-1-.48-4.36-2.42-6.78-4.11-6.78-4.11s11.62 19.09 42.38 28.26c-7.27 9.18-16.23 19.81-16.23 19.81-53.51-1.69-73.85-36.47-73.85-36.47 0-77.06 34.87-139.62 34.87-139.62 34.87-25.85 67.8-25.12 67.8-25.12l2.42 2.9c-43.59 12.32-63.44 31.4-63.44 31.4s5.32-2.9 14.28-6.77c25.91-11.35 46.5-14.25 55-15.21a24 24 0 014.12-.49 205.62 205.62 0 0148.91-.48 201.62 201.62 0 0172.89 22.95s-19.13-18.15-60.3-30.45l3.39-3.86s33.17-.73 67.81 25.16c0 0 34.87 62.56 34.87 139.62 0-.28-20.35 34.5-73.86 36.19z"></path><path d="M212.05 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.8 0 24.7-11.83 24.7-26.57.25-14.76-10.9-26.57-24.7-26.57zM300.43 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.81 0 24.7-11.83 24.7-26.57S314 218 300.43 218z"></path></svg>
            </a>
            </Col>
            {/* <Col>
              <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path></svg>
            </Col> */}
            <Col>
            <a href="https://twitter.com/KokongzNFTs" target="_blank" rel="noreferrer">
            <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path></svg>        
            </a>  
            </Col>
          </Row>
          {/* <Row className="mt-5 d-flex justify-content-center text-center">
            <Col>
              <h3 className="white">
                contact@degenlizzy.art
              </h3>
            </Col>
          </Row> */}
          {/* <Row className="mt-3 d-flex justify-content-center text-center">
            <Col>
              <h3 className="white">
              Read our Terms and Conditions
              </h3>
            </Col>
          </Row> */}
          <Row className="mt-3 d-flex justify-content-center text-center">
            <Col>
              <h3 className="white">
              Copyright 2021 by Emopow. All rights reserved.
              </h3>
            </Col>
          </Row>
        </Container>
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
